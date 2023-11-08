import { Scenes } from "telegraf";
import { CMD_TEXT } from "../config/consts";
import { getRandomRest } from "./command";

export const randomRestScene = new Scenes.BaseScene<Scenes.SceneContext>('randomRest')

randomRestScene.enter(ctx =>{
    getRandomRest(ctx)
})

randomRestScene.hears(CMD_TEXT.menu, (ctx) =>{
    ctx.scene.enter('startScene')
})

randomRestScene.leave(ctx =>{
    console.log("Random rest scene leave")
})