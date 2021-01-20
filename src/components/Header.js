import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import NewPostIt from './NewPostIt';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <img src="https://ih1.redbubble.net/image.1470029373.1446/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Post Malone Drawing"/>
      <Title />
      <div className='add-and-filter'>
        <SearchBar filteredPostItsFn={props.filterPostItsFn} />
        <button onClick={() => props.clearFn()}>Clear</button>
        <NewPostIt addPostItFn={props.addPostItFn} />
      </div>
    </header>
  )
}

export default Header
