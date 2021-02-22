import React from "react"
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true })
      .then(res => {
          if (res.data.resultCode === 0) {
            const { id, email, login } = res.data.data
            this.props.setUserData(id, email, login)
          }
        }
      )
      .catch(() => console.log("что-то пошло не так"))
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

const mapDispatchToProps = { setUserData }


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
