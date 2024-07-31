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
                    width="650px"
                    style="padding-top: 0rem;
                      margin-left: auto;
                      margin-right: auto;"
                    src="@/assets/Logo_PUNN.jpg"
                  />
                </v-col>
              </v-row>

              <v-row style="margin-top: 5%">
                <v-card-text>
                  <div>
                    <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                      <v-col cols="12" md="12" sm="12" align="center">
                        <p
                          v-show="CarLicense != ''"
                          style="font-size: 48px  ;"
                          class="mt-5"
                        >
                          {{ $t("message.LicensePlate") }}
                        </p>
                        <br />
                        <p
                          class="mt-2"
                          v-show="CarLicense != ''"
                          style="font-size: 60px;color: blueviolet;"
                        >
                          {{ CarLicense }}
                        </p>
                      </v-col>
                    </v-row>

                    <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                    </v-row>
                    <v-row
                      cols="12"
                      xs="12"
                      sm="12"
                      md="12"
                      justify="center"
                      style="height: auto;"
                    >
                      <v-col
                        cols="12"
                        md="12"
                        align="center"
                        class=" rounded-sm"
                      >
                        <v-divider></v-divider>
                        <table
                          style="width: 100%; border-spacing: 12px;font-size: 40px;height: 600px;"
                        >
                          <tr>
                            <td
                              class="ParkingInfo-class"
                              style="min-width: 150px"
                            >
                              {{ $t("message.TicketNo") }}
                            </td>
                            <td class="ParkingInfo-class-right">
                              {{ TicketNo }}
                            </td>
                          </tr>
                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.DateTime") }}
                            </td>
                            <td class="ParkingInfo-class-right">
                              {{ DateTime }}
                            </td>
                          </tr>
                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.DateTimeIn") }}
                            </td>
                            <td class="ParkingInfo-class-right">
                              {{ TimeIn }}
                            </td>
                          </tr>
                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.Duration") }}
                            </td>
                            <td class="ParkingInfo-class-right">
                              {{ numberWithCommas(Duration) }}
                            </td>
                          </tr>
                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.VehicleName") }}
                            </td>
                            <td class="ParkingInfo-class-right">
                              {{ VehicleName }}
                            </td>
                          </tr>
                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.RateDetail") }}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colspan="2"
                              class="ParkingInfo-class"
                              style="color: #ff6600; line-height: 1em;
    height: 1.5em;"
                            >
                              {{
                                $i18n.locale == "en"
                                  ? RateDetailEN
                                  : RateDetailTH
                              }}
                            </td>
                          </tr>

                          <tr>
                            <td class="ParkingInfo-class">
                              {{ $t("message.Total") }}
                            </td>
                            <td
                              style="text-align: right; color: green; font-size: 50px;"
                            >
                              {{ numberWithCommas(Total) }}
                              <span style="color: black">
                                {{ $t("message.Baht") }}</span
                              >
                            </td>
                          </tr>
                        </table>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" xs="12" sm="12" md="12"></v-col>
                    </v-row>
                  </div>
                </v-card-text>
              </v-row>
              <v-row style="margin-top: 25%">
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
                    v-if="Total != 0"
                    color="primary"
                    class="white--text ma-3 mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="PaymentWithArgentoTech()"
                  >
                    {{ $t("message.Clicktopay") }}
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
import Swal from "sweetalert2/dist/sweetalert2.js";
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
      LoadingDialog: false,

      TerminalID: null,
      DatetimeIn: "",
      MemberType: null,
      CarType: null,
      UserID: null,

      overlay: false,

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
    let invoiceNo = data[data.length - 1];
    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
    self.getParkingDetail(invoiceNo);
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async getParkingDetail(logID) {
      let self = this;
      if (logID == 0) {
        return;
      } else {
        let tempdata = {
          search: logID,
          lostCard: false,
        };
        await axios
          .post(`${self.url}Redemption/GetParkingDetail`, tempdata)
          .then(function(response) {
            if (response.data.status == 0) {
              self.Total = response.data.data[0].Total;
              self.BindingDataResponse(response.data.data[0]);
            }
            if (response.data.status == 1) {
              if (response.data.message == "QR Exit !") {
                Swal.fire({
                  icon: "warning",
                  title: response.data.message,
                  showCancelButton: true,
                  confirmButtonText: "Show Receipt",
                }).then((result) => {
                  if (result.isConfirmed) {
                    self.$router.push("/Receipt/" + self.defaultPageLink);
                  } else {
                    self.$router.push("/ParkingPayment/" + 0);
                  }
                });
              } else {
                Swal.fire({
                  icon: "warning",
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: 1500,
                });

                self.$router.push("/ParkingPayment/" + 0);
              }

              self.overlay = false;
            }
          })
          .catch(function(error) {
            self.MessageAlert = error;
            self.TypeAlert = "error";
            self.AlertDialog = true;
          });
      }
    },

    BindingDataResponse(data) {
      let self = this;
      self.invoiceNoCarparkid = data.logId;
      if (data != null) {
        if (data.status != "Fail") {
          self.TerminalID = data.terminalInId;
          self.DatetimeIn = data.entryDateTime;
          self.MemberType = data.memberTypeId;
          self.CarType = data.vehicleTypeId;
          self.TicketNo = data.ticketNo;
          self.DateTime = new Date(data.entryDateTime).toLocaleDateString(
            "en-us",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          );
          self.TimeIn =
            data.entryDateTime.split(" ").length > 0
              ? data.entryDateTime.split(" ")[1]
              : "";
          self.Duration = data.parkHH + " hrs " + data.parkMM + " mins";
          self.CarLicense = data.plateNo;
          self.VehicleName = data.vehicleTypeName;
          self.RateCodeString = data.rateCode;
          self.RateDetailTH = data.rateDetailTH;
          self.RateDetailEN = data.rateDetailEN;
          self.Total = data.total;
        } else {
          self.MessageAlert = data.message;
          self.TypeAlert = "error";
          self.AlertDialog = true;
        }
      }
      self.overlay = false;
      //
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
