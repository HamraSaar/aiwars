import React, { FC } from 'react'
import styled from 'styled-components'
import Debate from './components/Debate'

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: brown;
	width: 100%;
	height: 100vh;
	border: 1px solid #2d2d2d;
`

const App: FC = () => {
	return (
		<Container>
			<Debate />
		</Container>
	)
}

export default App
