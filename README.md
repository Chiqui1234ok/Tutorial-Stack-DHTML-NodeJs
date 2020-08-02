# Ejemplo de un stack DHTML
## Front-End (DHTML) + Back-End (NodeJs + Express)
Se utiliza **Jekyll** para la modularización de la plantilla, lo que facilita el trabajo sobre la misma y permite modificar componentes del sitio desde un sólo archivo.
Esta plantilla se comunicará con una API back-end para extraer datos.

# Instalación en Windows
Entrar a la web oficial y [bajarse la última versión estable](https://www.ruby-lang.org/en/downloads/). El instalador añadirá **ruby** y **gem** al PATH de Windows, así que lo podés utilizar por línea de comandos al igual que en Linux.
También debés [descargar MongoDB](https://www.mongodb.com/try/download/community?tck=docs_server) y seguir [este tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) si estás muy perdid@.
Una vez que hayas hecho esto, podés instalar Jekyll y Bundler.
```bash
gem install bundler jekyll # Instala y compila las gemas "Bundler" y "Jekyll"
```

# Instalación Ubuntu y derivados
```bash
sudo apt update                 # Actualizamos los meta-datos de los repositorios
sudo apt install ruby ruby-dev  # Instala Ruby (Jekyll usa este lenguaje) y su paquete para desarrolladores
sudo gem install bundler jekyll # Instala y compila las gemas "Bundler" y "Jekyll"
sudo apt install nodejs npm     # Instala NodeJs y el gestor de paquetes NPM, para ejecutar el back-end
```

Seguí [este link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) para instalar MongoDB en Ubuntu.

# Instalación Fedora y derivados
```bash
sudo dnf update                 # Actualizamos los meta-datos de los repositorios
sudo dnf install ruby           # Instala Ruby (Jekyll usa este lenguaje). Fedora incluye "ruby-dev" dentro de "ruby"
sudo gem install bundler jekyll # Instala y compila las gemas "Bundler" y "Jekyll"
sudo dnf install nodejs npm     # Instala NodeJs y el gestor de paquetes NPM, para ejecutar el back-end
```

## Instalación de MongoDB en Fedora
Fedora quitó MongoDB de sus repositorios, así que hay que brindarle una fuente nueva. Creá el archivo */etc/yum.repos.d/mongodb.repo* y pegale el siguiente contenido:
```bash
[Mongodb]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```
Ahora, instalá e iniciá el proceso con systemd:
```bash
sudo dnf install mongodb-org            # Instala MongoDB en Fedora
sudo systemctl enable mongod.service    # Activa el servicio para que el daemon MongoDB iniciará con el sistema
sudo systemctl start mongod.service     # Inicia el daemon con este comando, sin necesidad de reiniciar
```

# Crear un proyecto NodeJs nuevo
Si querés aprender a crear un proyecto NodeJs desde cero y con los mismos paquetes que este tutorial, escribí:
```batch
$ # Work in progress
```

# Crear una página Jekyll