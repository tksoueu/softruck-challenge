# softruck-challenge

Softruck Frontend Dev Challenge por Tailk Barreto / @tksoueu


Este projeto é parte do desafio proposto pela Softruck, com o objetivo de exibir em um mapa a animação de um carro em 3D (via sprite) com base em dados de GPS e direção obtidos de uma API fake.

---

## **Funcionalidades**

* **Mapa interativo** com Leaflet.
* **Animação do carro** com base na direção do GPS utilizando sprite.
* **Velocidade real** influencia a taxa de atualização da animação.
* **Seleção de trajetos** - o usuário pode escolher qual rota ver no mapa.
* **Internacionalização (i18n)** : suporte a  **português, inglês, espanhol e francês** .
* **Estilização com SCSS** .
* **Organização modular** seguindo padrão de `features`, `components`, `services`, `utils`.
* **Backend fake com JSON Server** .

---

## **Estrutura de Pastas**

softruck-challenge/
│
├── client/ # Frontend (React + Vite)
│ ├── public/ # Imagens e assets estáticos
│ └── src/
│ ├── components/ # Componentes reutilizáveis (CourseSelector, VehicleInfoCard, etc.)
│ ├── features/ # Funcionalidade principal (mapa + animação do carro)
│ ├── services/ # Consumo da API (json-server)
│ ├── utils/ # Funções auxiliares (ex: cálculo de ângulo do carro)
│ └── i18n/ # Configuração da internacionalização
│
├── server/ # API fake (json-server)
│ └── db.json # Dados de veículo, trajetos e resumo
│
└── [README.md](http://readme.md/)

---

## **Tecnologias Utilizadas**

* **React + Vite** : rápido setup para SPA.
* **Leaflet** : renderização do mapa.
* **i18next + react-i18next** : internacionalização com suporte a múltiplos idiomas.
* **SCSS** : estilização modular e organizada.
* **Axios** : consumo da API fake.
* **JSON Server** : mock de API REST para dados de teste.
* **Concurrently** (opcional): rodar client e server juntos.

**Motivo das escolhas:**

* React + Vite foram escolhidos pela velocidade de build e simplicidade no desenvolvimento.
* Leaflet foi escolhido por ser uma biblioteca estável e leve para mapas.
* SCSS por permitir escalabilidade no CSS.
* JSON Server por ser ideal para prototipagem rápida de uma fake APIs REST usando um JSON.
* i18n por garantir internacionalização com escalabilidade para novos idiomas.

---

## **Como Rodar o Projeto**

### **Pré-requisitos**

* **Node.js** 18+
* **npm** 9+

### **Passo a Passo**

1. **Clone o repositório**

* git clone [https://github.com/tksoueu/softruck-challenge.git](https://github.com/tksoueu/softruck-challenge.git)
* cd softruck-challenge

Instale as dependências

* cd client
* npm install
* cd ../server
* npm install
* cd ..

**Rodar backend e frontend (opção 1 – manual)**

*Em um terminal:*

* cd server
* npm start

*Em outro terminal:*

* cd client
* npm run dev

**Rodar backend e frontend (opção 2 – automático / simultaneamente)**

*Instale concurrently na pasta raíz (fora de client ou server):*

* npm install --save-dev concurrently

*Então rode:*

* npm start

Isso inicia server (porta 3001) e frontend (porta 5173).

---

**Endpoints da API Fake**

*GET /summary*

*GET /courses*

*GET /vehicle*

---

**Observações**

O código foi escrito utilizando hooks e componentização para melhor manutenção.

Todas as strings exibidas estão centralizadas em arquivos de tradução (i18n).

---
