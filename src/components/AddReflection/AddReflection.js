import React, {Component } from 'react';
import { connect } from 'react-redux';

class AddReflection extends Component {

    render(){
        return(
            <div>
            <h3>Topic</h3>
            <br/>
            <textarea rows="4" cols="50">
            </textarea>
            <h3>Reflection</h3>
            <br/>
            <textarea rows="4" cols="50"> 
            </textarea>
            <br/>
            <button>Submit</button>
            </div>
        )
    }

}

export default AddReflection;