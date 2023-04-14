const axios = require('axios');
const { test, expect } = require('@playwright/test');

test('API returns Hello, World!', async ({}) => {
  const response = await axios.get('http://localhost:3000/api/hello-world');
  expect(response.data.message).toBe('Hello, World!');
});

test('API returns 404 for invalid endpoint', async ({}) => {
  try {
    await axios.get('http://localhost:3000/api/invalid-endpoint');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

test('API returns error for invalid input', async ({}) => {
  try {
    await axios.get('http://localhost:3000/api/hello-world?name=John');
  } catch (error) {
    expect(error.response.status).toBe(404);
    expect(error.response.data.error).toBe('Invalid input');
  }
});