import React from 'react';
import {connect} from 'react-redux'


const Other = (props) => {
    return (
        <div>
            Name:{props.fname}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      data:state
    }
  }
  
export default (connect(mapStateToProps)(Other));