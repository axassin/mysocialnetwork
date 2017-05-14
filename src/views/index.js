const html = `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>My Social Network</title>
		<base href="/">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="./style/style.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvGXDcF3GnvvsnD4h-27dsLdUDLQqCpFc"></script>
	</head>
	<body>
		<div id="app"></div>
	</body>
	<script src="/bundle.js"></script>
</html>`

export default function() {
	return html
}
