🖥️ EasyCar – Backend API

Descrição:
O EasyCar API é o sistema backend responsável por gerir as corridas, motoristas e passageiros do aplicativo de transporte. Desenvolvido em Node.js com Express.js, esta API fornece os endpoints necessários para que a aplicação mobile funcione corretamente, garantindo a comunicação entre utilizadores e motoristas.

O backend controla toda a lógica de solicitação, aceitação, cancelamento e conclusão de corridas, seguindo regras de negócio bem definidas.

🔹 Funcionalidades Principais

✅ Gestão de Corridas (/rides)
Criar uma nova corrida (POST /rides)
Consultar corridas disponíveis e do utilizador (GET /rides)
Apagar um pedido de corrida (DELETE /rides/:id)
Atualizar o estado da corrida (PUT /rides/:id/accept | /cancel | /finish)

✅ Gestão de Passageiros
O passageiro só pode solicitar uma corrida activa de cada vez.
Listar todas as corridas do passageiro (GET /rides?passenger_user_id=X).

✅ Gestão de Motoristas

Um motorista só pode aceitar uma corrida de cada vez.
Consultar todas as corridas disponíveis e as suas próprias corridas (GET /rides/drivers/:id).
Aceitar, cancelar ou concluir corridas (PUT /rides/:id/accept | /cancel | /finish).

✅ Regras de Negócio
Passageiros não podem pedir uma nova corrida enquanto tiverem uma pendente.
Motoristas não podem aceitar múltiplas corridas ao mesmo tempo.

✅ Base de Dados (SQLite)
Armazena informações sobre utilizadores, corridas e estados das viagens.
Usa SQL (SQLite) para consultas rápidas e eficientes.

📌 Estrutura do Projeto
O projeto está estruturado em pastas e arquivos para facilitar a organização e o desenvolvimento.

🛠 Tecnologias Utilizadas
Linguagem & Framework: Node.js + Express.js
Base de Dados: SQLite (leve e rápido para este projecto)
API de Geolocalização: Google Maps API (para coordenadas de origem/destino)

📝 Documentação
A documentação do projeto está disponível no arquivo README.MD, que descreve as funcionalidades, requisitos e estrutura do projeto.

🔍 Pré-requisitos
Para executar o projeto, é necessário ter Node.js e SQLite instalados no seu sistema.

🚀 Execução
Para executar o projeto, siga os passos abaixo:

1. Instale as dependências do projeto:
```
npm install
```
2. Inicie o servidor:
```
npm start
```
3. Acesse a API utilizando um cliente HTTP (como Postman ou cURL) ou um navegador web.

📝 Contribuição
Se você gostaria de contribuir com o projeto, sinta-se à vontade para abrir um Pull Request ou criar um Issue com suas sugestões ou problemas.

🎯 Objectivo do Backend
Criar uma API eficiente e escalável para a gestão de corridas, garantindo que os utilizadores possam pedir, cancelar e acompanhar as suas viagens sem complicações.

📌 Contacto
Se tiver alguma dúvida ou precisar de ajuda, entre em contato comigo

Meus Links: [https://monjanelinks.vercel.app/](https://monjanelinks.vercel.app/)





