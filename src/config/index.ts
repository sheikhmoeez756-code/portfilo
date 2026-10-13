export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = "https://sheikhmoeez756-code.github.io/portfilo";

// Static files under /public need the base path prefixed by hand when served from a sub-path.
export const asset = (path: string) => `${BASE_PATH}${path}`;
