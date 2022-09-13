 * AUTENTICAÇÃO

    - POST /auth/signup
        * Request:
            body: {
                "name": "Maria José",
                "email": "mjose@gmail.com",
                "password": "123466789a",
                "confirmPassword": "123466789a"
            }
        * Os tipos de todos os campos é String.
        * O password deve ter no minimo 10 caracteres.
        * Response:
            {
                "message": "user created"
            }

    - POST /auth/signin
        * Request:
            body: {
                "email": "mjose@gmail.com",
                "password": "123466789a"
            }
        * Response:
            {
                "token": "jasonwebtoken (JWT)",
            }



 * CREDENCIAIS

    - POST /credentials/${userId}/create
    * Cria uma credencial
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
            Authentication: Bearer jsonwebtoken
            }
            body: {
                "url": "https:...",
                "username": "Fulana",
                "password": "123466789a",
                "title": "Blala"
            }
        * Os tipos de todos os campos é String.
        * Response:
            {
                "message": "credential created"
            }
    
    - GET /credentials/${userId}
    * Obtém todas as credenciais pelo userId
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
            Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "credentials": [
                    {
                        "id": 3,
                        "url": "http://ultimate-certification.name",
                        "username": "LorenzoFranco_Batista",
                        "password": "v7GcM",
                        "title": "Unifei",
                        "createdAt": "2022-07-18T19:46:40.846Z",
                        "userId": 2
                    }
                ]
            }

    - GET /credentials/${userId}/${credentialId}
    * Obtém uma credencial específica polo userId e credentialId
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
            Authentication: Bearer jsonwebtoken
            }
        * Response: 
            {
                "credential": [
                    {
                        "id": 3,
                        "url": "http://ultimate-certification.name",
                        "username": "LorenzoFranco_Batista",
                        "password": "v7GcM",
                        "title": "Unifei",
                        "createdAt": "2022-07-18T19:46:40.846Z",
                        "userId": 2
                    }
                ]
            }

    - DELETE /credentials/${userId}/${credentialId}
    * Exclui uma credencial específica polo credentialId
        * Request:
            * Params: {
                userId: 8
                credentialId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "message": "credential deleted"
            }



 * NOTAS SECRETAS

    - POST /notes/${userId}/create
    * Cria uma nota
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
            body: {
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "content": "Lanana"
            }
        * Os tipos de todos os campos é String.
        * O title tem no minimo 50 caracteres e no máximo 1000.
        * Response:
            {
                "message": "credential created"
            }

    - GET /notes/${userId}
    * Obtém todas as notas pelo userId
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "notes": [
                    {
                        "id": 1,
                        "title": "consequatur",
                        "content": "Ratione suscipit nihil quia dolore sunt minima omnis.",
                        "createdAt": "2022-07-18T13:02:20.263Z",
                        "userId": 2
                    }
                ]
            }

    - GET /notes/${userId}/${noteId}
    * Obtém uma nota específica polo userId e noteId
        * Request:
            * Params: {
                userId: 8
                noteId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response: 
            {
                "note": {
                    "id": 1,
                    "title": "consequatur",
                    "content": "Ratione suscipit nihil quia dolore sunt minima omnis.",
                    "createdAt": "2022-07-18T13:02:20.263Z",
                    "userId": 2
                }
            }
    
    - DELETE /notes/${userId}/${notesId}
    * Exclui uma nota pelo noteId
        * Request:
            * Params: {
                userId: 8
                noteId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response: {
            "message": "Note deleted"
        }


 * CARTÕES

    - POST /cards/${userId}/create
    * Cria um card
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
            * body: {
                "title": "Unifei",
                "number": "1111 1111 1111 1111",
                "cardholderName": "blalal",
                "securityCode": "123",
                "expirationDate": "11/20",
                "password": "0909",
                "isVirtual": true,
                "type": "credit"
            }
            Number Format: "1111 1111 1111 1111"
            Expiration Date Format: "MM/YY"
            Password length: 4 and only numeric characters
            Security Code length: 3 and only numeric characters
            Valid types: [credit, debit, both]
        * Response: {
            "message": "card created"
        }

    - GET /cards/${userId}
    * Obtém todos os cards pelo userId
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "cards": [
                    {
                        "id": 2,
                        "title": "vel qui expedita",
                        "number": "1089 8176 0498 7127",
                        "cardholderName": "CARLA H SILVA",
                        "securityCode": "206",
                        "expirationDate": "07/27",
                        "password": "4964",
                        "isVirtual": false,
                        "type": "both",
                        "createdAt": "2022-07-18T13:03:16.959Z",
                        "userId": 1
                    }
                ]
            }

    - GET /cards/${userId}/${cardId}
    * Obtém um card pelo userId e cardId
        * Request:
            * Params: {
                userId: 8
                cardId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "card": {
                    "id": 1,
                    "title": "sed doloribus qui",
                    "number": "3650 3177 0788 8589",
                    "cardholderName": "CARLA H SILVA",
                    "securityCode": "682",
                    "expirationDate": "07/27",
                    "password": "1265",
                    "isVirtual": false,
                    "type": "both",
                    "createdAt": "2022-07-18T13:03:01.120Z",
                    "userId": 1
                }
            }

    - DELETE /cards/${userId}/${cardId}
    * Exclui um card pelo cardId
        * Request:
            * Params: {
                userId: 8
                cardId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "message": "card deleted"
            }

 * REDES

    - POST /wifis/${userId}/create
    * Cria uma rede
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
            * body: {
                "title": "Blalal",
                "name": "Balala",
                "password": "ba11"
            }
        * Response: 
            {
                "message": "wifi created"
            }
    
    - GET /wifis/${userId}
    * Obtém todos os wifis pelo userId
        * Request:
            * Params: {
                userId: 8
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response:
            {
                "wifis": [
                    {
                        "id": 1,
                        "title": "sit",
                        "name": "possimus",
                        "password": "xSxR7jefH4rZ3aB",
                        "createdAt": "2022-07-18T13:03:46.190Z",
                        "userId": 1
                    }
                ]
            }
        
    - GET /wifis/${userId}/${wifiId}
    * Obtém uma rede pelo userId e wifiId
        * Request:
            * Params: {
                userId: 8
                wifiId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response: 
            {
                "wifi": {
                    "id": 1,
                    "title": "sit",
                    "name": "possimus",
                    "password": "xSxR7jefH4rZ3aB",
                    "createdAt": "2022-07-18T13:03:46.190Z",
                    "userId": 1
                }
            }

    - DELETE /wifis/${userId}/${wifiId}
    * Exclui uma rede pelo wifiId
        * Request:
            * Params: {
                userId: 8
                wifiId: 2
            }
            * Headers: {
                Authentication: Bearer jsonwebtoken
            }
        * Response: 
            {
                "message": "Wifi deleted"
            }

* Variáveis de ambiente:

    DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName

    PORT = number #recommended:5000

    JWT_SECRET = any string

    CRYPTR_SECRET = any string






