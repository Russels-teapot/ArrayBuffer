import { getBuffer, ArrayBufferConverter } from '../ArrayBufferConverter';

test('parse buffer', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load();
  expect(arrayBufferConverter.toString(this.buffer)).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
