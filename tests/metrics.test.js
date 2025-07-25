"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
const sinon_1 = __importDefault(require("sinon"));
describe('System Monitor Extension - Métricas', () => {
    let extension;
    let sandbox;
    beforeEach(() => {
        sandbox = sinon_1.default.createSandbox();
        extension = vscode.extensions.getExtension('JoaoRotger.system-monitor');
    });
    afterEach(() => {
        sandbox.restore();
    });
    it('Exibe corretamente o valor de uso da CPU', async () => {
        const si = require('systeminformation');
        sandbox.stub(si, 'currentLoad').resolves({ currentLoad: 42.5 });
        sandbox.stub(si, 'mem').resolves({ active: 4000, total: 8000 });
        sandbox.stub(si, 'cpuTemperature').resolves({ main: 55 });
        await extension.activate();
        const statusBarItems = vscode.window._statusBar?._items;
        const found = statusBarItems && statusBarItems.some((item) => typeof item.text === 'string' && item.text.includes('CPU: 42.5%'));
        assert.ok(found, 'Valor de CPU mockado não exibido corretamente');
    });
    it('Exibe corretamente o valor de uso da RAM', async () => {
        const si = require('systeminformation');
        sandbox.stub(si, 'currentLoad').resolves({ currentLoad: 10 });
        sandbox.stub(si, 'mem').resolves({ active: 2000, total: 4000 }); // 50%
        sandbox.stub(si, 'cpuTemperature').resolves({ main: 60 });
        await extension.activate();
        const statusBarItems = vscode.window._statusBar?._items;
        const found = statusBarItems && statusBarItems.some((item) => typeof item.text === 'string' && item.text.includes('RAM: 50.0%'));
        assert.ok(found, 'Valor de RAM mockado não exibido corretamente');
    });
    it('Exibe corretamente a temperatura da CPU', async () => {
        const si = require('systeminformation');
        sandbox.stub(si, 'currentLoad').resolves({ currentLoad: 10 });
        sandbox.stub(si, 'mem').resolves({ active: 1000, total: 4000 });
        sandbox.stub(si, 'cpuTemperature').resolves({ main: 77 });
        await extension.activate();
        const statusBarItems = vscode.window._statusBar?._items;
        const found = statusBarItems && statusBarItems.some((item) => typeof item.text === 'string' && item.text.includes('Temp: 77°C'));
        assert.ok(found, 'Temperatura não exibida corretamente');
    });
});
//# sourceMappingURL=metrics.test.js.map