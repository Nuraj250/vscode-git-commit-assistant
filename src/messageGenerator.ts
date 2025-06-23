import * as vscode from 'vscode';

export function generateSmartMessage(): string | undefined {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const api = gitExtension?.getAPI(1);
    const repo = api?.repositories[0];

    if (!repo) {
        vscode.window.showErrorMessage("No Git repository found.");
        return;
    }

    const changed = repo.state.workingTreeChanges.map((f: any) =>
        f.uri.fsPath.split(/[\\/]/).pop()
    );

    if (changed.length === 0) {
        vscode.window.showInformationMessage("No files changed.");
        return;
    }

    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'long', year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: true
    });

    return `Update [${date}, ${time}]: ${changed.slice(0, 5).join(', ')}`;
}
