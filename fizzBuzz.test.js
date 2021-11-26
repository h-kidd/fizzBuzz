const myFuncs = require("test_fizzBuzz.js")

describe("fizzBuzz", () => {
    let fizzBuzz = fizzBuzz.fizzBuzz;

    it("is a function", () => {
        expect(fizzBuzz).toBeDefined();
    });

    it("returns FizzBuzz when input is a multiple of 3 and 5", () => {
        expect(fizzBuzz(30)).toEqual("FizzBuzz");
    });

    it("returns FizzBuzz when input is a multiple of 3", () => {
        expect(fizzBuzz(30)).toEqual("Fizz");
    });

    it("returns FizzBuzz when input is a multiple of 5", () => {
        expect(fizzBuzz(30)).toEqual("Buzz");
    });

    it("returns input when input is not a multiple of 3 or 5", () => {
        expect(fizzBuzz(73)).toEqual(73);
    });
});