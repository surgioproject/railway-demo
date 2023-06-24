'use strict';

const gateway = require('@surgio/gateway');

const PORT = process.env.PORT || 3000;

(async () => {
  const app = await gateway.bootstrapServer();

  await app.listen(PORT, '0.0.0.0');
  console.log(`> Your app is ready at http://0.0.0.0:${PORT}`);
})();

