import React from 'react';

import { Fetcher } from 'aionic-library';

import Comments from '../../Comments';

import ProjectCommentsFormContainer from './Form/container';

const ProjectCommentsContainer = (props) => (
	<Fetcher url={`projects/${props.projectId}/comments`}>
		{(comments, fetchData) => {
			const { projectId, showForm } = props;

			return (
				<div className="ProjectCommentsContainer">
					<Comments type="Project" typeId={projectId} commentList={comments} />
					{showForm ? (
						<div className={comments.length ? 'mt-4' : ''}>
							<ProjectCommentsFormContainer projectId={projectId} updateParent={fetchData} />
						</div>
					) : null}
				</div>
			);
		}}
	</Fetcher>
);

ProjectCommentsContainer.defaultProps = {
	showForm: true
};

export default ProjectCommentsContainer;
