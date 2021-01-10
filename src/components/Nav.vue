<template>
  <nav class="navbar .navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Adam's Health</router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="Bloodpressure" class="nav-link">Blood Pressure</router-link>
        </li>
        <li class="nav-item">
          <router-link to="Weight" class="nav-link">Weight</router-link>
        </li>
        <li class="nav-item">
          <router-link to="Login" class="nav-link">Log in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>