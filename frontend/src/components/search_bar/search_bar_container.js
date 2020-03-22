import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAirports } from '../../actions/airport_actions';
import SearchBar from './search_bar';

const airports = [
  {
    id: 1,
    name: "San Francisco Airport",
    code: "SFO"
  },
  {
    id: 2,
    name: "Arcata Airport",
    code: "BFL"
  },
  {
    id: 3,
    name: "Meadows Field",
    code: "BUR"
  },
  {
    id: 4,
    name: "Fresno Yosemite International Airport",
    code: "FAT"
  },
  {
    id: 5,
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    id: 6,
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    id: 7,
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    id: 8,
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    id: 9,
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    id: 10,
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    id: 11,
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    id: 12,
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    id: 13,
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    id: 14,
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    id: 15,
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    id: 16,
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    id: 17,
    name: "Oakland International Airport",
    code: "OAK"
  }
];

const mapStateToProps = state => ({
  airports: Object.values(state.airports)
});

const mapDispatchToProps = dispatch => ({
  fetchAirports: () => dispatch(fetchAirports())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
