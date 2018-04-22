import React, {Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
  });

class ViewReflections extends Component {

    componentDidMount() {
        this.props.dispatch(
          {
            type: 'GET_REFLEC'
        })
    }

    render(){
        //map through objects in reducer addReflecToView from index.js
        let viewReflecDisplay = this.props.reduxState.addReflecToView.map((reflec)=> {
            return (<div key = {reflec.id}><p>{reflec.topic}</p><p>{reflec.description}</p><p>{reflec.date}</p></div>)
            {/* <pre>{pizza.description}</pre> 
            <pre>{pizza.cost}</pre>
            <button value={JSON.stringify(pizza)}
             onClick={this.handleAdd} >+</button>
             Pizza
             <button value={JSON.stringify(pizza)} disabled={this.state.subtractDisabled} onClick={this.handleSubtract}>-</button> */}
             
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

export default connect(mapStateToProps)(ViewReflections);