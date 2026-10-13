
const BASE_PATH =
  process.env.GITHUB_PAGES === "true"
    ? "/muniz_landing_page"
    : "";

export function publicPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
