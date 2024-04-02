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
        <FeaturedProjectCard image={require('../images/projects/jojopage.jpeg')} alt={'Jojo\'s page screenshot'}
                             title={'Jojo Page'} description={'Basic implementation of a blog webapp'}
                             githubLink={'https://github.com/jojothomas1515/JojoProject'}
                             liveLink={'https://jojopage.urbangeek.tech'} />
        <FeaturedProjectCard image={require('../images/projects/jojobackend_screenshot.jpeg.jpeg')} alt={'Jojo\'s backend screenshot'}
                             title={'Jojo\'s Backend'} description={'Basic implementation of a blog webapp'}
                             githubLink={'https://github.com/jojothomas1515/JojoBackend'}
                             liveLink={'https://jojobackend.urbangeek.tech/api/docs'} />
      </FeaturedProjects>
      <ContactMe />
    </main>
  );
}

export default Projects;
