import IsValid from '../../utils/check_params';
describe('Validation params', () => {
  it('valid params', () => {
    const validParam = {
      name: 'image',
      width: '200',
      height: '200',
    };
    expect(IsValid(validParam)).toBe(true);
  });
  it('invalid params', () => {
    const invalidParam = {
      name: '',
      width: '',
      height: '',
    };
    expect(IsValid(invalidParam)).toBe(false);
  });
  it('invalid params', () => {
    const invalidParam = {
      name: 'image',
    };
    expect(IsValid(invalidParam)).toBe(false);
  });
  it('invalid params', () => {
    const invalidParam = undefined;
    expect(IsValid(invalidParam)).toBe(false);
  });
});
