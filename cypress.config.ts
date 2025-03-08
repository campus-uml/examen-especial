const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "poj1p4",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})
