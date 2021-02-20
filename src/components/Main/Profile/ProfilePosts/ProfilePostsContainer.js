import { updateNewPostText, addPost } from "../../../../redux/reducers/profileReducer";
import ProfilePosts from "./ProfilePosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = { updateNewPostText, addPost }

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
export default ProfilePostsContainer;
