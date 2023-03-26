export type AvatarPosition = 'Left' | 'Right'

export interface DebateAvatar {
	name: string
	position: AvatarPosition
	image: string
}

export interface DebateMessage {
	avatar: DebateAvatar
	text: string
}
