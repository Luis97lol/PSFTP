# psftp-action

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

<mark>NO INSTALLATION NEEDED<mark>

I recomend add to the PATH variable to have globally access in the command-line.


## Inputs

### `host`

**Required**. The hostname of the SFTP server.

### `user`

**Required**. The session username to login.

### `pass`

**Required**. The session password to login.

### `scriptPath`

**Required**. The relative or absolute path to the script file that contains the psftp commands to be executed.

## Example usage

```yml
uses: Luis97lol/psftp-action@v1.1
with:
  host: 'hostname'
  user: 'username'
  pass: 'password'
```