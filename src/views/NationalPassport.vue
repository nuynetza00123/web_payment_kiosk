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
              <v-row
                style="    display: flex;
    justify-content: flex-end;padding-right: 40px;padding-top: 10%"
              >
                <v-progress-circular indeterminate size="100 ">
                 <span style="font-size: 40px;">{{ timerCount }}</span> 
                </v-progress-circular>
              </v-row>

              <v-row style="margin-top: 10%">
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
                  <!-- Please insert your ID card. -->
                  {{ $t("message.PleaseinsertPassport") }}
                </v-col>
              </v-row>
              <v-row style="margin-top: 20%">
                <v-col cols="12" md="12" style="text-align: center">
                  <img
                    @click="CapturePerson()"
                    height="auto"
                    width="450px"
                    style="
                      padding-top: 0rem;
                      margin-left: auto;
                      margin-right: auto;
                      cursor: pointer;
                    "
                    src="@/assets/passport.png"
                  />
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
                    @click="BackToIdentifySelection()"
                    >{{ $t("message.Back") }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-container>
      </div>
    </v-img>

    <!-- <v-progress-circular v-model="LoadingDialog"
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular> -->

    <v-overlay v-model="LoadingDialog">
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>

    <!-- <v-dialog v-model="LoadingDialog" >

        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>

    </v-dialog> -->
  </div>
</template>
<script>
import axios from "axios";
import enurl from "@/api/environment";
import ChangeLanguage from "@/components/ChangeLanguage";
export default {
  name: "NationalIDCard",
  components: {
    ChangeLanguage,
  },
  data() {
    return {
      url: enurl.apiUrl,
      urlReader: enurl.apiReaderUrl,
      DefaultLogo: "@/assets/logo192.png",
      DefaultBG: "@/assets/1D2939.png",
      Datetime: "",
      LoadingDialog: false,
      PersonData: "",
      warningDialog: false,
      timerCount: 30,
      ResponsePassport: [],
      thaiPersonalInfo: [],
      englishPersonalInfo: [],
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            if (this.timerCount % 3 == 0) {
              this.getDataPassportReader();
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

    getDataPassportReader() {
      let self = this;
      axios
        .get(`${self.urlReader}PassportReader/PassportReader`)
        .then(function(response) {
          if (response.data.status == 0) {
            // self.PersonData = response.data.data;
            self.ResponsePassport = response.data.data;
            self.LoadingDialog = false;
            // self.$router.push("/CapturePerson");
            // console.log(self.PersonData);

            let temp = {
              documentNumber: self.ResponsePassport.idCard,
              prefixEN: "",
              firstnameEN: self.ResponsePassport.firstNameEng,
              middlenameEN: "",
              lastnameEN: self.ResponsePassport.lastNameEng,
              sexEN: self.ResponsePassport.sex == 'M' ? '1' : '2',
              prefixTH: "",
              firstnameTH: self.ResponsePassport.firstNameEng,
              middlenameTH: "",
              lastnameTH: self.ResponsePassport.lastNameEng,
              sexTH: self.ResponsePassport.sex == 'M' ? '1' : '2',
              type: "Passport",
              image1: "",
              image2: "",
              tenantID: 0,
              towerID: 1,
              zoneID: 0,
              floorID: 0,
              locationID: 0,
            };

            self.$router.push({
              name: "CapturePerson",
              path: "/CapturePerson",
              params: {
                data: temp,
              },
            });

            // self.CapturePerson();
          }
        })
        .catch(function(error) {
          self.MessageAlert = error;
        });
    },

    BackToIdentifySelection() {
      let self = this;
      self.$router.push("/IdentifySelection");
    },

    BackToMain() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    CapturePerson() {
      let self = this;
      self.getDataPassportReader();
      // self.$router.push("/CapturePerson");
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
