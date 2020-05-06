import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import './chart.scss';
const childChart = () => {
	const chartSettings = {
		options: {
			chart: {
				id: 'basic-bar',
			},
			xaxis: {
				categories: ['Español'],
			},
		},
		series: [
			{
				name: 'Entregadas',
				data: [10],
			},
			{
				name: 'Restantes',
				data: [2],
			},
			{
				name: 'Calificion Total',
				data: [9.6],
			},
		],
	};

	return (
		<div className='childChart'>
			<div className='row'>
				<div className='mixed-chart'>
					<Chart
						options={chartSettings.options}
						series={chartSettings.series}
						type='bar'
						width='500'
					/>
				</div>
			</div>
		</div>
	);
};

export default childChart;
