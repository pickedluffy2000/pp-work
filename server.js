const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;

const server = http.createServer((req, res) => {
  // Serve o index.html na raiz
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao carregar a página');
        return;
      }
      
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } 
  // Se quiser servir CSS ou imagens depois, pode adicionar aqui
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Servidor rodando em → http://localhost:${PORT}`);
  console.log(`   Abra no navegador e deixe essa janela aberta`);
});