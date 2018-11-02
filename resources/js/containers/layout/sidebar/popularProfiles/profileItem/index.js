import React from 'react'

const ProfileItem = () => {
    return(
        <div className="user-list-item account-summary">
            <div className="UserSmallListItem-context"></div>
            <div className="dismiss">
                <span className="Icon icon-close"></span>
            </div>
            <div className="content">
                <a href="#" className="account-group">
                    <img src="https://pbs.twimg.com/profile_images/893996196062261250/rsUbYTMy_bigger.jpg" className="avatar"/>
                    <span className="account-group-inner">
                        <strong className="fullname">4chan</strong>
                    </span>
                </a>
                <div className="user-actions">
                    <div className="user-actions-follow-button">
                        <button className="btn btn-outline-info follow-button"><span>Follow</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileItem