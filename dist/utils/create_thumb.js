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
const sharp_1 = __importDefault(require("sharp"));
const directory_constant_1 = require("../directory_constant");
function CreateThumb(params) {
    return __awaiter(this, void 0, void 0, function* () {
        // Configuring Preview Image
        return yield (0, sharp_1.default)(directory_constant_1.ASSETS_FULL_PATH + params.filename + '.jpg')
            .resize(Number(params.width), Number(params.height))
            .jpeg({ quality: 80 })
            .toFile(directory_constant_1.ASSETS_THUMB_PATH + params.getThumbStr() + '.jpg');
    });
}
exports.default = CreateThumb;
