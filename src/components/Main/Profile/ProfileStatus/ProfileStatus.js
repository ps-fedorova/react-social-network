import React from "react";
import s from "./../Profile.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: true,
  }

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleFocus = (evt) => evt.target.select();

  render() {
    const { profile } = this.props;
    const { editMode } = this.state;
    return (
      <>
        {editMode
          ? <input
            autoFocus={true}
            className={s.profileStatus__input}
            onBlur={this.setEditMode}
            value={profile ? profile.aboutMe : ''}
            onChange={() => ({})}
            onFocus={this.handleFocus}
          />
          : <p className={s.profileStatus__p} onClick={this.setEditMode}>{profile ? profile.aboutMe : ''}</p>
        }
      </>
    )
  }
}

export default ProfileStatus;
