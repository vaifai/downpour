import * as dgram from 'dgram';
import * as buffer from 'buffer';
import * as url from 'url';

const Buffer = buffer.Buffer;
const urlParse = url.parse;
const getPeers = (encodedTorrent, decodedTorrent, callback) => {
    const socket = dgram.createSocket('udp4');
    const filteredUrl = decodedTorrent.announce.toString('utf8');
    console.log(filteredUrl);
    // 1. send connect request
    // udpSend(socket, buildConnReq(), filteredUrl);
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
    const url = urlParse(rawUrl);
    socket.send(message, 0, message.length, url.port, url.host, callback);
}

function respType(resp) {
    // ...
}

function buildConnReq() {
    // ...
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