import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://veteranlockandsafe.com"

  const services = [
    "house-lockout",
    "car-lockout",
    "commercial-locksmith",
    "safe-locksmith",
  ]

  const areas = [
    "orlando",
    "winter-park",
    "kissimmee",
    "lake-mary",
    "sanford",
    "oviedo",
    "altamonte-springs",
    "casselberry",
    "tampa",
    "daytona",
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((area) => ({
      url: `${baseUrl}/areas/${area}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
