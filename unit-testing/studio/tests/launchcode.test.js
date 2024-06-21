// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {

  // Write your unit tests here!
  test('object key "organization" should contain value "nonprofit"', function () {
    expect(launchcode.organization).toEqual('nonprofit')
  });

  test('object key "executiveDirector" should contain value "Jeff"', function () {
    expect(launchcode.executiveDirector).toEqual('Jeff')
  });

  test('object key "percentageCoolEmployees" should contain value "100"', function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  });

  test('object key "programsOffered" should contain 4 excpected values', function () {
    expect(launchcode.programsOffered).toContain("Web Development")
    expect(launchcode.programsOffered).toContain('Data Analysis')
    expect(launchcode.programsOffered).toContain('Liftoff')
    expect(launchcode.programsOffered).toContain('Salesforce')
    expect(launchcode.programsOffered.length).toBe(4)
  });

  it("launchOutput returns Launch! if number passed is only divisable by 2", function () {
    expect(launchcode.launchOutput(4)).toEqual("Launch!");
  });
  it("launchOutput returns Code! if number passed is only divisable by 3", function () {
    expect(launchcode.launchOutput(9)).toEqual("Code!");
  });
  it("launchOutput returns Rocks! if number passed is only divisable by 5", function () {
    expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  });
  it("launchOutput returns LaunchCode! if number passed is only divisable by 2 and 3", function () {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });
  it("launchOutput returns Code Rocks! if number passed is only divisable by 5 and 3", function () {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });
  it("launchOutput returns Launch Rocks! (CRASH!!!!) if number passed is only divisable by 5 and 2", function () {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  });
  it("launchOutput returns LaunchCode Rocks! if number passed is only divisable by 5, 3, and 2", function () {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });
  it("launchOutput returns Rutabagas! That doesn't work. if number passed is not divisable by 5, 3, or 2", function () {
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
  });

});