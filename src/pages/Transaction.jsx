import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, Select, MenuItem, FormControl, Box, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';

const Transaction = ({ updateTransactionHistory }) => {
	const [garbageType, setGarbageType] = useState('');
	const [garbageWeight, setGarbageWeight] = useState('');
	const [garbagePrice, setGarbagePrice] = useState('');
	const [totalPrice, setTotalPrice] = useState('');
	const [transactionDate, setTransactionDate] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	useEffect(() => {
		setTotalPrice(garbageWeight * garbagePrice);
	}, [garbageWeight, garbagePrice]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const response = await axios.post('http://localhost:3001/data', {
				jenis: garbageType,
				berat: parseFloat(garbageWeight),
				harga: parseFloat(garbagePrice),
				tanggal: transactionDate,
			});

			updateTransactionHistory(response.data);
			setSnackbarOpen(true);
			resetForm();
		} catch (error) {
			setError('Error submitting the form. Please try again.');
			console.error('Error:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleCancel = () => {
		resetForm();
	};

	const resetForm = () => {
		setGarbageType('');
		setGarbageWeight('');
		setGarbagePrice('');
		setTotalPrice('');
		setTransactionDate('');
		setError(null);
	};

	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};

	return (
		<Card sx={{ maxWidth: '990px', minHeight: '570px', bgcolor: '#D9EFB9', p: 5, fontFamily: 'monospace', color: '#1A1A1A', borderRadius: '30px' }}>
			<CardContent>
				<Typography variant='h5' gutterBottom sx={{ fontSize: '2rem', fontFamily: 'monospace', marginBottom: '1rem' }}>
					RisekelAja
				</Typography>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} mb={2}>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', width: '418px', height: '49.683px', flexShrink: 0 }}>
								<FormControl fullWidth sx={{ flexShrink: 0, mb: 2, mr: { md: 2 } }}>
									<Typography variant='h6' gutterBottom sx={{ fontFamily: 'monospace' }}>
										Pilih Sampah
									</Typography>
									<Select labelId='garbage-type-label' id='garbage-type' value={garbageType} onChange={(e) => setGarbageType(e.target.value)} required>
										<MenuItem value='Organik'>Sampah Organik</MenuItem>
										<MenuItem value='Anorganik'>Sampah Anorganik</MenuItem>
										<MenuItem value='B3'>Sampah B3</MenuItem>
									</Select>
								</FormControl>
								<Typography variant='h6' gutterBottom sx={{ fontFamily: 'monospace' }}>
									Masukkan Berat (Kg)
								</Typography>
								<TextField label='Masukkan Berat (Kg)' type='number' value={garbageWeight} onChange={(e) => setGarbageWeight(e.target.value)} fullWidth required sx={{ color: '#1A1A1A', width: '100%', mt: 2 }} />
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'right',
									justifyContent: 'right',
									width: '418px',
									height: '329px',
									flexShrink: 0,
									borderRadius: '30px',
									bgcolor: '#8E8E8E45',
									p: 2,
									mt: 2,
								}}>
								<Typography
									variant='subtitle1'
									sx={{
										color: 'rgba(61, 61, 61, 0.87)',
										fontFamily: 'monospace',
										fontSize: '20px',
										fontStyle: 'normal',
										fontWeight: 500,
										lineHeight: 'normal',
										mb: 2,
									}}>
									Harga Sampah (per Kg)
								</Typography>
								<TextField type='number' value={garbagePrice} onChange={(e) => setGarbagePrice(e.target.value)} fullWidth required sx={{ color: '#1A1A1A', mb: 2 }} />
								<div sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
									<Typography
										variant='subtitle1'
										sx={{
											color: 'rgba(61, 61, 61, 0.87)',
											fontFamily: 'monospace',
											fontSize: '20px',
											fontStyle: 'normal',
											fontWeight: 500,
											lineHeight: 'normal',
										}}>
										Total Harga
									</Typography>
									<TextField type='number' value={totalPrice} disabled fullWidth sx={{ color: '#1A1A1A', mb: 2 }} />
									<Typography
										variant='subtitle1'
										sx={{
											color: 'rgba(61, 61, 61, 0.87)',
											fontSize: '20px',
											fontStyle: 'normal',
											fontFamily: 'monospace',
											fontWeight: 500,
											lineHeight: 'normal',
										}}>
										Date
									</Typography>
									<TextField label='' type='date' value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} fullWidth required sx={{ color: '#1A1A1A', width: '305.152px', flexShrink: 0 }} />
								</div>
							</Box>
						</Grid>
						<Grid item xs={12}>
							{loading && <CircularProgress sx={{ float: 'right', p: 4 }} />}
							{error && <Typography color='error'>{error}</Typography>}
							<Button type='submit' variant='contained' color='primary' sx={{ float: 'right', fontFamily: 'monospace', bgcolor: '#255804', color: '#ffffff', ml: 4 }} disabled={loading}>
								Kirim
							</Button>
							<Button variant='contained' color='secondary' onClick={handleCancel} sx={{ float: 'right', bgcolor: '#B70000', fontFamily: 'monospace', color: '#ffffff', ml: 1 }} disabled={loading}>
								Batal
							</Button>
						</Grid>
					</Grid>
				</form>
				<Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} message='Transaksi Berhasil!' />
			</CardContent>
		</Card>
	);
};

export default Transaction;
