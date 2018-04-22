import React, {Component } from 'react';
import { connect } from 'react-redux';

class ViewReflections extends Component {

    //When ViewReflections component loads, get current reflections via 
    componentDidMount() {
        this.props.dispatch({type: 'GET_REFLEC'})
    }

    render(){
        //map through objects in reducer addReflecToView from index.js
        let viewReflecDisplay = this.props.reduxState.currentReflecToView.map((reflec)=> {
            return (
            <div key = {reflec.id}>
                <p>{reflec.topic}</p>
                <p>{reflec.description}</p>
                <p>{reflec.date}</p>
            </div>)
            })
            
        return(
            <div>
                <i>Current Reflections:</i>
            <div>
                {viewReflecDisplay}
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ViewReflections);