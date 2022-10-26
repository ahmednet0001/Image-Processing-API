class QueryParams {
  readonly filename: string;
  readonly width: string;
  readonly height: string;

  constructor(filename: string, width: string, height: string) {
    this.filename = filename;
    this.width = width;
    this.height = height;
  }
  getThumbStr(): string {
    let thumbName = '';
    thumbName += this.filename;
    thumbName += '_';
    thumbName += this.width;
    thumbName += '_';
    thumbName += this.height;
    return thumbName;
  }
}
export default QueryParams;
