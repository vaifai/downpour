import * as fs from 'fs';
import bencode from 'bencode'
const torrent = bencode.decode(fs.readFileSync('puppy.torrent'), 'utf-8');
console.log(torrent.announce.toString('utf8'));