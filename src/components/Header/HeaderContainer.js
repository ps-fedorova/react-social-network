import React from "react"
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/reducers/authReducer";
import { authAPI } from "../../API/API";

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.getAuth()
      .then(data => {
          if (data.resultCode === 0) {
            const { id, email, login } = data.data
            this.props.setUserData(id, email, login)
            console.log("authAPI работает")
          } else {
            console.log("authAPI не работает")
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
