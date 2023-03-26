import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import deskImg from '../assets/pokertablepng.png'
import angryAvatarImg from '../assets/angryavatar.png'
import dumbAvatarImg from '../assets/dumbavatar.png'
import Avatar from './Avatar'
import { DebateAvatar, DebateMessage } from '../types/debateTypes'

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

const avatars: DebateAvatar[] = [
	{
		name: 'trump',
		position: 'Left',
		image: angryAvatarImg,
	},
	{
		name: 'sinead',
		position: 'Right',
		image: dumbAvatarImg,
	},
]

const debateMessages: DebateMessage[] = [
	{
		avatar: avatars[0],
		text: `Yo, it's DJT, the greatest of all time\n
		I built a wall, and it was sublime\n
		I know you hate me, but you gotta admit\n
		I'm the most powerful man, I won't quit`,
	},
	{
		avatar: avatars[1],
		text: `Hold up, Donald, let me stop you right there\n
		I'm Sinead O'Connor, and I don't play fair\n
		Your wall was a failure, just like your reign\n
		I stand for love, and that's why I came`,
	},
	{
		avatar: avatars[0],
		text: `Love is great, but it won't pay the bills
		I've got the money, and the power, and the skills
		I've got a golf course, a tower, and a plane
		I'm living the dream, and you're just insane`,
	},
	{
		avatar: avatars[1],
		text: `Money can't buy happiness, that's a fact
		And your towers and planes won't bring it back
		I stand for peace, and justice, and truth
		And that's what I'll rap about in this booth`,
	},
	{
		avatar: avatars[0],
		text: `You may have a voice, but I've got a brand
		I've got the TV shows, and the hotels, and the land
		I'm living the life, and you're just a has-been
		My name is the one that will always win`,
	},
	{
		avatar: avatars[1],
		text: `Your name may be known, but it's not revered
		Your actions and words have caused so much fear
		I stand for the voiceless, and the oppressed
		And that's what I'll fight for, until I rest`,
	},
]

const Debate: FC = () => {
	const [messages, setMessages] = useState<DebateMessage[]>([])
	const [currentMessage, setCurrentMessage] = useState<DebateMessage | null>(
		null
	)
	const [currentSpeaker, setCurrentSpeaker] = useState<DebateAvatar | null>(
		null
	)

	useEffect(() => {
		setMessages(debateMessages)
		setCurrentMessage(debateMessages.length ? debateMessages[0] : null)
	}, [])

	const handleAnimationEnd = () => {
		const newMessages = messages.splice(1)
		if (newMessages.length > 0) {
			setMessages(newMessages)
			setCurrentMessage(newMessages[0])
			setCurrentSpeaker(newMessages[0].avatar)
		} else {
			setCurrentSpeaker(null)
			setCurrentMessage(null)
		}
	}

	return (
		<Container>
			<AvatarsContainer>
				{avatars.map((x) => (
					<Avatar
						avatar={x}
						animate={currentSpeaker?.name === x.name}
						text={currentSpeaker?.name === x.name ? currentMessage?.text : ''}
						onAnimationEnd={handleAnimationEnd}
					/>
				))}
			</AvatarsContainer>
			<DeskImage src={deskImg} />
			<button onClick={() => setCurrentSpeaker(messages[0].avatar)}>
				Fight!
			</button>
		</Container>
	)
}

export default Debate
