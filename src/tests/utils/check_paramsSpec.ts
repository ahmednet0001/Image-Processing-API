import IsValid from '../../utils/check_params';
describe('Validation params', () => {
  it('valid params', () => {
    const validParam = {
      filename: 'image',
      width: '200',
      height: '200',
    };
    expect(IsValid(validParam)).toBe(true);
  });
  it('invalid params', () => {
    const invalidParam = {
      filename: '',
      width: '',
      height: '',
    };
    expect(IsValid(invalidParam)).toBe(false);
  });
  it('invalid params', () => {
    const invalidParam = {
      filename: 'image',
    };
    expect(IsValid(invalidParam)).toBe(false);
  });
  it('invalid params', () => {
    const invalidParam = undefined;
    expect(IsValid(invalidParam)).toBe(false);
  });
});
