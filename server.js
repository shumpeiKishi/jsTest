var connect = require('connect'),
	port = 8080;

connect()
	.use(connect.static(__dirname)) // serve static web files with mime-type
	.use(connect.directory(__dirname)) // list files/folders
	.listen(port);
console.log("Node.js web server on http://localhost:" + port);

// to kill the Node.js process use keyboard shortcut <Ctrl+C>
// to repeat the previous command use keyboard shortcut <up arrow>