import React from 'react'

import PopularPostItem from './popularPostItem'

const PopularPosts = () => {
    return(
        <div className="module Trends trends">
            <div className="trends-inner">
                <div className="flex-module trends-container">
                    <div className="flex-module-header">
                        <h3>
                            <span className="trend-location">The mostopular posts</span>
                        </h3>
                    </div>
                    <div className="flex-module-inner">
                        <ul className="trend-items">
                            <PopularPostItem/>
                            <PopularPostItem/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPosts