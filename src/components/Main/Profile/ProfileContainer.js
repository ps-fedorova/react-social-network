import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileThunkCreator, getUserStatus, putUserStatus } from "../../../redux/reducers/profileReducer";
// import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component { // 1

  componentDidMount() {
    let id = this.props.match.params.userId // запрос к URL
    if (!id) { // если в адресной строке .../profile, то по умолчанию подставится 2
      id = 2
    }
    this.props.getProfileThunkCreator(id);
    this.props.getUserStatus(id);
  }

  render() {
    return <Profile {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.PROFILE,
  status: state.profile.STATUS,
})

const mapDispatchToProps = { getProfileThunkCreator, getUserStatus, putUserStatus }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

// withRouter будет передавать в обёрнутый компонент обновленные свойства
// match, location, и history каждый раз, когда тот отрисовывается
// withRouter = HOC
