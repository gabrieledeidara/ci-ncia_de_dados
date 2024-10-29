async function quantidadeUsuarios() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/mais/numero-usuarios.json'
const res = await fetch (url)
const dados = await res.json()    
}