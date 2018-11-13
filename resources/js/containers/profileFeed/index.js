import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
    fetchFeed,
    fetchUser,
    fetchProfile,
    loadMoreFeed
} from '../../actions'


import FeedItem from './feedItem'
import Loader from '../../components/loader'


class ProfileFeed extends Component
{
    constructor(){
        super()
        this.renderList = this.renderList.bind(this)
    }

    componentDidMount(){
        if (this.props.params.user){
            this.props.fetchFeed(this.props.params.user)
            this.props.fetchProfile(this.props.params.user)
        } else {
            window.location.href = '/error/404'
        }
        this.props.fetchUser()
    }

    onChangeMock(){

    }

    renderList(posts, loading, total){
        if (loading){
            return <Loader/>
        } else {
            if (total > 0){
                return (
                    posts.map(post => (
                        <FeedItem key={post.id} post={post} change={this.onChangeMock}/>
                    ))
                )
            } else {
                return 'Dont'
            }
        }
    }


    render(){
        const { posts, loading, postNexPageUrl, totalPosts, loadMoreFeed } = this.props
        window.onscroll = function() {
            let d = document.documentElement;
            let offset = d.scrollTop + window.innerHeight;
            let height = d.offsetHeight;

            if (offset === height) {
                if(postNexPageUrl){
                    loadMoreFeed(postNexPageUrl)
                }
            }
        };
        return(
            <div className="row">
                {this.renderList(posts, loading, totalPosts)}
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUser,
    fetchFeed,
    fetchProfile,
    loadMoreFeed
}

const mapStateToProps = (store) => {
    return{
        posts: store.posts.data,
        loading: store.posts.loading,
        postNexPageUrl: store.posts.next_page_url,
        totalPosts: store.posts.total,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed)
