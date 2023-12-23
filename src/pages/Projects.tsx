import React from 'react';
import { FeaturedProjectCard, FeaturedProjects } from '../components/FeaturedProjects';
import '../styles/pages/Projects.css';
import ContactMe from '../components/ContactMe';

function Projects(): React.JSX.Element {
  return (
    <main>
      <h1 className={'title'}>Projects i've worked on</h1>
      <p className={'desc'}> See project i've work on below to get an idea of my past experiences</p>
      <hr />
      <FeaturedProjects>
        <FeaturedProjectCard image={require('../images/meetdev.png')} alt={'meet-devs'} title={'MeetDevs'}
                             description={'A platform to connect dev with people who need them'}
                             githubLink={'https://github.com/Ayobami6/MeetDevs'}
                             liveLink={'https://meet-devs.vercel.app'} />
      </FeaturedProjects>
      <ContactMe />
    </main>
  );
}

export default Projects;
