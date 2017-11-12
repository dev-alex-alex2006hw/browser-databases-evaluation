const uuidv1 = require("uuid/v1");
import { encrypt, decrypt } from "./commandControl";
import GunDB from './gundb'
const { gun } = GunDB;

const startTime = new Date();

const APIKEY = "usertoken-APIKEY01";
const UT = gun;
const newChannel = uuidv1()

// const payload = encrypt({
//   uid: user.uid,
//   phoneNumber: user.phoneNumber,
// });

// data schema
//
var usertokenUsers = [
  {
    usertokenID: "11111111",
    firebaseID: "22222222",
    publickeyID: "kkkk1",
    privatekeyID: "kkkk2"
  }
];
var usertokens = [
  {
    usertokenID: "11111111",
    accessCode: "AAAAAAAA",
    channelID: ["33333333"],
    accountSignatureID: "44444444"
  }
];
var accountSignatures = [
  { accountSignatureID: "44444444", signatureID: ["55555555", "66666666"] }
];
var signatures = [
  {
    signatureID: "55555555",
    type: "sms",
    phoneNumber: "12223334444",
    createDate: new Date().toISOString()
  },
  {
    signatureID: "66666666",
    type: "email",
    emailAddress: "user01@usertoken.com",
    createDate: new Date().toISOString()
  }
];
var channels = [
  {
    channelID: "33333333",
    channel: newChannel,
    accessCode: "AAAAAAAA",
    createDate: new Date().toISOString()
  }
];
var publicKeys = [
  {
    publickeyID: "kkkk1",
    key: "XXXXXXXX",
    createDate: new Date().toISOString()
  }
];
var privateKeys = [
  {
    privatekeyID: "kkkk2",
    key: "YYYYYYYY",
    createDate: new Date().toISOString()
  }
];
var firebaseIDs = [
  {
    firebaseID: "22222222",
    firebaseUID: "XWXmu2jD8COvV1aoC9vu6m4BMaI3",
    createDate: new Date().toISOString()
  }
];

UT.get(`${APIKEY}/usertokenUsers`).put(usertokenUsers);
UT.get(`${APIKEY}/usertokens`).put(usertokens);
UT.get(`${APIKEY}/accountSignatures`).put(accountSignatures);
UT.get(`${APIKEY}/signatures`).put(signatures);
UT.get(`${APIKEY}/channels`).put(channels);
UT.get(`${APIKEY}/publicKeys`).put(publicKeys);
UT.get(`${APIKEY}/privateKeys`).put(privateKeys);
UT.get(`${APIKEY}/firebaseIDs`).put(firebaseIDs);

const loginUser = payload => {
  let newPayload = { usertokenID: payload.usertokenID, firebaseID: payload.firebaseID };
  console.log("1.graphql users payload: ", payload);
  UT.get(`${APIKEY}/usertokenUsers`).get('usertokenID').val((data,key) => {
    console.log(`1.UT get ${key} : `,data)
  })
};

////////////////////////
export { loginUser }
//module.exports = loginUser;
