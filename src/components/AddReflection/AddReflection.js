import React, {Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'

class AddReflection extends Component {
    constructor(props){
        super(props)
        this.state = {
          newReflec: {topic:'', 
          description:'',  
          bookmarked:'',
          date:''}
        }
      }

//Change the state of newReflec based on inputs
handleChangeFor = (propertyName) => {
    return (event) => {
    this.setState({
        newReflec: {
            ...this.state.newReflec, 
            [propertyName]: event.target.value
            }
        })
    }
}

//On button submission, add the newReflec via index.js for a post
handleSubmitNewReflec = () => {
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
                    <textarea 
                        value={this.state.newReflec.topic}
                        onChange={this.handleChangeFor('topic')} 
                        rows="1" 
                        cols="80">
                    </textarea>
                <h3>Reflection</h3>
                        <br/>
                    <textarea 
                        value={this.state.newReflec.description} 
                        onChange={this.handleChangeFor('description')} 
                        rows="15" 
                        cols="80"> 
                    </textarea>
                        <br/>
                        <RaisedButton className="submitBtn" label="Submit" primary={true}  
                 onClick={this.handleSubmitNewReflec}
                />
            </div>
        )
    }
}
//To have access to reduxState(index.js) on this file
const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(AddReflection);