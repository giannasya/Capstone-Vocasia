import React, { useState } from 'react';
import { FaTh, FaBars, FaHistory, FaSignOutAlt, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logorisekel from "../img/logorisekel.svg";

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const menuItem = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: <FaTh />,
		},
		{
			path: '/product',
			name: 'Product',
			icon: <FaShoppingBag />,
		},
		{
			path: '/transaction',
			name: 'Transactions',
			icon: <FaShoppingCart />,
		},
		{
			path: '/history',
			name: 'History',
			icon: <FaHistory />,
		},
		{
			path: '/logout',
			name: 'LogOut',
			icon: <FaSignOutAlt />,
		},
	];
	return (
		<div className='container'>
			<div style={{ width: isOpen ? '245px' : '60px' }} className='sidebar'>
				<div className='top_section'>
					
					<img src={logorisekel} alt='gambar' style={{ display: isOpen ? 'block' : 'none' }} className='logo' />

					<div style={{ marginLeft: isOpen ? '30px' : '0px' }} className='bars'>
						<FaBars onClick={toggle} />
					</div>
				</div>
				{menuItem.map((item, index) => (
					<NavLink to={item.path} key={index} className='link' activeclassName='active'>
						<div className='icon'>{item.icon}</div>
						<div style={{ display: isOpen ? 'block' : 'none' }} className='link_text'>
							{item.name}
						</div>
					</NavLink>
				))}
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Sidebar;
