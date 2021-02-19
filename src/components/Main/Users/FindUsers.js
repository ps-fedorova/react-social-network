import React from 'react';
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import * as axios from "axios";

class FindUsers extends React.Component {

  componentDidMount() {
    // if (this.props.users.length === 0) { // конструктор вызывается итак и раз
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        this.props.setUsers(res.data.items);
        console.log("юзеры пришли");
      })
      .catch(() => console.log("юзеры не пришли"));
  }

  render() {
    const { users, followed, unfollowed, setUsers } = this.props
    return (

      <div className={s.findUsers}>
        <ul className="list">
          {users.map((user, index) =>
            <UserCard
              user={user}
              key={index}
              followed={followed}
              unfollowed={unfollowed}
              setUsers={setUsers}
            />)}
        </ul>
      </div>
    )
  }
}

export default FindUsers;
