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
    function onWholeMsg(socket, callback) {
        let savedBuf = Buffer.alloc(0);
        let handshake = true;

        socket.on('data', recvBuf => {
            const msgLen = () => handshake ? savedBuf.readUInt8(0) + 49 : savedBuf.readInt32BE(0) + 4;
            savedBuf = Buffer.concat([savedBuf, recvBuf]);

            while (savedBuf.length >= 4 && savedBuf.length >= msgLen()) {
                callback(savedBuf.slice(0, msgLen()));
                savedBuf = savedBuf.slice(msgLen());
                handshake = false;
            }
        });
    }
}
