import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getHomework } from "../../../../redux/actions/index.actions";

import "./BlackBoard.scss";
import Books from "../../../../Assets/Images/study.svg";

import Posts from "./Posts/Posts";
import ChildTasks from "./ChildTasks/ChildTasks";
import Spinner from "../../../../components/Ui/Spinner/Spinner";

const BlackBoard = ({ child, posts, loadingPosts, homework, getHomework }) => {
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {
    getHomework(child._id);
  }, [getHomework, child]);

  let Group_Posts = (
    <div className="Board_Guest">
      <h1>Has click en alguno de tus hijos para ver sus avances!</h1>
      <figure>
        <img src={Books} alt="Books" />
      </figure>
    </div>
  );

  if (!loadingPosts && posts.length > 0 && showPosts) {
    Group_Posts = <Posts homework={homework} posts={posts} />;
  } else if (loadingPosts) {
    Group_Posts = (
      <div className="Loading_Posts">
        <Spinner />
      </div>
    );
  } else if (!loadingPosts && posts.length > 0 && !showPosts) {
    Group_Posts = <ChildTasks />;
  }

  return (
    <div className="Black_Board">
      {posts.length > 0 && (
        <nav>
          <button onClick={() => setShowPosts(true)}>Publicaciones</button>
          <button onClick={() => setShowPosts(false)}>Materias</button>
        </nav>
      )}
      {Group_Posts}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loadingPosts: state.posts.loading,
  homework: state.homework.homework,
  child: state.childs.actualChild,
});
const mapDispatchToProps = {
  getHomework,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlackBoard);
