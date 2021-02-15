import { ADD_MESSAGE_actionCreator, UPDATE_NEW_MESSAGE_actionCreator } from "../../../../redux/reducers/dialogsReducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  }
}

const mapDispatchToProps = (dispatch) => {
  const sent = () => dispatch(ADD_MESSAGE_actionCreator());
  const changeTextArea = (text) => dispatch(UPDATE_NEW_MESSAGE_actionCreator(text));
  return { sent, changeTextArea }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
