const zenQuotes = [
    "Simplicity is the soul of efficiency.",
    "Code is like water — let it flow naturally.",
    "Breathe in. Refactor out.",
    "A clean commit is a clear mind.",
    "Push with peace. Merge with meaning.",
    "Don't rush. Even Git branches bloom with time.",
    "Good code is poetry in motion.",
    "Zen is not a thing you do, but the space you allow."
];

export function getRandomZenQuote(): string {
    const i = Math.floor(Math.random() * zenQuotes.length);
    return zenQuotes[i];
}
