import React, {useContext} from 'react';
import StateContext from '../context';


const Activity = () => {

    const [value, dispatch] = useContext(StateContext);
    const { name, activity } = value;

    return(
    <>
    <h1>What is the cat doing?</h1>
    <p>{name} is { activity } </p>
    <button onClick={()=> dispatch({
        type: "ACTION_EAT"
        })}>Eating</button>
    <button onClick={()=>dispatch({
        type: "ACTION_NAP"
        })}>Napping</button>
    <button onClick={()=>dispatch({
        type: "ACTION_PLAY"
        })}>Playing</button>
    </>
    );
};

export default Activity;