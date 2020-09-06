const ButtonsGroup = {
    reply_markup: {
        inline_keyboard: [
            [{ text: `👈 Назад`, callback_data: 'GET_CASH' }]
        ]
    }
}

const message = () => {
    return (`Введите номер карты или криптовалютный адрес для снятия средств`);
}

module.exports = () => async (ctx) => {
    ctx.telegram.sendMessage(ctx.from.id, message(), ButtonsGroup);
}