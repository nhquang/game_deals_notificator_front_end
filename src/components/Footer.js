import React from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

function Footer() {
    const location = useLocation();
    return (
        <footer>
            {location.pathname === "/game_deals_notificator_front_end/" && <Link to="/game_deals_notificator_front_end/managealert/">Manage Alerts</Link>}
            {location.pathname === "/game_deals_notificator_front_end/managealert/" && <Link to="/game_deals_notificator_front_end/">Back</Link>}
            <p>Copyright &copy; 2021</p>
            {/* <a href="https://www.linkedin.com/in/quang-nguyen-090b30b0/" rel="noreferrer" target="_blank">Quang Nguyen</a> */}
            <p>Quang Nguyen</p>
        </footer>
    )
}

export default Footer
