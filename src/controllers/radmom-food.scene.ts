import { Scenes } from "telegraf";
import { getRandomFood } from "./command";
import { CMD_TEXT } from "../config/consts";

export const getRandomFoodScene = new Scenes.BaseScene<Scenes.SceneContext>('FoodScene')

getRandomFoodScene.enter((ctx) =>{
    getRandomFood(ctx)
})

getRandomFoodScene.hears(CMD_TEXT.menu, (ctx) =>{
    ctx.scene.enter('startScene')
})

getRandomFoodScene.leave(ctx =>{
    console.log('leave')
})
