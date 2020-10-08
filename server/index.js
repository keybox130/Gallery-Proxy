const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors())

app.use('/stays/:roomId', express.static(path.join(__dirname, '../public')));

// Photo Gallery
app.use('/gallery/stays/:roomId',createProxyMiddleware({target: 'http://localhost:3001/', changeOrigin: true}));
app.use('/gallery/lists',createProxyMiddleware({target: 'http://localhost:3001/', changeOrigin: true}));

// Calendar/Booking Component
app.use('/calendar/stays/:roomId',createProxyMiddleware({target: 'http://localhost:3002/', changeOrigin: true}));

// Reviews Component
app.use('/reviews/stays/:roomId',createProxyMiddleware({target: 'http://localhost:3003/', changeOrigin: true}));

// //More Places Component
// app.use('/moreplaces/stays/:roomId',createProxyMiddleware({target: 'http://localhost:3004/', changeOrigin: true}));
// app.use('/moreplaces/stays',createProxyMiddleware({target: 'http://localhost:3004/', changeOrigin: true}));


// App Listen port
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});