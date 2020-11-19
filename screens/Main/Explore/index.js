import { connect } from "react-redux";
import { getRooms, increasePage } from "../../../redux/roomsSlice";
import ExploreContainer from "./ExploreContainer";

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: (page) => dispatch(getRooms(page)),
    increasePage: () => dispatch(increasePage()),
  };
};

const mapStateToProps = (state) => state.roomsReducer.explore;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
