import React from 'react'

import Editor from 'draft-js-plugins-editor';
import {EditorState} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';


const FeedItem = (props) => {
    const {user, body, likes, created_at } = props.post
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
                    <Editor editorState={editorState} onChange={props.change} readOnly />
                </div>
            </div>
            <div className="card-footer">
                <a href="#" className="card-link like-btn"><i className="fa like-icon" aria-hidden="true"></i> Like</a>
                <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
            </div>
        </div>
    )
}

export default FeedItem