import React from 'react';

import Content from 'components/UI/Content';
import Title from 'components/UI/Title';

import CardDeck from 'components/Deck';

import ProjectsWidgetbar from './components/Widgetbar';
import Filters from './components/Filters';
import ProjectCreate from './components/Create';

const SitesProjects = (props) => {
	const { projects, filters, filterProjectsByParams, filterProjectsByText, resetFilters } = props;
	const { all, fetched, filtered } = projects;

	const projectsToShow = filters.text.length ? filtered : fetched;

	return (
		<div className="SitesProjects">
			<Content>
				<Title title="Projects" />
				<ProjectsWidgetbar allProjects={all} />
				<div className="row">
					<div className="col-12 col-xl">
						<Filters
							filters={filters}
							filterItemsByParams={filterProjectsByParams}
							filterItemsByText={filterProjectsByText}
							resetFilters={resetFilters}
						/>
					</div>
					<div className="col-12 col-xl-auto">
						<ProjectCreate />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<CardDeck deckType="Project" itemList={projectsToShow} itemsPerRow={1} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesProjects;
