import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchFeed} from '../../actions'

import FeedItem from './feedItem'

class FeedList extends Component
{
    componentDidMount(){
        this.props.fetchFeed()
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
    fetchFeed
}

export default connect(null, mapDispatchToProps)(FeedList)
