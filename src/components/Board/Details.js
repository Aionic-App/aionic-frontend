import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Button } from 'aionic-library';

import Helper from '../../services/helper';

import UserSuggestion from '../User/Suggestion';

const BoardDetails = (props) => {
	const { board, updateParentBoardState, deleteBoard, classes } = props;

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const updateBoardUsers = (users) => {
		updateParentBoardState({ ...board, users });
	};

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(board, e, updateParentBoardState);
	};

	return (
		<div className={`BoardDetails ${classes.join(' ')}`}>
			<Button icon="fas fa-cog" type="secondary" onClickHandler={handleOpenModal} />
			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">{board.title} Details</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<p className="text-muted font-weight-bold">Description</p>
					<textarea
						name="description"
						className="form-control mt-2"
						rows="3"
						defaultValue={board.description}
						onBlur={handleInputChange}
					/>

					<p className="text-muted font-weight-bold mt-4">Users</p>
					<UserSuggestion userListSelected={board.users} updateParent={updateBoardUsers} />
					<p className="text-muted d-block text-right mt-3">Updated: {board.updated} </p>

					<Button label="Delete" type="danger" block={true} onClickHandler={deleteBoard} />
				</div>
			</ReactModal>
		</div>
	);
};

BoardDetails.defaultProps = {
	classes: []
};

export default BoardDetails;
