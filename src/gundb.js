import Gun from "gun";
import { DBFILE, GUNPEERS } from "./localconfigs";

Gun.log.squelch = true;

const gunPeers = [GUNPEERS];

const gun = Gun({
  file: DBFILE,
  peers: gunPeers
});

gun.on("out", { get: { "#": { "*": "" } } });

export default { Gun, gun };
