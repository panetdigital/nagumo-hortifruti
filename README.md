installar nuxt de outra forma: npx create-nuxt-app nuxtjs
# nagumo-hortifruti
## CLONAR NO GITHUB

```bash
git clone https://github.com/panetdigital/nagumo-hortifruti.git --branch  master
```

### observação com instalaco: installar nvm versao lts 20 de node
```bash
sudo apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

```
```bash
source ~/.nvm/nvm.sh
```
```bash
nvm --version
nvm install --lts
```
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
# COMPOSITION DE PROJETO
------------------------
Observation: nao funcionar controle de estoque quando tiver usando https
# tenho virtualbox de Apache apontando nuxtjs porta 3000
  diretorio config de apache2 
  /etc/apache2/sites-available
  arquivo: 000-default.conf
  docker 2 apontamento
    /home/ubuntu/app-laravel/laravel-10-docker  8989
    phpmyadmin    8080
 #node com execusão de raspagem dados porta 8081   
   obsr ao executar projeto com pupperter instalar chromium
   sudo apt install chromium-browser
    
# 1. API laravel 10: para controle de estoque e inventario
  # execusao docker: imagem nginx e laravel 10, todo dentro de docker-composer.yld e docker file explica sobre configuraçao do ambiente
   @comando para levantar projeto docker dentro da pasta laravel-10
  ubuntu@ip-172-31-8-70:~$ cd /home/ubuntu/app-laravel/laravel-10-docker
  ubuntu@ip-172-31-8-70:~/app-laravel/laravel-10-docker$ docker-compose up -d
  ubuntu@ip-172-31-8-70:~/app-laravel/laravel-10-docker$ docker-compose exec app bash
  ubuntu@ip-172-31-8-70:~/app-laravel/laravel-10-docker$ docker-compose exec app bash
  carlos@95c4f2295aa2:/var/www$ composer install
  carlos@95c4f2295aa2:/var/www$ php artisan key:generate
  laravel.api:porta:8989
  phpmyadmin:8080
  mysql:3636
# 2. api node express: para coleta do preço 
  porta:8081
  arquivo: funcaochamada.js
  pm2 mantem projeto em execusao
# 3. camera.html: apache 
For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
# nagumo-gerencia2
