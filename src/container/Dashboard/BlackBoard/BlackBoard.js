import React from 'react';

import './BlackBoard.scss';
import { connect } from 'react-redux';
import BoardContent from './BoardContent/BoardContent';
import PostsSpinner from '../../../components/Ui/Spinner/PostsSpinner';

const BlackBoard = ({ posts, loadingPosts }) => {
	let groupPosts = (
		<div className='BoardGuest'>
			<h1>No posts</h1>
		</div>
	);

	if (!loadingPosts && posts.length > 0) {
		groupPosts = <BoardContent posts={posts} />;
	} else if (loadingPosts) {
		groupPosts = (
			<div className='postsLoading'>
				<PostsSpinner />
			</div>
		);
	}

	return groupPosts;
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	loadingPosts: state.posts.loading,
});
export default connect(mapStateToProps)(BlackBoard);
