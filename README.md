# FluxoCaixa

## Explicação técnica

A aplicação utiliza o localStorage para armazenar os dados dos lançamentos de caixa, com a intensão de simular uma API REST.

Foi desenhada uma solução a qual não há necessidade de bibliotecas externas para o gerenciamento de estado da aplicação, como o Redux, por exemplo.

A aplicação utiliza a modularização do Angular para separar as responsabilidades dos componentes e serviços.

A estrutura de pastas do projeto foi organizada da seguinte forma:
- _domain -> contém as classes de domínio da aplicação
- _shared -> contém os componentes e serviços compartilhados
- modulos -> contém os módulos da aplicação (consolidation, flow, home)
    - modulos podém ter suas próprias pastas estruturais tais quais: components, services, models, etc.
- pastas estruturais são definidas com o prefixo "_", para que fiquem sempre no topo da lista de pastas

## Observações

- A aplicação possúi um mock inicial de lançamentos de caixa, para facilitar a visualização da aplicação

## Objetivo

Criar uma aplicação Angular 2+ que permita o cadastro de lançamentos de caixa e a visualização da consolidação diária dos lançamentos.

## Requisitos

- 1. Criar uma aplicação Angular 2+ que permita o cadastro de lançamentos de caixa.
- 2. A aplicação deve permitir o cadastro de lançamentos de caixa, com os seguintes campos:
  - Valor
  - Tipo (crédito ou débito)
  - Descrição
- 3. A aplicação deve permitir a edição e exclusão de lançamentos de caixa.
- 4. A aplicação deve permitir a visualização de um extrato de lançamentos de caixa.
- 5. A aplicação deve permitir a visualização do saldo atual de caixa.

## Primeiros passos

- Instale [Node.js](https://nodejs.org/en/) versão 10.9.0 ou superior
- InstaleInstale [Angular CLI](https://cli.angular.io/) versão 6.2.3 ou superior
- Instale [Git](https://git-scm.com/)
- Instale [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de texto de sua preferência

### Clone o repositório

```
git clone [url do repositório]
```

### Instale as dependências

```
npm i
```

### Inicie o servidor local

```
ng s -o
```

### Acesse a aplicação

```
http://localhost:4200/
```