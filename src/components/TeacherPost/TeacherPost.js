import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setNewTask, getPosts } from "../../redux/actions/index.actions";

import Tmonster from "./../../Assets/Images/monstert.svg";
import "./TeacherPost.scss";
import { v1 } from "uuid";
import Spinner from "../Ui/Spinner/Spinner";

const TeacherPost = ({
  assignments,
  groupID,
  setNewTask,
  posts,
  getPosts,
  isLoading,
}) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    dueDate: new Date().toLocaleDateString(),
    teacherID: JSON.parse(localStorage.getItem("user"))._id,
    groupID,
    assignment: assignments[0],
  });

  useEffect(() => {
    getPosts(groupID);
  }, [getPosts, groupID]);

  useEffect(() => {}, [posts]);

  const handlePostData = (event) => {
    const { value, name } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();

    setNewTask(post);
  };

  return (
    <section className="Post">
      <div className="post-cards">
        <article className="post-info">
          <figure>
            <img src={Tmonster} alt="" />
          </figure>
          <h2>Bienvenido a tus publicaciones</h2>
          <p>
            Tus publicaciones son la manera más fácil de compartir a tu
            classroom las actualizaciones de cada tarea
          </p>
        </article>
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmitPost} className="teacher-post">
            <i className="fas fa-user-circle"></i>
            <input
              onChange={handlePostData}
              name="title"
              value={post.title}
              type="text"
              placeholder="Título*"
              required
            />
            <textarea
              onChange={handlePostData}
              value={post.description}
              name="description"
              maxLength="300"
              placeholder="¿Qué pasa en tu classroom?*"
              type="text"
              required
            />
            <hr />
            <h2>Materia</h2>
            <select required onChange={handlePostData}>
              {assignments.map((assignment) => (
                <option
                  key={assignment}
                  key={v1()}
                  name="assignment"
                  value={assignment}
                >
                  {assignment}
                </option>
              ))}
            </select>
            <button className="btn btn-primary">Publicar</button>
          </form>
        )}
        <section className="Homework-Post">
          {posts.map((post) => {
            return (
              <article
                style={{ maxWidth: "18rem" }}
                className="_posts card bg-light mb-3"
                key={v1()}
              >
                <div className="card-header"> </div>

                <div className="card-body">
                  <h1 className="card-title">Tarea: {post.title}</h1>
                  <p className="card-text">Descripcion: {post.description}</p>
                  <p className="card-text">Asignatura: {post.assignment}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  assignments: state.groups.currentGroup.assignments,
  groupID: state.groups.currentGroup._id,
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
});

const mapDispatchToProps = {
  setNewTask,
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPost);
