import addCommas from "./addCommas";

test("should be comma seprated", () => {
  let result = addCommas(123456789);

  expect(result).toBe("123,456,789");
});
