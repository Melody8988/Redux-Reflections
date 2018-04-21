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
        
        return(
            <i>Current Reflections:</i>
        )
    }

}

export default connect(mapStateToProps)(ViewReflections);