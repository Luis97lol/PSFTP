const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require("child_process");

try {
    const host = core.getInput('host');
    const user = core.getInput('user');
    const pass = core.getInput('pass');
    const scriptPath = core.getInput('scriptPath');
    exec(`psftp "${host}" -l "${user}" -pw "${pass}" -b ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} catch (error) {
  core.setFailed(error.message);
}