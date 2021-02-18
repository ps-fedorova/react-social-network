import React from 'react';
import UserCard from "../../../utils/ui-kit/UserCard/UserCard";
import s from "../../../utils/ui-kit/UserCard/UserCard.module.css"
import * as axios from "axios";

class Friends extends React.Component {

  addUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(res => {
          this.props.setUsers(res.data.items);
          console.log("юзеры пришли");
        })
        .catch(() => console.log("юзеры не пришли"));
      // setUsers([
      //   {
      //     id: 0,
      //     name: "Дмитрий",
      //     followed: true,
      //     location: {
      //       city: "Город",
      //       country: "Страна",
      //     }
      //   },
      //   {
      //     id: 1,
      //     name: "Дмитрий",
      //     followed: true,
      //     location: {
      //       city: "Город",
      //       country: "Страна",
      //     }
      //   },
      //   {
      //     id: 2,
      //     name: "Дмитрий",
      //     followed: false,
      //     location: {
      //       city: "Город",
      //       country: "Страна",
      //     }
      //   },
      //   {
      //     id: 3,
      //     name: "Дмитрий",
      //     followed: false,
      //     location: {
      //       city: "Город",
      //       country: "Страна",
      //     }
      //   },
      // ])
    }
  }

 render() {

   const { users, followed, unfollowed, setUsers } = this.props

   return (
     <div className={s.findUsers} >
       <button onClick={this.addUsers}/>
       <ul className="list">
         {users.filter(user => user.followed).map((user) =>
           <UserCard
             user={user}
             key={user.id}
             followed={followed}
             unfollowed={unfollowed}
             setUsers={setUsers}
           />
         )}
       </ul>
     </div>
   )
 }
}

export default Friends;
