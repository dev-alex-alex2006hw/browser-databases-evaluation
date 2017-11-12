const uuidv1 = require("uuid/v1");
import { encrypt, decrypt } from "./commandControl";
import level from 'level-hyper'
import mongoMock from './mongomock'

const startTime = new Date();
const APIKEY = 'usertokenAPI'
const newChannel = uuidv1()

const UT = level('./usertoken.db')
// const UT = level('./backup.db')
UT.on('ready', function () {
  var name = String(Date.now())
  UT.db.liveBackup(name, function (err) {
    if (!err) console.log('backup to %s was successful', name)
  })
})

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

// UT.get(`${APIKEY}/usertokenUsers`).put(usertokenUsers);
// UT.get(`${APIKEY}/usertokens`).put(usertokens);
// UT.get(`${APIKEY}/accountSignatures`).put(accountSignatures);
// UT.get(`${APIKEY}/signatures`).put(signatures);
// UT.get(`${APIKEY}/channels`).put(channels);
// UT.get(`${APIKEY}/publicKeys`).put(publicKeys);
// UT.get(`${APIKEY}/privateKeys`).put(privateKeys);
// UT.get(`${APIKEY}/firebaseIDs`).put(firebaseIDs);

// UT.put(`${APIKEY}/usertokenUsers`, encrypt(usertokenUsers), (err) => { if(err) console.log('UT put error : ',err) })

const loginUser = payload => {
  // let newPayload = { usertokenID: payload.usertokenID, firebaseID: payload.firebaseID };
  console.log("1.graphql users input payload: ", payload);
  UT.get(`${APIKEY}/usertokenUsers`, (err,result) => {
    const data = decrypt(result)
    if(err) console.log('UT get error : ', err)
    const vals = Object.keys(data).map(key => data[key]);
    console.log(`1.UT get ${APIKEY}/usertokenUsers : `,vals)
    console.log(`2.UT get ${APIKEY}/usertokenUsers : `,data)
    for (const key of Object.keys(data)) {
      const val = data[key];
      console.log('3. val : ', val, ' key : ', key)
    }
  })
};

////////////////////////
export { loginUser }
//module.exports = loginUser;
