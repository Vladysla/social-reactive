import React from 'react'

import ProfileItem from './profileItem'

const ProfileList = () => {
    return (
        <div className="module wtf-module">
            <div className="flex-module">
                <div className="flex-module-header">
                    <h3>Who to follow</h3>
                    <small>. </small>
                    <button className="btn-link"><small>Refresh</small></button>
                    <small className="view-all">
                        . <a href="#">All</a>
                    </small>
                </div>
                <div className="recomended-user">
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                </div>
            </div>
        </div>
    )
}

export default ProfileList