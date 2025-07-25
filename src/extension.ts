import * as vscode from 'vscode';
import * as si from 'systeminformation';

export function activate(context: vscode.ExtensionContext) {
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = `$(pulse) Monitorando...`;
    statusBarItem.show();

    let interval: NodeJS.Timeout | undefined;

    async function updateStats() {
        try {
            const cpu = await si.currentLoad();
            const mem = await si.mem();
            const temp = await si.cpuTemperature();

            const cpuUsage = cpu.currentLoad.toFixed(1);
            const ramUsage = ((mem.active / mem.total) * 100).toFixed(1);
            const tempCpu = temp.main ? `${temp.main.toFixed(0)}°C` : 'N/A';

            statusBarItem.text = `CPU: ${cpuUsage}% | RAM: ${ramUsage}% | Temp: ${tempCpu}`;
        } catch (err) {
            statusBarItem.text = `Erro ao ler dados`;
            console.error(err);
        }
    }

    interval = setInterval(updateStats, 2000);
    updateStats();

    context.subscriptions.push({
        dispose() {
            if (interval) {
                clearInterval(interval);
            }
        },
    });
}

export function deactivate() {}
