require("dotenv").config();
const { BOT_TOKEN } = process.env;

const Telegraf = require("telegraf");
const TSL = require("telegraf-session-local");

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

const getCash = require('./commands/GetCash/getCash');
const enterCard = require('./commands/GetCash/enterCard');

const init = async (bot) => {
    // Middleware
    // bot.use(new TSL({ database: "data/session.json" }).middleware());
    // Commands
    bot.start(startCommand({ demo: 0, rub: 0, usd: 20 }));
    bot.help(helpCommand());
    // Actions
    bot.action('STARTED', startCommand({ demo: 0, rub: 0, usd: 20 }));
    bot.action('GET_CASH', getCash([{ text: '1190 RUB', callback: 'ENTER_CARD' }]));
    bot.action('ENTER_CARD', enterCard());
    return bot;
}

init(new Telegraf(BOT_TOKEN)).then(async (bot) => {
    await bot.launch();
    console.log(`Launched ${new Date()}`);
});