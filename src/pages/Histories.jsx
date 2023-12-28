import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Api from '../api/data-api';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function createData(tanggal, jenis, berat, detail, harga) {
	return { tanggal, jenis, berat, detail, harga };
}

const rows = [
	createData('1-12-2023', 'Sampah Anorganik', 1, null, 3000),
	createData('1-12-2023', 'Sampah Organik', 3, null, 9000),
	createData('1-12-2023', 'Sampah B3', 5, null, 15000),
	createData('2-12-2023', 'Sampah Organik', 1, null, 3000),
	createData('2-12-2023', 'Sampah Anorganik', 2, null, 6000),
];

export default function Histories() {
	const [datas, setData] = React.useState(null);

	const [selectedHistory, setHistory] = React.useState({});
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Api.get('/data');
				setData(response.data);
				console.log(datas);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='judul'>
			<h1 style={{ margin: '10px' }}>History</h1>
			<br />

			{datas == null ? (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			) : (
				<>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='center' style={{ fontSize: '20px' }}>
										Tanggal
									</TableCell>
									<TableCell align='center' style={{ fontSize: '20px' }}>
										Jenis Sampah
									</TableCell>
									<TableCell align='right' style={{ fontSize: '20px' }}>
										Berat&nbsp;(kg)
									</TableCell>
									<TableCell align='center'></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{datas.map((row) => (
									<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell align='center'>{row.tanggal}</TableCell>
										<TableCell align='center'>{row.jenis}</TableCell>
										<TableCell align='right'>{row.berat}</TableCell>
										<TableCell align='center'>
											<Button
												variant='contained'
												color='success'
												onClick={() => {
													setHistory({
														tanggal: row.tanggal,
														jenis: row.jenis,
														berat: row.berat,
														harga: row.harga,
													});
													handleOpen();
												}}>
												Detail
											</Button>

											<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
												<Box sx={style} borderRadius={4}>
													<Typography id='modal-modal-title' variant='h6' component='h2' align='center'>
														Details
													</Typography>

													<Typography id='modal-modal-description' sx={{ mt: 2 }}>
														Tanggal : {selectedHistory.tanggal}
													</Typography>
													<Typography id='modal-modal-description' sx={{ mt: 2 }}>
														Jenis Sampah : {selectedHistory.jenis}
													</Typography>
													<Typography id='modal-modal-description' sx={{ mt: 2 }}>
														Berat (kg) : {selectedHistory.berat} kg
													</Typography>
													<Typography id='modal-modal-description' sx={{ mt: 2 }}>
														Harga : {selectedHistory.harga}
													</Typography>
												</Box>
											</Modal>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			)}
		</div>
	);
}
