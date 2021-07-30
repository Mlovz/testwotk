import React, { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "../images/arrow-right (1).png";
import ArrowLeft from "../images/arrow-right.png";
import Tags from "./tags/Tags";

const SidebarRight = () => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div
			initial={{ maxWidth: "56px", width: "100%" }}
			animate={{ maxWidth: open ? "360px" : "56px", width: "100%" }}
			className="sideleft sideright">
			{open ? (
				<div className="sideright__wrap">
					<div className="sideright__logo">
						<img
							style={{ animation: open && "none" }}
							onClick={() => setOpen(false)}
							src={Arrow}
							alt=""
						/>
						<h1>Dapplet Settings</h1>
					</div>
					<div className="sideright__create">
						<div className="sideright__create__list">
							<h3>Create new list</h3>
							<div className="sideright__create__inputs">
								<input type="text" placeholder="List Name" />
								<button>Create</button>
							</div>
						</div>
						<div className="sideright__create__list">
							<h3>New tag</h3>
							<div className="sideright__create__inputs">
								<input type="text" placeholder="Tag name" />
								<button>Create</button>
							</div>
						</div>
					</div>
					<div className="sideright__tags">
						<h1>My tags</h1>
						<div className="list__tags__flex">
							<Tags>Twitter</Tags>
							<Tags>Social Media</Tags>
							<Tags>Top 10</Tags>
							<Tags>Finances</Tags>
						</div>
					</div>

					<div className="sideright__tags">
						<h1>Community tags</h1>

						<div className="list__tags__flex">
							<Tags bg="#41BFB0">Social</Tags>
							<Tags bg="#41BFB0">Top 100</Tags>
							<Tags bg="#41BFB0">Testing</Tags>
							<Tags bg="#41BFB0">Favourites</Tags>
						</div>
					</div>

                    <div className="sideright__work">
						<h1>Working on</h1>

						<div className='sideright__work__item'>
                            <span>&times;</span>
                            <h3>twitter.com</h3>
                        </div>
                        <div className='sideright__work__item'>
                            <span>&times;</span>
                            <h3>twitter.com/randomusername</h3>
                        </div>
                        <div className='sideright__work__item'>
                            <span>&times;</span>
                            <h3>facebook.com</h3>
                        </div>
                        <div className='sideright__work__item'>
                            <span>&times;</span>
                            <h3>facebook.com/randomusername</h3>
                        </div>
					</div>
                    
				</div>
			) : (
				<div className="sideright__wrap">
					<div className="sideright__logo">
						<img onClick={() => setOpen(true)} src={ArrowLeft} alt="" />
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default SidebarRight;
