const express = require("express")
const { User } = require("./models")

const app = express()
app.use(express.json())
app.use("/", express.static("./views/home"))

app.get("/api/user", async (request, response) => {
  const users = await User.findAll()

  response.json(users)
})
app.post("/api/user", async (request, response) => {
  const newUser = {
    name: request.body.name,
    birthDate: request.body.birthDate,
    email: request.body.email,
    cpf: request.body.cpf,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const user = await User.create(newUser)

  response.json(user)
})
app.delete("/api/user/:id", function (request, response) {
  if (!request.params.id) {
    request
      .status(400)
      .send({ message: "É necessário um id para deletar um usuário" })
    return
  }

  User.destroy({ where: { id: request.params.id } })
    .then((data) => {
      response.send({ deleteUsersCount: data })
    })
    .catch((erro) => {
      response.status(500).send({
        message:
          erro.message || "Ocorreu erro ao tentar criar uma novo usuário.",
      })
    })
})

// serviços => serviceTypes
//   nome => name
//   preço => price
//   duração => duration

// animais => animals
//   nome => name
//   raça => breed
//   idade => age
//   peso => weight
//   nome do dono => owneName
//   é vacinado => isVaccinated

// atendimentos => services
//   serviço => serviceType
//   animal => animal
//   data agendada => scheduledDate

app.listen(3000, () => {
  console.log(`Servidor está rodando em http://localhost:3000`)
})
