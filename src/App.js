import { Route, useLocation } from "react-router-dom";
import SiderbarLeft from "./components/sidebarleft/SiderbarLeft";
import SidebarRight from "./components/SidebarRight";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Bg1 from './pages/main/001.png'
import Bg2 from './pages/main/012.png'
import Bg3 from './pages/main/501.png'
import Header from "./components/header/Header";
import Favorite from "./pages/favorite/Favorite";

function App() {
	const { pathname } = useLocation();
	return (
		<div className="App">
			<img className="Bg1" src={Bg1} alt="" />
			<img className="Bg2" src={Bg2} alt="" />
			<img className="Bg3" src={Bg3} alt="" />
			{pathname === "/" ? (
				<Route exact path="/" component={Home} />
			) : (
				<>
					<div className="App__wrap">
						
						<SiderbarLeft />
						  <div className="App__wrap__home">
						  	<Header/>
						  	<div className="App__wrap__pos">
								<Route exact path="/main" component={Main} />
								<Route exact path="/favorite" component={Favorite} />
							</div>
						  </div>
						<SidebarRight />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
