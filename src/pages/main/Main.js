import React from "react";
import Filters from "../../components/filter/Filters";
import Item from "../../components/item/Item";

import MainBody from "./mainBody/MainBody";

const Main = () => {
	return (
		<div className="main">
			{/* <MainBody/> */}
			<Filters />
			<div className="items">
				<Item />
				<Item active='active' exe={true}/>
				<Item />
			</div>
		</div>
	);
};

export default Main;
