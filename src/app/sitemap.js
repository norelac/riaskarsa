const BASE_URL = "https://riaskarsa.vercel.app";

const routes = [
  "",
  "/galeri",
  "/penata-rias",
  "/masuk",
  "/daftar",
  "/sertifikasi",
  "/apply-model",
  "/terima-kasih",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}