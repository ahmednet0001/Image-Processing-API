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
const check_file_exist_1 = __importDefault(require("../../utils/check_file_exist"));
describe('File exist', () => {
    it('Existing file', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'encenadaport';
        const result = yield (0, check_file_exist_1.default)(filename);
        expect(result).toBeTrue();
    }));
    it('file not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'random';
        const result = yield (0, check_file_exist_1.default)(filename);
        expect(result).toBeFalse();
    }));
});
