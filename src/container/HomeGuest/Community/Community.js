import React from 'react';
import Mobile from '../../../Assets/Images/telefono-inteligente.svg';

import './Community.scss';

const Community = () => {
	return (
		<section id='Community' className='Community'>
			<div>
				<div>
					<div>
						<h3>Comparte la historia de tu clase con las familias</h3>
						<p>
							Comparte instantáneamente fotos, vídeos y anuncios en la historia
							de la clase o envía mensajes privados a cualquier padre
						</p>
						<ul>
							<li>
								Los padres se unen a la clase fácilmente usando cualquier
								dispositivo
							</li>
							<li>Traduce instantáneamente los mensajes a 30+ idiomas</li>
							<li>
								Hazles saber a las familias que estás ocupado con las horas de
								"no molestar"
							</li>
						</ul>
						<figure>
							<img src='' alt='imagen' />
						</figure>
					</div>
					<div>
						<div>
							<h3>Todas tus herramientas de clase en un solo lugar</h3>
							<p>
								Arma grupos de alumnos al azar. Muestra las instrucciones para
								tus actividades. Pon música de fondo. Y haz muchas más cosas muy
								pronto disponibles en el Toolkit de HOME-SCHOOL.
							</p>
						</div>
						<figure>
							<img src={Mobile} alt='imagen' />
						</figure>
					</div>

					<div>
						<div>
							<div>
								<h3>Dale una voz a los alumnos con las carpetas digitales</h3>
								<p>
									Los alumnos pueden exhibir lo que han aprendido añadiendo
									fotos y vídeos a sus propias carpetas digitales. Disponibles
									para Chromebooks, iPads y cualquier otro ordenador
								</p>
							</div>
						</div>
						<figure>
							<img src='' alt='imagen' />
						</figure>
					</div>

					<div>
						<div>
							<div>
								<h3>Consolida tu comunidad escolar</h3>
								<p>
									Los profesores, los líderes de la escuela y las familias
									pueden asociarse en ClassDojo para crear una increíble
									comunidad escolar.
								</p>
							</div>
						</div>
						<div>
							<img src='' alt='imagen' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Community;
