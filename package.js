Package.describe({
	summary: "Upload files to S3. Allows use of Knox Server-Side. Modified to remove client rendering for blaze compatibility"
});

Npm.depends({
	knox: "0.8.5"
});

Package.on_use(function (api) {
	//Need service-configuration to use Meteor.method
	api.use(["underscore", "ejson","service-configuration"], ["client", "server"]);
	api.add_files("s3server.js", "server");

	//Allows user access to Knox
	api.export && api.export("Knox","server");
});
