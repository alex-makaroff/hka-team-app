const tg = window.Telegram.WebApp;


export const useTelegram = () => {

    return {
        tg,
        tgUser: tg.initDataUnsafe?.user
    }
}
