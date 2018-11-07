import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    fetchFeed,
    fetchUser
} from '../../actions'

import FeedItem from './feedItem'

class FeedList extends Component
{
    componentDidMount(){
        this.props.fetchFeed()
        this.props.fetchUser()
    }
    render(){
        return(
            <div className="row">
                <FeedItem/>
                <FeedItem/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUser,
    fetchFeed
}

export default connect(null, mapDispatchToProps)(FeedList)
