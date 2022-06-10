const { msToHHMMSSXXX, secToHHMMSSXXX } = require("../index.js");

test("test msToHHMMSSXXX", () => {
  expect(msToHHMMSSXXX(5123)).toBe("00:00:05.123");
  expect(msToHHMMSSXXX(3600000)).toBe("01:00:00.000");
  expect(msToHHMMSSXXX(3600001)).toBe("01:00:00.001");
  expect(msToHHMMSSXXX(3600010)).toBe("01:00:00.010");
});

test("test secToHHMMSSXXX", () => {
  expect(secToHHMMSSXXX(5.123)).toBe("00:00:05.123");
  expect(secToHHMMSSXXX(5.12)).toBe("00:00:05.120");
  expect(secToHHMMSSXXX(5.02)).toBe("00:00:05.020");
});
