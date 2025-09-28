<template>
  <v-app>
    <!-- <NavBar/> -->
    <NavBar v-if="$route.path != '/MainMenu' && $route.path != '/ScanQrcode' && $route.path != '/RePrintQrcode'" />
    <div v-if="$route.path == '/MainMenu' || $route.path == '/ScanQrcode' ||  $route.path == '/RePrintQrcode'" 
    class="v-main__wrap" :style="{ backgroundImage: `url(${bgImage})` }">
      <v-main>
        <div>
          <router-view></router-view>
        </div>
      </v-main>
    </div>
    <div v-else class="v-main__wrap" style="background-color: whitesmoke;">
      <v-main>
        <div>
          <router-view></router-view>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },

  data() {
    return {
      bgImage: require('@/assets/VOne_CI.jpg') // หรือใช้ import.meta.url สำหรับ Vite
    }
  },
};
</script>

<style>
@font-face {
  font-family: "Kanit";
  src: local("Kanit"), url(./assets/Font/Kanit-Regular.ttf);
}



.box {

  color: white;
  /* สีตัวอักษร */
  padding: 15px;
  /* ระยะห่างภายใน */
  text-align: center;
  /* จัดข้อความกึ่งกลาง */
  width: 350px;
  /* ความกว้าง */

  /* --- หัวใจสำคัญคือบรรทัดนี้ --- */
  clip-path: polygon(25px 0,
      /* จุดที่ 1: เริ่มจากมุมบน แต่ขยับขวามา 25px */
      100% 0,
      /* จุดที่ 2: ไปที่มุมบนขวา */
      100% calc(100% - 25px),
      /* จุดที่ 3: ลงมาที่ขอบล่าง แต่เว้นระยะจากมุม 25px */
      calc(100% - 25px) 100%,
      /* จุดที่ 4: ไปที่มุมล่าง แต่ขยับซ้ายมา 25px */
      0 100%,
      /* จุดที่ 5: ไปที่มุมล่างซ้าย */
      0 25px
      /* จุดที่ 6: กลับขึ้นไปที่ขอบบน แต่เว้นระยะจากมุม 25px */
    );
}

.folded-corner {
  position: relative;
  background-color: #ffffff;
  /* พื้นฟ้า */
  color: white;
  border-radius: 0;
  padding: 20px;
  overflow: hidden;
}


.folded-corner::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 60px solid #00B5E4;
  /* border-top: 60px solid #000000;  */
  border-left: 60px solid transparent;
}

.v-content__wrap {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.v-main__wrap {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 959px) {
  .v-content__wrap {
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  .v-main__wrap {
    background-size: cover;
    background-position: center;
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
