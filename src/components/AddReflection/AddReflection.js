import React, {Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
  });


class AddReflection extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          newReflec: {topic:'', 
          description:'',  
          date:''}
        }
      }

//     handleSubmitNewReflec = () =>{
//     this.props.dispatch({
//         type: 'ADD_REFLEC',
//         payload: this.state.newReflec
//     })
// } 


// handleReflecChangeFor = propertyName => event => {
//     this.setState({
//         newReflec.topic {
//         ...this.state.newReflec,
//         [propertyName]: event.target.value,
//       }
//     });
//     console.log(this.state.newReflec)
//   }

//   handleSubmitNewReflec = (event)=> {
//     event.preventDefault();
//     console.log('submitted!');
//     //   this.setState({
//     //     newReflec: [this.state.newReflec]
//     // })
//   }

// handleTopicChange = (event) => {
//     this.setState({
//         topic: event.target.value
    
//     })
//     console.log(this.state)
// }

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
                <h3>Date</h3>
                        <br/>
                    <textarea 
                        value={this.state.newReflec.date} 
                        onChange={this.handleChangeFor('date')} 
                        placeholder="2018-05-01"type="number"
                        rows="1" 
                        cols="20"> 
                    </textarea>
                        <br/>
                <button onClick={this.handleSubmitNewReflec}>Submit</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddReflection);