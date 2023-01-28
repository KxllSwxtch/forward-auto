import styled from 'styled-components'
import './SecondSection.css'

export default function SecondSection() {
	return (
		<div className='container-fluid second'>
			<DescriptionBlock className='rounded'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					voluptates voluptate illo officiis cumque suscipit rem distinctio.
					Perferendis quibusdam doloribus minus ullam iste vitae obcaecati,
					temporibus natus et maiores iure! A fugiat doloremque ad, consequatur
					ab magni quae quis deleniti illum iusto veniam veritatis reprehenderit
					aliquam delectus nesciunt cum aliquid. Quidem repudiandae, sapiente
					accusantium praesentium molestias rerum deserunt. Nulla,
					reprehenderit! Veritatis debitis, id repellat ipsam quo magni
					voluptatibus quasi illo ipsa, accusamus nulla quae possimus totam
					maiores laborum! Voluptate itaque accusamus quas corporis soluta
					minima odio eligendi sit fugiat iure. Consequatur nemo quia, rem
					repellat quis cumque eveniet eaque? Error, sit reiciendis! Nihil,
					alias vel, sint sunt earum ipsa explicabo consequatur repellat eum
					expedita consectetur. Quia eum sequi molestias corporis. Delectus
					consectetur est corrupti nulla, quis aperiam nihil fugiat sed quia
					laboriosam pariatur sit, reprehenderit dolores tempore quam animi
					voluptatibus accusantium doloribus voluptate esse nemo voluptates
					minus ratione. Alias, quo.
				</p>
			</DescriptionBlock>
			<div className='row'>
				<div className='col'>
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
`

const Form = styled.form`
	width: 600px;
	margin-top: 100px;
	margin-right: 50px;
	float: right;
	background: #d7ff27;
	padding: 40px;
`
