import React from 'react';
import ReactDOM from 'react-dom';

import './ModalDeleteChild.scss';

const ModalDeleteChild = ({ deleteChild, child }) => {
	return ReactDOM.createPortal(
		<section className='moda_delete_child'>
			<article className='data'>
				<h2>
					¿Esta seguro que desea hacer esto?, Todos los datos relacionados a su
					hijo desapareceran y no tendra registro alguno!
				</h2>
			</article>
			<article className='buttons'>
				<button onClick={() => deleteChild(child)}>Eliminar</button>
				<button>Cancelar</button>
			</article>
		</section>,
		document.getElementById('modal')
	);
};

export default ModalDeleteChild;
