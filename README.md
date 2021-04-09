# Portal_Indigena_2021

Projeto de desenvolvimento de uma plataforma para abrigar informações sobre aldeias indígenas do estado de São Paulo.
Na etapa inicial do projeto, planeja-se construir um portal centralizador, onde conteúdos multimídia das aldeias parceiras sejam facilmente acessíveis através de um site multilíngue. Nas etapas posteriores, planeja-se construir sites individuais para cada parceria, de forma que o conteúdo de cada plataforma se adeque às demandas específicas de cada aldeia.

O projeto nasce de uma parceria entre o TECS e a Rede de Atenção à Pessoa Indígena do IPUSP no ano de 2019, e atualmente mantemos contato com 3 aldeias, ambas de etnia Guarani: Guaviraty, Tangará e Yrexakã.

## Instruções

### - Sobre a organização do projeto

O conteúdo geral sobre as aldeias está centralizado no arquivo \_data/aldeias.yml. Ali, defini-se o nome, imagem, formas de contato e localização que serão exibidos.
O conteúdo _traduzível_ está na pasta \_i18n - textos sobre a aldeia e história; termos gerais usados pelo site.

### - Sobre o Jekyll

O projeto utiliza o Jekyll para gerar o conteúdo do site. Para iniciar o servidor, basta rodar o comando `bundle exec jekyll serve`. O servidor abre automaticamneente no endereço http://localhost:4000".

Instruções para instalar o Jekyll em https://jekyllrb.com/docs/

_-> Dica: rodar "bundle exec jekyll serve --livereload" para ativar o live reload do servidor._

### - Sobre a Multi-Linguagem

Para a disponibilização de múltiplas línguas no projeto, utilizamos o plugin Jekyll Multiple Languages Plugin (https://github.com/kurtsson/jekyll-multiple-languages-plugin).

Há documentação no git fornecido, mas conceitos básicos:

- Arquivos `.yml` de línguas dentro da pasta `_i18n`, com as diferentes traduções e suas chaves (ex: `pt.yml`, `en.yml`, `gn.yml`)
- Para incuir o texto traduzido de uma chave, utilizar a sintaxe `{% t chave %}`
- Serão criadas pastas para as diferentes línguas, que podem ser acessadas pela url como: `www.site.com/en` ( para língua en )

### - Sobre o GitDuck

Nós utilizamos o GitDuck (https://gitduck.com) para desenvolvimento em grupo. Com essa ferramenta, é possível compartilhar uma sessão, e assim todos acessarem os mesmos arquivos e _codarem_ em conjunto. Para tal, adicionem a extensão homônima ao VSCode(ium).

### - Sobre o Prettier

Prettier se trata de um formatador de código _opinionado_. Com ele é possível padronizarmos mais facilmente o estilo do código, indentações etc., mesmo com diversas pessoas mexendo em um mesmo projeto. Para utilizá-lo, basta instalar a extensão de mesmo nome ao VSCode(ium) ( https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode ) e rodar o comando `npm install` na pasta do projeto - que instalará a dependência javascript do Prettier. Em caso de dúvidas com o npm consultar: https://www.npmjs.com/get-npm

### - Sobre o sass/SCSS

O sass/SCSS (https://sass-lang.com/guide) é um CSS com _superpoderes_. Adiciona-se assim várias ferramentas ao projeto, que facilitam a organização e permitem novos usos do CSS.

### - Sobre o Firebase

Utilizamos o serviço do Firebase Google para hostear nossa plataforma (de graça!). O endereço provisório do site é https://portalindigena.web.app
Para subir uma nova versão do site para o domínio, é necessário _buildar_ o projeto com o comando `bundle exec jekyll build -d build` (a flag -d e o argumento build servem para definir o _path_ da pasta pública que será gerada), e depois rodar `firebase deploy --only hosting` para subir o projeto para o Firebase.
