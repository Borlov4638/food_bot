import { botSetup } from "./bot";

(function () {
    try {
        botSetup().launch({
            webhook: {
                host: '80.90.179.53',
                domain: 'https://1408935-cz73058.tw1.ru',
                port: 443,
            }
        })
    } catch (err) {
        console.log(err)
    }
}())