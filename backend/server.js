import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅  SnapPass AI backend running on http://localhost:${PORT}`);
  console.log(`🤖  AI Service URL: ${process.env.AI_SERVICE_URL}`);
});
