import React, {Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';


class ViewReflections extends Component {

    //When ViewReflections component loads, get current reflections via rootSaga in index.js
    componentDidMount() {
        this.props.dispatch({type: 'GET_REFLEC'})
    }

    //On click, make a delete request to reflec.router.js
    handleDeleteReflec = (event) => {
        let reflecToDelete = JSON.parse(event.target.value)
        console.log('in delete', reflecToDelete)
        console.log('id', reflecToDelete.id)
        axios.delete('/api/reflec/' + reflecToDelete.id)
        .then((response)=>{
            this.componentDidMount();
        }).catch((error)=>{
            console.log('error deleting reflection', error)
        })//end catch
    }//end handleDeleteReflec 

    handleBookmarkReflec = (event) => {
        let reflecToUpdate = JSON.parse(event.target.value)
        console.log('in update', reflecToUpdate.bookmarked)
        reflecToUpdate.bookmarked = !reflecToUpdate.bookmarked
        console.log('new bookmark status:', reflecToUpdate.bookmarked)
        axios.put('/api/reflec/' + reflecToUpdate.id, {bookmarked: reflecToUpdate.bookmarked})
        .then((response)=>{
            this.componentDidMount();
        }).catch((error)=>{
            console.log('error updating bookmark', error)
        })//end catch
    }//end handleBookmarkReflec


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
                <button value={JSON.stringify(reflec)} onClick={this.handleBookmarkReflec}>Bookmark</button>
            </CardHeader>
                <p>Bookmarked: {JSON.stringify(reflec.bookmarked)}</p>
                <p className="viewDescription" >{reflec.description}</p>
            
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