import React from 'react'

import Header from './header'
import Sidebar from './sidebar'

const Layout = ({ children }) =>{
    return(
        <div>
            <Header/>
            <main className="page-container">
                <div className="container">
                    <Sidebar />
                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout