import React from 'react';
import './SearchBar.scss';
import Results from './results/results';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchTerm: '', searchItems: [] };
    this.filterSearch = this.filterSearch.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // fetch airport names and codes later I think
    this.props.fetchAirports();
  }

  search() {
    // redirect to airport results page later
    if (this.state.searchTerm === '') return;

    this.props.history.push({
      pathname: '/airports',
      query: this.state.searchItems
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') this.search();
  }

  filterSearch(e) {
    const searchTerm = e.target.value;
    const searchString = e.target.value.toUpperCase();
    const searchItems = this.props.airports
                          .map(airport => {
                            airport.string = `${airport.name} (${airport.code})`;
                            return airport;
                          })
                          .filter(airport => airport.string.toUpperCase().includes(searchString));

    if (searchItems.length === this.props.airports.length)
      this.setState({ searchTerm, searchItems: [] });
    else
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
          searchItems={this.state.searchItems}
          airports={this.props.airports}
        />
      </div>
    );
  }
}


export default SearchBar;
