// Importa la biblioteca openai
const { Configuration, OpenAIApi } = require('openai');

// Configura la biblioteca openai con tu clave API
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// Función para hacer una petición a la API de OpenAI
async function getCompletion() {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello world',
    });
    console.log(completion.data.choices[0].text);
  } catch (error) {
    console.error('Error al hacer la petición a la API de OpenAI:', error);
  }
}

// Ejemplo de uso de la función getCompletion
getCompletion();




















