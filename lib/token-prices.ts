// Kundenpreise netto je 1 Mio. Tokens, Stand 12.10.2026. Eine Quelle für die
// Preisseite (/managed-claude/preise) und die Funnel-Landingpages.
export interface TokenPrice {
  model: string;
  input: string;
  output: string;
  write5m: string;
  write1h: string;
  read: string;
}

export const TOKEN_PRICES: TokenPrice[] = [
  { model: "Claude Opus 5.5", input: "5,15 €", output: "25,74 €", write5m: "6,44 €", write1h: "10,30 €", read: "0,26 €" },
  { model: "Claude Opus 5", input: "6,35 €", output: "31,50 €", write5m: "8,05 €", write1h: "12,87 €", read: "0,65 €" },
  { model: "Claude Sonnet 5.5", input: "2,60 €", output: "12,60 €", write5m: "3,22 €", write1h: "5,15 €", read: "0,13 €" },
  { model: "Claude Sonnet 5", input: "2,60 €", output: "12,60 €", write5m: "3,22 €", write1h: "5,15 €", read: "0,26 €" },
  { model: "Claude Sonnet 4.6", input: "3,87 €", output: "19,31 €", write5m: "4,83 €", write1h: "7,73 €", read: "0,39 €" },
  { model: "Claude Haiku 5.5", input: "0,13 €", output: "0,65 €", write5m: "0,17 €", write1h: "0,26 €", read: "0,02 €" },
  { model: "Claude Haiku 5.5, Prompt über 100K Tokens*", input: "0,65 €", output: "3,22 €", write5m: "0,81 €", write1h: "1,29 €", read: "0,07 €" },
  { model: "Claude Haiku 4.5", input: "1,50 €", output: "6,50 €", write5m: "1,61 €", write1h: "2,58 €", read: "0,13 €" },
];

/** Preis eines Modells nach exaktem Namen, z. B. "Claude Sonnet 5.5". */
export function tokenPrice(model: string): TokenPrice {
  const row = TOKEN_PRICES.find((r) => r.model === model);
  if (!row) throw new Error(`Kein Tokenpreis für ${model}`);
  return row;
}
