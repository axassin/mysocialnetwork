import createServer from './createServer'
import { port } from './configs/development'
const PORT = 8080

createServer({ port : PORT}).then(()=> {
	console.info('App server started on port ', PORT)
}, err => {
	console.error('Ohh Yeah Could not start')
	console.log(err)
})