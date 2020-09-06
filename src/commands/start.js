const ButtonsGroup = {
    reply_markup: {
        inline_keyboard: [
            [{ text: `💰 Внести депозит`, callback_data: 'DEPOSIT' }],
            [{ text: `Старт Игры`, url: 'https://luckyclover77.com' }],
            [{ text: `Вывод`, callback_data: 'GET_CASH' }],
            [{ text: `Английский 🇺🇸`, callback_data: 'ENG' }, { text: `Русский 🇷🇺`, callback_data: `RUS` }],
            [{ text: `Информация`, callback_data: 'INFORMATION' }]
        ]
    }
}

const message = (balance) => {
    return (`
Добро пожаловать в 🍀 ЛакиКлевер 🍀
Очень интересную и 🤑 прибыльную 💰 игру 🎲
Испытай удачу, найди 4 клевера подряд! 🔥🔥🔥
Помощь @luckygamesplaysupportbot
Полная версия: https://luckyclover77.com
    
💼Ваш баланс:
Demo: ${balance.demo}
RUB: ${balance.rub}
USD: ${balance.usd}`);
}

module.exports = (balance) => async (ctx) => {
    ctx.telegram.sendMessage(ctx.from.id, message(balance), ButtonsGroup);
}