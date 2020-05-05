import React from 'react';

import styles from './PostsSpinner.module.scss';

const PostsSpinner = () => {
	return (
		<div className={styles['lds-ripple']}>
			<div></div>
			<div></div>
		</div>
	);
};

export default PostsSpinner;
