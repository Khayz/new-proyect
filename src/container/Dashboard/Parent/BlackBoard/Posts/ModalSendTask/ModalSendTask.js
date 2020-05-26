import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import "./ModalSendTask.scss";
import { sendTask } from "../../../../../../redux/actions/index.actions";
import { toast } from "react-toastify";
import Spinner from "../../../../../../components/Ui/Spinner/Spinner";

const ModalClass = ({ close, child, task, sendTask, message, loading }) => {
  const [files, setFiles] = useState({
    task0: "",
    task1: "",
    task2: "",
    task3: "",
    task4: "",
  });

  const [inputs, setInputes] = useState([1]);

  const handleSubmitGroup = (event) => {
    event.preventDefault();

    if (
      Object.keys(files).filter((file) => files[file].length > 0).length === 0
    ) {
      return toast.error(
        "Envia una tarea valida, ya sea formato JPG, JPEG, PNG"
      );
    }

    (async () => {
      await sendTask({
        files,
        title: task.title,
        date: new Date().toLocaleDateString(),
        studentID: child._id,
        teacherID: task.teacherID,
        calification: "",
        status: "Pendiente",
        groupPostID: task._id,
        groupID: child.groupID,
      });

      await close(false);
      toast.info("Tarea enviada satisfactoriamente.");
    })();
  };

  const handleFiles = (event) => {
    const { name } = event.target;
    const theFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = () => {
      setFiles((prevState) => ({
        ...prevState,
        [name]: reader.result,
      }));
    };
  };

  return ReactDOM.createPortal(
    <div className="modal_send_task">
      {loading ? (
        <Spinner />
      ) : (
        <form className="modal_form">
          <div className="form_title">
            <h2>Enviar Tarea</h2>
            <i onClick={() => close(false)} className="fas fa-times-circle"></i>
          </div>
          {inputs.map((task, index) => (
            <input
              key={task}
              type="file"
              name={`task${index}`}
              onChange={handleFiles}
              placeholder="file*"
              accept="image/*"
              id="upload-file"
              required
            />
          ))}
          {inputs.length < 5 && (
            <button
              type="button"
              onClick={() => {
                inputs.length < 5 &&
                  setInputes((prevState) => [
                    ...prevState,
                    inputs[inputs.length - 1] + 1,
                  ]);
              }}
            >
              Añadir Tarea
            </button>
          )}
          <button onClick={handleSubmitGroup}>Enviar</button>
        </form>
      )}
    </div>,
    document.getElementById("modal")
  );
};

const mapStateToProps = (state) => ({
  child: state.childs.actualChild,
  message: state.homework.message,
  loading: state.homework.loading,
});

const mapDispatchToProps = {
  sendTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalClass);
