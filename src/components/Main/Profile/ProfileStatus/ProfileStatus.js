import React from "react";
import s from "./../Profile.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  onStatusChange = (evt) => {
    this.setState({
      status: evt.target.value
    })
  }


  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.putUserStatus(this.state.status)
  }

  handleFocus = (evt) => evt.target.select();

  componentDidUpdate(prevProps, prevState) {
   if(prevProps.status !== this.props.status) {
     this.setState({
       status: this.props.status
     })
   }
  }

  render() {

    return (
      <>
        {this.state.editMode
          ? <input
            autoFocus={true}
            className={s.profileStatus__input}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            onChange={this.onStatusChange}
            onFocus={this.handleFocus}
          />
          : <p className={s.profileStatus__p}
               onClick={this.activateEditMode}
          >
            {this.props.status ? this.props.status : "(нет статуса)"}
          </p>
        }
      </>
    )
  }
}

export default ProfileStatus;
