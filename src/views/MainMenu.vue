<template>
  <div>
    <v-img
      width="100%"
      height="auto"
      class="fullscreen"
      style="padding-top: 3%;"
    >
      <div>
        <v-container>
          <v-row>
            <v-card
            elevation="0"
              width="900"
              height="1800"
              style="background-color: white;"
              class="align-center pa-4 mx-auto"
            >

            <ChangeLanguage />

              <v-row style="margin-top: 20%;">
                <v-col cols="12" md="12" style="text-align: center;">
                  <img
                    height="auto"
                    width="850px"
                    style="padding-top: 0rem;
                      margin-left: auto;
                      margin-right: auto;"
                    src="@/assets/OneBangkokLogo.svg"
                  />
                </v-col>
              </v-row>
              <v-row style="margin-top: 20%;">
                <v-col cols="12" md="12" style="text-align: center;">
                  <p style="color: #126496;font-size: 60px;font-weight: bold;">
                    <!-- ลงทะเบียนเข้าอาคาร -->
                    <!-- One Bangkok Register -->
                    {{ $t("message.OneBangkokRegister") }}
                  </p>
                </v-col>
              </v-row>
              <v-row style="margin-top: 30%;">
                <v-col cols="12" md="12" style="text-align: center;">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="620"
                    @click="GotoPDPA()"
                    style="font-size: 45px;border-radius: 40px"
                    height="100"
                    >{{ $t("message.Register") }}</v-btn
                  >
                </v-col>
              </v-row>
              <v-row >
                <v-col cols="12" md="12" style="text-align: center;">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="620"
                    @click="GotoScan()"
                    style="font-size: 45px;border-radius: 40px"
                    height="100"
                    >{{ $t("message.Scan") }}</v-btn
                  >
                </v-col>
              </v-row>
              <!-- <v-row>
                <v-col cols="12" md="12" style="text-align: center;">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="420"
                    style="font-size: 25px;border-radius: 30px"
                    height="70"
                    >สแกน คิวอาร์โค้ด</v-btn
                  >
                </v-col>
              </v-row> -->
            </v-card>
          </v-row>
        </v-container>
      </div>
    </v-img>

    <v-dialog v-model="LoadingDialog" persistent width="300">
      <v-card color="#1D2939" dark>
        <v-card-text class="white--text">
          <v-row>
            <p style="text-align: center;">Loading</p>
          </v-row>
          <v-row>
            <v-progress-linear
              indeterminate
              color="#ffffff"
              class="mb-0"
            ></v-progress-linear>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import enurl from "@/api/environment";
import ChangeLanguage from "@/components/ChangeLanguage";
export default {
  name: "MainMenu",
  components: {
    ChangeLanguage,
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
    };
  },
  mounted: function() {
    this.GetIp();
    localStorage.setItem("LogId", '');
    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
  },

  methods: {


    GetIp() {
      let self = this;
   
      axios
        .get(`${self.urlReader}General/GetIp`)
        .then(function(response) {

        //  console.log(response.data);
         localStorage.setItem("IP", response.data);
       
        })
        .catch(function(error) {
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
  },
};
</script>
<style scoped>
@media all and (orientation: portrait) {
  .fullscreen {
    height: 1890px;
  }
}
@media all and (orientation: landscape) {
  .fullscreen {
    height: auto;
  }
}
</style>
