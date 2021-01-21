<template>
  <nav class="navbar .navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Adam's Health</router-link>
      <ul class="nav" >
        <template v-if="user">
          <li class="nav-item">
            <router-link to="Bloodpressure" class="nav-link">Blood Pressure</router-link>
          </li>
          <li class="nav-item">
            <router-link to="Weight" class="nav-link">Weight</router-link>
          </li>
          <li>
            <button class="btn btn-small btn-warning" v-on:click="logout">Log out</button>
          </li>
        </template>
        <li class="nav-item" v-else>
          <router-link to="Login" class="nav-link">Log in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/composition-api';
import { auth } from '../firebase';
export default {
  setup() {
    const user = ref(null);
    
    const unsubscribe = auth.onAuthStateChanged(
      firebaseUser => user.value = firebaseUser
    );
    return {
      user,
      unsubscribe,
    }
  },
  methods: {
    logout() {
      auth.signOut()
    }
  },
  destroyed() {
    this.unsubscribe;
  }
}
</script>