import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth
})


export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
    if (!props.auth) return <Redirect to={"/login"}/>
    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect, null)(RedirectComponent);
}

