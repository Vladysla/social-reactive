import React from 'react'

import Header from './header'
import Sidebar from './sidebar'

import WritePost from '../../components/modals/writePost'

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className="page-container">
                <div className="container">
                    <Sidebar />
                    <div className="main-content">
                        {children}
                    </div>
                    <WritePost />
                </div>
            </main>
        </div>
    )
}

export default Layout