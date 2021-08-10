# Desafio React

### Objetivos

Testar os conhecimentos do programador em relação ao básico de desenvolvimento de aplicações Web utilizando React.

### Contexto

Você foi contratado pela loja de chocolates "Doce Sonho" para desenvolver um _storefront_ dos diversos produtos do
estabelecimento.

### Escopo Técnico

A aplicação é um _single-page app_ criado com _Create React App_ e _Bootstrap_, que contém uma listagem dos
produtos disponíveis para compra, bem como um campo de busca.

A sua tarefa será realizar os desafios propostos abaixo, que envolvem a construção de componentes e complementação
de funcionalidades da aplicação.

### Iniciando a aplicação

**Requisitos:** NodeJS 10.16+ e npm 5.6+

Após clonar este repositório, basta navegar até o diretório raiz do projeto e executar os comandos:

```npm install```

E em seguida:

```npm start```

O script inicializará o serviço e abrirá o navegador de sua preferência diretamente na página inicial da aplicação.

# Desafios

## Desafio 1

Ao observar o código fonte do aplicativo, vemos que todo o código está contido em um mesmo arquivo. Frameworks de
_front-end_ modernos permitem a criação de componentes, tanto para facilitar o desenvolvimento e entendimento do
código fonte, quanto para auxiliar na reutilização de código.

O objetivo deste desafio é transformar o _card_ de apresentação do produto em um componente _stateless_ e
exibi-lo na página.

## Desafio 2

O campo de busca de produtos atualmente está parcialmente funcional - Possui definição de estado e _listener_
para quando o conteúdo do campo é atualizado.

O objetivo deste desafio é completar o código, tornando o campo de busca completamente funcional. Quando algo
é digitado, apenas os produtos cujo nome contém o termo de busca devem ser exibidos. Caso o campo esteja vazio,
todos os produtos devem ser exibidos.