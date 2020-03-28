import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../services/helper';

import BoardPreviewDropdown from './PreviewDropdown';

const BoardPreview = ({ board, handleWatch, _ref, _style }) => (
	<div className="BoardPreview card" ref={_ref} style={_style}>
		<div className="card-body">
			<h5 className="card-title">
				<div className="row">
					<div className="col">
						<Link to={`/boards/${board.id}`}>{board.title}</Link>
					</div>
					<div className="col-auto d-flex align-items-center">
						<BoardPreviewDropdown board={board} handleWatch={handleWatch} />
					</div>
				</div>
			</h5>
			<h6 className="card-subtitle mb-2 text-muted">
				{board.author.firstname} {board.author.lastname}
			</h6>
			<p className="card-text">
				<small className="text-muted">Created: {Helper.formatDate(board.created)}</small>
			</p>
		</div>
	</div>
);

BoardPreview.defaultProps = {
	handleWatch: () => {},
	_ref: null,
	_style: {}
};

export default BoardPreview;
