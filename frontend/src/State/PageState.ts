import React from 'react';
/* 
THIS FILE AND ALL OF ITS FUNCTIONS WORKS WITH THE USAGE OF 'useReducer' and 'useContext'
First, import the CONTEXT object in both components: 
    > the parent one from where we want to rerender (there we pass the state and DISPATCH function)
    > and the one we want to use to modify the state (by using the DISPATCH function)
Then, create variables using 'useReducer' passing the reducer and the initialState (in that order)
After that, wrap the returned JSX-Elements using the Provider prop from the CONTEXT object 
passing as value an object whose properties are "state" as the state to passdown and "dispatch"
as the function which will change the state 

EXAMPLE:
interface IPageContext {pageState: number, dispatch:React.Dispatch<IAction>}

export const PageStateContext = React.createContext<IPageContext>({
  pageState: PageStateReducer.initialState.page,
  dispatch: () => null
});

Finally, in the component where we want to run the dispatch function, create a variable
using useContext and the imported ContextObject
*/

/* ------------------------ START OF: STATE CONFIG -----------------------------*/
// intented Hook: useReducer
export interface IAction {
    type: "CHANGE";
    payload: number;
};

const initialState = {
    page: 0
};

/* ------------------------ START OF: REDUCER FUNCTIONS -----------------------------*/
// intented Hook: useReducer
function reducer(state: typeof initialState, action:IAction) {
  switch (action.type) {
    case 'CHANGE':
        return {...state, page:Math.min(3,Math.max(0,action.payload))};
    default:
      throw new Error("Invalid TYPE");
  }
}

/* ------------------------ START OF: ACTION CREATORS -----------------------------*/
// intented Hook: useReducer
// THIS FUNCTION IS USED IN THE COMPONENT WE WANT TO USE TO CHANGE THE STATE
function changePageState (dispatch:React.Dispatch<IAction>, newPageVal:number):void {
    const actionToDispatch:IAction = { type:"CHANGE", payload: newPageVal }
    dispatch(actionToDispatch);
}

/* --------------- START OF: EXPORTS OF useReducer FUNCTIONS -----------------------*/
export const ActionCreators = {
    changePageState
}

export const PageStateReducer = {
    initialState, reducer
}


/* ------------------- START OF: CONTEXT CREATION AND ITS EXPORT -------------------*/
// intented Hook: useContext
interface IPageContext {pageState: number, dispatch:React.Dispatch<IAction>}

export const PageStateContext = React.createContext<IPageContext>({
  pageState: PageStateReducer.initialState.page,
  dispatch: () => null
});