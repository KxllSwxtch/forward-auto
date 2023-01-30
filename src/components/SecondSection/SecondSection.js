import styled from 'styled-components'
import './SecondSection.css'

export default function SecondSection() {
	return (
		<div className='container-fluid second'>
			<DescriptionBlock className='rounded'>
				<a id='aboutUs'></a>
				DESCRIPTION WILL BE HERE
			</DescriptionBlock>
			<div className='row'>
				<div className='col'>
					<a id='contactUs'></a>
					<Form className='rounded'>
						<h1>Contact Us</h1>
						<div class='mb-4'>
							<label for='nameInput' class='form-label'>
								Name
							</label>
							<input
								type='text'
								class='form-control'
								id='nameInput'
								aria-describedby='nameHelp'
								required
							/>
						</div>
						<div class='mb-4'>
							<label for='phoneInput' class='form-label'>
								Phone Number
							</label>
							<input
								type='tel'
								class='form-control'
								id='phoneInput'
								aria-describedby='phoneInput'
								pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
								required
							/>
							<small>Format: 111-222-3333</small>
						</div>
						<div class='mb-4'>
							<label for='vehicleYearInput' class='form-label'>
								Vehicle Year
							</label>
							<input
								type='number'
								class='form-control'
								id='vehicleYearInput'
								min={1}
								required
							/>
						</div>
						<div class='mb-4'>
							<label for='carModelInput' class='form-label'>
								Car Model
							</label>
							<input
								type='text'
								class='form-control'
								id='carModelInput'
								required
							/>
						</div>
						<div class='mb-4'>
							<label for='carModelInput' class='form-label'>
								Your Question
							</label>
							<textarea
								type='text'
								class='form-control'
								id='carModelInput'
								required
							></textarea>
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}

const DescriptionBlock = styled.div`
	background-color: #ffffff;
	width: 600px;
	padding: 23px;
	float: right;
	margin-right: 50px;
	margin-top: -250px;

	@media screen and (max-width: 576px) {
		margin: 0;
		margin-top: -150px;
		width: auto;
		padding: 0;
	}
`

const Form = styled.form`
	width: 600px;
	margin-top: 100px;
	margin-right: 50px;
	float: right;
	background: #d7ff27;
	padding: 40px;

	@media screen and (max-width: 576px) {
		width: auto;
		margin: 0;
		margin-top: 100px;
		float: left;
	}
`
