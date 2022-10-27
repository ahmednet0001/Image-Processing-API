import QueryParam from '../../model/query_params';
import CreateThumb from '../../utils/create_thumb';
describe('Create Thumb', () => {
  it('Create Thumb Testing', () => {
    const validParam = new QueryParam('test', '200', '200');
    expect(async () => await CreateThumb(validParam)).not.toThrow();
  });
});
