import React, { Component } from "react";
import home from "../../assets/images/home.svg";
import homeRed from "../../assets/images/homeRed.svg";
import { Link } from "react-router-dom";
import library from "../../assets/images/library.svg";
import subscriptions from "../../assets/images/subscriptions.svg";
import trending from "../../assets/images/trending.svg";
import Box from '@mui/material/Box';
import "./small-sidebar.css";

export default class SmallSidebar extends Component {
	render() {
		return (

			<section class="sidebar_small" >
				<Box position="fixed" sx={{ width: 76, bgcolor: 'white', display: { xs: 'none', md: 'flex' } }}>
					<ul>
						<li>
							<Link to='/' className="new_video" style={{ display: "block" }}>
								<i class="fas fa-home"></i>
								Home
							</Link>
						</li>
						<li>
							<Link to='/' className="new_video" style={{ display: "block" }}>
								<i class="fas fa-thumbs-up"></i>
								Liked Videos
							</Link>
						</li>
						<li>
							<Link to='/' className="new_video" style={{ display: "block" }}>
								<i class="fas fa-file-video"></i>
								Library
							</Link>
						</li>
						<li><Link to='/upload' className="new_video" style={{ display: "block" }}>
							Add Video
						</Link></li>
					</ul>
				</Box>
			</section >

		);
	}
}
