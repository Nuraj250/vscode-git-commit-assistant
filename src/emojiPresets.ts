export interface EmojiCommit {
    label: string;
    description: string;
    prefix: string;
}

export const emojiPresets: EmojiCommit[] = [
    { label: "✨ feat", description: "A new feature", prefix: "✨ feat: " },
    { label: "🐛 fix", description: "A bug fix", prefix: "🐛 fix: " },
    { label: "📝 docs", description: "Documentation only changes", prefix: "📝 docs: " },
    { label: "💄 style", description: "Code style changes (formatting, etc)", prefix: "💄 style: " },
    { label: "♻️ refactor", description: "Code refactoring", prefix: "♻️ refactor: " },
    { label: "✅ test", description: "Adding tests", prefix: "✅ test: " },
    { label: "🚀 deploy", description: "Deployment changes", prefix: "🚀 deploy: " },
    { label: "🧹 chore", description: "Other changes that don't affect logic", prefix: "🧹 chore: " }
];
