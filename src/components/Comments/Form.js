import React from 'react';

const CommentsForm = (props) => {
	const { handleSubmit, handleInputChange } = props;
	return (
		<div className="CommentsForm">
			<form onSubmit={handleSubmit}>
				<label>Write a comment</label>
				<textarea className="form-control" name="comment" rows="2" onChange={handleInputChange} />
				<div className="d-flex justify-content-end">
					<button className="button button-violet btn-sm mt-2" type="submit">
						<i className="fas fa-sign-in-alt mr-1" /> Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default CommentsForm;
