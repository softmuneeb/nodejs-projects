import { getTokenIdsInStaking, getTokenIdsInStakingOfThisAddress } from './multicall.js';

// const holders = await getTokenIdsInStaking(); // 2 sec to 5 sec delay in result

// console.log(JSON.stringify(holders, null, 4).replaceAll('"', "").replaceAll("[", "").replaceAll("]", "").replaceAll("\n", "").replaceAll("   ", ""));
// console.log(JSON.stringify(holders, null, 4));

getTokenIdsInStakingOfThisAddress();