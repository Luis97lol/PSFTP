# psftp-action

This action exposes the psftp command-line options to be executed from external file script. Very useful to automate SFTP deployments to any SFTP server.

## Inputs

## `host`

**Required** The hostname of the SFTP server.

## `user`

**Required** The session username to login.

## `pass`

**Required** The session password to login.

## Example usage

uses: Luis97lol/psftp-action@v1.1
with:
  host: 'hostname'
  user: 'username'
  pass: 'password'