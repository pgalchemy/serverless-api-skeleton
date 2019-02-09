describe('Hello World', () => {
  let helloWorld, cb, context;

  before(() => {
    helloWorld = require('../../src/handlers/rest/helloWorld').helloWorld;
  });

  beforeEach(() => {
    context = {};
    cb = sinon.spy();
  });

  it('should show "Hello World"', async() => {

    await helloWorld({result: 'Hello World'}, context, cb);

    const args = cb.getCall(0).args[1];
    const body = JSON.parse(args.body);

    expect(body.input.result).to.eq('Hello World');

  });
});