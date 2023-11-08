import { Context } from "telegraf"
import { backButtonMenu, mainMenu } from "../utils/buttons"
import { restorantService } from "../services/restorant"


export const backToMenu = (ctx: Context) => ctx.reply('Теперь ты в меню', {...mainMenu})

export const getRandomRest = (ctx:Context) => ctx.reply('вот это рандомный рестик', {...backButtonMenu})

export const getRandomFood = (ctx:Context) => ctx.reply(restorantService.getRandomFood(), {...backButtonMenu})