// import React, { useState, useEffect, useRef } from 'react'
// import { Canvas } from 'react-three-fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { useSpeechSynthesis } from 'react-speech-kit'

// const TextToSpeech = () => {
// 	const [texts, setTexts] = useState<string[]>([])
// 	const [currentText, setCurrentText] = useState<string>('')
// 	const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
// 	const audioRef = useRef<HTMLAudioElement | null>(null)
// 	const [avatarModel, setAvatarModel] = useState<any>(null)
// 	const { speak, cancel } = useSpeechSynthesis()

// 	useEffect(() => {
// 		const loader = new GLTFLoader()
// 		loader.load('/models/avatar.glb', (gltf) => {
// 			setAvatarModel(gltf.scene)
// 		})
// 	}, [])

// 	useEffect(() => {
// 		if (texts.length && !isSpeaking) {
// 			setIsSpeaking(true)
// 			setCurrentText(texts[0])
// 			speak({ text: texts[0] })
// 			setTexts(texts.slice(1))
// 		}
// 	}, [texts, isSpeaking])

// 	const handleAddText = (text: string) => {
// 		setTexts([...texts, text])
// 	}

// 	const handleAvatarAnimationStart = () => {
// 		setIsSpeaking(true)
// 	}

// 	const handleAvatarAnimationEnd = () => {
// 		setIsSpeaking(false)
// 	}

// 	const handleAvatarClick = () => {
// 		if (isSpeaking) {
// 			cancel()
// 			setIsSpeaking(false)
// 		} else {
// 			speak({ text: currentText })
// 			setIsSpeaking(true)
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1>Text to Speech</h1>
// 			<Canvas>
// 				<ambientLight intensity={0.5} />
// 				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// 				{avatarModel && (
// 					<primitive
// 						object={avatarModel}
// 						position={[0, -1, 0]}
// 						scale={[0.05, 0.05, 0.05]}
// 						onClick={handleAvatarClick}
// 						onAnimationStart={handleAvatarAnimationStart}
// 						onAnimationEnd={handleAvatarAnimationEnd}
// 					/>
// 				)}
// 			</Canvas>
// 			<h2>Currently speaking: {currentText}</h2>
// 			<button onClick={() => handleAddText('Hello world!')}>
// 				Add "Hello world!"
// 			</button>
// 			<audio ref={audioRef} />
// 		</div>
// 	)
// }

// export default TextToSpeech
