const { addKeyword } = require('@bot-whatsapp/bot')

// Importa la biblioteca openai
const { Configuration, OpenAIApi } = require('openai');

// Configura la biblioteca openai con tu clave API
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// Función para hacer una petición a la API de OpenAI
async function getCompletion(prompt) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.5,
    });

    
    return completion.data.choices[0].text;
    
    
  } catch (error) {
    console.error('Error al hacer la petición a la API de OpenAI:', error);
    return null;
  }
}





const flowPreguntas = addKeyword(['👉 Preguntas Frecuentes']).addAnswer(
    [
        '📝 *Preguntas Frecuentes*',
        '',
        '',
        '*¿Qué estilo de fotografía ofrecen para bodas?*',
        '',
        'Nos encanta la fotografía creativa, artistica y documental.',
        '',
        '*¿Trabajan con un fotógrafo principal o con un equipo de fotógrafos?*',
        '',
        'Arody es nuestro fotografo principal, pero tenemos opcion B para cualquer contratiempo.',
        '',
        '*¿Qué garantías ofrecen en cuanto a la calidad de las fotografías?*',
        '',
        'Utilizamos cámaras Sony fullframe de alta gama y objetivos muy nítidos y luminosos, esto nos asegura la calidad optica de las imagenes.',
        '',
        '*¿Pueden ayudar con la planificación de la sesión preboda?*',
        '',
        'Por supuesto, nuestro trabajo consiste en asistirte en todo lo que necesites.',
        '',
        '*¿Cuánto tiempo antes de la boda debo contactarlos para reservar sus servicios?*',
        '',
        'Lo ideal es que nos aparte con 6 meses de anticipación, pero si es menos tiempo no te preocupes, podemos trabajar en ello.',
        '',
        '*¿Cuáles son los medios de pago que aceptan?*',
        '',
        'Aceptamos transferencias bancarias, depósitos bancarios y pagos en efectivo, pagos con tarjetas de crédito y débito (con 6% de comisiones adicionales).',
        '',
        '*¿Cómo aparto mi fecha?*',
        '',
        'Puedes apartar tu fecha con 30% de anticipo del valor del servicio contratado para la firma del contrato, el resto se paga dos semanas antes de la boda.',

    ], { delay:1000 },
    
)

const flowAdicionales = addKeyword(['👉 Adicionales']).addAnswer(
    [
    
        '⭐️ USB metálico de 128 GB con caja circular de madera y envío a todo México',
        '',
        '*$ 1,200*'

    ], {delay:700, media: 'https://arodyfajardo.com/wp-content/uploads/2023/03/cajitas.jpg'}
).addAnswer(
    [
    
        '⭐️ Ampliación 50 cm x 75 cm con textura protectora',
        '',
        '*$ 2,800*'

    ], {delay:500, media: 'https://arodyfajardo.com/wp-content/uploads/2023/03/ampliacion-e1678731635931.png'}
).addAnswer(
    [
    
        '⭐️ PhotoBook con 15 lienzos de 8.5x24 pulgadas para 30 páginas en papel fotográfico de alta gama, para 100 fotos y diseño incluido. La pasta puede ser dura o acolchada en acabados en foto laminada, vinil, tela o en acrílico sin afectar su costo. El tiempo de elaboración es de 15 a 20 días hábiles posteriores al diseño final. Envío a todo México.',
        '',
        '*$ 4,200*'

    ], {media: 'https://arodyfajardo.com/wp-content/uploads/2023/03/album.mp4'}
)




const flowSesionesPreBoda = addKeyword(['👉 Sesión preboda']).addAnswer(
    [
        '📸 *Sesión preboda*',
        '',
        'Generamos momentos románticos para capturar la química y el amor que se tienen, momentos íntimos y naturales en un lugar significativo.',
        '',
        '👉 *Esta sesión incluye:*',
        '',
        '⭐️ 1 hora y 30 minutos de sesión fotográfica',
        '⭐️ 2 locacaciones cercanas entre si',
        '⭐️ 2 cambios de vestuario',
        '⭐️ 1 video musicalizado con las fotografias (5 minutos aproximadamente)',
        '⭐️ 1 ampliación 50 cm x 60 cm con marco y textura protectora',
        '⭐️ Almacenamiento de por vida',
        '⭐️ Envío digital del material',
        '',
        '👉 *Esta sesión NO incluye:*',
        '',
        '⭐️ Viáticos si la sesión es fuera de la ciudad de Tuxtla Gutiérrez',
        '⭐️ Costos de acceso a locaciones',
        '',
        '*$ 4,500*',

    ], { delay:1500, media: 'https://arodyfajardo.com/wp-content/uploads/2022/12/v2.jpg'},
)

const flowBoda = addKeyword(['👉 El día de la boda']).addAnswer(
    [
        '📸 *El día de la boda*',
        '',
        'Capturamos los momentos más importantes y emocionantes de tu boda, desde que se arreglan hasta la recepción. Toda la alegría, la emoción y la pasión de tu día especial.',
        '',
        '👉 *Esta sesión incluye:*',
        '',
        '⭐️ Cobertura completa de la boda',
        '⭐️ 300 - 350 fotografías retocadas',
        '⭐️ Almacenamiento de por vida',
        '⭐️ Envío digital del material fotográfico',
        '',
        '👉 *Esta sesión NO incluye:*',
        '',
        '⭐️ Viáticos si la boda es fuera de la ciudad de Tuxtla Gutiérrez',
        '',
        '*$ 7,900*',

    ], { delay:1500, media:'https://arodyfajardo.com/wp-content/uploads/2023/01/ARO8435-Editar-scaled.jpg'},
)


const flowO = addKeyword('open')
    .addAnswer('Hola soy ChatGPT, Dime ¿Cómo puedo ayudarte hoy?', null, async (ctx, {flowDynamic}) => {

        console.log(ctx.body);
        const response = await getCompletion("dime si tienes tacos");
        await flowDynamic(response)

    })


const flow = addKeyword(['hola']).addAnswer( 
    
    ['...'],{ media: 'https://arodyfajardo.com/wp-content/uploads/2023/03/intro2.mp4'}

    

).addAnswer(
        [
            '🙌 ¡Hola! Será un gusto poder atenderte el día de hoy.',
            '',
            '👰‍♀️🤵‍♂️ Podemos ofrecerte servicios de fotografía personalizados que se adapten a tus necesidades y presupuesto, desde fotografías antes de la boda hasta el día de la boda.',
            '',
            'Puedes hacer touch en una o todas las opciones según lo que te interese 🤖',
            '',
            'Por favor dime en que puedo ayudarte:',

        ], { delay: 1500 , buttons: [{ body: '👉 Sesión preboda' }, { body: '👉 El día de la boda' }, { body: '👉 Adicionales' }, { body: '👉 Preguntas Frecuentes' }],}
    )

//exportamos el flow en node
module.exports = { flow, flowO, flowSesionesPreBoda, flowBoda, flowAdicionales, flowPreguntas }
