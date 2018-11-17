import React, { Component } from 'react'

import Editor from 'draft-js-plugins-editor';
import {EditorState} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';


class FeedItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            likes: props.post.likes.length,
            userLikes: props.post.liked_by_user
        }
    }

    toggleLike(id){
        axios.post('/api/toggleLikePost', {
            post_id: id
        }).then(response => {
            if (response.data.result === '+'){
                this.setState((prevState) => {
                    return {
                        likes: prevState.likes + 1,
                        userLikes: !prevState.userLikes
                    }
                })
            } else {
                this.setState((prevState) => {
                    return {
                        likes: prevState.likes - 1,
                        userLikes: !prevState.userLikes
                    }
                })
            }
        })
    }

    render() {
        const {id, user, body, created_at } = this.props.post
        const totalLikes = this.state.likes
        const userLiked = this.state.userLikes ? 'actived' : ''
        let contentState = stateFromHTML(body);
        const editorState = EditorState.createWithContent(contentState);

        return (
            <div className="card gedf-card align-self-center col-11">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                            </div>
                            <div className="ml-2">
                                <div className="h5 m-0">@{user.slug}</div>
                                <div className="h7 text-muted">{user.username}</div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown">
                                <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-ellipsis-h"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                    <div className="h6 dropdown-header">Configuration</div>
                                    <a className="dropdown-item" href="#">Save</a>
                                    <a className="dropdown-item" href="#">Hide</a>
                                    <a className="dropdown-item" href="#">Report</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>{created_at}</div>
                    <div className="card-content">
                        <Editor editorState={editorState} onChange={this.props.change} readOnly />
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={(e) => this.toggleLike(id, e)} className="card-link like-btn">
                        <i className={`fa like-icon ${userLiked}`} aria-hidden="true"></i>
                        <span>  {totalLikes}</span>
                    </button>
                    <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                    <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                </div>
            </div>
        )
    }
}

export default FeedItem