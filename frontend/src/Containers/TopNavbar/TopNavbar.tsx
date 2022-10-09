import React, {useContext} from 'react';
import './TopNavbar.css';
import { PageStateContext } from '../../State/PageState';

function TopNavbar() {
  const pageContext = useContext(PageStateContext);
  
  const buttonsName = ["Home","Game", "Forum", "About us"];
  const buttonsElements = buttonsName.reduce((acc:JSX.Element[], item:string, index:number) => {
    return [...acc, <li key={`liKey_${index}`} onClick = {() => pageContext.dispatch({type:'CHANGE', payload: index})}>
        {item}</li>];
  }, []);

  return (
    <>
      <ul className="navBar"> {buttonsElements} </ul>
    </>
  );
}

export default TopNavbar;