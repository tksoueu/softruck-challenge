# Frontend – Softruck Challenge

Este é o **frontend** do projeto Softruck Challenge, responsável por exibir o mapa interativo e a animação do carro 3D baseada em dados de GPS.

## **Tecnologias Principais**

- **React + Vite**
- **React Leaflet + Leaflet**
- **i18next + react-i18next**
- **Axios**
- **SCSS**

## **Como Rodar**

1. Instale as dependências:
   `npm install`

2. Inicie o servidor de desenvolvimento:

    `npm run dev`

3. Acesse
   `http://localhost:5173`
4. Certifique-se de que o backend (JSON Server) esteja rodando na porta 3001.


## **Estrutura da pasta `src/`**

* **components/** – Componentes reutilizáveis como `CourseSelector` e `VehicleInfoCard`.
* **features/** – Funcionalidade principal do mapa e animação (`MapPage`, `CarAnimation`).
* **services/** – Camada de comunicação com a API fake (`coursesService`, `summaryService`, `vehicleService`).
* **utils/** – Funções utilitárias (ex: `carUtils` para calcular ângulo e lidar com sprite).
* **i18n/** – Configuração da internacionalização (PT, EN, ES, FR).

> Para mais informações, veja o README principal.
