import React, { useReducer } from 'react';
import { StateProvider } from './context';
import Activity from './components/Activity';


function App() {
  const initialState = {
    name: 'Buttons',
    activity: 'jumping'
  };

  const reducer = (state, action) => {
    const { name } = action;
    
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      case "ACTION_NAP":
        return {
            ...state,
            activity: "napping"
        }
      case "ACTION_EAT":
        return {
            ...state,
            activity: "eating"
        }
      case "ACTION_PLAY": 
        return {
            ...state,
            activity: "playing"
        }
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer,initialState)}>
        <Activity />
      </StateProvider>
    </div>
  );
}

export default App;
