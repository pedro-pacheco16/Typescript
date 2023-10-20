interface UsuarioRS {
  nome: string
  idade: number
  nacionalidade: string
  email: string
  sexualidade: string
}

const User: UsuarioRS = {
  nome: "Pedro Augusto",
  idade: 23,
  nacionalidade: "Brasileiro",
  email: "p@gmail.com",
  sexualidade: "Masculino"
 }

 const User1: UsuarioRS = {
  nome: "Amanda Avelino",
  idade: 23,
  nacionalidade: "Brasileiro",
  email: "A@gmail.com",
  sexualidade: "Feminino"
 }

 console.log(User)
 console.log(User1)