const { GoogleGenAI } = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const generateImage = async () => {
  console.log('generateImage')
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: 'Pourquoi le ciel est bleu ?'
  })
  console.log(response.text)
}

const generateText = async (prompt) => {
  console.log('generate text')
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    config: {
      responseMimeType: 'application/json'
    },
    contents: prompt
  })
  console.log(response.candidates[0].content)
}

module.exports = {
  generateImage,
  generateText
}
