import { connect } from "react-redux";
import { getRooms } from "../../../redux/roomsSlice";
import ExploreContainer from "./ExploreContainer";

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: () => dispatch(getRooms()),
  };
};

const mapStateToProps = (state) => state.roomsReducer.explore;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
