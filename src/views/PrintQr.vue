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
                  {{ $t("message.QRCodeVisitors") }}
                </v-col>
              </v-row>
              <v-row style="margin-top: 10%">
                <v-col
                  cols="12"
                  md="12"
                  style="    display: flex;
    justify-content: center;
"
                >
                  <v-card
                    v-if="show"
                    id="capture"
                    elevation="0"
                    style="
                            background-color: rgb(255, 255, 255) !important;height: 500px;page-break-after: always;width: 350px;padding: 0;
                          "
                  >
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="background-color: #fff"
                    >
                      <v-img
                        height="38"
                        width="400"
                        src="@/assets/logo-01.png"
                      ></v-img>
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              padding: 0;
                              background-color: #fff;
                            "
                    >
                      <label style="font-size: 25px;">{{ tenantName }}</label>
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              padding: 0;
                              background-color: #fff;
                            "
                    >
                      <label style="background-color: #fff;font-size: 20px;"
                        >Floor : {{ floorName }} / Zone : {{ zoneName }}</label
                      >
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              padding: 0;
                              display: grid;
                              justify-content: space-evenly;
                              background-color: #fff;
                            "
                    >
                      <qr-code
                        style="margin: 30px;"
                        :size="200"
                        :text="Qrcode"
                        error-level="L"
                      ></qr-code>
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              padding: 0;
                              background-color: #fff;
                            "
                    >
                      <label style="font-size: 20px;"
                        >Issue Date : {{ ChangeFormatDate(startDate) }}</label
                      >
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              padding: 0;
                              background-color: #fff;
                            "
                    >
                      <label style="font-size: 20px;"
                        >Expiry Date : {{ ChangeFormatDate(endDate) }}</label
                      >
                    </v-col>
                    <v-col
                      cols="12"
                      md="12"
                      sm="12"
                      lg="12"
                      style="
                              text-align: center;
                              background-color: #fff;
                              font-size: 18px;
                            "
                    >
                      <label>** One time access permit **</label>
                    </v-col>
                  </v-card>

                  <v-card
                    v-if="!show"
                    elevation="0"
                    style="
                            background-color: rgb(255, 255, 255) !important;height: 500px;page-break-after: always;width: 500px;padding: 0;font-size: 50px;
                      color: red;
                      font-weight: bold;
                          "
                  >
                    {{ "*" + message }}
                  </v-card>
                </v-col>
              </v-row>
              <v-row style="margin-top: 15%">
                <v-col cols="12" md="12" style="text-align: center">
                  <v-btn
                    v-if="show"
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    id="downloadPhoto"
                    :download="PictureName"
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="print()"
                  >
                    {{ $t("message.PrintQRCode") }}</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12" style="text-align: center">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="BacktoNationalIDCard()"
                    >{{ $t("message.Back") }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </div>
</template>
<script>
import axios from "axios";
import enurl from "@/api/environment";
import html2canvas from "html2canvas";
import ChangeLanguage from "@/components/ChangeLanguage";
export default {
  name: "CapturePerson",
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
      ResponsePassport: [],
      ResponseSmartCard: [],
      isPhotoTaken: false,
      download: false,
      PictureName: "PersonID.jpg",
      startDate: "",
      endDate: "",
      Qrcode: "",
      tenantName: "",
      floorName: "",
      zoneName: "",
      data: [],
      show: false,
      message: "",
    };
  },
  mounted: function() {
    let self = this;
    // self.createCameraElement();
    console.log(self.$route.params.data);
    self.data = self.$route.params.data;
    self.floorName = self.data.floorID;
    self.zoneName = self.$route.params.zoneName;
    self.tenantName = self.$route.params.tenantName;
    self.addDataVisitor();
    setInterval(() => {
      self.getCurrentDate();
    }, 1000);
  },

  methods: {
    addDataVisitor() {
      let self = this;
      // self.LoadingDialog = true;

      let temp = {
        documentNumber: "1444301170244",
        prefixEN: "Mr.",
        firstnameEN: "One",
        middlenameEN: "",
        lastnameEN: "Bangkok",
        sexEN: "1",
        prefixTH: "นาย",
        firstnameTH: "วัน",
        middlenameTH: "",
        lastnameTH: "บางกอก",
        sexTH: "1",
        image1: "",
        image2: "",
        tenantID: 1,
        towerID: 1,
        zoneID: 1,
        floorID: 1,
        locationID: 1,
      };

      if (self.data != null) {
        temp = self.data;
      }

      axios
        .post(`${self.url}VMS/addDataVisitor`, temp)
        .then(function(response) {
          if (response.data.status == 0) {
            console.log(response.data.data);
            let temp = localStorage.getItem("LogId");
            if (temp != "") {
              self.show = false;
              self.message = "Successfully";
              setTimeout(() => {
                self.GotoMainPage();
              }, 3000);
            } else {
              var s = new Date();
              self.startDate = s;
              let dateOut = response.data.data.split('"')[7].replace("Z", "");

              self.endDate = dateOut;
              self.Qrcode = response.data.data;
              self.show = true;
            }
          }
          if (response.data.status == 1) {
            self.show = false;
            self.message = response.data.message;
            setTimeout(() => {
              self.GotoMainPage();
            }, 3000);
          }
        })
        .catch(function() {});
    },
    print() {
      let self = this;
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        const base64 = canvas.toDataURL("image/png");

        var tWindow = window.open("");

        tWindow.document.body.appendChild(canvas);

        tWindow.focus();

        tWindow.print();

        tWindow.close();

        self.base64 = base64;

        self.GotoMainPage();

        // self.ReSet();
      });
    },
    ReSet() {
      let self = this;
      self.$router.push("/CapturePerson");
    },
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

    ChangeFormatDate(date) {
      if (!date) return null;

      var DateData = new Date(date);
      var hours = DateData.getHours();
      var minutes = DateData.getMinutes();
      // var ampm = hours >= 12 ? "PM" : "AM";
      // hours = hours % 12;
      // hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var month = DateData.getMonth() + 1;
      var strTime = hours + ":" + minutes;
      return (
        DateData.getDate() +
        "/" +
        month +
        "/" +
        DateData.getFullYear() +
        "  " +
        strTime
      );
    },

    GotoMainPage() {
      let self = this;

      self.$router.push("/MainMenu");
    },

    BacktoNationalIDCard() {
      let self = this;

      // self.$router.push("/NationalIDCard");
      self.$router.push("/FindingTenant");
    },

    CapturePerson() {
      let self = this;
      self.$router.push("/CapturePerson");
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
