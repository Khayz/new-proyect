import React, { useState } from "react";
import "./Teacher.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ModalClass from "./ModalClass/ModalClass";
import { v1 } from "uuid";
import { setCurrentGroup } from "../../../redux/actions/groups.action";

const Teacher = ({ user, groups, setCurrentGroup }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="dashboard-teacher">
      <article className="class-cards">
        <Link to="group/demo-class/classroom" className="TeacherCards">
          <h2>Clase Demo</h2>
          <i className="fas fa-book"></i>
        </Link>
        {groups.map((group) => (
          <Link
            onClick={() => setCurrentGroup(group)}
            key={v1()}
            to={`/group/${group.group}/classroom`}
            className="group-card"
          >
            <h2>{group.group}</h2>
            <p>
              Escuela: <span>{group.school}</span>{" "}
            </p>
            <p>
              Turno: <span>{group.class_turn}</span>
            </p>
            <i className="fas fa-book"></i>
          </Link>
        ))}
        <button onClick={() => setOpenModal(true)} className="TeacherCards">
          <h2>Crear Clase</h2>
          <i className="fas fa-plus-circle"></i>
        </button>
      </article>
      {openModal && <ModalClass close={setOpenModal} />}
      <article className="sideboard-teacher">
        <i className="fas fa-user-circle"></i>
        <h2>
          Profesor: <span>{user.firstName}</span>{" "}
        </h2>
        <p>
          Escuela: <span>Benito Juarez, 219</span>{" "}
        </p>
        <hr />
        <i className="fas fa-school"></i>
        <h2>Benito Juarez, 219</h2>
        <p>
          Tu escuela no tiene profesor de nuestra app <span>HOME-SCHOOL</span>{" "}
          todavía, verifícalo aquí. Manda un email para ayudarte.
        </p>
        <button>Cambiar Escuela</button>
        <hr />
        <div>
          <h2>Aprendizaje Remoto con <br /> HOME-SCHOOL</h2>
          <p>
            Todo lo que tu necesitas para mantenerte conectado con tus estudiantes y
            sus familiares, donde quieran que estén.
          </p>
        </div>
        <hr />
        <div>
          <h2>Grandes Ideas</h2>
          <p>
            Grandes actividades para ayudar a los estudiantes a administrar sus
            trabajos.
          </p>
        </div>
        <button>Recursos Disponibles</button>
      </article>
    </section >
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups,
});

const mapDispatchToProps = {
  setCurrentGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
