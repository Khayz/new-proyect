import React, { useEffect, useState } from 'react';

const Testing = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
	});

	const valid = {
		border: '1px solid #00aeef',
	};

	const invalid = {
		border: '1px solid red',
	};

	const handleSubmitData = (event) => {};

	return (
		<form onSubmit={handleSubmitData}>
			<input
				style={data.name.length > 0 ? valid : invalid}
				onBlur={() => data.name.length === 0 && alert('Campo nombre vacio')}
				type='text'
				placeholder='Nombre*'
				required
			/>
			<input
				style={data.email.length > 0 ? valid : invalid}
				onBlur={() => data.name.length === 0 && alert('Campo nombre vacio')}
				type='text'
				placeholder='Email*'
				required
			/>
			<button>Enviar</button>
		</form>
	);
};

export default Testing;
