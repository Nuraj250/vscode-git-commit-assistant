import * as vscode from 'vscode';
import { generateSmartMessage } from './messageGenerator';
import { getRandomZenQuote } from './quotes';
import { emojiPresets } from './emojiPresets';

export function activate(context: vscode.ExtensionContext) {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const api = gitExtension?.getAPI(1);
    if (!api) return;

    const repo = api.repositories[0];
    if (!repo) return;

    // 1. Smart Commit Message
    context.subscriptions.push(vscode.commands.registerCommand('git-commit-assistant.smartMessage', () => {
        const msg = generateSmartMessage();
        if (msg) {
            repo.inputBox.value = msg;
            vscode.window.showInformationMessage('✅ Smart commit message inserted!');
        }
    }));

    // 2. Zen Quote
    context.subscriptions.push(vscode.commands.registerCommand('git-commit-assistant.zenQuote', () => {
        const quote = getRandomZenQuote();
        vscode.window.showInformationMessage(`🧘 Zen Tip: ${quote}`);
    }));

    // 3. Emoji Prefix Picker
    context.subscriptions.push(vscode.commands.registerCommand('git-commit-assistant.emojiPalette', async () => {
        const selected = await vscode.window.showQuickPick(
            emojiPresets.map(e => ({ label: e.label, description: e.description })),
            { placeHolder: 'Pick a commit type' }
        );
        if (selected) {
            repo.inputBox.value = `${selected.label}: `;
        }
    }));

    // 4. Combo Mode
    context.subscriptions.push(vscode.commands.registerCommand('git-commit-assistant.comboCommit', async () => {
        const selected = await vscode.window.showQuickPick(
            emojiPresets.map(e => ({ label: e.label, description: e.description })),
            { placeHolder: 'Pick a commit type' }
        );
        if (!selected) return;

        const message = generateSmartMessage();
        if (!message) return;

        repo.inputBox.value = `${selected.label}: ${message}`;

        const quote = getRandomZenQuote();
        vscode.window.showInformationMessage(`🧘 Zen Tip: ${quote}`);
    }));
}

export function deactivate() { }
