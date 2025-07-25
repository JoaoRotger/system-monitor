# 📌 System Monitor – VS Code Extension

Esta é uma extensão para o Visual Studio Code que exibe, em tempo real, informações sobre o desempenho do seu computador diretamente na **barra de status** do VS Code.

Ele mostra:

- ✅ Uso atual da CPU  
- ✅ Uso de memória RAM  
- ✅ Temperatura da CPU (quando disponível)

---

## ✨ Funcionalidades

- ✅ Atualização automática a cada 2 segundos  
- ✅ Funciona no Windows, Linux e macOS  
- ✅ Inicia junto com o VS Code e fica ativo até você fechar  
- ✅ Leve e sem configurações complexas  

---

## 🚀 Como rodar em modo de desenvolvimento

1. **Pré‑requisitos:**
   - [Node.js](https://nodejs.org/) instalado
   - [Visual Studio Code](https://code.visualstudio.com/) instalado

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Compilar o TypeScript:**

   ```bash
   npm run compile
   ```

4. **Rodar no VS Code:**
   - Pressione `F5` no VS Code
   - Uma nova janela do VS Code vai abrir com a extensão carregada
   - Confira no canto inferior direito da barra de status

---

## 📦 Como empacotar

Para gerar um `.vsix` e instalar manualmente:

```bash
npm install -g vsce
vsce package
```

Depois, no VS Code:

- Vá em **Extensões** (Ctrl+Shift+X)
- Clique nos `...`
- Selecione **Instalar do VSIX…** e escolha o arquivo gerado.

---

## 🛠 Tecnologias utilizadas

- Visual Studio Code API
- TypeScript
- systeminformation para leitura de dados de hardware

---

## 🖥️ Compatibilidade

- ✅ Windows  
- ✅ Linux  
- ✅ macOS  

> *Observação:* a temperatura pode não estar disponível em todos os hardwares/sistemas.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT.
