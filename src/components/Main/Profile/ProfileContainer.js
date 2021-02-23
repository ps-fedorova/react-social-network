import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/reducers/profileReducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../../API/API";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId
    if (!id) {
      id = 2
    }
    profileAPI.getProfile(id).then(data => {
      this.props.setUserProfile(data);
      console.log("юзер!");
    }).catch(() => console.log("юзер не пришел =(("))
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.PROFILE
})

const mapDispatchToProps = { setUserProfile }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
