import { SiteConfig } from "../src/types"
import { env } from "../env.mjs"

export const siteConfig: SiteConfig = {
  name: "Patrick He",
  author: "he-patrick",
  description: "My personal website.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/he-patrick",
    resume: "https://ean8rq3bfwkcg2zc.public.blob.vercel-storage.com/Patrick_He_Resume-BoWXHWnwG1zp3OK1gamx50JvgtxJtW.pdf",
    linkedin: "https://www.linkedin.com/in/patrickhe2005/",
  },
}
