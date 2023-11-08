// import { botSetup } from "./bot";

import { app } from "./bot";

// (function () {
//     try {
//         botSetup().launch()
//     } catch (err) {
//         console.log(err)
//     }
// }())

app.listen(3000, () => {
    console.log('Bot is running on port 3000');
});