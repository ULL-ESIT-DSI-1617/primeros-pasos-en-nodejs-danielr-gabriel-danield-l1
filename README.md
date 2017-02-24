#Práctica 2. Primeros pasos en NodeJS

#Integrantes

* [Daniel Díaz García](https://github.com/alu0100882186)

* [Gabriel Fernández Castro](https://github.com/alu0100885453)

* [Daniel Rodríguez Martín](https://github.com/alu0100886764)

#Campus de la asignatura

* [Enlace al campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1136)

#Requisitos de la Práctica

* En el directorio scripts/ se encuentran scripts shell para la construcción y despliegue del libro
* Este repo utiliza el módulo gh-pages para automatizar el despliegue en gh-pages del libro
* Reescriba los scripts shell en el directorio scripts/ para la construcción y despliegue del libro en NodeJS
* Añada un Gulpfile con tareas build, deploy, serve, etc. que automaticen la construcción y despliegue del libro en los diferentes sites
* Despliegue el libro en su máquina del iaas
* Recuerde usar los issues y los projects para la colaboración
* Despliegue el libro en su máquina virtual del iaas.ull.es siguiendo las instrucciones en
    * SERVICIO IAAS de la ULL
    * Como Desplegar una Aplicación Web en iaas.ull.es

# GitBook Boilerplate

# Installation

```shell
cd ~/code

git clone https://github.com/enten/gitbook-boilerplate.git awesome-project

cd awesome-project

rm -fr .git

vi package.json
# edit repository.url and repository.wiki

git remote add origin <url>

npm run build
# or
# npm run generate-gitbook && npm run generate-wiki

npm run deploy
# or
# npm run deploy-gitbook && npm run deploy-wiki
```
__Important__: Wiki must be created on Github
