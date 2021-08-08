class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    delete this.items[this.top];

    this.top -= 1;
  }

  get peek() {
    return this.items[this.top];
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('foo');

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('foo');
  });

  it('can pop off', () => {
    stack.push('foo');

    const prevTop = stack.top;

    stack.pop();

    expect(stack.top).toBe(prevTop - 1);
    expect(stack.items[prevTop]).toBeUndefined;
  });
});
