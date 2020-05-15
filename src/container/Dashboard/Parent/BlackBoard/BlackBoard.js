import React, { useState } from 'react';
import { connect } from 'react-redux';

import './BlackBoard.scss';

import Posts from './Posts/Posts';
import ChildTasks from './ChildTasks/ChildTasks';
import Spinner from '../../../../components/Ui/Spinner/Spinner';

const BlackBoard = ({ posts, loadingPosts }) => {
	const [showPosts, setShowPosts] = useState(true);

	let groupPosts = (
		<div className='BoardGuest'>
			<h1>No posts</h1>
		</div>
	);

	if (!loadingPosts && posts.length > 0 && showPosts) {
		groupPosts = <Posts posts={posts} />;
	} else if (loadingPosts) {
		groupPosts = (
			<div className='postsLoading'>
				<Spinner />
			</div>
		);
	} else if (!loadingPosts && posts.length > 0 && !showPosts) {
		groupPosts = <ChildTasks />;
	}

	return (
		<div className='blackboard'>
			{posts.length > 0 && (
				<nav>
					<button onClick={() => setShowPosts(true)}>Publicaciones</button>
					<button onClick={() => setShowPosts(false)}>Materias</button>
				</nav>
			)}
			{groupPosts}
		</div>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loadingPosts: state.posts.loading,
});
export default connect(mapStateToProps)(BlackBoard);
