import React, {useContext} from 'react';
import './TopNavbar.css';
import { PageStateContext } from '../../State/PageState';

function TopNavbar() {
  const pageContext = useContext(PageStateContext);
  const buttonsName = ["Home","Game", "Forum", "About us"];
  const buttonsElements = buttonsName.reduce((acc:JSX.Element[], item:string) => {
    return [...acc, <li>{item}</li>]
  }, []);

  return (
    <>
      <ul className="navBar"> {buttonsElements} </ul>
    </>
  );
}

export default TopNavbar;