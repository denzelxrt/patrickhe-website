import { FaGithub, FaFileDownload, FaTwitter, FaLinkedin } from "react-icons/fa"
import { siteConfig } from "@/../config/site"

export function SocialMediaIcons() {
  return (   
    <>
      <div className="flex gap-2">
        <a
          target="_blank"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          aria-label="Github"
          className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
        >
          <FaGithub />
        </a>
      </div>
    </>
  )
}
