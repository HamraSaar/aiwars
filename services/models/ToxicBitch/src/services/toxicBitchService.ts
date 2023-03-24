import * as tf from '@tensorflow/tfjs-node'
import * as use from '@tensorflow-models/universal-sentence-encoder'

class ToxicBitchService {
	constructor() {}

	async run() {
		// Define the training data
		const trainingData = [
			{ input: 'This is a positive sentence.', output: 1 },
			{ input: 'This is a negative sentence.', output: 0 },
			{ input: 'I love this product!', output: 1 },
			{ input: 'I hate this product!', output: 0 },
		]

		// Convert the training data to tensors
		const inputs = trainingData.map((example) => example.input)
		const outputs = trainingData.map((example) => example.output)
		const inputTensor = tf.tensor2d(
			await Promise.all(
				inputs.map(async (input) => {
					const encoder = await use.load()
					const embeddings = await encoder.embed([input])
					return embeddings.arraySync()[0]
				})
			),
			[trainingData.length, 512]
		)
		const outputTensor = tf.tensor2d(outputs, [trainingData.length, 1])

		// Define the model architecture
		const model = tf.sequential()
		model.add(tf.layers.dense({ inputShape: [512], units: 64 }))
		model.add(tf.layers.dropout({ rate: 0.5 }))
		model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }))

		// Compile the model
		model.compile({
			optimizer: tf.train.adam(),
			loss: 'binaryCrossentropy',
			metrics: ['accuracy'],
		})

		// Train the model
		await model.fit(inputTensor, outputTensor, {
			epochs: 10,
			batchSize: 2,
		})

		// Test the model
		const testInputs = [
			'This is a positive test sentence.',
			'This is a negative test sentence.',
			'This product is lame.',
			'I love ding dongs',
			'I hate this product!',
		]
		const testInputTensor = tf.tensor2d(
			await Promise.all(
				testInputs.map(async (input) => {
					const encoder = await use.load()
					const embeddings = await encoder.embed([input])
					return embeddings.arraySync()[0]
				})
			),
			[testInputs.length, 512]
		)
		const predictions = model.predict(testInputTensor).toString()
		console.log({ predictions })
	}
}

export default ToxicBitchService
