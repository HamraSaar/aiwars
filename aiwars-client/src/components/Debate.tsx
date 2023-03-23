import React, { FC } from 'react'
import styled from 'styled-components'
import deskImg from '../assets/pokertablepng.png'
import angryAvatarImg from '../assets/angryavatar.png'
import dumbAvatarImg from '../assets/dumbavatar.png'
import Avatar from './Avatar'

const Container = styled.div`
	display: flex;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const DeskImage = styled.img`
	width: 600px;
	height: 500px;
`

const AvatarsContainer = styled.div`
	display: flex;
	background-color: transparent;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 150px;
	position: relative;
	top: 200px;
`

const Debate: FC = () => {
	return (
		<Container>
			<AvatarsContainer>
				<Avatar position="Left" img={angryAvatarImg} />
				<Avatar position="Right" img={dumbAvatarImg} />
			</AvatarsContainer>
			<DeskImage src={deskImg} />
		</Container>
	)
}

export default Debate
