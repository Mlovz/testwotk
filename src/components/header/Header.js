import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Active from "../../images/clarity_cloud-network-line.png";
import Settings from "../../images/carbon_settings-adjust.png";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="header">
			<div className="header__active">
				<img src={Active} alt="" />
				<span>
					Extension state: <strong>Active</strong>
				</span>
			</div>
			<div onClick={() => setOpen(!open)} className="header__settings">
				<img src={Settings} alt="" />
				<span>Settings</span>
			</div>
			<AnimatePresence exitBeforeEnter>
				{open && (
					<motion.div 
                    initial={{width: '0', height: '0'}}
                    animate={{width: open ? '400px' : '0px', height: open ? '90px' : '0px'}}
                    exit={{width: '0', height: '0'}}
                    className="settings__modal">
						<div className="settings__modal__text">
							<h3>Хотите перейти в настройки?</h3>
						</div>
						<div className="settings__modal__btn">
							<Link className="btn btn__modal__link" to="/settings">
								Перейти в настройки
							</Link>
							<span
								className="btn btn__modal__close"
								onClick={() => setOpen(false)}>
								Закрыть
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Header;
