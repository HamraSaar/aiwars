import React, { FC, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import TypeWriterEffect from 'react-typewriter-effect'
import { AvatarPosition, DebateAvatar } from '../types/debateTypes'

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
	max-width: 250px;
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

interface AvatarProps {
	avatar: DebateAvatar
	text?: string
	animate?: boolean
	onAnimationEnd?: () => void
}

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
	const ssu = useMemo(() => new SpeechSynthesisUtterance(), [])

	ssu.onend = (event) => {
		console.log('onend', { event })
		props.onAnimationEnd && props.onAnimationEnd()
	}

	useEffect(() => {
		console.log('Avatar useEffect', { ...props })
		if (props.animate && props.text) {
			ssu.text = props.text
			window.speechSynthesis.speak(ssu)
		}
	}, [props, ssu])

	return (
		<AvatarContainer>
			<MessageBubbleContainer position={props.avatar.position}>
				<MessageBubbleText>
					<MessageBubbleTextName>{props.avatar.name}</MessageBubbleTextName>
					<MessageBubbleTextMessage>
						{props.animate && props.text && (
							<TypeWriterEffect
								// textStyle={{ fontFamily: 'Red Hat Display' }}
								startDelay={100}
								cursorColor="black"
								text={props.text}
								typeSpeed={50}
								eraseSpeed={100}
							/>
						)}
					</MessageBubbleTextMessage>
				</MessageBubbleText>
				<MessageBubbleArrow />
			</MessageBubbleContainer>
			<AvatarHead src={props.avatar.image} position={props.avatar.position} />
		</AvatarContainer>
	)
}

export default Avatar
