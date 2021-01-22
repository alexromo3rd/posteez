import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import './Header.css';

const Header = (props) => {
  const { filterPostItsFn, clearFn } = props;
  return (
    <header className='header'>
      <div className='app-name-logo'>
        <img src="https://ih1.redbubble.net/image.1470029373.1446/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Post Malone Drawing"/>
        <Title />
      </div>
      <div className='add-and-filter'>
        <SearchBar filteredPostItsFn={filterPostItsFn} clearFn={clearFn} />
      </div>
    </header>
  );
};

export default Header;
