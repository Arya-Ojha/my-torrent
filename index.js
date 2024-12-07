"use strict";

const fs = require("fs");
const bencode = require('bencode');
const tracker = require('./src/tracker');
const torrentParser = require('./src/torrent-parser');
const download = require('./src/download')

// const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));
// tracker.getPeers(torrent, peers => {
//     console.log('list of peers: ', peers);
// });

// function parseConnResp(resp) {
//     return {
//         action: resp.readUInt32BE(0),
//         transactionId: resp.readUInt32BE(4),
//         connectionId: resp.slice(8)
//     }
// }

const torrent = torrentParser.open("process.argv[2]");

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
});

download(torrent);