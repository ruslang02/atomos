var crypto = require('crypto');
var getPem = require('rsa-pem-from-mod-exp');

var GOOGLE_DEFAULT_PUBLIC_KEY = 'AAAAgMom/1a/v0lblO2Ubrt60J2gcuXSljGFQXgcyZWveWLEwo6prwgi3iJIZdodyhKZQrNWp5nKJ3srRXcUW+F1BD3baEVGcmEgqaLZUNBjm057pKRI16kB0YppeGx5qIQ5QjKzsR8ETQbKLNWgRY0QRNVz34kMJR3P/LgHax/6rmf5AAAAAwEAAQ==';

/*
 * Encrypt the username/password for use in `EncryptedPasswd`.
 * refs:
 * - https://github.com/yeriomin/play-store-api/blob/master/src/main/java/com/github/yeriomin/playstoreapi/PasswordEncrypter.java
 * - https://github.com/subtletech/google_play_store_password_encrypter/blob/master/google_play_store_password_encrypter.rb
 *
 *	We first convert the public key to RSA PEM format which is used
 *	throughout node's standard library.
 *
 *	The result is something like the below
 *	-----------------------------------------------------------------------------
 *	|00|4 bytes of sha1(publicKey)|rsaEncrypt(publicKeyPem, "login\x00password")|
 *	-----------------------------------------------------------------------------
 *	The result is then base64 URL-safe encoded and can be used as the
 *	`EncryptedPasswd`
 *	@param {String} login - Google username.
 *	@param {String} password - Google password.
 *	@return {String} `EncryptedPasswd` value.
 */
 

function base64EncodeUrlSafe(data) {
	return data.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

function decompose(_buf) {
	var buf = new Uint8Array(_buf);
	var i = _buf.readInt32BE();
	var mod = Buffer.from(buf.buffer, 4, i);
	var j = _buf.readInt32BE(i + 4);
	var exp = Buffer.from(buf.buffer, i + 8, j);
	return getPem(mod.toString('base64'), exp.toString('base64'));
}

module.exports = function(login, password) {
	var data = Buffer.from(login + '\u0000' + password);
	var publicKey = Buffer.from(GOOGLE_DEFAULT_PUBLIC_KEY, 'base64');
	var hash = crypto.createHash('sha1');
	var rsaPem = decompose(publicKey);

	var sha1 = hash.update(publicKey);
	var digest = sha1.digest();
	var signature = Buffer.concat([
		Buffer.from('\x00'),
		digest.slice(0, 4)
	]);

	var encrypted = crypto.publicEncrypt(rsaPem, data);

	var res = Buffer.concat([
		signature,
		encrypted
	]);

	return base64EncodeUrlSafe(res);
}