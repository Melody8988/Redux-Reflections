import React, {Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class ViewReflections extends Component {

    //When ViewReflections component loads, get current reflections via rootSaga in index.js
    componentDidMount() {
        this.props.dispatch({type: 'GET_REFLEC'})
    }

    handleDeleteReflec = (event) => {
        let reflecToDelete = JSON.parse(event.target.value)
        console.log('in delete', event.target.value)
        // this.props.dispatch({
        //     type: 'DELETE_REFLEC', 
        //     payload: reflecToDelete
        // })
    }



    render(){
        //map through objects in reducer addReflecToView from index.js
        let viewReflecDisplay = this.props.reduxState.currentReflecToView.map((reflec)=> {
            return (
            <div key = {reflec.id}>
            <Card>
            <CardHeader>
                <p>{reflec.topic}</p>
                <p>{reflec.date}</p>
                <button value={JSON.stringify(reflec)} onClick={this.handleDeleteReflec}>Delete</button>
                <button>Bookmark</button>
            </CardHeader>

                <p>{reflec.description}</p>
            </Card>
            </div>)
            })
            
        return(
            <div className="reflecCard">
                {viewReflecDisplay}
            </div>
            
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ViewReflections);