import React from "react";
import { Link, useLocation } from "react-router-dom";
import Tags from "../../tags/Tags";

const SidebarMenu = ({ open, setOpen }) => {
	const { pathname } = useLocation();

	const isActive = (pn) => {
		if (pn === pathname) return "active";
	};
	const links = [
		{
			to: "/main",
			svg: (
				<svg
					className={`${isActive("/main")}`}
					width="90"
					height="94"
					fill="none">
					<path
						d="M57 51V43C56.9996 42.6493 56.9071 42.3048 56.7315 42.0012C56.556 41.6975 56.3037 41.4454 56 41.27L49 37.27C48.696 37.0945 48.3511 37.002 48 37.002C47.6489 37.002 47.304 37.0945 47 37.27L40 41.27C39.6963 41.4454 39.444 41.6975 39.2685 42.0012C39.0929 42.3048 39.0004 42.6493 39 43V51C39.0004 51.3507 39.0929 51.6952 39.2685 51.9988C39.444 52.3025 39.6963 52.5546 40 52.73L47 56.73C47.304 56.9055 47.6489 56.9979 48 56.9979C48.3511 56.9979 48.696 56.9055 49 56.73L56 52.73C56.3037 52.5546 56.556 52.3025 56.7315 51.9988C56.9071 51.6952 56.9996 51.3507 57 51Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M43.5 39.21L48 41.81L52.5 39.21"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M43.5 54.79V49.6L39 47"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M57 47L52.5 49.6V54.79"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M39.27 41.96L48 47.01L56.73 41.96"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M48 57.08V47"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			),
			text: "All Dapplets",
		},
		{
			to: "/favorite",
			svg: (
				<svg
					width="90"
					height="54"
					fill="none"
					className={`${isActive("/favorite")}`}>
					<path
						d="M56.8401 19.61C56.3294 19.099 55.7229 18.6936 55.0555 18.4171C54.388 18.1405 53.6726 17.9982 52.9501 17.9982C52.2276 17.9982 51.5122 18.1405 50.8448 18.4171C50.1773 18.6936 49.5709 19.099 49.0601 19.61L48.0001 20.67L46.9401 19.61C45.9084 18.5783 44.5092 17.9987 43.0501 17.9987C41.5911 17.9987 40.1918 18.5783 39.1601 19.61C38.1284 20.6417 37.5488 22.041 37.5488 23.5C37.5488 24.959 38.1284 26.3583 39.1601 27.39L40.2201 28.45L48.0001 36.23L55.7801 28.45L56.8401 27.39C57.3511 26.8792 57.7565 26.2728 58.033 25.6053C58.3096 24.9379 58.4519 24.2225 58.4519 23.5C58.4519 22.7775 58.3096 22.0621 58.033 21.3946C57.7565 20.7272 57.3511 20.1208 56.8401 19.61V19.61Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			),
			text: "Editor’s Choice",
		},
		{
			to: "/daplets",
			svg: (
				<svg
					className={`${isActive("/daplets")}`}
					width="90"
					height="54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M46 18H39V25H46V18Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M57 18H50V25H57V18Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M57 29H50V36H57V29Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M46 29H39V36H46V29Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			),
			text: "Essential Dapplets",
		},
		{
			to: "/network",
			svg: (
				<svg
					className={`${isActive("/network")}`}
					width="90"
					height="54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M53 36V34C53 32.9391 52.5786 31.9217 51.8284 31.1716C51.0783 30.4214 50.0609 30 49 30H41C39.9391 30 38.9217 30.4214 38.1716 31.1716C37.4214 31.9217 37 32.9391 37 34V36"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M45 26C47.2091 26 49 24.2091 49 22C49 19.7909 47.2091 18 45 18C42.7909 18 41 19.7909 41 22C41 24.2091 42.7909 26 45 26Z"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M59 36V34C58.9993 33.1137 58.7044 32.2528 58.1614 31.5523C57.6184 30.8519 56.8581 30.3516 56 30.13"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M52 18.13C52.8604 18.3503 53.623 18.8507 54.1676 19.5523C54.7122 20.2539 55.0078 21.1168 55.0078 22.005C55.0078 22.8932 54.7122 23.7561 54.1676 24.4577C53.623 25.1593 52.8604 25.6597 52 25.88"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			),
			text: "Social Networks",
		},
		{
			to: "/finans",
			svg: (
				<svg
					className={`${isActive("/finans")}`}
					width="90"
					height="54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M59 21L49.5 30.5L44.5 25.5L37 33"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M53 21H59V27"
						stroke="#565555"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			),
			text: "Financial Dapplets",
		},
	];

	const tags = [
		{ text: "Twitter" },
		{ text: "Social Media" },
		{ text: "Top 10" },
		{ text: "Test" },
		{ text: "Finances" },
		{ text: "Media" },
		{ text: "ToDo" },
	];

	return (
		<nav className="sideleft__menu">
			{open
				? links.map((link, index) => {
						return (
							<Link
								key={index}
								to={link.to}
								className={`sideleft__menu__link ${isActive(link.to)}`}>
								{link.svg}
								<span className={`${isActive(link.to)}`}>{link.text}</span>
							</Link>
						);
				  })
				: links.map((link, index) => {
						return (
							<Link
								onClick={() => setOpen(true)}
								key={index}
								to={link.to}
								className={`sideleft__menu__link ${isActive(link.to)}`}>
								{link.svg}
							</Link>
						);
				  })}

			{open && (
				<div className="sideleft__menu__list">
					<div className="list__block">
						<h1>My list</h1>
						<span className="pos_mg_top_20">
							TOP-10 Twitter Dapplets <Link>(Me)</Link>
						</span>
						<span className="pos_mg_top_20">
							Best Financial dapplets by Jack <Link>(Jack)</Link>
						</span>
						<span className="pos_mg_top_20">
							TOP-10 Twitter Dapplets <Link>(Me)</Link>
						</span>
					</div>
					<div className="list__tags pos_mg_top_20">
						<h6 className="pos_mg_bottom_20">My tags</h6>
						<div className="list__tags__flex">
							{tags.map((tag, index) => {
								return <Tags key={index}>{tag.text}</Tags>;
							})}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default SidebarMenu;
