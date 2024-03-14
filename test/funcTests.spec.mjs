// funcTests.spec.mjs
import { JSDOM } from 'jsdom';
import { expect } from 'chai';

describe('Dice Functions', () => {
  let window, document;

  before(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.window = dom.window;
    global.document = window.document;
  });

  beforeEach(() => {
    const scriptContent = `
      function rollNDice(n, sides) {
        let result = 0;
        for (let i = 0; i < n; i++) {
          result += Math.floor(Math.random() * sides) + 1;
        }
        return result;
      }
    `;
    const scriptElement = document.createElement('script');
    scriptElement.textContent = scriptContent;
    document.body.appendChild(scriptElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('rollNDice', () => {
    it('should return a valid result for rolling one die', () => {
      const result = window.rollNDice(1, 6);
      expect(result).to.be.within(1, 6);
    });

    it('should return a valid result for rolling multiple dice', () => {
      const result = window.rollNDice(3, 10);
      expect(result).to.be.within(3, 30);
    });

    it('should handle zero dice correctly', () => {
      const result = window.rollNDice(0, 20);
      expect(result).to.equal(0);
    });
  });
});