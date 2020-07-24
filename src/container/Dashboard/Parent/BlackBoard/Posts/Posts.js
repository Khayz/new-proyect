import React, { useState } from "react";
import { v1 } from "uuid";

import "./Posts.scss";

import ModalSendTask from "./ModalSendTask/ModalSendTask";
import { useEffect } from "react";

const BoardContent = ({ posts, homework }) => {
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState(null);

  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    const newposts = [];
    let contador = 0;
    for (const post in posts) {
      for (const work in homework) {
        if (homework[work].groupPostID === posts[post]._id) {
          newposts.push({ ...posts[post], status: homework[work].status });
          contador++;
        }
      }

      if (contador === 0) {
        newposts.push(posts[post]);
      }

      contador = 0;
    }

    setNewPosts(newposts);
  }, [posts, homework]);

  return (
    <section className="Posts">
      {newPosts.length > 0 &&
        newPosts.map((post) => (
          <div
            key={v1()}
            className={`_Post card text-black ${
              post.status === "Pendiente"
                ? "HomeWork_pending"
                : post.status === "Resuelta"
                ? "HomeWork_success"
                : null
            }  mb-3 _Post`}
            style={{ maxWidth: "18rem" }}
          >
            <div
              style={
                post.status === "Resuelta"
                  ? { background: "#17b978" }
                  : { background: "#f1c04b" }
                  ? null
                  : { background: "#00a4e4" }
              }
              className="card-header"
            >
              {`${post.status === "Resuelta" ? "Resuelta" : "Pendiente"}`}
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
                Descripcion: <span>{post.description}</span>
              </p>
              <p className="card-text">
                Fecha de entrega: <span>{post.dueDate}</span>
              </p>
              {post.status && (
                <p>
                  Estado:{" "}
                  <span style={{ textTransform: "capitalize" }}>
                    {post.status}
                  </span>
                </p>
              )}
              {!post.status && (
                <button
                  onClick={() => {
                    setTask(post);
                    setOpenModal(true);
                  }}
                >
                  Entregar
                </button>
              )}
            </div>
          </div>
        ))}
      {openModal && <ModalSendTask close={setOpenModal} task={task} />}
    </section>
  );
};

export default BoardContent;
