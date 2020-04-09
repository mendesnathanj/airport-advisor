import React from 'react';
import './SearchBar.scss';
import Results from './results/results';
import Fuse from 'fuse.js';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '', searchItems: [] };
    this.filterSearch = this.filterSearch.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    this.props.fetchAirports().then(() => console.log('SEARCH BAR QUERY DONE'));
  }

  search() {
    if (this.state.searchTerm === '') return;
    if (this.state.searchItems.length === 0) return;

    let query = this.state.searchItems.map((airport) => airport._id).slice(0, 10);
    query = query.join(',');

    this.props.history.push({
      pathname: '/airports',
      search: `?term=${this.state.searchTerm}&query=${query}`
    });

    this.clear();
  }

  clear() {
    this.setState({ searchTerm: "", searchItems: [] });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') this.search();
  }

  filterSearch(e) {
    const searchTerm = e.target.value;
    const airports = Object.values(this.props.airports);

    const options = {
      includeScore: true,
      shouldSort: true,
      threshold: 0.4,
      keys: [
        {
          name: 'name',
          weight: 0.2
        },
        {
          name: 'code',
          weight: 0.8
        }
      ]
    };

    const fuse = new Fuse(airports, options);
    const searchItems = fuse.search(searchTerm)
      .map(airport => airport.item._id)
      .map(id => this.props.airports[id]);

    this.setState({ searchTerm, searchItems });
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
          className="search-bar"
          value={this.state.searchTerm}
          onChange={this.filterSearch}
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="Search airports"
        />
        <i onClick={this.search} className="search-bar-icon fas fa-search"></i>
        <Results
          handleClear={this.clear}
          searchItems={this.state.searchItems}
          airports={this.props.airports}
        />
      </div>
    );
  }
}


export default SearchBar;
