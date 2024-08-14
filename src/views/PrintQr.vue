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
              <v-row style="margin-top: 5%">
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
                  {{ $t("message.Receipt") }}
                </v-col>
              </v-row>
              <v-row style="margin-top: 5%">
                <v-col
                  cols="12"
                  md="12"
                  style="    display: flex;
    justify-content: center;
"
                >
                  <v-col
                    cols="12"
                    md="12"
                    sm="12"
                    align="center"
                    class="rounded-sm"
                  >
                    <v-row
                      cols="12"
                      xs="12"
                      sm="12"
                      md="12"
                      justify="center"
                      class="mt-2"
                    >
                      <v-col cols="12" md="10" sm="10" align="center">
                        <v-card
                          id="capture"
                          class="mx-auto"
                          height="auto"
                          width="800"
                          style="padding: 10px;background-color: white;font-size: 26px;color: black;font-weight: bolder;"
                        >
                          <v-row cols="12" sm="12" md="12" justify="center">
                            <!-- <img class="mt-5" :src="imagesLogo" width="300" height="auto" /> -->
                          </v-row>
                          <v-row cols="12" md="12" justify="center">
                            <v-col
                              cols="12"
                              md="10"
                              sm="10"
                              xs="10"
                              align="center"
                            >
                            DOLSIRI DEVELOPMENT COMPANY LIMITED
                            </v-col>
                            <v-col
                              cols="12"
                              md="10"
                              sm="10"
                              xs="10"
                              align="left"
                            >
                              1152 Rama IV Road, Khlong Toei, Bangkok 10110
                              <br />

                              Tel. 02-240-1140, 065-505-6143
                              <br />
                              Email. info.punntower@punntower.com
                              <br />
                            </v-col>
                          </v-row>
                          <v-row cols="12" md="12" sm="12" justify="center">
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TERMINAL ID
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Ent_Terminal_ID }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TAX INVOICE (ABB.) ID
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ "0105562045761" }}
                            </v-col>

                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TAX NO
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Tax_No }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              BILL DATE
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{
                                ChangeFormatDate(DetailsReceipt.trn_CreateTime)
                              }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              USER ID
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_User_ID }}
                            </v-col>

                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              CAR-ID
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Car_No }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TICKET NO.
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Ticket_No }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              ENTRY TIME
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{
                                ChangeFormatDate(DetailsReceipt.trn_Ent_Date)
                              }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              PAID TIME
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{
                                ChangeFormatDate(DetailsReceipt.trn_CreateTime)
                              }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              PARK TIME
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{
                                DetailsReceipt.trn_Park_HH
                                  .toString()
                                  .padStart(2, "0") +
                                  " : " +
                                  DetailsReceipt.trn_Park_MM
                                    .toString()
                                    .padStart(2, "0")
                              }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              STAMP
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Rate_Code }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              SUBTOTAL (BAHT)
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_SubTotal }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              DISCOUNT (BAHT)
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Discount }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TOTAL (BAHT)
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Total }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              VAT
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Vat }}
                            </v-col>
                            <v-col
                              cols="6"
                              md="6"
                              sm="6"
                              align="left"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              TOTAL VAT INCLUDED
                            </v-col>
                            <v-col
                              cols="6"
                              md="4"
                              sm="4"
                              align="right"
                              style="padding-top: 0px;padding-bottom: 0px;"
                            >
                              {{ DetailsReceipt.trn_Amount }}
                            </v-col>
                          </v-row>
                          <br />
                          <hr style="width: 80%;" />

                          <v-col cols="12" md="12" align="center">
                            THANK YOU FOR PARKING
                          </v-col>
                          <v-row style="height: 10px;"> </v-row>
                        </v-card>
                        <!-- <v-btn
                            tile
                            color="blue"
                            class="mt-5"
                            style="width:180px;color: white;margin: 10px;"
                            @click="print()"
                          >
                            {{ $t("message.Save") }}
                          </v-btn>
                          <v-btn
                            tile
                            color="success"
                            class="mt-5"
                            style="width:180px;color: white;margin: 10px;"
                            @click="backtohomepage()"
                          >
                            {{ $t("message.mainPage") }}
                          </v-btn> -->
                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  style="text-align: center;margin-top: 30%;"
                >
                  <v-btn
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
                    {{ $t("message.PrintReceipt") }}</v-btn
                  >
                </v-col>
              </v-row>
              <!-- <v-row>
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
              </v-row> -->
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
  name: "PrintQr",
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
      dialog: false,

      receipt: false,

      vehicleShow: true,
      LoadingDialog: false,
      AlertDialog: false,
      TypeAlert: null,
      MessageAlert: "",

      response: "",
      search: "",
      LogCarparkID: "",
      discount: "",
      rateDetailTH: "",
      rateDetailEN: "",

      overlay: false,
      transactionNo: "",
      invoiceNo: "",
      transactionDate: "",
      outBeforeTime: "",
      merchantId: "",
      merchantName: "",
      paymentChannel: "",
      amount: 0,
      paidAmount: 0,
      fee: 0.0,
      feeVat: 0.0,
      balance: 0.0,
      transactionStatusId: 0,
      description: "0",
      deviceProfileId: null,

      payComplated: false,

      TerminalID: null,
      DatetimeIn: "",
      MemberType: null,
      CarType: null,
      TicketNo: "",
      DateTime: "",
      TimeIn: "",
      Duration: "",
      CarLicense: "",
      VehicleName: "",
      RateCodeString: "",
      RateDetail: "",
      Total: "",
      SpendingValue: "",
      Receiptmodel: "",
      imagesLogo: "",
      ShowReceipt: "OB",
      AlldataDetails: [],
      AlldataDetailsReceipt: [],
      DetailsReceipt: [],
    };
  },
  mounted: function() {
    let self = this;
    var logID = window.location.href;
    this.LogCarparkID = logID;
    let data = this.LogCarparkID.split("/");
    self.invoiceNo = data[data.length - 1];
    self.getParkingDetailReceipt(this.invoiceNo);
  },

  methods: {
    getParkingDetailReceipt(logID) {
      let self = this;
      let tempdata = {
        logid: logID,
      };
      axios
        .post(`${self.url}Redemption/AlldataDetailsReceipt`, tempdata)
        .then(function(response) {
          if (response.data.status == 0) {
            self.defaultPage = false;
            self.AlldataDetailsReceipt = response.data.data;
            console.log(self.AlldataDetailsReceipt);
            self.chooseData(self.AlldataDetailsReceipt[0].trn_Log_ID_Payment);
          }
          if (response.data.status == 1) {
            self.overlay = false;
            // self.defaultPage = true;
            // self.$router.push("/ParkingPayment/" + 0);
          }
        })
        .catch(function(error) {
          self.MessageAlert = error;
          self.TypeAlert = "error";
          self.AlertDialog = true;
        });
    },

    chooseData(index) {
      let self = this;
      self.Receiptmodel = index;
      // let data = self.AlldataDetailsReceipt[index];
      this.DetailsReceipt = self.AlldataDetailsReceipt.find(
        (x) => x.trn_Log_ID_Payment == index
      );
    },

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    print() {
      let self = this;
      html2canvas(document.querySelector("#capture"), {
        width: 1200,
        scale: 5,
      }).then((canvas) => {
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
