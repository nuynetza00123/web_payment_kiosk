<template>
  <div class="invisible-scrollbar">
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
              <v-row style="margin-top: 10%;">
               
                <v-col
                  cols="12"
                  md="12"
                  style="
                      text-align: center;
                      font-size: 60px;
                      color: #126496;
                      font-weight: bold;
                    "
                >
                
                {{ $t("message.PrivacyPolicy") }}
                </v-col>
              </v-row>
              <v-row class="pl-5 pr-5">
                <v-col cols="12" md="12" >
                  <PDPA/>
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
// import axios from "axios";
import enurl from "@/api/environment";
import ChangeLanguage from "@/components/ChangeLanguage";
import PDPA from "@/components/PDPA";
export default {
  name: "PDPAPage",
  components: {
    ChangeLanguage,
    PDPA
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
  mounted: function() {
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

    BackToMainPage() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    GotoIdentifySelection() {
      let self = this;
      self.$router.push("/IdentifySelection");
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
.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
