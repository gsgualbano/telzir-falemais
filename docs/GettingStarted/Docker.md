Para rodar a aplicação com o docker é necessário ter o mesmo e o docker-compose instalado na sua máquina, irei deixar aqui alguns links para ajudar no download e instalação do docker, caso você ainda não tenha instalado.

Guia para instalar o Docker e Docker-Compose(em Português):
[Clique aqui](http://stack.desenvolvedor.expert/appendix/docker/instalacao.html)

Guia para instalar o Docker(em Inglês):
[Clique aqui](https://docs.docker.com/install/)

Guia para instalar o Docker-Compose(em Inglês):
[Clique aqui](https://docs.docker.com/compose/install/)

##### Após a instalação do docker e docker-compose:

Clone o projeto na pasta de sua preferência.

```bash
git clone https://github.com/gsgualbano/telzir-falemais.git
```

Selecione a pasta do projeto

```bash
cd telzir-falemais-react-ts
```

em seguida rode o comando

```bash
docker-compose up -d
```

Aguarde alguns minutos, e o projeto estará rodando em http://localhost:5000 ou http://127.0.0.1:5000
