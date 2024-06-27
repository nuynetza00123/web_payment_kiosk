<template>
  <v-app>
    <!-- <NavBar/> -->
    <v-content>
      <div>
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
// import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    // NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Kanit";
  src: local("Kanit"), url(./assets/Font/Kanit-Regular.ttf);
}

.v-content__wrap {
  background-color: white;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 959px) {
  .v-content__wrap {
    background-color: white;
    width: 80%;
  }
}

#app {
  font-family: "Kanit";
  color: #444444;
  scrollbar-width: none;
}
@-moz-document url-prefix() {
  /* Disable scrollbar Firefox */
  html {
    scrollbar-width: none;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
