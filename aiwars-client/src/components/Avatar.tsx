import React, { FC } from 'react'
import styled from 'styled-components'

const MessageBubbleContainer = styled.div<{ position: AvatarPosition }>`
	width: 100%;
	height: auto;
	display: block;
	background: #f5f5f5;
	border-radius: 4px;
	box-shadow: 2px 8px 5px #000;
	position: relative;
	margin: 0 0 25px;
	${(props) => (props.position === 'Right' ? 'left: 100px' : 'right: 100px')};
`

const MessageBubbleText = styled.div`
	padding: 8px 55px 8px 14px;
`

const MessageBubbleTextName = styled.div`
	font-weight: 600;
	font-size: 12px;
	margin: 0 0 4px;
	color: #3498db;
	span {
		font-weight: normal;
		color: #b3b3b3;
	}
`

const MessageBubbleTextMessage = styled.div`
	font-size: 12px;
	margin: 0;
	color: #2b2b2b;
`

const MessageBubbleArrow = styled.div`
	position: absolute;
	width: 0;
	bottom: 42px;
	left: -16px;
	height: 0;
	:after {
		content: '';
		position: absolute;
		border: 0 solid transparent;
		border-top: 9px solid #f5f5f5;
		border-radius: 0 20px 0;
		width: 15px;
		height: 30px;
		transform: rotate(145deg);
	}
`

interface MessageBubbleProps {
	position: AvatarPosition
}

const MessageBubble: FC<MessageBubbleProps> = (props: MessageBubbleProps) => {
	return (
		<MessageBubbleContainer position={props.position}>
			<MessageBubbleText>
				<MessageBubbleTextName>Donald Duck</MessageBubbleTextName>
				<MessageBubbleTextMessage>
					This is some text ya hu
				</MessageBubbleTextMessage>
			</MessageBubbleText>
			<MessageBubbleArrow />
		</MessageBubbleContainer>
	)
}

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const AvatarHead = styled.img<{ position: AvatarPosition }>`
	width: 150px;
	height: 150px;
	background-color: transparent;
	transform: ${(props) =>
		props.position === 'Left' ? `rotate(-10deg)` : `rotate(10deg)`};
`

type AvatarPosition = 'Left' | 'Right'
interface AvatarProps {
	position: AvatarPosition
	img: string
}

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
	return (
		<AvatarContainer>
			<MessageBubble position={props.position} />
			<AvatarHead src={props.img} position={props.position} />
		</AvatarContainer>
	)
}

export default Avatar
