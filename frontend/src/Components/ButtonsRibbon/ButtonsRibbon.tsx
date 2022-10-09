import React from 'react';
import './ButtonsRibbon.css';

interface IProps {
  buttons: string[]
}

function ButtonsRibbon(props:IProps) {
  const buttonsToDisplay = props.buttons.reduce((acc:JSX.Element[], item:string) => {
    return [...acc, <li>{item}</li>]
  }, []);
  return (
      <article>
        <ul className="navBar">
          {buttonsToDisplay}
        </ul>
      </article>
  );
}

export default ButtonsRibbon;