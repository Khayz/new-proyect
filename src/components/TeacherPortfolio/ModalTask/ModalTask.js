import React from 'react';
import ReactDOM from 'react-dom';
import { v1 } from 'uuid';
import Carousel from 'react-bootstrap/Carousel';

import './ModalTask.scss';

const ModalTask = ({ close, files, isOpen, title }) => {
	const imagesArray = Object.keys(files)
		.map((key) => files[key])
		.filter((imageURi) => Boolean(imageURi));

	const Images = imagesArray.map((imgUri) => (
		<Carousel.Item key={v1()} className='d-flex justify-content-center'>
			<img src={imgUri} alt='First slide' />
		</Carousel.Item>
	));

	return isOpen
		? ReactDOM.createPortal(
				<div className='modal_task'>
					<div className='card_modal'>
						<div>
							<a href='/' className='btn-close' onClick={close}>
								x
							</a>
						</div>
						<Carousel>{Images}</Carousel>
						<div className='card-body d-flex justify-content-center flex-column align-items-center'>
							<h4 className='card-title'>{title}</h4>
							<div className='card-content d-flex flex-column flex-xl-row justify-content-center my-2'>
								<input
									type='number'
									placeholder='Calificacion'
									className='m-1'
								/>
								<select className='m-1'>
									<option>Pendiente</option>
									<option>Resuelta</option>
								</select>
								<button className='btn-card m-2'>Enviar</button>
							</div>
						</div>
					</div>
				</div>,
				document.getElementById('modal')
		  )
		: null;
};

export default ModalTask;
