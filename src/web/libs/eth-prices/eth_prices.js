/* @ts-self-types="./eth_prices.d.ts" */

import wasm from "./eth_prices_bg.wasm";
import { __wbg_set_wasm, __wbindgen_init_externref_table } from "./eth_prices_bg.js";
__wbg_set_wasm(wasm);
__wbindgen_init_externref_table();
export {
    Quoter, Route, createQuoter
} from "./eth_prices_bg.js";
