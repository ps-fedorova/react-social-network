import React from 'react';
import { connect } from "react-redux";
import { sent, changeTextArea } from "../../../redux/reducers/dialogsReducer";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";

class DialogsContainer extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={s.dialogs}>
        <DialogsList {...this.props} />
        <Messages {...this.props}/>
      </div>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(DialogsContainer); // 2,3

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  }
}
const mapDispatchToProps = { sent, changeTextArea }

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
