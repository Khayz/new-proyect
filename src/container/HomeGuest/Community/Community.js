import React from "react";
import Mobile from "../../../Assets/Images/telefono-inteligente.svg";
import Share from "../../../Assets/Images/img-share.png";
import Calendar from "../../../Assets/Images/unnamed.png";

import "./Community.scss";

const Community = () => {
  return (
    <section id="Community" className="Community">
      <div>
        <div className="share">
          <h3>Comparte historias de tu clase con padres de familia</h3>
          <p>
            Comparte instantáneamente fotos, vídeos y anuncios en la historia de
            la clase o envía mensajes privados a cualquier padre.
          </p>

          <ul>
            <li>
              Los padres se unen a la clase fácilmente usando cualquier
              dispositivo.
            </li>
            <li>Traduce instantáneamente mensajes a más de 30 idiomas.</li>
            <li>
              Utiliza las función de "no molestar" para evitar interrupciones.
            </li>
          </ul>
          <figure>
            <img src={Share} alt="imagen" />
          </figure>
        </div>
        <hr />
        <div className="tools">
          <div className="tool-text">
            <h3>Todas tus herramientas de clase en un sólo lugar</h3>
            <p>
              Organiza grupos de alumnos al azar. Muestra las instrucciones para tus
              actividades. Elige música de fondo. <br />Y haz muchas más cosas muy
              pronto disponibles en el Toolkit de Home School.
            </p>
          </div>
          <figure>
            <img src={Mobile} alt="imagen" />
          </figure>
        </div>
        <hr />
        <div className="digital-content">
          <div>
            <div>
              <h3>Dale voz a tus alumnos con las carpetas digitales</h3>
              <p>
                Los alumnos pueden exhibir lo que han aprendido añadiendo fotos
                y vídeos a sus propias carpetas digitales. <br /> Disponibles para
                Chromebooks, iPads y cualquier otro ordenador.
              </p>
            </div>
          </div>
          <figure>
            <img src={Calendar} alt="imagen" />
          </figure>
        </div>
        <hr />
        <div className="school-community">
          <div>
            <div>
              <h3>Consolida tu comunidad escolar</h3>
              <p>
                Los profesores, los líderes de la escuela y las familias pueden
                asociarse en Home School para crear una increíble comunidad
                escolar.
              </p>
            </div>
          </div>
          <div className="show">
            <iframe
              title="video-page"
              className="school-video"
              src="https://www.youtube.com/embed/CCdgxIsQcCE"
              autoPlay
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="plan">
          <div>
            <h3>¿Planeas una presentación? ¡Tenemos todo cubierto!</h3>
            <p>
              ¡Recursos gratuitos y preguntas frecuentes sobre todo lo que
              necesitas para tu presentación!
            </p>
          </div>
        </div>
        <hr />
        <div className="devices">
          <h3>Cualquier aula, cualquier dispositivo. <br /> 100% gratis.</h3>
          <div className="card-group cards">
            <div className="card">
              <i className="fas fa-mobile-alt"></i>

              <div className="card-body">
                <p className="card-text">
                  Funciona con dispositivos iOS, Android, Kindle Fire y
                  cualquier ordenador.
                </p>
              </div>
            </div>
            <div className="card">
              <i className="fas fa-lock"></i>

              <div className="card-body">
                <p className="card-text">
                  Construido con un diseño enfocado a la privacidad. ¡Lee cómo
                  mantenemos nuestra comunidad a salvo!
                </p>
              </div>
            </div>
            <div className="card">
              <i className="fas fa-chalkboard-teacher"></i>

              <div className="card-body">
                <p className="card-text">
                  ¡Home School siempre será gratuito para los profesores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
