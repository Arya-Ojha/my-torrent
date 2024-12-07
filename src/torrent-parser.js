const fs = require("fs");
const bencode = require("bencode");
const crypto = require('crypto');
const bigInt = require("bigInt");

module.exports.open = (filepath) => {
    return bencode.decode(fs.readFileSync(filepath));
};

module.exports.size = (torrent) => {
    const size = torrent.info.files ?
        torrent.info.files.map(file => file.length).reduce((a, b) => a + b) :
        torrent.info.length;

    const buffer = Buffer.alloc(8);
    buffer.writeBigUInt64BE(size);

    return buffer;

};

module.exports.infoHash = (torrent) =>{
    const info = bencode.encode(torrent.info);
    return crypto.createHash('sha1').update(info).digest();
};