
//Core del bot, todo lo necesario para crearlo
const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')

//Adaptadores para el bot proveedor de la API de WhatsApp y base de datos
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//Portal para ver el QR
const QRPortalWeb = require('@bot-whatsapp/portal')

//Flows
const { flow, flowBoda, flowSesionesPreBoda, flowAdicionales, flowPreguntas } = require('./flows')




const main = async () => {

    //Para usar la base de datos en memoria
    const adapterDB = new MockAdapter()
    //Para crear los flows
    const adapterFlow = createFlow([flow,flowBoda,flowSesionesPreBoda,flowAdicionales, flowPreguntas])
    //Para crear el proveedor de la API de WhatsApp
    const adapterProvider = createProvider(BaileysProvider)



    //Creamos el bot
    createBot({

        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
        
    })

    QRPortalWeb({port:4001})
}


//Ejecutamos el bot
main()

sendFile('+529611382035','bot.qr.png')

