<script>
import {RouterLink} from "vue-router";

export default {
  name: "HeaderNav",
  components: {RouterLink}
}
</script>

<template>
  <header class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 2em;
}
.logo {
  display: block;
  width: 2.5em;
  height: 2.5em;
}

nav {
  width: 100%;
  font-size: 1.1em;
  text-align: center;
  display: flex;
}

nav a.router-link-exact-active {
  color: blueviolet;
}

nav a.router-link-exact-active:hover {
  background-color: lightgray;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

}
</style>
