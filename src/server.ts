import app from './app.js';
import { config } from './config/env.js';

const PORT = config.PORT;
const DB_HOST = config.DB_HOST;

app.listen(PORT, () => {
  console.log(`Server running on http://${DB_HOST}:${PORT}`);
});
