import React from 'react';
import { Link } from 'react-router-dom';

import { Badge } from 'aionic-library';

import Helper from '../../services/helper';

import ProjectPreviewDropdown from './PreviewDropdown';

const ProjectPreview = ({ project, handleWatch, _ref, _style }) => (
	<div className="ProjectPreview card" ref={_ref} style={_style}>
		<div className="card-body">
			<h5 className="card-title">
				<div className="row">
					<div className="col">
						<Link to={`/projects/${project.id}`}>{project.title}</Link>
					</div>
					<div className="col-auto d-flex align-items-center">
						{project.completed ? <Badge label="Completed" type="success" /> : null}
						<ProjectPreviewDropdown project={project} handleWatch={handleWatch} />
					</div>
				</div>
			</h5>
			<h6 className="card-subtitle mb-2 text-muted">
				{project.author.firstname} {project.author.lastname}
			</h6>
			<p className="card-text">
				<small className="text-muted">Deadline: {Helper.formatDate(project.deadline)}</small>
			</p>
		</div>
	</div>
);

ProjectPreview.defaultProps = {
	handleWatch: () => {},
	_ref: null,
	_style: {}
};

export default ProjectPreview;
