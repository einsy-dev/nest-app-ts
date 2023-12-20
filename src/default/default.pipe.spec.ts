import { DefaultPipe } from './default.pipe';
import { Schema } from './schemas/default.schema';

describe('DefaultPipe', () => {
  it('should be defined', () => {
    expect(new DefaultPipe(Schema)).toBeDefined();
  });
});
