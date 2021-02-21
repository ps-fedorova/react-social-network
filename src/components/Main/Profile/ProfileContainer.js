import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    // this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
