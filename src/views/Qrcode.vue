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

              <v-row style="margin-top: 10%;">
                <v-col cols="12" md="12" style="text-align: center;">
                  <img
                    height="auto"
                    width="450px"
                    style="padding-top: 0rem;
                      margin-left: auto;
                      margin-right: auto;"
                    src="@/assets/Logo_PUNN.jpg"
                  />
                </v-col>
              </v-row>

              <v-row style="margin-top: 5%">
                <v-col cols="12" md="12" sm="12" align="center">
                  <v-hover v-slot="{}">
                    <v-card
                      v-if="!setshow"
                      class="mx-auto"
                      height="1000"
                      width="600"
                      id="capture"
                      style="background-color: white;"
                    >
                      <img
                        class="ma-0 pa-0"
                        src="@/assets/promptpay.jpg"
                        height="auto"
                        style="padding-top: 30px;width: 100%;"
                      />

                      <v-img height="400" width="400" :src="qrImage"></v-img>

                      <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                        <v-col cols="12" md="12" sm="12" align="center">
                          <p style="font-size: 50px  ;">
                            {{
                              amount.toLocaleString() + " " + $t("message.Baht")
                            }}
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                        <v-col cols="12" md="12" sm="12" align="center">
                          <p style="font-size: 30px  ;">
                            {{ $t("message.PaymentWithin") }}
                            {{ "0:" + minutes + ":" + seconds }}
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                        <v-col cols="4" md="4" sm="4" align="center">
                          <p style="font-size: 30px  ;">
                            {{ "Ref1" }}
                          </p>
                        </v-col>
                        <v-col cols="8" md="8" sm="8" align="center">
                          <p style="font-size: 30px;">
                            {{ ref1 }}
                          </p>
                        </v-col>
                      </v-row>
                      <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                        <v-col cols="4" md="4" sm="4" align="center">
                          <p style="font-size: 30px  ;">
                            {{ "Ref2" }}
                          </p>
                        </v-col>
                        <v-col cols="8" md="8" sm="8" align="center">
                          <p style="font-size: 30px;">
                            {{ ref2 }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-hover>

                  <v-row
                    v-if="setshow"
                    cols="12"
                    xs="12"
                    sm="12"
                    md="12"
                    justify="center"
                  >
                    <v-col cols="12" md="12" sm="12" align="center">
                      <v-col
                        v-if="setpaymentSuccess"
                        cols="12"
                        md="8"
                        sm="12"
                        style="color: red;"
                        align="center"
                      >
                        <p style="font-size: 60px" class="mt-4">
                          {{ $t("message.PaymentCompleted") }}
                        </p>
                      </v-col>
                      <v-col
                        v-if="!setpaymentSuccess"
                        cols="12"
                        md="8"
                        sm="12"
                        style="color: red;"
                        align="center"
                      >
                        <p style="font-size: 60px" class="mt-4">
                          {{ $t("message.PaymentIncomplete") }}
                        </p>
                      </v-col>

                      <img
                        v-if="setpaymentSuccess"
                        class="ma-0 pa-0"
                        src="@/assets/successful-logo-01.png"
                        width="400"
                        height="auto"
                        style="padding-top: 10px;"
                      />
                      <img
                        v-if="!setpaymentSuccess"
                        class="ma-0 pa-0"
                        src="@/assets/unsuccessful-logo-01.png"
                        width="400"
                        height="auto"
                        style="padding-top: 10px;"
                      />

                      <v-col
                        v-if="setshow"
                        cols="12"
                        md="12"
                        sm="12"
                        style="color: red;"
                        align="center"
                      >
                        <p style="font-size: 50px" class="mt-4">
                          {{ "Logid : " + invoiceNo }}
                        </p>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row v-if="!setshow" style="margin-top: 10%">
                <v-col cols="12" md="12" style="text-align: center">
                  <v-btn
                    color="primary"
                    class="white--text  ma-3 mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="BackToPDPAPage()"
                  >
                    {{ $t("message.Back") }}</v-btn
                  >
                </v-col>
                <!-- <v-col cols="6" md="6" style="text-align: center">
                  <v-btn
                    v-if="Total == 0"
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="PaymentWithArgentoTech()"
                  >
                    {{ $t("message.Clicktopay") }}
                  </v-btn>
                </v-col> -->
              </v-row>
              <v-row v-if="setshow" style="margin-top: 40%">
                <v-col cols="12" md="12" style="text-align: center">
                  <v-btn
                    color="primary"
                    class="white--text  ma-3 mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="BackToPDPAPage()"
                  >
                    {{ $t("message.Back") }}</v-btn
                  >

                  <v-btn
                    v-if="setpaymentSuccess"
                    color="primary"
                    class="white--text ma-3 mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="Receipt()"
                  >
                    {{ $t("message.Receipt") }}
                  </v-btn>
                </v-col>
                <!-- <v-col cols="6" md="6" style="text-align: center">
                  <v-btn
                    v-if="Total == 0"
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="PaymentWithArgentoTech()"
                  >
                    {{ $t("message.Clicktopay") }}
                  </v-btn>
                </v-col> -->
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
import axios from "axios";
import enurl from "@/api/environment";
import ChangeLanguage from "@/components/ChangeLanguage";
// import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
  name: "Qrcode",
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
      qrImage: "",
      amount: 0,
      countDown: 180,
      LoadingDialog: false,

      TerminalID: null,
      DatetimeIn: "",
      MemberType: null,
      CarType: null,
      UserID: null,

      overlay: false,
      setpaymentSuccess: false,
      setshow: false,

      invoiceNoCarparkid: 0,

      TicketNo: "",
      DateTime: "",
      TimeIn: "",
      Duration: "",
      CarLicense: "",
      VehicleName: "",
      RateCodeString: "",
      RateDetailEN: "",
      RateDetailTH: "",
      Total: "",
      SpendingValue: "",
      RateList: [],
      RateData: null,
      Remark: "",
      imagesLogo: "",
      dataQrcode: [],
      InquiryPayment: [],
      ref1: "",
      ref2: "",
      invoiceNo: "",
      minutes: null,
      seconds: null,
      img1: "/src/assets/MotorcycleLogo_0.png",
      img2: "/src/assets/MotorcycleLogo_0.png",
      AlldataDetailsReceipt: [],
      checkreceipt: false,
    };
  },
  mounted: function() {
    let self = this;
    var logID = window.location.href;
    this.LogCarparkID = logID;
    let data = this.LogCarparkID.split("/");
    self.invoiceNo = data[data.length - 1];
    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
    self.countDownTimer();
    self.GetQrcode(self.invoiceNo);
  },

  methods: {
    countDownTimer() {
      let that = this;
      if (that.countDown > 0) {
        setTimeout(() => {
          that.countDown -= 1;
          that.minutes = String(Math.floor(this.countDown / 60)).padStart(
            2,
            "0"
          );
          that.seconds = String(this.countDown % 60).padStart(2, "0");
          that.countDownTimer();
        }, 1000);
      } else if (that.countDown == 0) {
        that.setshow = true;
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async GetQrcode(logID) {
      let self = this;
      if (logID == 0) {
        return;
      } else {
        let tempdata = {
          invoiceNo: logID,
          term_ID: "401",
        };
        await axios
          .post(`${self.url}Payment/GetQrcode`, tempdata, {
            headers: {
              "API-Key": "6b3a44e1-043c-4b3b-9317-7bcefa2c92c6",
            },
          })
          .then(function(response) {
            if (response.data.status == "200") {
              // console.log(response.data.data);
              self.dataQrcode = response.data.data;
              self.qrImage = self.dataQrcode.imageAsBase64;
              self.amount = self.dataQrcode.amount;
              self.ref1 = self.dataQrcode.ref1;
              self.ref2 = self.dataQrcode.ref2;
              self.Inquiry(self.invoiceNo);
            }
            if (response.data.status == "1") {
              self.$router.push("/MainMenu");
            }
          })
          .catch(function(error) {
            self.MessageAlert = error;
            self.TypeAlert = "error";
            self.AlertDialog = true;
          });
      }
    },

    async Inquiry(logID) {
      let self = this;
      if (logID == 0) {
        return;
      } else {
        let tempdata = {
          invoiceNo: logID,
        };
        await axios
          .post(`${self.url}Payment/InquiryPayment`, tempdata, {
            headers: {
              "API-Key": "6b3a44e1-043c-4b3b-9317-7bcefa2c92c6",
            },
          })
          .then(function(response) {
            if (response.data.status == "200") {
              // console.log(response.data.data);
              self.InquiryPayment = response.data.data;
              self.setpaymentSuccess = true;
              self.setshow = true;
            }
            if (response.data.status == "1") {
              self.setpaymentSuccess = false;
              self.setshow = true;
              // self.$router.push("/MainMenu");
            }
          })
          .catch(function(error) {
            self.MessageAlert = error;
            self.TypeAlert = "error";
            self.AlertDialog = true;
          });
      }
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

    BackToPDPAPage() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    GotoNationalIDCard() {
      let self = this;
      self.$router.push("/NationalIDCard");
    },

    GotoPassport() {
      let self = this;
      self.$router.push("/NationalPassport");
    },

    Receipt() {
      let self = this;
      self.$router.push("/PrintQr/" + self.invoiceNo);
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
