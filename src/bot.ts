import { Scenes, Telegraf, session } from "telegraf";
import { getRandomFoodScene } from "./controllers/radmom-food.scene";
import { startScene } from "./controllers/start.scene";
import { randomRestScene } from "./controllers/random-restorant";
import express from "express";
import bodyParser from "body-parser";
require('dotenv').config();


export const bot = new Telegraf<Scenes.SceneContext>(process.env.BOT_TOKEN!)
bot.createWebhook({ domain: '1408935-cz73058.tw1.ru', path: '/', })
//bot.telegram.setWebhook('https://1408935-cz73058.tw1.ru/');
//@ts-ignore
const stage = new Scenes.Stage<Scenes.SceneContext>([randomRestScene, startScene, getRandomFoodScene])
export const app = express();
app.use(bodyParser.json());



bot.use((ctx, next) => {
    console.log(ctx)
    next()
})
bot.use(session())
bot.use(stage.middleware())

bot.start(ctx => {
    ctx.scene.enter('startScene')
})

app.post('/1408935-cz73058.tw1.ru', (req, res) => {
    bot.handleUpdate(req.body);
    res.status(200).end();
});

