import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileThunkCreator } from "../../../redux/reducers/profileReducer";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component { // 1

  componentDidMount() {
    let id = this.props.match.params.userId // запрос к URL
    if (!id) { // если в адресной строке .../profile, то по умолчанию подставится 2
      id = 2
    }
    this.props.getProfileThunkCreator(id)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

///////////////////////////////

const AuthRedirectComponent = withAuthRedirect(ProfileContainer); // 2,3

const mapStateToProps = (state) => ({
  profile: state.profile.PROFILE,
})

const mapDispatchToProps = { getProfileThunkCreator }

// withRouter будет передавать в обёрнутый компонент обновленные свойства
// match, location, и history каждый раз, когда тот отрисовывается
// withRouter = HOC
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) // 4
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent); // 5
// connect = HOC
