import { KeychainList } from "@daohaus/keychain-utils";

export const YEET24_REFERRER = "DHYeet24ShamanSummoner.3"; 

export const CURATOR_CONTRACTS: KeychainList = {


  YEET24_SUMMONER: {
    "0xaa36a7": "0x0186367008471e62c3f6fd26988dec92361398ea", // "0xc5ec2eabfd8d1a1e38896ad2ec1d452f66dac761", // "0x70132cd79f90306bc68c1930f4364452a17aa552" // "0x4bb5d274dea3542bb836cba64bd7eed63233cb58"

  },
  YEETER_SINGLETON: {
    "0xaa36a7": "0x62ff4ca410e9e58f5ce8b2ad03695ef0ad990381"
  },
  YEET24_SINGLETON: {
    "0xaa36a7": "0xc099d3f30d5ad51497b72d17e1b75f7d8e921410", // "0xbdf2bd70d5dc78dce008b337d889b50c217c6eb7"
  },
  FIXED_LOOT_SINGLETON: {
    // "0x1": "0x9d42696a9c3c54952b8918dcbcb82dd710347c77",
    // "0x5": "0x9d42696a9c3c54952b8918dcbcb82dd710347c77",
    // "0xa": "0x8dd2ca9f0ae4f464bf5a0c2283fc5c84f16f2f8e",
  },
  GOV_LOOT_SINGLETON: {
    // "0x1": "0xbdf2bd70d5dc78dce008b337d889b50c217c6eb7",
    // "0x5": "0xbdf2bd70d5dc78dce008b337d889b50c217c6eb7",
    // "0xa": "0x1597e36560a4935e8ba40520d2f3037fd111054c",
    "0xaa36a7": "0x8a4a9e36106ee290811b89e06e2fafe913507965"
  },

  GNOSIS_SAFE_PROXY_FACTORY: {
    // "0x1": "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
    // "0x5": "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
    // "0xa": "0xc22834581ebc8527d974f8a1c97e1bea4ef910bc",
    "0xaa36a7": "0xc22834581ebc8527d974f8a1c97e1bea4ef910bc",
  },
  GNOSIS_SAFE_MASTER_COPY: {
    // "0x1": "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    // "0x5": "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    // "0xa": "0xfb1bffc9d739b8d520daf37df666da4c687191ea", // "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
    "0xaa36a7": "0x69f4d1788e39c87893c980c06edf4b7f686e2938",
  },

};

/// https://docs.tokenbound.org/contracts/deployments

export const SPONSOR_THRESHOLD = "1000000000000000000";
export const YEETER_SHAMAN_PERMISSIONS = "2";
export const MEME_SHAMAN_PERMISSIONS = "3";
export const SHARE_NAME = "";
export const SHARE_SYMBOL = "";
export const LOOT_NAME = "Community Power";
export const LOOT_SYMBOL = "LOOT";
export const DEFAULT_SUMMON_VALUES = {
    //votingPeriodInSeconds: 259200,
  votingPeriodInSeconds: 200,
    // gracePeriodInSeconds: 172800,
  gracePeriodInSeconds: 6,
  newOffering: "10000000000000000",
  //   quorum: "20",
  quorum: "20",
  sponsorThreshold: SPONSOR_THRESHOLD,
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: true,
};

export const ADMIN_URL = "";


export const DEFAULT_YEETER_VALUES = {
  isShares: true,
  feeRecipients: ["0xd0f8720846890a7961945261fe5012e4ca39918e", "0x4a9a27d614a74ee5524909ca27bdbcbb7ed3b315"], // yeeter team, daohaus eco fund
  feeAmounts: ["5000", "5000"], // .5% fees
  lootPerYeet: "100",
  multiplier: "100",
};