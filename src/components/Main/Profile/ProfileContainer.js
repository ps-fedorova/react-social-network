import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/reducers/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId
    // this.props.setIsFetching(true)
    if(!id) {
      id = 2
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`
    )
      .then(res => {
        this.props.setUserProfile(res.data);
        console.log("юзер!");
      })
      .catch(() => console.log("юзер не пришел =(("))
    // .finally(() => {
    //   this.props.setIsFetching(false);
    // });
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
