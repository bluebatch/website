export interface BlogAuthor {
  name: string;
  image?: string;
  linkedIn?: string;
}

const authors: Record<string, BlogAuthor> = {
  "Max Hänsel": {
    name: "Max Hänsel",
    image: "/mh-small.webp",
    linkedIn: "https://www.linkedin.com/in/maximilianhaensel/",
  },
  "Markus Mosch": {
    name: "Markus Mosch",
    image: "/mm-small.png",
    linkedIn: "https://www.linkedin.com/in/markus-mosch-32a4111a2/",
  },
};

export function getAuthor(name: string): BlogAuthor {
  return authors[name] ?? { name };
}
