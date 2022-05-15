# Documentação API de Games
Esta API é utilizada para informações sobre jogos.

## Endpoints
### GET /games
Este endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.

#### Parâmetros
Nenhum

#### Respostas:
##### OK! 200
Caso esta resposta aconteça você vai receber a listagem de todos os games.

Exemplo de Resposta:
```
[
    {
        id: 23,
        title: "Call of Duty",
        year: 2019,
        price: 60
    },
    {
        id: 65,
        title: "Sea of Thieves",
        year: 2018,
        price: 40
    },
    {
        id: 2,
        title: "Minecraft",
        year: 2012,
        price: 20
    }
]
```

##### Falha na autenticação! 401
Caso esta resposta aconteça, significa que aconteceu uma falha durante o processo de autenticação. Motivos: Token inválido ou token expirado.

Exemplo de Resposta:
```
{
    "err": "Token Inválido"
}
```

### POST /auth
Este endpoint é responsável por fazer o processo de login.

#### Parâmetros
email: E-mail do usuário cadastrado no sistema.
password: Senha do usuário cadastrado no sistema.

Exemplo:
```
{
    "email": "inessouzasp@gmail.com",
    "password": "exemplosenha123"
}
```

#### Respostas:
##### OK! 200
Caso esta resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos da API.

Exemplo de Resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpbmVzc291emFzcEBnbWFpbC5jb20iLCJpYXQiOjE2NTI0NDIxNDAsImV4cCI6MTY1MjYxNDk0MH0.Sgymz_YMLOkvaPeHMOaLgR8RzwYi6Fw7ILEQR1Szx2o"
}
```

##### Falha na autenticação! 401
Caso esta resposta aconteça, significa que aconteceu uma falha durante o processo de autenticação da requisição. Motivos: Email e/ou senha incorretos.

Exemplo de Resposta:
```
{ err: "Credenciais Inválidas!" }
```
