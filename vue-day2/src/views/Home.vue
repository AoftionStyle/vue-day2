<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      blogs: []
    };
  },
}
</script>
