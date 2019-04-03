
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange & act
      const rocket = new Rocket();
      // assert
      expect(typeof rocket.name).toBe('string');
      expect(typeof rocket.colour).toBe('string');
      expect(rocket.flying).toBe(false);
    });

    test("it should set the rocket's name if provided", () => {
      // arrange & act
      const rocket = new Rocket({name: 'Exodus'});
      // assert
      expect(rocket.name).toBe('Exodus');
    });

    test("it should set the rocket's colour if provided", () => {
      // arrange & act
      const rocket = new Rocket({colour: 'silver'});
      // assert
      expect(rocket.colour).toBe('silver');
    });

    test("it should set the rocket's flying state if provided", () => {
      // arrange & act
      const rocket = new Rocket({flying: true});
      // assert
      expect(rocket.flying).toBe(true);
    });
  });

  describe('liftOff', () => {
    test('if the rocket is currently flying, returns false and does not alter the flying property', () => {
      // arrange
      const rocket = new Rocket();
      rocket.flying = true;
      // act
      const result = rocket.liftOff();
      // assert
      expect(result).toBe(false);
      expect(rocket.flying).toBe(true);
    });
    test("if the rocket is not currently flying (it's landed), returns true and sets flying property to true", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.liftOff();
      // assert
      expect(result).toBe(true);
      expect(rocket.flying).toBe(true);
    });
  });

  describe('land', () => {
    test("if the rocket is not currently flying (it's landed), returns false", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.land();
      // assert
      expect(result).toBe(false);
      expect(rocket.flying).toBe(false);
    });

    test("if the rocket is currently flying, returns true and sets flying property to false", () => {
      // arrange
      const rocket = new Rocket();
      rocket.flying = true;
      // act
      const result = rocket.land();
      // assert
      expect(result).toBe(true);
      expect(rocket.flying).toBe(false);
    });
  });

  describe('status', () => {
    // no need to test this method, as it is very simple
  });

  describe('sendCodedSignal', () => {
    test("if nothing is passed to .sendCodedSignal, it returns 'boop'", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.sendCodedSignal();
      // assert
      expect(result).toBe('boop');
    });

    test("if a code < 10 is passed to .sendCodedSignal and the rocket is not flying, it returns 'beep'", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.sendCodedSignal(1);
      // assert
      expect(result).toBe('beep');
    });

    test("if a code < 10 is passed to .sendCodedSignal and the rocket is flying, it returns 'beep beep'", () => {
      // arrange
      const rocket = new Rocket();
      rocket.flying = true;
      // act
      const result = rocket.sendCodedSignal(1);
      // assert
      expect(result).toBe('beep beep');
    });

    test("if a code >= 10 is passed to .sendCodedSignal and the rocket is not flying, it returns 'boop beep beep'", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.sendCodedSignal(10);
      // assert
      expect(result).toBe('boop beep beep');
    });

    test("if a code >= 10 is passed to .sendCodedSignal and the rocket is flying, it returns 'boop boop boop'", () => {
      // arrange
      const rocket = new Rocket();
      rocket.flying = true;
      // act
      const result = rocket.sendCodedSignal(10);
      // assert
      expect(result).toBe('boop boop boop');
    });

    test("if a code that is not undefined and is not a number (say a string) is passed to .sendCodedSignal and the rocket is not flying, it returns 'boop beep beep'", () => {
      // arrange
      const rocket = new Rocket();
      // act
      const result = rocket.sendCodedSignal("hello");
      // assert
      expect(result).toBe('boop beep beep');
    });

    test("if a code that is not undefined and is not a number (say a string) is passed to .sendCodedSignal and the rocket is flying, it returns 'boop boop boop'", () => {
      // arrange
      const rocket = new Rocket();
      rocket.flying = true;
      // act
      const result = rocket.sendCodedSignal("hello");
      // assert
      expect(result).toBe('boop boop boop');
    });
  });

});
