//import uuid from "uuid-js";
//import queue from "shuffled-priority-queue";
//import Promise from "bluebird";
//import md5 from "blueimp-md5";
//import serialize from "serialize-javascript";
//
//import base64 from 'base64-js'
import lzwCompress from "./lzwCompress";
export const encrypt = message => JSON.stringify(lzwCompress.pack(message));
export const decrypt = message => lzwCompress.unpack(JSON.parse(message));
