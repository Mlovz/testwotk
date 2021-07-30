import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Burg from "../../images/Group 14.png";
import Rect from "../../images/Rectangle 29.png";
import Button from "../button/Button";
import Tags from "../tags/Tags";

const Item = ({ active, exe }) => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setOpen(!open)}
			className={`items__item pos_mg_bottom_20 ${active}`}>
			<div className="items__item__wrap">
				<img className="burg__checkbox" src={Burg} alt="" />
				<img className="items__item__logo" src={Rect} alt="" />
				<div className="items__item__title">
					<h4>Ethereum Contracts Example</h4>
					<small>0xC12......E3836</small>
				</div>
				<div className="items__item__desc">
					<span>Feature adds tweets to Ethereum contract</span>
				</div>
				<div className="items__item__name">
					<span>debra.holt</span>
				</div>
				<div className="items__item__tags">
					<div className="list__tags__flex">
						<Tags>Social Media</Tags>
						<Tags>Finances</Tags>
						<Tags>Twitter</Tags>
						<Tags bg="#41BFB0">Top 100</Tags>
					</div>
				</div>
				<div className="items__item__btn">
					<Button exe={exe} />
				</div>
			</div>
			<AnimatePresence exitBeforeEnter>
				{open && (
					<motion.div
						initial={{ height: "0" }}
						animate={{ height: open ? "auto" : "0" }}
						exit={{ height: "0" }}
						className="items__item__modal">
						<div className="modal__desc">
							<h6>Aliquam sit</h6>
							<p>
								Semper neque leo scelerisque gravida pharetra, elit viverra
								varius. Leo et pretium massa tristique mauris habitasse in in.
								Et cras sociis tellus viverra at dictumst quisque praesent arcu.
								Eu faucibus id at odio praesent. Ut nibh porta ipsum in eget id
								netus pharetra in. Ultrices scelerisque augue dui eget lacus,
								aenean cursus in. Consequat rhoncus egestas ultricies imperdiet
								diam. Imperdiet mollis egestas est faucibus sit tristique eu.
							</p>
						</div>

						<div className="modal__items">
							<div className="modal__items__item">
								<div className="item__block">
									<h6>Semper neque</h6>
									<p>Amet, porttitor gravida id</p>
								</div>
								<div className="item__block">
									<h6>Leo ipsum.</h6>
									<p>Vulputate dolor nam in.</p>
								</div>
								<div className="item__block">
									<h6>Elit sagittis et.</h6>
									<p>Ut molestie eros.</p>
								</div>
							</div>
                            <div className="modal__items__item">
								<div className="item__block">
									<h6>Aliquam.</h6>
									<p>Viverra dictum arcu.</p>
								</div>
								<div className="item__block">
									<h6>In euismod.</h6>
									<p>Felis pretium neque.</p>
								</div>
								<div className="item__block">
									<h6>Justo amet.</h6>
									<p>Nullam nec ultrices.</p>
								</div>
							</div>
                            <div className="modal__items__item">
								<div className="item__block">
									<h6>Urna.</h6>
									<p>Ultrices pellentesque.</p>
								</div>
								<div className="item__block">
									<h6>Nam diam.</h6>
									<p>Elit accumsan leo non.</p>
								</div>
								
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Item;
