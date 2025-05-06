const { generateText } = require('../adapters/gemini-adapter')

const generatePlayer = async (data) => {
  const aiResponse = await generateText(
    `
    Génère un personnage de jeu RPG en fonction des paramètres suivants :
     Nom: ${data.name}
     Classe: ${data.class}
     Univers: Dark fantasy medieval
    Soit drôle.
    Répond en format JSON avec les champs "name", "description" et en français
    `
  )
  return aiResponse
}

module.exports = {
  generatePlayer
}
