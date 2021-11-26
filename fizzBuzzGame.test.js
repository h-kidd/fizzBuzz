const fizzBuzzGame = require("./fizzBuzzGame.js");

describe("fizzBuzz", () => {
    let fizzBuzz = fizzBuzzGame.fizzBuzz;

    it("is a function", () => {
        expect(fizzBuzz).toBeDefined();
    });

    it("returns FizzBuzz when input is a multiple of 3 and 5", () => {
        expect(fizzBuzz(30)).toEqual("FizzBuzz");
    });

    it("returns Fizz when input is a multiple of 3", () => {
        expect(fizzBuzz(9)).toEqual("Fizz");
    });

    it("returns Buzz when input is a multiple of 5", () => {
        expect(fizzBuzz(20)).toEqual("Buzz");
    });

    it("returns input when input is not a multiple of 3 or 5", () => {
        expect(fizzBuzz(73)).toEqual(73);
    });
});