'use strict';

/* Question 04 (stretch)
This is a STRETCH QUESTION.
Given a size in bits convert it to relevant size in B/KB/MB/GB/TB.
Round your answers to two decimal places at most. Use base 10 for sizes.
- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB
More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol
Examples:
- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"
*/

const filesize = function (bytes) {
  //   if (bytes < 1_000) {
  //     return `${bytes}B`;
  //   } else if (bytes < 1_000_000) {
  //     return `${bytes / 1_000}kB`;
  //   } else if (bytes < 1_000_000_000) {
  //     return `${bytes / 1000000}MB`;
  //   } else if (bytes < 1000000000000) {
  //     return `${bytes / 1000000000}GB`;
  //   } else {
  //     return `${bytes / 1000000000000}TB`;
  //   }

  const units = ['B', 'kB', 'MB', 'GB'];

  for (const unit in hash) {
  }

  for (const unit of units) {
    if (bytes < 1000) {
      return `${bytes}${unit}`;
    }
    bytes /= 1000;
  }

  return `${bytes}TB`;
};

// Don't change below:
module.exports = { filesize };
