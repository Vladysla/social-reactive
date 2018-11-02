import React from 'react'

const ProfileCard = () => {
    return(
        <div className="DashboardProfileCard module">
            <a href="#" className="DashboardProfileCard-bg u-bgUserColor u-block"></a>
            <div className="DashboardProfileCard-content">
                <a className="DashboardProfileCard-avatarLink u-inlineBlock" href="/BagVladyslav">
                    <img className="DashboardProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1057967383019692032/5hux2ltp_bigger.jpg"/>
                </a>
                <div className="DashboardProfileCard-userFields account-group">
                    <div className="DashboardProfileCard-name u-textTruncate">
                        <a className="u-textInheritColor js-nav" href="/BagVladyslav">
                            Vladyslav Bag
                        </a>
                        <span className="UserBadges"></span>
                    </div>
                    <span className="DashboardProfileCard-screenname u-inlineBlock u-dir">
                            <a className="DashboardProfileCard-screennameLink u-linkComplex u-linkClean js-nav" href="/BagVladyslav">
                                <span className="username u-dir">
                                    @<b className="u-linkComplex-target">BagVladyslav</b>
                                </span>
                            </a>
                        </span>
                </div>

                <div className="ProfileCardStats">
                    <ul className="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal"><li className="ProfileCardStats-stat Arrange-sizeFit">
                        <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="/BagVladyslav">
                            <span className="ProfileCardStats-statLabel u-block">Tweets</span>
                            <span className="ProfileCardStats-statValue">1</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div id="dashboard-profile-prompt"></div>
            </div>
        </div>
    )
}

export default ProfileCard