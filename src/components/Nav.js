import logo from "../images/logo.svg";
//Styling

const Nav = () => {
	return (
		<div>
			<div className='top-nav'>
				<img src={logo} alt='logo' />
				<div className='nav-links'>
					<ul>
						<li>home</li>
						<li>shop</li>
						<li>about</li>
						<li>contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
