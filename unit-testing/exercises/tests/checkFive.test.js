const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("displays correct output when passed a number less than 5", function() {
       //code here...
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });
    
    //TODO: test a number greater than 5
    test('when num > 5, output "num is greater than 5." ', function() {
        let result = checkFive(8); // test a number greater than 5
        expect(result).toBe("8 is greater than 5."); // Expected return '8 is greater than 5.'
    });

    //TODO: test a number equal to 5
    test('when num = 5, output "num is equal to 5." ', function() {
        let result = checkFive(5); // test a number greater than 5
        expect(result).toBe("5 is equal to 5."); // Expected return '5 is equal to 5.'
    });
 

 });