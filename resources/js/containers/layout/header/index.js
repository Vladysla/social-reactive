import React, {Component} from 'react'

import Search from './searchForm/index'

class Header extends  Component{
    constructor(){
        super()
        this.state = {
            dropDown: false
        }
        this.onDropDownMenu = this.onDropDownMenu.bind(this)
    }

    onDropDownMenu(){
        this.setState(prevState => {
            return {
                dropDown: !prevState.dropDown
            }
        })
    }

    render(){
        const isShow = (this.state.dropDown) ? 'show': ''
        return (
            <header className="header-main">
                <div className="header-nav">
                    <div className="global-header-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="navigation">
                                        <ul className="global-actions">
                                            <li className="active">
                                                <a href="#">
                                                    <i className="fas fa-home icon"></i>
                                                    <span className="text">Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-bell icon"></i>
                                                    <span className="text">Notification</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-envelope icon"></i>
                                                    <span className="text">Messages</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-extras col-md-7 ml-auto">
                                    <div className="search">
                                        <Search />
                                    </div>
                                    <ul className="right-actions">
                                        <li>
                                            <a onClick={this.onDropDownMenu} href="#" id="settings" className="settings">
                                                <img className="avatar" src="https://pbs.twimg.com/profile_images/1057967383019692032/5hux2ltp_normal.jpg" alt=""/>
                                            </a>
                                            <div className={`DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered ${isShow}`}>
                                                <div className="js-first-tabstop">

                                                </div>
                                                <div className="dropdown-caret">
                                                    <span className="caret-outer"></span>
                                                    <span className="caret-inner"></span>
                                                </div>
                                                <ul role="menu">
                                                    <li className="DashUserDropdown-userInfo" role="presentation">
                                                        <a href="/BagVladyslav" className="DashUserDropdown-userInfoLink js-nav" role="menuitem">
                                                            <b className="fullname">Vladyslav Bag</b><span className="UserBadges"></span>
                                                            <p className="name"><span className="username u-dir u-textTruncate">@<b>BagVladyslav</b></span></p>
                                                        </a>
                                                    </li>
                                                    <li className="dropdown-divider" role="presentation">

                                                    </li>
                                                    <li className="current-user" role="presentation">
                                                        <a href="/BagVladyslav" className="js-nav" role="menuitem">
                                                            <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--me"></span>Профиль
                                                        </a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a className="js-nav" href="/BagVladyslav/lists" role="menuitem">
                                                            <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--list"></span>Списки
                                                        </a>
                                                    </li>
                                                    <li className="dropdown-divider" role="presentation">

                                                    </li>
                                                    <li role="presentation">
                                                        <a href="/settings" className="js-nav" role="menuitem">
                                                            Настройки и конфиденциальность
                                                        </a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="//support.twitter.com" role="menuitem">
                                                            Справочный центр
                                                        </a>
                                                    </li>
                                                    <li className="js-signout-button" id="signout-button" role="presentation">
                                                        <button type="button" className="dropdown-link" role="menuitem">Выйти</button>
                                                        <form className="t1-form dropdown-link-form signout-form" id="signout-form" action="/logout" method="POST">
                                                            <input type="hidden" name="scribe_log"/>
                                                        </form>
                                                    </li>
                                                    <li className="dropdown-divider" role="presentation">

                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                                            <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary btn">
                                                <span className="text">Твитнуть</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="js-last-tabstop"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header