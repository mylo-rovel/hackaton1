import React from 'react';
import './MainFrame.css';
import {ButtonsRibbon} from '../../Utilities/Imports';

function MainFrame() {
  const navRibbon = <ButtonsRibbon buttons={["Home","Links", "Forum", "About us"]}/>;
  return (
    <fieldset className='mainContainer'>
      <legend>The world is at your hand</legend>
      <article className='topNavContainer'> {navRibbon} </article>
      <article></article>
    </fieldset>
  );
}

export default MainFrame;