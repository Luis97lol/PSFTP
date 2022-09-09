# P-SFTP

This action exposes the psftp command-line options to be executed from external file script. Very useful to automate SFTP deployments to any SFTP server.

## Dependencies

This actions depends on the psftp client tool (a part of PUTTY's Toolkit). So it must be correctly installed or configured in runner.

### Linux

```bash
apt-get install putty-tools
```
Or equivalent for your distribution.  
More information at https://www.puttygen.com/download-putty

### Windows or MacOS

https://www.puttygen.com/download-putty

NO INSTALLATION NEEDED.

It would be recommended to add the containing folder to the PATH variable to have globally access in the command-line.


## Inputs

### `host`

**Required**. The hostname of the SFTP server.RECOMMENDED TO USE AN ENVIRONMENT VARIABLE

### `user`

**Required**. The session username to login. RECOMMENDED TO USE AN ENVIRONMENT VARIABLE

### `pass`

**Required**. The session password to login. RECOMMENDED TO USE AN ENVIRONMENT VARIABLE

### `scriptPath`

**Required**. The relative or absolute path to the script file that contains the psftp commands to be executed.

## Example usage

```yml
uses: Luis97lol/PSFTP@v1.4
with:
  host: ${{ secrets.SFTP_HOST }}
  user: ${{ secrets.SFTP_USER }}
  pass: ${{ secrets.SFTP_PASS }}
  hostkey: ${{ secrets.SFTP_HOSTKEY }}  # Optional
  scriptPath: deploy.sh
```
## Example Deploy Script Content (deploy.sh)

```bash
# Put in this file every SFTP actions you want to do. For example:
# Uploads the dist folder and rename it on the server
put -r dist coolAppName
```
