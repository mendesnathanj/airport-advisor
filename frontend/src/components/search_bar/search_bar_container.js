import { connect } from "react-redux";
import SearchBar from './search_bar';

const airports = [
  {
    name: "San Francisco Airport",
    code: "SFO"
  },
  {
    name: "Arcata Airport",
    code: "BFL"
  },
  {
    name: "Meadows Field",
    code: "BUR"
  },
  {
    name: "Fresno Yosemite International Airport",
    code: "FAT"
  },
  {
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    name: "Long Beach Airport",
    code: "LGB"
  },
  {
    name: "Los Angeles International Airport",
    code: "LAX"
  },
  {
    name: "Mammoth Yosemite Airport",
    code: "MMH"
  },
  {
    name: "Monterey Regional Airport",
    code: "MRY"
  },
  {
    name: "Oakland International Airport",
    code: "OAK"
  }
];

const mapStateToProps = state => ({
  airports: airports
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
