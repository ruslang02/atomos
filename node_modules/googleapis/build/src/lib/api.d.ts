/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
import { OutgoingHttpHeaders } from 'http';
import * as stream from 'stream';
import { Endpoint } from './endpoint';
import { SchemaParameters } from './schema';
export interface APIRequestParams {
    options: AxiosRequestConfig;
    params: APIRequestMethodParams;
    requiredParams: string[];
    pathParams: string[];
    context: APIRequestContext;
    mediaUrl?: string | null;
}
export interface APIRequestContext {
    google: {
        _options: APIRequestContextOptions;
    };
    _options: APIRequestContextOptions;
}
export interface APIRequestContextOptions {
    params?: SchemaParameters;
    auth?: OAuth2Client | string | null;
}
export interface APIRequestMethodParams {
    [index: string]: any;
    url?: string;
    media?: {
        body?: string | stream.Readable;
        mimeType?: string;
    };
    resource?: {
        mimeType?: string;
    };
    key?: string;
    uploadType?: string;
    auth?: OAuth2Client | string | null;
    headers?: OutgoingHttpHeaders;
}
export declare type APIEndpoint = Readonly<Endpoint & any>;
