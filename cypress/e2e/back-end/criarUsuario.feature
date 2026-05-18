#utf-8
#language: pt


Funcionalidade: Criar usuário

  Cenário: Criar um novo usuário com sucesso
    Dado que faço uma requisição POST para "/api/createAccount"
    Então a resposta deve conter o status 201
    E valido que o usuário foi criado