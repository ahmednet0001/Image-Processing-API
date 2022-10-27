"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_params_1 = __importDefault(require("../../utils/check_params"));
describe('Validation params', () => {
    it('valid params', () => {
        const validParam = {
            filename: 'image',
            width: '200',
            height: '200',
        };
        expect((0, check_params_1.default)(validParam)).toBe(true);
    });
    it('invalid params', () => {
        const invalidParam = {
            filename: '',
            width: '',
            height: '',
        };
        expect((0, check_params_1.default)(invalidParam)).toBe(false);
    });
    it('invalid params', () => {
        const invalidParam = {
            filename: 'image',
        };
        expect((0, check_params_1.default)(invalidParam)).toBe(false);
    });
});
