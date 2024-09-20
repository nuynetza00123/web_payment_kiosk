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

              <v-row
                style="    display: flex;
    justify-content: flex-end;padding-right: 40px;padding-top: 10%"
              >
                <v-progress-circular indeterminate size="100 ">
                  <span style="font-size: 40px;">{{ timerCount }}</span>
                </v-progress-circular>
              </v-row>
              <v-text-field
                v-model="search"
                color="white"
                ref="inputQr"
                v-on:keyup.enter="SearchQrcode(search)"
                style="width: 0px;color: white;"
                placeholder-color="#ACACAC"
              />
              <v-row style="margin-top: 10%;">
                <v-col cols="12" md="12" style="text-align: center;">
                  <p style="color: #126496;font-size: 60px;font-weight: bold;">
                    {{ $t("message.PleaseScan") }}
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <img
                  v-if="message == ''"
                  height="auto"
                  width="700px"
                  style="margin-top: 15%;
                      margin-left: auto;
                      margin-right: auto;"
                  src="@/assets/terminal.png"
                />
                <p
                  v-else
                  style="color: #126496;font-size: 60px;font-weight: bold;margin-top: 15%;
                      margin-left: auto;
                      margin-right: auto;"
                >
                  {{ message }}
                </p>
              </v-row>
              <!-- <v-row>
                <img
                  height="auto"
                  width="400px"
                  style="margin-top: 20%;
                      margin-left: auto;
                      margin-right: auto;"
                  src="@/assets/arrow01.gif"
                />
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
  name: "ScanQrcode",
  components: {
    ChangeLanguage,
  },
  data() {
    return {
      url: enurl.apiUrl,
      urlCP: enurl.apiUrlCarpark,
      settingUrl: enurl.settingUrl,
      DefaultLogo: "@/assets/logo192.png",
      DefaultBG: "@/assets/1D2939.png",
      Datetime: "",
      search: "",
      timerCount: 30,
      LoadingDialog: false,
      message: "",
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            if (this.timerCount % 3) {
              this.$refs.inputQr.focus();
            }
            if (this.timerCount == 0) {
              this.BackToMain();
            }
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  mounted: function() {
    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
    // this.SearchQrcode("https://punn-parking.fs-omc.io/ParkingFee/2024030311241601");
  },

  methods: {
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

    BackToMain() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    SearchQrcode(data) {
      let self = this;

      let datalink = data.split("/");
      self.invoiceNo = datalink[datalink.length - 1];



      localStorage.setItem("LogId", self.invoiceNo);
      let temp = {
        search: self.invoiceNo,
        lostCard: false,
      };
      axios
        .post(`${self.url}Redemption/GetParkingDetail`, temp)
        .then(function(response) {
          if (response.data.status == 0) {
            // console.log(response.data.data);

            if(response.data.data[0].plateNo.includes("unknown") || response.data.data[0].plateNo.includes("0000") ){
              self.$router.push("/PlateNo/"+ self.invoiceNo);
            }else{
              self.$router.push("/DetailCarpark/"+ self.invoiceNo);
            }

           
          }
          if (response.data.status == 1) {
            // console.log(response.data.data);
            self.$router.push("/MainMenu");
          }
        })
        .catch(function() {
          self.$router.push("/MainMenu");
        });
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
