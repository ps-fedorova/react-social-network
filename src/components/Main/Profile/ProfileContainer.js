import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getProfileThunkCreator } from "../../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId // запрос к URL
    if (!id) { // если в адресной строке .../profile, то по умолчанию подставится 2
      id = 2
    }
    this.props.getProfileThunkCreator(id)
  }

  render() {
    if (!this.props.auth) return <Redirect to={"/login"}/>

    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.PROFILE,
  auth: state.auth.isAuth
})

const mapDispatchToProps = { getProfileThunkCreator }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
