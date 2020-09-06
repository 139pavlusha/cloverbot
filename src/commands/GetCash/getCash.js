generateButtons = (buttons) => {
    let arr = [];
    buttons.forEach(element => {
        arr.push([{ text: element.text, callback_data: element.callback }]);
    });
    arr.push([{ text: `👈 Назад`, callback_data: 'STARTED' }]);
    return arr;
}

const ButtonsGroup = (buttons) => {
    return ({
        reply_markup: {
            inline_keyboard: generateButtons(buttons)
        }
    });
}

const message = () => {
    return (`Выберите валюту 👇 для вывода`);
}

module.exports = (buttons) => async (ctx) => {
    ctx.telegram.sendMessage(ctx.from.id, message(), ButtonsGroup(buttons));
}