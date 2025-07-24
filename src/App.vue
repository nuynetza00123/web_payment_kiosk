<template>
  <v-app>
    <!-- <NavBar/> -->
    <NavBar v-if="$route.path != '/MainMenu'" />
    <v-main>
      <div>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Kanit";
  src: local("Kanit"), url(./assets/Font/Kanit-Regular.ttf);
}

.v-content__wrap {
  background-color: #FCFBF5;
  width: 100%;
  height: 100%;
}

.v-main__wrap {
  background-color: #FCFBF5;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 959px) {
  .v-content__wrap {
    background-color: #FCFBF5;
    width: 100%;
  }

  .v-main__wrap {
    background-color: #FCFBF5;
    width: 100%;
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
