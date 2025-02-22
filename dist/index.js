"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatbotRoutes_1 = __importDefault(require("./api/v1/routes/chatbotRoutes"));
const gamesRoutes_1 = __importDefault(require("./api/v1/routes/gamesRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1/games', gamesRoutes_1.default);
app.use('/api/v1/chatbot', chatbotRoutes_1.default);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map