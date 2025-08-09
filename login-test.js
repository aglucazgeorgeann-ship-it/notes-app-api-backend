// login-test.js
const fetch = require('node-fetch');

async function login() {
  const res = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'testuser', // yung ginawa mong account
      password: '123456'
    })
  });

  const data = await res.json();
  console.log('Login response:', data);

  if (data.token) {
    console.log('\n✅ Token received! Copy this for protected routes:');
    console.log(data.token);
  } else {
    console.log('\n❌ No token returned. Check username/password.');
  }
}

login();