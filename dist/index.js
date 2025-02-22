"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatbotRoutes_1 = __importDefault(require("./api/v1/routes/chatbotRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    res.send('pong 🏓');
});
app.use('/api/v1/chatbot', chatbotRoutes_1.default);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map