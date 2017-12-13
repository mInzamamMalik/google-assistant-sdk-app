import * as functions from 'firebase-functions';
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

// http example
export const webhook = functions.https.onRequest((req, res) => {

    const app = new ActionsSdkApp({ request: req, response: res });

    function mainIntent(app: any) {
        let inputPrompt = app.buildInputPrompt(false,
            'Hi! Say something, and I\'ll repeat it');
        app.ask(inputPrompt);
    }

    function respond(app: any) {
        let inputPrompt = app.buildInputPrompt(false,
            'hello from buy intent.');
        app.ask(inputPrompt);
    }

    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, mainIntent);
    actionMap.set(app.StandardIntents.TEXT, respond);

    app.handleRequest(actionMap);
})