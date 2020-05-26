let nodemailer = require('nodemailer');

module.exports = function (emailList) {
	let mailList = emailList.join(',');
	let mailOptions = {
		from: 'tareashomeschool@gmail.com',
		to: mailList,
		subject: 'A New task have been posted!',
		text: 'The content is available at www.homeschool.com',
	};

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'tareashomeschool@gmail.com',
			pass: 'h0m3sch00l',
		},
	});

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
