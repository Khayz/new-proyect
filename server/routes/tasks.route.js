const router = require('express').Router();

router.post('/upload', function (req, res) {
	console.log(req.body);
	if (req.body.file) {
		var file = req.body.file,
			name = file.name,
			type = file.mimetype;
		var uploadpath = __dirname + '/uploads/' + name;
		file.mv(uploadpath, function (err) {
			if (err) {
				console.log('File Upload Failed', name, err);
				res.send('Error Occured!');
			} else {
				console.log('File Uploaded', name);
				res.send('Done! Uploading files');
			}
		});
	} else {
		res.send('No File selected !');
		res.end();
	}
});

module.exports = router;
