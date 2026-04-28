<template>
  <div>
    <!-- <v-img width="100%" height="auto" class="fullscreen" style="padding-top: 3%;"> -->
    <div>
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
              <p style="color: #3A5408;font-size: 60px;font-weight: bold;">
                <!-- ลงทะเบียนเข้าอาคาร -->
                <!-- One Bangkok Register -->
                {{ $t("message.Punnpay") }}
              </p>
            </v-col>
          </v-row>
          <!-- <v-row style="margin-top: 30%;">
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
              </v-row> -->
          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <v-btn color="#3A5408" class="white--text mt-2 text-capitalize" router width="620" @click="GotoScan()"
                style="font-size: 45px;border-radius: 50px" height="120">{{ $t("message.Start") }}</v-btn>
            </v-col>
          </v-row>
          <v-row style="margin-top: 5%;">
            <v-col cols="12" md="12" style="text-align: center;">
              <v-btn color="#3A5408" class="white--text mt-2 text-capitalize" router width="620"
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
          <!-- <v-footer v-bind="localAttrs" :padless="padless">
            <v-row>
              <v-col col="12" style="padding: 0;">
                <v-card flat tile width="100%" class="text-center" style="color: #F3DAB2;background-color: #3A5408;"
                  @click="GotoScan()">
                  <v-card-text style="color:#F3DAB2 ;font-size: 50px;">
                    {{ $t("message.Start") }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

          </v-footer> -->
        </v-card>
        
      </v-row>

      </v-container>
    </div>





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
    <v-dialog v-model="showTerminalDialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">{{'Select Terminal' }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="selectedTerminal" label="Terminal ID" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#3A5408" class="white--text" @click="SaveTerminal()">{{ $t("message.Save") || 'Save' }}</v-btn>
        </v-card-actions>
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
      padless: true,
      // terminal selection
      selectedTerminal: "",
      showTerminalDialog: false,
    };
  },




  mounted: function () {


    


    // Check terminalID and prompt user if missing
    let terminal = localStorage.getItem("terminalID");
    if (!terminal || terminal === '') {
      this.selectedTerminal = "";
      this.showTerminalDialog = true;
    }

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
    SaveTerminal() {
      if (this.selectedTerminal && this.selectedTerminal.toString().trim() !== "") {
        localStorage.setItem("terminalID", this.selectedTerminal.toString().trim());
        this.showTerminalDialog = false;
      }
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
</style>
