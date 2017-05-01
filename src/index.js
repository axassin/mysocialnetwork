import createServer from './createServer'
import config from './configs/development'


createServer(config).then(()=> {
	
	console.info('App server started on port ', config.port)
}, err => {
	console.error('Ohh Yeah Could not start')
	console.log(err)
})