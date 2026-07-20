export function createProducerBundleUrl(bundleFileName: string): string {
  if (process.env["NODE_ENV"] === "production") {
    return `${process.env["LYNX_PRODUCER_BASE_URL"]}/${bundleFileName}`;
  }
  return `${__webpack_public_path__}producer/${bundleFileName}`;
}
