import React from 'react';

import ProjectCard from './ProjectCard';

const ProjectList = () => (
  <>
    <ProjectCard
      link="https://www.github.com"
      title="Discord Bot"
      description="Everything you'd need in a discord bot"
      stack={['typescript', 'mongodb']}
    />
  </>
);

export default ProjectList;
