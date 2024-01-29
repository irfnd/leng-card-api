export declare function query<T extends object, K extends keyof T>(queries: T, fields?: {
    equalFields?: K[];
    dateFields?: K[];
}): Record<string, any>;
export declare const ParseUtils: {
    query: typeof query;
};
