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
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
describe('System Monitor Extension', () => {
    let extension;
    beforeEach(() => {
        extension = vscode.extensions.getExtension('JoaoRotger.system-monitor');
    });
    it('Deve criar um item na barra de status ao ativar', async () => {
        assert.ok(extension, 'Extensão não encontrada');
        await extension.activate();
        // Teste visual: verifique se algum item da barra de status contém "CPU:"
        const statusBarItems = vscode.window._statusBar?._items || vscode.window['statusBar']?.items;
        const found = statusBarItems && statusBarItems.some((item) => typeof item.text === 'string' && item.text.includes('CPU:'));
        assert.ok(found, 'Item da barra de status não foi criado ou não contém "CPU:"');
    });
});
//# sourceMappingURL=extension.test.js.map