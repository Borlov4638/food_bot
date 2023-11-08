import { Scenes, Telegraf, session } from "telegraf";
import { getRandomFoodScene } from "./controllers/radmom-food.scene";
import { startScene } from "./controllers/start.scene";
import { randomRestScene } from "./controllers/random-restorant";
require('dotenv').config();


export const bot = new Telegraf<Scenes.SceneContext>(process.env.BOT_TOKEN!)

const stage = new Scenes.Stage<Scenes.SceneContext>([randomRestScene, startScene, getRandomFoodScene])


export const botSetup =() =>{
    bot.use((ctx, next)=>{
        console.log(ctx)
        next()
    })
    bot.use(session())
    bot.use(stage.middleware())

    bot.start(ctx =>{
        ctx.scene.enter('startScene')
    })

    return bot
}