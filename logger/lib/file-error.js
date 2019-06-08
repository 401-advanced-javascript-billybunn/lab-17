'use strict';

module.exports = (errorMessage, file) => {
  console.error(`ERROR: Failed to save '${file}'
${errorMessage}`);
};
