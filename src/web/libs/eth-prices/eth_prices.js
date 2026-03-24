/* @ts-self-types="./eth_prices.d.ts" */

import * as wasm from "./eth_prices_bg.wasm";
import { __wbg_set_wasm } from "./eth_prices_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    Quoter, Route, createQuoter
} from "./eth_prices_bg.js";
