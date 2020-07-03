import React, { useState } from 'react';
import Store, { store } from '../store/store'
import {connect} from 'react-redux'
const Form = (props) => {
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
        {setTimeout(() => {
             
             console.log(props)
         }, 5000)}
            
         {console.log(props)}
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

const mapStateToProps = (state) => {
    return {
      data:state
    }
  }
  
export default (connect(mapStateToProps)(Form));