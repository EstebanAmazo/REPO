<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            username: this.username,
            password: this.password
          });
          if (response.data.token) {
            // Store the token in local storage
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard
            this.$router.push('/dashboard');
          } else {
            console.log('Invalid username or password.');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      }
    }
  };
  </script>