import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Bg from "./bg.png";
import Loader from "../../utils/preloader/Loader";

const Home = () => {
	const [link, setLink] = useState(false);
    const history = useHistory()

	const loaderRedirect = () => {
		setLink(true);
		setTimeout(() => {
			history.push('/main')
		}, 3000);
	};

	return (
		<div className="home">
			<img src={Bg} alt="bg" />
			{link ? (
				<Loader />
			) : (
				<div className="home__body">
					<div className="home__body__wrap">
						<div className="home__body__title">
							<h1>Добро пожаловать</h1>
							<h6>DAPPLETS</h6>
						</div>
						<div className="home__body__text">
							<p className="pos_mg_top_20">
								в тестовое задание на должность Frontend Developer
							</p>
							<p className="pos_mg_top_20">
								Мы строим платформу Аугментированного веба, состоящую из
								браузерного плагина и децентрализованных приложений (дапплетов),
								основанных на крипто-технологиях.
							</p>
							<p className="pos_mg_top_20">
								Наша платформа создается по принципу open-source и доступна для
								разработчиков со всего мира.
							</p>
						</div>
						<div className="home__body__btn pos_mg_top_20">
							<span onClick={loaderRedirect}>desktop</span>
							<span>mobile</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
