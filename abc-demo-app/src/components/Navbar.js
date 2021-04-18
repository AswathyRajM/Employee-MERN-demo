import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiUserCircle } from "react-icons/bi";

import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar-container">
			<nav>
				<ul>
					<li>
						<Link className="link" to="/employee">
							<BiUser />
							<span>Employee</span>
						</Link>
					</li>
					<li>
						<Link className="link" to="/events">
							<BiUserCircle />
							<span>Events</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
