import FileExists from '../../utils/check_file_exist';
describe('File exist', () => {
  it('Existing file', async () => {
    const filename = 'encenadaport';

    const result = await FileExists(filename);
    expect(result).toBeTrue();
  });
  it('file not found', async () => {
    const filename = 'random';

    const result = await FileExists(filename);

    expect(result).toBeFalse();
  });
});
