declare module 'x11' {
  export function createClient(callback: (e: Error, display: any) => void): void;
}

declare module 'ewmh' {
  class EWMH {
    constructor(client: any, root: any);
  }
  export = EWMH;
}