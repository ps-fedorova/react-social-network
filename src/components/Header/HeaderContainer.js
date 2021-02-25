import React from "react"
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthTankCreator } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthTankCreator();
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuth,
    login: state.auth.login,
  }
}

const mapDispatchToProps = { getAuthTankCreator }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
