import express from 'express';
import fs from 'fs';
const router = express.Router();

// Importing all files from dir ./routes and adding routes to app server
(async function () {
  const files = await fs.readdirSync('./routes', () => {});
  for (const file of files) {
    if (file.includes('.js')) {
      const name = file.split('.js')[0];
      router.use(`/${name}`, require(`./${name}`));
    }
  }
})();

module.exports = router;
