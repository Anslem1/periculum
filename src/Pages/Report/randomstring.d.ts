declare module "randomstring" {
     export function generate(options?: Options): string;

     interface Options {
          length?: number;
          charset?: string;
     }
}
