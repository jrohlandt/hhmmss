const { mstohhmmss, sectohhmmss } = require("../index.js");

test("test mstohhmmss", () => {
  expect(mstohhmmss(5123)).toBe("00:00:05");
  expect(mstohhmmss(5123, true)).toBe("00:00:05.123");
  expect(mstohhmmss(3600000, true)).toBe("01:00:00.000");
  expect(mstohhmmss(3600001, true)).toBe("01:00:00.001");
  expect(mstohhmmss(3600010, true)).toBe("01:00:00.010");
});

test("test sectohhmmss", () => {
  expect(sectohhmmss(5.123)).toBe("00:00:05");
  expect(sectohhmmss(5)).toBe("00:00:05");
  expect(sectohhmmss(5, true)).toBe("00:00:05.000");
  expect(sectohhmmss(5.123, true)).toBe("00:00:05.123");
  expect(sectohhmmss(5.12, true)).toBe("00:00:05.120");
  expect(sectohhmmss(5.02, true)).toBe("00:00:05.020");
});
