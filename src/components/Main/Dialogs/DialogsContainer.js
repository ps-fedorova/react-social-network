import React from 'react';
import { connect } from "react-redux";
import { sent } from "../../../redux/reducers/dialogsReducer";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";
// import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class DialogsContainer extends React.Component {

  render() {
    return (
      <div className={s.dialogs}>
        <DialogsList {...this.props} />
        <Messages {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  }
}
const mapDispatchToProps = { sent }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(DialogsContainer);

