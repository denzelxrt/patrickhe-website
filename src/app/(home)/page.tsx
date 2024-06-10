import { siteConfig } from "@/../config/site"

import { Projects } from "@/components/pages/home/projects"
import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"

export default function Home() {
  return (
    <main className="py-4">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <section className="space-y-4 py-4">
        <p className="font-light text-muted-foreground">Hey there, my name is Denzel 👋</p>
        <p className="font-light">
          I'm a Computer Sci enthusiast, iam intrested in machine learning projects and automation (stuff along those lines)
        </p>
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <HeadingText>My Random Github Repos</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
            <Projects />
          </div>
          <a
            target="_blank"
            href={`${siteConfig.links.github}?tab=repositories`}
            className="text-sm underline"
          >
            See More...
          </a>
        </div>
      </section>
    </main>
  )
}
