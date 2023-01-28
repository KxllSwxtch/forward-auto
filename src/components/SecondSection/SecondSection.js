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
