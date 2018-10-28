import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchFeed} from '../../actions'

class Feed extends Component
{
    componentDidMount(){
        this.props.fetchFeed()
    }
    render(){
        return(
            <div>
                Feed
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchFeed
}

export default connect(null, mapDispatchToProps)(Feed)
