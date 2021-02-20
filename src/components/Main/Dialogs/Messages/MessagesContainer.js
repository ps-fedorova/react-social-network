import { sent, changeTextArea } from "../../../../redux/reducers/dialogsReducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  }
}

const mapDispatchToProps = { sent, changeTextArea }

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
