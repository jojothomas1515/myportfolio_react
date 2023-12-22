import React from 'react';
import '../styles/components/LanguageAndFrameworks.css';

interface LanguageAndFrameworksProps {
  children: React.JSX.Element[];
}

interface LanguageAndFrameworksCardProps {
  imageUrl: string,
  altText: string,
  name: string
}

export const LanguageAndFrameworksContainer: React.FC<LanguageAndFrameworksProps> = ({ children }): React.JSX.Element => {
  return (
    <div className='languages_and_frameworks_container'>
      {children}
    </div>
  );
};

export const LanguageAndFrameworkCard: React.FC<LanguageAndFrameworksCardProps> = ({
                                                                                     imageUrl,
                                                                                     altText,
                                                                                     name,
                                                                                   }): React.JSX.Element => {
  return (
    <div className={'languages_and_frameworks_card'}>
      <img src={imageUrl} alt={altText} />
      <p>{name}</p>
    </div>
  );
};
