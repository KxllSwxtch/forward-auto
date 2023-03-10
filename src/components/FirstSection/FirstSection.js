import styled from 'styled-components'
import './FirstSection.css'

const logoUrl =
	'https://res.cloudinary.com/dt0nkqowc/image/upload/v1674923224/Group_2-2_bma2np.png'
const shopOnlineButtonUrl =
	'https://res.cloudinary.com/dt0nkqowc/image/upload/v1674924390/Group_3_g9s6ho.png'

export default function FirstSection() {
	return (
		<Main className='first'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<img style={{ width: '75%' }} src={logoUrl} alt='logo' />
					</div>
					<div className='col-sm mt-4'>
						<ul class='nav nav-pills card-header-pills'>
							<li class='nav-item'>
								<Link class='nav-link' href='#aboutUs'>
									About Us
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' href='#contactUs'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='row'>
					<div className='col-sm'>
						<a href='/'>
							<Img src={shopOnlineButtonUrl} alt='' />
						</a>
					</div>
				</div>
			</div>
		</Main>
	)
}

const Main = styled.div`
	img {
		width: 35%;
		margin-left: 2%;
	}
`

const Img = styled.img`
	display: block;
	margin-top: 8%;
	margin-left: 67% !important;

	&:hover {
		transform: scale(1.02);
		transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	@media screen and (max-width: 576px) {
		margin-top: 10% !important;
		margin-left: 5% !important;
	}
`

const Link = styled.a`
	color: black;
	margin-right: 40px;
	text-decoration: none;

	&:hover {
		color: white;
	}
`
