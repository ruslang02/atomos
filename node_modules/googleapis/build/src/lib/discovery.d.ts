import { GeneratedAPIs } from '../apis/index';
import { APIRequestMethodParams } from './api';
import { Endpoint } from './endpoint';
export declare type EndpointCreator = (options: {}) => Endpoint;
export interface DiscoveryOptions {
    includePrivate?: boolean;
    debug?: boolean;
}
export declare class Discovery {
    private transporter;
    private options;
    /**
     * Discovery for discovering API endpoints
     *
     * @param options Options for discovery
     */
    constructor(options: DiscoveryOptions);
    /**
     * Generate and Endpoint from an endpoint schema object.
     *
     * @param schema The schema from which to generate the Endpoint.
     * @return A function that creates an endpoint.
     */
    private makeEndpoint(schema);
    /**
     * Log output of generator. Works just like console.log
     */
    private log(...args);
    /**
     * Generate all APIs and return as in-memory object.
     * @param discoveryUrl
     */
    discoverAllAPIs(discoveryUrl: string): Promise<GeneratedAPIs>;
    /**
     * Generate API file given discovery URL
     *
     * @param apiDiscoveryUrl URL or filename of discovery doc for API
     * @returns A promise that resolves with a function that creates the endpoint
     */
    discoverAPI(apiDiscoveryUrl: string | APIRequestMethodParams): Promise<EndpointCreator>;
}
