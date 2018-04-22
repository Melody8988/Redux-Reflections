import React, {Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
  });


class AddReflection extends Component {
    constructor(props){
        super(props)
    
        this.state={
          newRefelc : '',
        }
      }

      handleNewReflec = () =>{
        this.props.dispatch({
            type: 'ADD_REFLEC',
            payload: this.state.newReflec
        })
    }

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
            <h3>Date</h3>
            <br/>
            <textarea type="number"rows="1" cols="20"> 
            </textarea>
            <br/>
            <button onClick={this.handleNewReflec}>Submit</button>
            </div>
        )
    }

}

export default connect(mapStateToProps)(AddReflection);