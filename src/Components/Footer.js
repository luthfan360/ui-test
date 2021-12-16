import React from "react"
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <div className="home">
                    <img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home-icon" />
                    <h3>Home</h3>
                </div>
                <div className="drugs">
                    <img className="footer-icon" src="http://cdn.onlinewebfonts.com/svg/img_291530.png" alt="drug-icon" />
                    <h3>Drugs</h3>
                </div>
            </div>
            <div className="middle-footer">
                <div className="scan">
                    <img className="scan-icon" src="http://cdn.onlinewebfonts.com/svg/img_137283.png" alt="scan-icon" />
                </div>
            </div>
            <div className="right-footer">
                <div className="consult">
                    <img className="footer-icon" src="http://cdn.onlinewebfonts.com/svg/img_491427.png" alt="doctor-icon" />
                    <h3>Consult</h3>
                </div>
                <div className="history">
                    <img className="footer-icon" src="https://png.pngitem.com/pimgs/s/119-1197949_heartbeat-transparent-background-heartbeat-icon-hd-png-download.png" alt="heartbeat" />
                    <h3>History</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer