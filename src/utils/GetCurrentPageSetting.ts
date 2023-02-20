import type { BasicPageConfig, PageList } from "@/declare/defineBlogConfig";
import cfg from "blog.config";

type PathListProps = Record<string, PageList>

const PathList: PathListProps = {
  '/': 'index',
}

export default function (url: URL): BasicPageConfig {
  let res: BasicPageConfig | undefined
  const fURL = url.pathname.replace(cfg.WebsiteSettings.base, "")
  if (PathList[fURL]) res = cfg.pages[PathList[fURL]]
  else {
    for (const i in cfg.pages) {
      if (fURL.indexOf(i) !== -1) {
        res = cfg.pages[i]
        break
      }
    }
  }

  return res ?? cfg.PageDefaultSettings
}