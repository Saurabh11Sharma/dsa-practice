const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { VM } = require('vm2');
const { marked } = require('marked'); // For Markdown to HTML
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve README.md as book content (HTML formatted)
app.get('/book', (req, res) => {
  const file = req.query.file || 'README.md';
  if (file.includes('..')) return res.status(400).send('Invalid file path');
  fs.readFile(path.join(__dirname, file), 'utf8', (err, data) => {
    if (err) return res.status(404).send('README not found');
    const html = marked(data);
    res.send(html);
  });
});

// Evaluate submitted code (JavaScript only)
app.post('/evaluate', (req, res) => {
  const { code, test } = req.body;
  if (!code || !test) return res.status(400).send('Missing code or test');

  const vm = new VM({
    timeout: 1000,
    sandbox: {},
  });

  let output = '';
  let error = null;

  try {
    // Combine user code and test code
    output = vm.run(`${code}\n${test}`);
  } catch (e) {
    error = e.message;
  }

  res.json({ output, error });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
