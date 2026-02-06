import fs from "fs";
import path from "path";

export interface PageConfig {
  title: string;
  description: string;
  highlight?: boolean;
  disableOnOverview?: boolean;
}

export interface SubPage extends PageConfig {
  slug: string;
}

export async function getSubPages(
  relativePath: string,
  importPage: (folder: string) => Promise<{ pageConfig?: PageConfig }>,
): Promise<SubPage[]> {
  const dir = path.join(process.cwd(), relativePath);
  const folders = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        fs.existsSync(path.join(dir, d.name, "page.tsx")),
    )
    .map((d) => d.name);

  const pages: SubPage[] = [];

  for (const folder of folders) {
    const mod = await importPage(folder);
    const config = mod.pageConfig;
    if (config && !config.disableOnOverview) {
      pages.push({ slug: folder, ...config });
    }
  }

  return pages;
}
