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
const query_params_1 = __importDefault(require("../../model/query_params"));
const create_thumb_1 = __importDefault(require("../../utils/create_thumb"));
describe('Create Thumb', () => {
    it('Create Thumb Testing', () => {
        const validParam = new query_params_1.default('test', '200', '200');
        expect(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, create_thumb_1.default)(validParam); })).not.toThrow();
    });
});
