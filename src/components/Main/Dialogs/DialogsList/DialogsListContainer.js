import DialogsList from "./DialogsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs
  }
}

const DialogsListContainer = connect(mapStateToProps, null)(DialogsList)
export default DialogsListContainer;
