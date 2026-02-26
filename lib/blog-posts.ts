export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wie-wirkt-sich-ki-auf-den-grosshandel-aus",
    title:
      "Wie wirkt sich KI auf den Großhandel aus? Der komplette Überblick für 2026",
    description:
      "63% der Großhändler stufen KI als relevant ein, aber nur 24% setzen sie ein. Erfahren Sie, wo KI im Großhandel heute echten Mehrwert liefert — mit konkreten Zahlen und Anwendungsbeispielen.",
    author: "Max Hänsel",
    date: "2026-02-23",
    image: "/images/wholesale-planning.jpg",
    tags: ["ki", "grosshandel", "automatisierung", "supply-chain"],
  },
  {
    slug: "building-custom-node-dev-guide",
    title:
      "Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger Entwickler-Leitfaden",
    description:
      "Transformieren Sie Ihre Workflow-Automatisierung mit benutzerdefinierten n8n Integrationen, die exakt Ihren Anforderungen entsprechen. Vollständiger Guide zur Custom Node Entwicklung.",
    author: "Max Hänsel",
    date: "2025-02-16",
    image: "/blog/building-custom-node-dev-guide/hero.png",
    tags: ["n8n", "custom-nodes", "automatisierung", "development"],
  },
];
