import React from 'react';
import { connect } from 'react-redux';
import {
	getPosts,
	setActualChild,
} from '../../../../redux/actions/index.actions';
import { v1 } from 'uuid';
import Avatar from 'react-avatar';

import avatarChild from '../../../../Assets/Images/avatar-1.png';
import styles from './Childs.module.scss';

import ModalAddChild from './ModalAddChild/ModalAddChild';
import Spinner from '../../../../components/Ui/Spinner/Spinner';

const Childs = ({ user, childList, loadChilds, getPosts, setActualChild }) => {
	return (
		<>
			<div className={styles.Childs}>
				<figure>
					<img src={avatarChild} alt='avatarChild' />
				</figure>
				<div className={styles.child}>
					Añadir Hijo
					<ModalAddChild parentID={user._id} />
				</div>
			</div>
			<div className={styles.ChildList}>
				{loadChilds ? (
					<Spinner />
				) : (
					childList.map((child) => (
						<div
							onClick={() => {
								getPosts(child.groupID);
								setActualChild(child);
							}}
							key={v1()}
							className={styles.child}>
							<Avatar name={child.firstName + ' ' + child.lastName} />
							<div className={styles.user}>
								<h2>
									Hijo: <span>{child.firstName + ' ' + child.lastName}</span>
								</h2>
								<h2>
									Padre: <span>{child.parentName}</span>
								</h2>
								<h2>
									Escuela: <span>{child.school}</span>
								</h2>
								<h2>
									Grupo: <span>{child.group}</span>
								</h2>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	user: state.auth.user,
	childList: state.childs.childList,
	loadChilds: state.childs.loading,
});

const mapDispatchToProps = {
	getPosts,
	setActualChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(Childs);
