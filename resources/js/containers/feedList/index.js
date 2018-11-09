import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
    fetchFeed,
    fetchUser
} from '../../actions'

import Writepost from '../../components/modals/writePost'

import FeedItem from './feedItem'


class FeedList extends Component
{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.fetchFeed()
        this.props.fetchUser()
    }

    render(){
        return(
            <div className="row">
                <Writepost/>
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
