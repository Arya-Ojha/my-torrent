'use strict';

const net = require ('net');
const Buffer = require ('buffer');
const tracker = require ('./tracker');

module.exports = torrent => {
    tracker.getPeers(torrent, peers => {
        peers.foreach(download);
    });
};

function download(peers) {
    const socket = net.Socket();
    socket.on('error', console.log);
    socket.connect(peer.port, peer.ip, () => {

    });
    socket.on('data', data => {

    });
}