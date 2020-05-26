let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (emailList) {
	// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	let mailList = emailList.join(',');

	let mailOptions = {
		from: 'tareashomeschool@gmail.com',
		to: mailList,
		subject: 'A New task have been posted!',
		text: 'The content is available at www.homeschool.com',
	};

	// let transporter = nodemailer.createTransport({
	//     service: 'gmail',
	//     auth: {
	//         user: 'tareashomeschool@gmail.com',
	//         pass: 'h0m3sch00l',
	//     },
	// });

	var transporter = nodemailer.createTransport(
		smtpTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: 'tareashomeschool@gmail.com',
				pass: 'h0m3sch00l',
			},
			tls: {
				rejectUnauthorized: false,
			},
		})
	);

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
