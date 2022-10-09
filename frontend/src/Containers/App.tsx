import React, {useReducer} from 'react';
import './App.css';
import {MainFrame, TopNavbar, MainFooter} from "../Utilities/ContainersImports";
import {SquaredRoulette} from "../Utilities/ComponentsImports";
import { PageStateReducer, PageStateContext } from '../State/PageState';

const populatePagesMap = (map: Map<number, JSX.Element>) => {
  const options = [<SquaredRoulette/>, <MainFrame/>];
  for (let i = 0; i < options.length; i++) map.set(i, options[i]);
}

function App() {
  const [pageState, dispatch] = useReducer(PageStateReducer.reducer, PageStateReducer.initialState);
  const pagesMap = new Map<number, JSX.Element>();
  populatePagesMap(pagesMap);

  return (
    <section className='appContainer'>
      <PageStateContext.Provider value = {{pageState:PageStateReducer.initialState.page, dispatch}} >
        <TopNavbar/>
        {(pagesMap.get(pageState.page)) ? pagesMap.get(pageState.page) : null}        
        <MainFooter/>
      </PageStateContext.Provider>
    </section>
  );
}

export default App;
