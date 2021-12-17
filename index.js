const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require("child_process");

try {
    // `who-to-greet` input defined in action metadata file
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
    // Get the JSON webhook payload for the event that triggered the workflow
    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}