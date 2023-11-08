import { Scenes } from "telegraf";
import { mainMenu } from "../utils/buttons";
import { CMD_TEXT } from "../config/consts";

export const startScene = new Scenes.BaseScene<Scenes.SceneContext>('startScene')

startScene.enter(ctx =>{
    ctx.reply("Вы находитесь в меню", {...mainMenu})
})

startScene.hears(CMD_TEXT.randomRest, ctx =>{
    ctx.scene.enter('randomRest')
})

startScene.hears(CMD_TEXT.randomFood, ctx =>{
    ctx.scene.enter('FoodScene')
})
