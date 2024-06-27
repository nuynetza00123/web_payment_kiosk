<template>
    <div>
      <v-img
        width="100%"
        height="auto"
        class="fullscreen"
        style="padding-top: 3%"
      >
        <div>
          <v-container>
            <v-row>
              <v-card
              elevation="0"
                width="900"
                height="1800"
                style="
                  background-color: white;
                "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                class="align-center pa-4 mx-auto"
              >
              <ChangeLanguage />
                <v-row style="margin-top: 20%">
                  <v-col
                    cols="12"
                    md="12"
                    style="text-align: center; font-size: 60px;color: #126496;font-weight: bold;"
                  >
                    <!-- กรุณาเลือกรายการด้านล่าง -->
                    <!-- Please Select -->
                    {{ $t("message.PleaseSelect") }}
                  </v-col>
                </v-row>
                <v-row style="margin-top: 20%">
                  <v-col cols="12" md="6" style="text-align: center">
                    <img
                      @click="GotoPassport()"
                      height="auto"
                      width="300px"
                      style="
                        padding-top: 0rem;
                        margin-left: auto;
                        margin-right: auto;
                        cursor: pointer;
                      "
                      src="@/assets/passport.png"
                    />
                    <p style="font-size: 45px;color: #126496;font-weight: bold;">{{ $t("message.Passport") }}</p>
                  </v-col>
                  <v-col cols="12" md="6" style="text-align: center">
                    <img
                      @click="GotoNationalIDCard()"
                      height="auto"
                      width="300px"
                      style="
                        padding-top: 0rem;
                        margin-left: auto;
                        margin-right: auto;
                        cursor: pointer;
                      "
                      src="@/assets/id-card.png"
                    />
                    <p style="font-size: 45px;color: #126496;font-weight: bold;">{{ $t("message.IDcard") }}</p>
                  </v-col>
                </v-row>
                <v-row style="margin-top: 25%">
                  <v-col cols="12" md="12" style="text-align: center">
                    <v-btn
                      color="primary"
                      class="white--text mt-2 text-capitalize"
                      router
                      width="500"
                      style="font-size: 45px; border-radius: 50px"
                      height="100"
                      @click="BackToPDPAPage()"
                      > {{ $t("message.Back") }}</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-container>
        </div>
      </v-img>
  
      <v-dialog v-model="LoadingDialog" persistent width="300">
        <v-card color="#1D2939" dark>
          <v-card-text class="white--text">
            <v-row>
              <p style="text-align: center">Loading</p>
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
  // import axios from "axios";
  import enurl from "@/api/environment";
  import ChangeLanguage from "@/components/ChangeLanguage";
  export default {
    name: "IdentifySelection",
    components: {
    ChangeLanguage,
  },
    data() {
      return {
        url: enurl.apiUrl,
        settingUrl: enurl.settingUrl,
        DefaultLogo: "@/assets/logo192.png",
        DefaultBG: "@/assets/1D2939.png",
        Datetime: "",
        LoadingDialog: false,
      };
    },
    mounted: function () {
      setInterval(() => {
        this.getCurrentDate();
      }, 1000);
    },
  
    methods: {
      getCurrentDate() {
        let self = this;
        let newDate = new Date();
        let date =
          newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year =
          newDate.getFullYear() < 2500
            ? newDate.getFullYear() + 543
            : newDate.getFullYear();
        let hours =
          newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
        let minutes =
          newDate.getMinutes() < 10
            ? "0" + newDate.getMinutes()
            : newDate.getMinutes();
        let seconds =
          newDate.getSeconds() < 10
            ? "0" + newDate.getSeconds()
            : newDate.getSeconds();
        self.Datetime = `${date}/${
          month < 10 ? `0${month}` : `${month}`
        }/${year}  ${hours}:${minutes}:${seconds}`;
      },
  
      BackToPDPAPage() {
        let self = this;
        self.$router.push("/PDPAPage");
      },
  
      GotoNationalIDCard(){
          let self = this;
          self.$router.push("/NationalIDCard");
      },
  
      GotoPassport(){
          let self = this;
          self.$router.push("/NationalPassport");
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
    