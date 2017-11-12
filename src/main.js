
import { loginUser } from "./users";

const newUUID = '11111111'
const firebaseUUID = '22222222'
const user = { usertokenID: newUUID, firebaseID: firebaseUUID }
loginUser(user);
