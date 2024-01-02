const { createReadStream } = require("fs");

/**
 * Streams read data in chunks
 * If you console.log results from createReadStream and using the data event (steam.on("data")), you will see they are printed in chunks
 */

// default 64kb
// last buffer - remainder
// highWaterMark - controls the size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
