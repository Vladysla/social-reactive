import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'



class ProfileCard extends Component{


    render() {
        const { totalPosts, profile } = this.props
        return(
            <div className="DashboardProfileCard module">
                <a href="#" className="DashboardProfileCard-bg u-bgUserColor u-block"></a>
                <div className="DashboardProfileCard-content">
                    <Link className="DashboardProfileCard-avatarLink u-inlineBlock" to={profile.slug}>
                        <img className="DashboardProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1057967383019692032/5hux2ltp_bigger.jpg"/>
                    </Link>
                    <div className="DashboardProfileCard-userFields account-group">
                        <div className="DashboardProfileCard-name u-textTruncate">
                            <Link className="u-textInheritColor js-nav" to={profile.slug}>
                                {profile.username}
                            </Link>
                            <span className="UserBadges"></span>
                        </div>
                        <span className="DashboardProfileCard-screenname u-inlineBlock u-dir">
                            <a className="DashboardProfileCard-screennameLink u-linkComplex u-linkClean js-nav" href="/BagVladyslav">
                                <span className="username u-dir">
                                    @<b className="u-linkComplex-target">{profile.slug}</b>
                                </span>
                            </a>
                        </span>
                    </div>

                    <div className="ProfileCardStats">
                        <ul className="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal"><li className="ProfileCardStats-stat Arrange-sizeFit">
                            <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="/BagVladyslav">
                                <span className="ProfileCardStats-statLabel u-block">Posts</span>
                                <span className="ProfileCardStats-statValue">{ totalPosts }</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div id="dashboard-profile-prompt"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        totalPosts: store.posts.total,
        profile: store.profile
    }
}


export default connect(mapStateToProps, null)(ProfileCard)