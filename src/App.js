import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Histories from './pages/Histories.jsx';
import LogOut from './pages/Logout.jsx';
import Product from './pages/Product.jsx';
import Transaction from './pages/Transaction.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';

const App = () => {
	const [transactionHistory, setTransactionHistory] = useState([]);

	const updateTransactionHistory = (newTransaction) => {
		setTransactionHistory([...transactionHistory, newTransaction]);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login/>} />
			</Routes>
		
			<Sidebar>
				<Routes>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/logout' element={<LogOut />} />
					<Route path='/history' element={<Histories updateTransactionHistory={updateTransactionHistory} />} />
					<Route path='/product' element={<Product transactionHistory={transactionHistory} />} />
					<Route path='/transaction' element={<Transaction updateTransactionHistory={updateTransactionHistory} />} />
				</Routes>
			</Sidebar>
		</BrowserRouter>
	);
};

export default App;