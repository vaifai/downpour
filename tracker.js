import * as dgram from 'dgram';
import * as buffer from 'buffer';
import * as url from 'url';
import * as crypto from 'crypto';

const Buffer = buffer.Buffer;
const urlParse = url.parse;
const getPeers = (encodedTorrent, decodedTorrent, callback) => {
    const socket = dgram.createSocket('udp4');
    const filteredUrl = decodedTorrent.announce.toString('utf8');
    console.log(filteredUrl);

    udpSend(socket, buildConnReq(), filteredUrl);
    //
    // socket.on('message', response => {
    //     if (respType(response) === 'connect') {
    //         // 2. receive and parse connect response
    //         const connResp = parseConnResp(response);
    //         // 3. send announce request
    //         const announceReq = buildAnnounceReq(connResp.connectionId);
    //         udpSend(socket, announceReq, url);
    //     } else if (respType(response) === 'announce') {
    //         // 4. parse announce response
    //         const announceResp = parseAnnounceResp(response);
    //         // 5. pass peers to callback
    //         callback(announceResp.peers);
    //     }
    // });
};

function udpSend(socket, message, rawUrl, callback=()=>{}) {
    const parsedUrl = urlParse(rawUrl);
    console.log(parsedUrl);
    socket.send(message, 0, message.length, parsedUrl.port, parsedUrl.host, callback);
}

function respType(resp) {
    // ...
}

function buildConnReq() {
    const buf = Buffer.alloc(16); // 2

    // connection id
    buf.writeUInt32BE(0x417, 0); // 3
    buf.writeUInt32BE(0x27101980, 4);
    // action
    buf.writeUInt32BE(0, 8); // 4
    // transaction id
    crypto.randomBytes(4).copy(buf, 12); // 5

    return buf;
}

function parseConnResp(resp) {
    // ...
}

function buildAnnounceReq(connId) {
    // ...
}

function parseAnnounceResp(resp) {
    // ...
}

export default getPeers;