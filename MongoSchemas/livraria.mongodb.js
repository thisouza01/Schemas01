use("Livraria")

// id, nome, telefone
db.createCollection("Editora",
{
    validator: {
        $jsonSchema: {
            bsonType:"object",
            required: ["Id", "nome", "telefone"],
            properties: {
                Id:{
                    bsonType: "int"
                },
                nome: {
                    bsonType: "string",
                    description: "Informe corretamente o nome da Editora"
                },
                telefone: {
                    bsonType: "string",
                    description: "informe corretamente o número de telefone"
                }
            }
        }
    }
})


//id, nome, data de nascimeto, email, telefone
db.createCollection("Autor",
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["Id", "nome", "data_nascimento", "email", "telefone"],
            properties: {
                Id: {
                    bsonType: "int"
                },
                nome: {
                    bsonType: "string",
                    description: "Informe corretamente o nome do Autor(a)"
                },
                data_nascimento: {
                    bsonType: ["string", "null"],
                    description: "Informe corretamente a data de nasciomento do Autor"
                },
                email: {
                    bsonType: "string",
                    description: "Informe corretamente o email"
                },
                telefone: {
                    bsonType: "string",
                    description: "Informe corretamente o telefone"
                }
            }
        }
    }    
})



//id, titulo, paginas, genero, preço
db.createCollection("Livro", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["Id", "Id_editora", "Id_autor", "titulo", "paginas", "genero", "preco"],
            properties: {
                Id: {
                    bsonType: "int"
                },
                Id_editora: {
                    bsonType: "int"
                },
                Id_autor: {
                    bsonType: "int"
                },
                titulo: {
                    bsonType: "string",
                    description: "Informe corretamente o titulo do livro"
                },
                paginas: {
                    bsonType: "int",
                    minLength: 50,
                    maxLength: 1000,
                    description: "Informe corretamente as paginas do livro"
                },
                genero: {
                    bsonType: "string",
                    description: "Informe corretamente o gênero"
                },
                preco: {
                    bsonType: "double",
                    description: "informe corretamente o preço"
                }
            }
        }
    }
})