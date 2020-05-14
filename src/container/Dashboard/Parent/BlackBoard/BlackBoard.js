import React, { useState } from "react";

import "./BlackBoard.scss";
import { connect } from "react-redux";
import BoardContent from "./BoardContent/BoardContent";
import PostsSpinner from "../../../../components/Ui/Spinner/PostsSpinner";
import ChildTasks from "./ChildTasks/ChildTasks";

const BlackBoard = ({ posts, loadingPosts }) => {
  const [showPosts, setShowPosts] = useState(true);

  let groupPosts = (
    <div className="BoardGuest">
      <h1>No posts</h1>
    </div>
  );

  if (!loadingPosts && posts.length > 0 && showPosts) {
    groupPosts = <BoardContent posts={posts} />;
  } else if (loadingPosts) {
    groupPosts = (
      <div className="postsLoading">
        <PostsSpinner />
      </div>
    );
  } else if (!loadingPosts && posts.length > 0 && !showPosts) {
    groupPosts = <ChildTasks />;
  }

  return (
    <div className="blackboard">
      {posts.length > 0 && (
        <nav>
          <button onClick={() => setShowPosts(true)}>Publicaciones</button>
          <button onClick={() => setShowPosts(false)}>Materias</button>
        </nav>
      )}
      {groupPosts}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loadingPosts: state.posts.loading,
});
export default connect(mapStateToProps)(BlackBoard);
