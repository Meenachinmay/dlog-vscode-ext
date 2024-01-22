import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "dlog" is now active!');

	let disposable = vscode.commands.registerCommand('extension.addLogStatement', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const document = editor.document;
		const selection = editor.selection;

		// get the current line no and add a log statement below it
		const lineOfSelectedVar = selection.active.line;
		const position = new vscode.Position(lineOfSelectedVar + 1, 0);
		const logStatement = `console.log('File: ${document.fileName}, Line: ${lineOfSelectedVar + 1}', );\n`

		editor.edit(editBuilder => {
			editBuilder.insert(position, logStatement);
		});

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
