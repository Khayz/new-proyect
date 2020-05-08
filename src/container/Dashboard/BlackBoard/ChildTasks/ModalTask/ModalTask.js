import React, { useState } from "react";
import axios from "axios";

const ModalTask = () => {
  const [files, setFiles] = useState("");

  const handleSubmitFiles = (event) => {
    event.preventDefault();
    console.log(files);
    let data = new FormData();
    data.append("file", files);
    data.append("name", "Cat and dogs");
    console.log(data);
    /* axios.post('http://localhost:4000/upload', data); */
  };

  const handleFileUpload = async (event) => {
    setFiles(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#basicExampleModal"
      >
        Enviar
      </button>

      <div
        className="modal fade"
        id="basicExampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleSubmitFiles}
                className="fileupload"
                encType="multipart/form-data"
              >
                <h1>Upload File Here</h1>
                <input onChange={handleFileUpload} type="file" />
                <button>Enviar</button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
