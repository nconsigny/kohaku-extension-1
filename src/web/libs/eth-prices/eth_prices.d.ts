/* tslint:disable */
/* eslint-disable */

export interface FixedQuoterConfig {
    token_in: string;
    token_out: string;
    fixed_rate: number;
}

export type UniswapV2Selector =
| { pair_address: string }
| { token_in: string; token_out: string };

export type UniswapV3Selector =
| { pool_address: string }
| { token_in: string; token_out: string; fee?: number };

export interface QuotersConfig {
    fixed?: FixedQuoterConfig[];
    uniswap_v2?: UniswapV2Selector[];
    uniswap_v3?: UniswapV3Selector[];
    erc4626?: string[];
}

export interface CreateQuoterConfig {
    rpcUrl: string;
    quoters?: QuotersConfig;
}

export interface QuoteRequest {
    inputToken: string;
    outputToken: string;
    amountIn: string;
    block?: bigint;
}

export interface RouteStepView {
    quoterId: string;
    direction: "Forward" | "Reverse";
}

export interface RouteView {
    inputToken: string;
    outputToken: string;
    path: RouteStepView[];
}



export class Quoter {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    addErc4626Quoter(vault_address: string): Promise<void>;
    addFixedQuoter(config: FixedQuoterConfig): void;
    addUniswapV2Quoter(selector: UniswapV2Selector): Promise<void>;
    addUniswapV3Quoter(selector: UniswapV3Selector): Promise<void>;
    computeRoute(input_token: string, output_token: string): Route;
    getLatestBlock(): Promise<bigint>;
    getRate(input_token: string, output_token: string, amount_in: string, block?: bigint | null): Promise<string>;
    listQuoters(): string[];
    quote(request: QuoteRequest): Promise<string>;
    quoteRoute(route: Route, amount_in: string, block?: bigint | null): Promise<string>;
}

export class Route {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    inputToken(): string;
    outputToken(): string;
    toJSON(): RouteView;
}

export function createQuoter(config: CreateQuoterConfig): Promise<Quoter>;
