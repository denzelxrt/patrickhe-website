import { SiteConfig } from "../src/types"
import { env } from "../env.mjs"

export const siteConfig: SiteConfig = {
  name: "Denzel",
  author: "denzelxrt",
  description: "My personal portfolio.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/denzelxrt"
  },
}
