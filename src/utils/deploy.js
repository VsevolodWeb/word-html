const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
	user: "p33447",
	password: "Y7vi3D7zR5",
	host: "p33447.ftp.ihc.ru",
	include: ["*", "**/*"],
	localRoot: "build/",
	remoteRoot: "www/word-html.com/",
	forcePasv: true
};

ftpDeploy.deploy(config);