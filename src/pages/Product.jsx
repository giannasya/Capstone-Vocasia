import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import logorisekel from '../img/logorisekel.svg'

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const bull = (
	<Box
		component='span'
		sx={{
			display: 'inline-block',
			mx: '2px',
			my: '10px',
			transform: 'scale(0.8)',
		}}>
		•
	</Box>
);

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Product = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='judul'>
			<h1 style={{ margin: '10px' }}>Produk</h1>

			{/* Card satu */}

			<Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#FC8383' }}>
				<CardContent>
					<Typography sx={{ mb: 1.5 }} variant='h5' component='div' color='#860000'>
						Sampah B3
						<br />
					</Typography>
					<CardMedia component='img' alt='ada gambar' height='140' image={logorisekel}/>
				</CardContent>
				<div>
					<Stack direction='row' spacing={2} justifyContent='flex-end' alignItems='flex-end' mr={2}>
						<Button variant='contained' color='error' className='button' href='/transaction'>
							Jual <AddShoppingCartIcon />
						</Button>
					</Stack>
				</div>

				<CardActions disableSpacing>
					<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='' unmountOnExit>
					<CardContent>
						<Typography variant='body1'>
							Sampah B3 merujuk pada Bahan Berbahaya dan Beracun. Sampah B3 adalah jenis sampah yang mengandung bahan-bahan yang dapat menimbulkan bahaya terhadap kesehatan manusia dan lingkungan jika tidak dikelola dengan benar.
							Pengelolaan sampah B3 memerlukan perlakuan khusus untuk mencegah dampak negatifnya.
						</Typography>
						<Typography variant='h6' mt={2}>
							Berikut adalah beberapa contoh sampah B3:
						</Typography>
						<Typography variant='body1'>
							1. Limbah Kimia: Zat-zat kimia berbahaya seperti pestisida, herbisida, dan bahan kimia industri. Bahan kimia beracun seperti merkuri, arsenik, dan kadmium. <br />
							2. Limbah Medis: Sisa obat-obatan yang kadaluwarsa atau tidak terpakai. Alat-alat medis yang terkontaminasi, seperti jarum suntik dan perban. <br />
							3. Limbah Elektronik (E-Waste): Barang-barang elektronik yang mengandung bahan beracun, seperti merkuri dan timbal. Contohnya termasuk baterai, lampu neon, dan komponen elektronik lainnya.
							<br />
							4. Limbah Berminyak: Minyak bekas dari industri atau kendaraan bermotor. Limbah berminyak dari proses industri tertentu.
						</Typography>

						<Typography variant='body1' mt={2}>
							Penting untuk mencatat bahwa pemerintah biasanya memiliki peraturan ketat terkait pengelolaan sampah B3 untuk melindungi kesehatan masyarakat dan lingkungan. Perusahaan dan individu harus mematuhi regulasi ini agar pengelolaan
							sampah B3 dapat dilakukan secara aman dan bertanggung jawab.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>

			{/* card dua */}

			<Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#d5ff91', marginTop: '20px' }}>
				<CardContent>
					<Typography sx={{ mb: 1.5 }} variant='h5' component='div' color='#004d40'>
						Sampah Organik
						<br />
					</Typography>
					<CardMedia component='img' alt='ada gambar' height='140' image={logorisekel }/>
				</CardContent>
				<div>
					<Stack direction='row' spacing={2} justifyContent='flex-end' alignItems='flex-end' mr={2}>
						<Button variant='contained' color='success' className='button' href='/transaction'>
							Jual <AddShoppingCartIcon />
						</Button>
					</Stack>
				</div>

				<CardActions disableSpacing>
					<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography variant='body1'>
							Sampah organik adalah jenis sampah yang berasal dari sisa-sisa organisme hidup, seperti tumbuhan dan hewan, serta produk-produk yang dihasilkan dari bahan-bahan organik tersebut. Sampah organik meliputi berbagai macam material
							biologis yang dapat terurai secara alami melalui proses dekomposisi oleh mikroorganisme.
						</Typography>
						<Typography variant='h6' mt={2}>
							Berikut adalah beberapa contoh sampah Organik:
						</Typography>
						<Typography variant='body1'>
							1. Sumber Sampah Organik: Tumbuhan: Sisa-sisa sayuran, buah-buahan, daun, ranting, dan serbuk kayu. Hewan: Sisa-sisa makanan, tulang, kulit, dan bulu. Produk Organik: Sisa-sisa dapur, seperti sisa makanan, sisa kopi, sisa teh,
							dan kulit telur. <br />
							2. Proses Penguraian Alami: Sampah organik dapat terurai melalui proses alami yang disebut dekomposisi. Proses ini melibatkan mikroorganisme seperti bakteri, jamur, dan aktinomiset yang menguraikan bahan-bahan organik menjadi
							senyawa-senyawa sederhana. <br />
							3. Keuntungan Pengelolaan Sampah Organik: Pemulihan Nutrien: Proses dekomposisi menghasilkan humus, yang merupakan bahan organik yang kaya akan nutrien dan dapat memperbaiki struktur tanah. Pengurangan Sampah: Dengan mengelola
							sampah organik secara benar, dapat mengurangi jumlah sampah yang dibuang ke tempat pembuangan akhir.
							<br />
							4. Pengelolaan Sampah Organik: Komposting: Salah satu metode utama untuk mengelola sampah organik adalah dengan proses komposting. Komposting melibatkan penguraian sampah organik oleh mikroorganisme untuk menghasilkan humus
							yang dapat digunakan sebagai pupuk. Pengomposan Anaerobik: Proses pengomposan tanpa oksigen juga dapat digunakan untuk mengelola sampah organik.
							<br />
							5. Pentingnya Daur Ulang: Mengurangi Beban TPA (Tempat Pembuangan Akhir): Dengan mendaur ulang sampah organik, dapat mengurangi jumlah sampah yang dibuang ke tempat pembuangan akhir, yang seringkali penuh dan berkontribusi
							pada masalah lingkungan.
							<br />
						</Typography>

						<Typography variant='body1' mt={2}>
							Penting untuk diingat bahwa pengelolaan sampah organik merupakan bagian penting dari upaya global untuk mengurangi dampak negatif sampah terhadap lingkungan. Dengan cara yang tepat, sampah organik dapat menjadi sumber daya
							yang bernilai untuk keberlanjutan ekosistem dan pertanian.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>

			{/* card tiga */}

			<Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#E7E143', marginTop: '20px' }}>
				<CardContent>
					<Typography sx={{ mb: 1.5 }} variant='h5' component='div' color='#7E6A00'>
						Sampah Anorganik
						<br />
					</Typography>
					<CardMedia component='img' alt='ada gambar' height='140' image={logorisekel} />
				</CardContent>
				<div>
					<Stack direction='row' spacing={2} justifyContent='flex-end' alignItems='flex-end' mr={2}>
						<Button variant='contained' color='warning' className='button' href='/transaction'>
							Jual <AddShoppingCartIcon />
						</Button>
					</Stack>
				</div>

				<CardActions disableSpacing>
					<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography variant='body1'>
							Sampah anorganik adalah jenis sampah yang tidak berasal dari materi organik atau bahan-bahan yang berasal dari makhluk hidup. Sampah ini terutama terdiri dari bahan-bahan yang tidak mudah terurai oleh mikroorganisme dan
							cenderung bersifat tahan lama. Berbeda dengan sampah organik yang dapat terurai secara alami oleh proses pembusukan, sampah anorganik cenderung membutuhkan waktu yang lebih lama untuk terurai.
						</Typography>
						<Typography variant='h6' mt={2}>
							Berikut adalah beberapa contoh sampah anorganik:
						</Typography>
						<Typography variant='body1'>
							1. Plastik: Botol plastik, kemasan plastik, tas plastik, dan barang-barang plastik lainnya. <br />
							2. Kertas dan Karton: Kertas dan karton yang tidak terkontaminasi oleh bahan organik. <br />
							3. Logam: Kaleng, kemasan logam, dan barang-barang logam lainnya.
							<br />
							4. Kaca: Botol kaca, gelas kaca, dan barang-barang kaca lainnya.
							<br />
							5. Karet: Ban bekas, mainan karet, dan produk karet lainnya.
							<br />
							6. Elektronik: Barang-barang elektronik seperti komputer, ponsel, dan perangkat elektronik lainnya.
							<br />
							7. Bahan Kimia: Barang-barang berbahaya seperti baterai, lampu neon, dan limbah berbahan kimia.
							<br />
							8. Batuan dan Tanah: Material non-organik seperti batu, pasir, dan tanah.
						</Typography>

						<Typography variant='body1' mt={2}>
							Sampah anorganik seringkali sulit diurai dan dapat menimbulkan dampak lingkungan yang serius jika tidak dikelola dengan baik. Pemanfaatan kembali (recycling) dan pengelolaan sampah yang baik dapat membantu mengurangi dampak
							negatif sampah anorganik terhadap lingkungan. Dengan mendaur ulang dan menggunakan ulang barang-barang tersebut, kita dapat mengurangi jumlah sampah yang masuk ke tempat pembuangan akhir dan mengurangi tekanan terhadap sumber
							daya alam.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

export default Product;
