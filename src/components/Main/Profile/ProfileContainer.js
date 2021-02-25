import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileThunkCreator } from "../../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId // запрос к URL
    // if (!id) {
    //   id = 2
    // }
    this.props.getProfileThunkCreator(id)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.PROFILE
})

const mapDispatchToProps = { getProfileThunkCreator }

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
