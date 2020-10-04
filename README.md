# Monorepo com Yarn Workspaces

Repositório destinado a estudos de comportamento de aplicacões como Monorepo.


## Quem utiliza Monorepo?

- Reakit
- Jest
- React
- Docz
- Babel
- Angular

## O que é? Como funciona?

Monorepo é uma estratégia de desenvolvimento de software onde o código de várias aplicações são agrupadas em um mesmo repositório.

# Vantagens

- Código reunido no mesmo Pull Request ( back e front )
- Compartilhamento de código
    - Exemplo: Axios, SWR, Funçoes de validacao
- Compartilhamento de bibliotecas
    - Ex: Para uma lib de interface de criacao prorpria da empresa, pode ser compartilhada facilmente sem a necessidade de instalar uma nova dependencia em cada projeto, e ter correr o risco de esquecer de atualizar um projeto e nao o outro.
- Possibilidade de um versionamento unificado
    - Ao ser lancado uma versao de um modulo, todos os outros estaram atualizados
- Gestão de depencias
    - Uma unica pasta node_modules
- Facil inicializacao para novos no time
    - nao precisa baixar 'n' repositorios cada um com seu env, ou passar o dia baixando e instalando dependencias
- Integração contínua
    - você pode executar o build de todas as aplicações e caso uma biblioteca seja alterada sem precisar criar links entre elas durante os pipelines. Com isso, todas as aplicações sempre terão as últimas versões das bibliotecas, e você consegue identificar caso uma alteração em uma biblioteca quebre uma aplicação.
    - Existe ainda ferramentas que te dizem exatamente quais aplicações ou bibliotecas foram afetadas pela sua alteração, e executam o processo de build somente para o que foi afetado ( NX → [https://nx.dev](https://nx.dev/react)  )
- Liberdade de criacao
    - a liberdade de criar um novo projeto sem precisar criar repositórios e pedir pro time inteiro cloná-lo também foi bem interessante.

# Desvantagens

- Cultura, sair do conforto de multirepos
- Controle de acesso / Segurança
    - aceitar que todo mundo do seu time tem acesso a tudo, e que todo mundo pode alterar tudo desde que seja aprovado no processo de PR.
- Complexidade para DevOps
    - Como você só tem um repositório, os pipelines de CI e CD se tornam um pouco mais complexos porque eles precisam buildar não só uma aplicação, mas todas as aplicações que determinada alteração afeta.

# O que é Yarn Workspaces?

Workspaces é uma funcionalidade do Yarn que permite agrupar múltiplas aplicações em um único repositório. Ele é o grande facilitador para a criação de Monorepos. Basta informar quais são os diretórios no arquivo `package.json` para que o Yarn seja capaz de instalar as dependências e *linkar* as aplicações locais.


## Outras ferramentas de Monorepo

- Lerna
- PNPM - [https://pnpm.js.org/en/](https://pnpm.js.org/en/)

# Referências

- [Code/Drops #42](https://www.youtube.com/watch?v=k5TkBcUTJus)
- [Um ano de Monorepo: o que aprendemos e porque você deveria usá-lo](https://medium.com/@ricardo.mello/um-ano-de-monorepo-o-que-aprendemos-e-porque-você-deveria-usá-lo-d3130280bd7d)
- [Monorepo + Yarn Workspaces](https://robertoachar.dev/blog/yarn-workspaces)
- [Como escalar projetos React com Monorepo](https://www.infoq.com/br/presentations/como-escalar-projetos-react-com-monorepo/)
- [Awesome Monorepo](https://github.com/korfuri/awesome-monorepo)
- [NX.dev](https://nx.dev/react)
- [Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?time_continue=467&v=E188J7E_MDU&feature=emb_logo)
