Convert seconds and milliseconds to a HH:mm:ss.SSS formatted string.

Installation:

```
npm install @jrohlandt/hhmmss
```

Usage:

```
const { mstohhmmss, sectohhmmss } = require("@jrohlandt/hhmmss");

mstohhmmss(5123)
// "00:00:05"

// keepFractions of seconds true
mstohhmmss(5123, true)
// "00:00:05.123"

sectohhmmss(5.123)
// "00:00:05"

// keepFractions of seconds true
sectohhmmss(5.123, true)
// "00:00:05.123"

```
