import { Markup } from "telegraf";
import { CMD_TEXT } from "../config/consts";

export const mainMenu = Markup.keyboard([
    [CMD_TEXT.randomRest, CMD_TEXT.allRestor],
    [CMD_TEXT.randomFood]
]).resize()

export const backButtonMenu = Markup.keyboard([CMD_TEXT.menu]).resize()