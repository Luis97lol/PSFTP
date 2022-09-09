const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require("child_process");

try {
    const host = core.getInput('host', { required: true });
    const user = core.getInput('user', { required: true });
    const pass = core.getInput('pass', { required: true });
    const scriptPath = core.getInput('scriptPath', { required: true });
    const hk = core.getInput('hostkey');
    let cmd = `psftp "${host}" -batch -bc -l "${user}" -pw "${pass}" -b ${scriptPath}`
    if (hk) cmd += ` -hostkey ${hk}`
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            core.setFailed(error.message);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            core.setFailed(stderr);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} catch (error) {
  core.setFailed(error.message);
}
