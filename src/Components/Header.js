import React from "react"
import '../styles/header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="calendar">
                    <img className="small-icon" src="https://www.freeiconspng.com/download/29539" alt="calendar" />
                </div>
            </div>
            <div className="header-right">
                <div className="account">
                    <img className="small-icon" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="account" />
                </div>
                <div className="notif">
                    <img className="small-icon" src="https://www.pinclipart.com/picdir/big/369-3699390_notification-png-notification-icon-png-free-clipart.png" alt="notif" />
                </div>
            </div>  
        </div>
    )
}

export default Header;