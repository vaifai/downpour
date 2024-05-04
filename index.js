import * as fs from 'fs';
import bencode from 'bencode';
import getPeers from './tracker.js';

const decodedTorrent = bencode.decode(fs.readFileSync('puppy.torrent'), 'utf-8');
const encodedTorrent = bencode.decode(fs.readFileSync('puppy.torrent'));
getPeers(encodedTorrent, decodedTorrent, peers => {
    console.log('list of peers: ', peers);
})