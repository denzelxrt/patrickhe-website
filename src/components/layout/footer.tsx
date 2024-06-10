import { siteConfig } from "@/../config/site"

export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700">
      I'd Rather no-one contacts me, <br />
       But if its necessary contact me @ {" "}
      <a href="mailto:me@denzel.lol" className="underline">
        me@denzel.lol
      </a>
    </footer>
  );
}
