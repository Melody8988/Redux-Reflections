import React, {Component } from 'react';
import { connect } from 'react-redux';


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
                        rows="4" 
                        cols="50">
                    </textarea>
                <h3>Reflection</h3>
                        <br/>
                    <textarea 
                        value={this.state.newReflec.description} 
                        onChange={this.handleChangeFor('description')} 
                        rows="4" 
                        cols="50"> 
                    </textarea>
                        <br/>
                <button onClick={this.handleSubmitNewReflec}>Submit</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(AddReflection);