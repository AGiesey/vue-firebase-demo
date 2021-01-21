<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-sm">
        <h1>{{ newUser ? "Sign Up" : "Login" }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <form>
          <div class="mb-3">
            <label for="emailValue" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="mb-3">
            <label for="passwordValue" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
            <p v-if="!newUser">New User? Click <a href="#" v-on:click="newUser = true">here</a></p>
            <p v-else>Already have an account? Click <a href="#"  v-on:click="newUser = false">here</a></p>
          </div>
            <button type="button" class="btn btn-primary" :class="{'is-loading': isLoading}" @click="signInOrCreateUser()">
              {{ newUser ? 'Sign Up' : 'Login' }}
            </button>
            <p class="text-warning" v-if={errorMessage}>{{errorMessage}}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { auth } from '../firebase';

  export default {
    data() {
      return {
        auth,
        email: '',
        password: '',
        newUser: false,
        isLoading: false,
        errorMessage: ''
      }
    },
    methods: {
      async signInOrCreateUser() {
        this.isLoading = true;
        this.errorMessage = '';

        try {
          if (this.newUser) {
            auth.createUserWithEmailAndPassword(this.email, this.password).
              then(r => console.log(r));
          } else {
            auth.signInWithEmailAndPassword(this.email, this.password);
          }  
        } catch(error) {
          console.log(error);
          this.errorMessage = error;
        }
          this.isLoading = false;
      }
    }
  }
</script>
