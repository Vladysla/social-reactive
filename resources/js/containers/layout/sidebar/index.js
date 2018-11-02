import React from 'react'

import ProfileCard from './profileCard'
import ProfileList from './popularProfiles'
import PopularPosts from './popularPosts'

const Sidebar = () => {
    return (
        <div className="dashboard dashboard-left">
            <ProfileCard/>
            <ProfileList/>
            <PopularPosts/>
        </div>
    )
}

export default Sidebar