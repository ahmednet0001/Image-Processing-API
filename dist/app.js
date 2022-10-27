"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const query_params_1 = __importDefault(require("./model/query_params"));
const check_params_1 = __importDefault(require("./utils/check_params"));
const check_file_exist_1 = __importDefault(require("./utils/check_file_exist"));
const create_thumb_1 = __importDefault(require("./utils/create_thumb"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/image', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        filename: req.query.filename,
        width: req.query.width,
        height: req.query.height,
    };
    if (!req.query || (0, check_params_1.default)(query) === false) {
        res.send('Error : Invalid url params').status(404);
        return;
    }
    // If valid params create param model
    const queryParams = new query_params_1.default(req.query.filename, req.query.width, req.query.height);
    // Check file exist
    let exist = yield (0, check_file_exist_1.default)(queryParams.filename);
    if (!exist) {
        res.send('Error  : Image not exist ').status(404);
        return;
    }
    // Check thumbnail exist
    exist = yield (0, check_file_exist_1.default)(queryParams.getThumbStr(), true);
    if (!exist) {
        // Create thumbnail
        yield (0, create_thumb_1.default)(queryParams);
    }
    // Get thumbnail to response
    const x = path_1.default.join(__dirname + '/assets/thumb/' + queryParams.getThumbStr() + '.jpg');
    res.sendFile(x);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = app;
