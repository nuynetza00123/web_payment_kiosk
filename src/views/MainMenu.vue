<template>
  <div style="max-height: 1920px;">
    <!-- <v-img width="100%" height="auto" class="fullscreen" style="padding-top: 3%;"> -->
    <!-- <div>
      <v-container>
      <v-row>
        <v-card elevation="0" width="900" height="1900" style="background-color: #FCFBF5;"
          class="align-center pa-4 mx-auto">

          <ChangeLanguage />

          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <img height="auto" width="650px" style="
                      margin-left: auto;
                      margin-right: auto;" src="@/assets/KiingLogo.png" />
            </v-col>
          </v-row>
          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <p style="color: #00B5E4;font-size: 60px;font-weight: bold;">

                {{ $t("message.Punnpay") }}
              </p>
            </v-col>
          </v-row>
      
          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <v-btn color="#00B5E4" class="white--text mt-2 text-capitalize" router width="620" @click="GotoScan()"
                style="font-size: 45px;border-radius: 50px" height="120">{{ $t("message.Start") }}</v-btn>
            </v-col>
          </v-row>
          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <v-btn color="#00B5E4" class="white--text mt-2 text-capitalize" router width="620"
                @click="GotoScanReprint()" style="font-size: 45px;border-radius: 50px" height="120">{{
                  $t("message.Reprint") }}</v-btn>
            </v-col>
          </v-row>
          <v-row style="margin-top: 10%;">
            <v-col cols="12" md="12">
              <img height="auto" width="892px" style="padding-top: 0rem;
                      margin-left: auto;
                      margin-right: auto;
                      border-radius: 50px;" src="@/assets/dribbble_2.gif" />
            </v-col>
          </v-row>
   
        </v-card>
        
      </v-row>

      </v-container>
    </div> -->

    <v-row>
      <v-col cols="12" md="12" style="text-align: center;">

        <v-sheet class="folded-corner" width="1080" height="1100" style="margin-top: 786px">
          <!-- เนื้อหา -->
          <v-container>
               <v-row style="margin-top: 5%;">
              <v-col cols="12" md="12" style="display: grid;justify-content: center;">
                <v-img src="@/assets/logo car.png" width="500" height="350"></v-img>
                
              </v-col>
            </v-row>

            <v-row style="margin-top: 5%;">
              <v-col cols="12" md="12" style="text-align: center;">
                <span style="color: #00B5E4;font-size: 60px;font-weight: 800;">
                  {{ "ระบบบริการชำระค่าจอดรถ" }}
                </span>
                <br>
                <span style="color: #898A8C;font-size: 40px;font-weight: 700;">{{ "PARKING PAYMENT" }}</span>
              </v-col>
            </v-row>
            <v-row style="display: flex;justify-content: center;">
              <v-col cols="7" md="7">

                <v-divider style="border-top-width: 8px !important;border-color: #00B5E4; "></v-divider>
              </v-col>
            </v-row>
            <v-row style="margin-top: 5%;">
              <v-col cols="12" md="12" style="display: flex;justify-content: center;">
                <v-card elevation="0" class="box white--text mt-2 text-capitalize" width="620" color="#00B5E4"  @click="GotoScan()" 
                  style="line-height:1.1" height="110">
                  <span style="font-size: 45px;"> {{ "กดเพื่อดำเนินการ" }}</span> 
                  <br>
                  <span style="font-size: 25px;" > {{ "TAP To PROCEED" }}</span> 
                </v-card>
              </v-col>
                  <v-col cols="12" md="12" style="display: flex;justify-content: center;">
                <v-card elevation="0" class="box white--text mt-2 text-capitalize" width="620" color="#00B5E4"  @click="GotoScanReprint()" 
                  style="line-height:1.1" height="110">
                  <span style="font-size: 45px;"> {{ "กดเพื่อพิมพ์ซ้ำ" }}</span> 
                  <br>
                  <span style="font-size: 25px;" > {{ "TAP TO REPRINT" }}</span> 
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" style="text-align: center;">

              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>



    <v-dialog v-model="LoadingDialog" persistent width="300">
      <v-card color="#1D2939" dark>
        <v-card-text class="white--text">
          <v-row>
            <p style="text-align: center;">Loading</p>
          </v-row>
          <v-row>
            <v-progress-linear indeterminate color="#ffffff" class="mb-0"></v-progress-linear>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>

</template>
<script>
import axios from "axios";
import enurl from "@/api/environment";
export default {
  name: "MainMenu",
  components: {
  },
  data() {
    return {
      url: enurl.apiUrl,
      urlReader: enurl.apiReaderUrl,
      settingUrl: enurl.settingUrl,
      DefaultLogo: "@/assets/logo192.png",
      DefaultBG: "@/assets/1D2939.png",
      Datetime: "",
      LoadingDialog: false,
      padless: true,
    };
  },




  mounted: function () {
    if (localStorage.getItem("LogId") == null) {
      localStorage.setItem("LogId", '');
    } else if (localStorage.getItem("LogId") != '') {
      localStorage.setItem("LogId", '');
      location.reload();
    } else {
      localStorage.setItem("LogId", '');
    }


    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
  },

  computed: {

    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },

  methods: {


    GetIp() {
      let self = this;

      axios
        .get(`${self.urlReader}General/GetIp`)
        .then(function (response) {

          //  console.log(response.data);
          localStorage.setItem("IP", response.data);

        })
        .catch(function (error) {
          self.MessageAlert = error;
        });
    },
    // getCurrentDate() {
    //   let self = this;
    //   let newDate = new Date();
    //   let date =
    //     newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    //   let month = newDate.getMonth() + 1;
    //   let year =
    //     newDate.getFullYear() < 2500
    //       ? newDate.getFullYear() + 543
    //       : newDate.getFullYear();
    //   let hours =
    //     newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
    //   let minutes =
    //     newDate.getMinutes() < 10
    //       ? "0" + newDate.getMinutes()
    //       : newDate.getMinutes();
    //   let seconds =
    //     newDate.getSeconds() < 10
    //       ? "0" + newDate.getSeconds()
    //       : newDate.getSeconds();
    //   self.Datetime = `${date}/${
    //     month < 10 ? `0${month}` : `${month}`
    //   }/${year}  ${hours}:${minutes}:${seconds}`;
    // },

    GotoPDPA() {
      let self = this;
      self.$router.push("/PDPAPage");
    },
    GotoScan() {
      let self = this;
      self.$router.push("/ScanQrcode");
    },
    GotoScanReprint() {
      let self = this;
      self.$router.push("/RePrintQrcode");
    },
  },
};
</script>
<style scoped>
@media all and (orientation: portrait) {
  .fullscreen {
    height: auto;
  }
}

@media all and (orientation: landscape) {
  .fullscreen {
    height: auto;
  }
}

.box {
  
  color: white;             /* สีตัวอักษร */
  padding: 15px;            /* ระยะห่างภายใน */
  text-align: center;       /* จัดข้อความกึ่งกลาง */
  width: 350px;             /* ความกว้าง */

  /* --- หัวใจสำคัญคือบรรทัดนี้ --- */
  clip-path: polygon(
    25px 0,      /* จุดที่ 1: เริ่มจากมุมบน แต่ขยับขวามา 25px */
    100% 0,      /* จุดที่ 2: ไปที่มุมบนขวา */
    100% calc(100% - 25px), /* จุดที่ 3: ลงมาที่ขอบล่าง แต่เว้นระยะจากมุม 25px */
    calc(100% - 25px) 100%,/* จุดที่ 4: ไปที่มุมล่าง แต่ขยับซ้ายมา 25px */
    0 100%,      /* จุดที่ 5: ไปที่มุมล่างซ้าย */
    0 25px       /* จุดที่ 6: กลับขึ้นไปที่ขอบบน แต่เว้นระยะจากมุม 25px */
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

/* รอยพับขวาล่าง */
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
</style>
