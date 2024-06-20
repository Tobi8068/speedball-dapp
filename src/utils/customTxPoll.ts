import { Keychain, ValidNetwork } from "@daohaus/keychain-utils";
import {
  ListTxsQueryVariables,
  findTransaction,
  listDaos,
} from "@daohaus/moloch-v3-data";
import { IListQueryResults } from "@daohaus/data-fetch-utils";
import { YEETER_GRAPH_URL, getValidChainId } from "./constants";
import { GraphQLClient } from "graphql-request";
import { GET_YEETS_BY_TX } from "./graphQueries";

type PollFetch = (...args: any) => Promise<any>;

export const pollLastTX: PollFetch = async ({
  chainId,
  txHash,
  graphApiKeys,
}: {
  chainId: ValidNetwork;
  txHash: string;
  graphApiKeys: Keychain;
}) => {
  
  console.log("polling txHash", txHash, chainId);
  
  try {
    const result = await findTransaction({
      networkId: chainId,
      txHash,
      graphApiKeys,
    });

    console.log("poll result", result);
    if (result?.data?.transaction) {
      const daoRes = await listDaos({
        networkId: chainId,
        filter: {
          sharesAddress: result.data.transaction.daoAddress,
        },
      });

      if (daoRes?.items[0]) {
        console.log("daoRes", daoRes);
        return daoRes;
      }
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

export const testLastTX = (
  daoRes: IListQueryResults<any, ListTxsQueryVariables> | undefined
) => {
  if (daoRes?.items[0]) {
    return true;
  }
  return false;
};

export const testYeet = (result: any | undefined) => {
  if (result?.yeets[0]) {
    console.log("yeet found", result.yeets[0]);
    return true;
  }
  return false;
};

export const pollYeet = async ({
  chainId,
  txHash,
}: {
  chainId: ValidNetwork;
  txHash: string;
}) => {
  const chain = getValidChainId(chainId);
  const graphQLClient = new GraphQLClient(YEETER_GRAPH_URL[chain]);
  const res = await graphQLClient.request(GET_YEETS_BY_TX, {
    txHash: txHash?.toLowerCase(),
  });
  console.log("pollYeet res", res);

  return res;
};
