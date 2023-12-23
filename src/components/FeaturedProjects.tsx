import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import '../styles/components/FeaturedProjects.css';

interface FeaturedProjectsProps {
  children: React.ReactNode;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ children }): React.JSX.Element => {
  return (
    <div className={'featured'}>
      {children}
    </div>
  );
};

interface FeaturedProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> =
  ({
     image,
     alt,
     title,
     description,
     githubLink,
     liveLink,
   }): React.JSX.Element => {
    return (
      <div className='featured_project_card'>
        <img src={image} alt={alt} />
        <div className='featured_project_card_details'>
          <h3>{title}</h3>
          <p>{description}</p>
          {liveLink ? <Link to={liveLink} className={'view_live'} target={'_blank'}><FaGlobe /></Link> : ''}
          <Link to={githubLink} className={'view_github'} target={'_blank'}><FaGithub /></Link>
        </div>
      </div>
    );
  };


