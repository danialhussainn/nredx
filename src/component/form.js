import React, { useState } from 'react';
import Store, { store } from '../store/store'
const Form = () => {
    const [state,setState]=useState({})
const updatefunc=(e)=>{
    state[e.target.id]=e.target.value
    setState({...state})
    }
const funclick=(e)=>{
    e.preventDefault()
    console.log(state)
    store.dispatch({ type:'INFO_PERSONALS',payload:state })
}
    return (
        <div>
            <form action="/action_page.php">
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" onChange={updatefunc}/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" onChange={updatefunc}/><br/><br/>
  <button onClick={funclick}>Submit</button>
</form>
        </div>
    );
};

export default Form;