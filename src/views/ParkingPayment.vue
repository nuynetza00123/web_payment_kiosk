<template>
  <div>
    <v-card :style="[
      $vuetify.breakpoint.height < 786
        ? { display: 'contents', 'background-color': '#E9E9E9', zoom: '200%' }
        : { display: 'contents', 'background-color': '#E9E9E9', zoom: '200%' },
      // $vuetify.breakpoint.height > 786
      //   ? { 'min-height': '100vh', 'background-color': '#E9E9E9' }
      //   : {
      //       height: $vuetify.breakpoint.height,
      //       'background-color': '#E9E9E9',
      //     },
    ]">
      <div style="margin-left: 10px; margin-right: 10px">
        <div style="
            font-size: 18px;
            margin-left: 1rem;
            margin-right: 1rem;
            color: #444444;
            cursor: default;
          "></div>
        <v-card-text v-if="defaultPage == 1" style="display: flex;justify-content: center;">
          <div>
            <v-col cols="12" md="12" sm="12">
              <v-card elevation="10" class="white--text"
                style="border-radius: 15px; background-color: #00B5E4;max-width: 450px;">
                <v-card-title class="text-h5" style="color: #FFFFFF;padding-bottom: 30px;">
                  <!-- <span><v-img alt="Logo" class="shrink app" contain :src="images.logo" transition="scale-transition"
                      width="35" style="margin-right: 20px;" /></span>  -->
                  {{ $t("message.ParkingDetails") }}
                </v-card-title>
                <v-card-subtitle style="background-color: white;padding-top: 10px;">
                  <v-row>
                    <v-col cols="2" md="2" sm="2" style="display: flex
;
    align-items: center;justify-content: space-around;">
                      <span class="mdi mdi-home-city-outline" style="font-size: 30px;"></span>
                    </v-col>
                    <v-col cols="10" md="10" sm="10">
                      {{ $t("message.ParkingArea") }} <br>
                      <span style="font-size: 20px;font-weight: 800;">V.ONE</span>
                    </v-col>
                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>

                <v-card-subtitle style="background-color: white;padding-top: 0px;">
                  <v-row>
                    <v-col cols="2" md="2" sm="2" style="display: flex
;
    align-items: center;justify-content: space-around;">
                      <span class="mdi mdi-license" style="font-size: 30px;"></span>
                    </v-col>
                    <v-col cols="10" md="10" sm="10">
                      {{ $t("message.LicensePlate") }} <br>
                      <span style="font-size: 20px;font-weight: 800;"> {{ CarLicense }}</span>
                    </v-col>
                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>

                <v-card-subtitle style="background-color: white;padding-top: 0px;">
                  <v-row>
                    <v-col cols="6" md="6" sm="6">
                      {{ $t("message.TimeIn") }} <br>
                      <span style="font-size: 20px;font-weight: 800;">{{ TimeIn }}</span>
                    </v-col>
                    <v-col cols="6" md="6" sm="6">
                      {{ $t("message.TimeNow") }} <br>
                      <span style="font-size: 20px;font-weight: 800;">{{ TimeNow }}</span>
                    </v-col>
                    <v-col cols="6" md="6" sm="6">
                      {{ $t("message.DateTimeIn") }} <br>
                      <span style="font-size: 20px;font-weight: 800;">{{ DateTime }}</span>
                    </v-col>
                    <v-col cols="6" md="6" sm="6">
                      {{ $t("message.Duration") }} <br>
                      <span style="font-size: 20px;font-weight: 800;">{{ numberWithCommas(Duration) }}</span>
                    </v-col>

                  </v-row>
                </v-card-subtitle>
              </v-card>

              <v-card elevation="10" class="white--text"
                style="border-radius: 15px; background-color: #00B5E4;margin-top: 20px;max-width: 450px;">
                <v-card-title class="text-h5" style="color: #FFFFFF;padding-bottom: 30px;">
                  <!-- <span><v-img alt="Logo" class="shrink app" contain :src="images.logo" transition="scale-transition"
                      width="35" style="margin-right: 20px;" /></span> -->
                  {{ $t("message.ServiceFee") }}
                </v-card-title>
                <v-card-subtitle style="background-color: white;">
                  <v-row>
                    <v-col cols="12" md="12" sm="12">

                      <span style="font-size: 20px;font-weight: 800;"> {{ $t("message.RateDetail") }}</span><br>
                      {{ $i18n.locale == "en" ? RateDetailEN : RateDetailTH }}
                    </v-col>


                  </v-row>
                  <v-divider style="margin-top: 20px;margin-bottom: 20px;"></v-divider>
                  <v-row>

                    <v-col cols="6" md="6" sm="6">

                      <span style="font-size: 20px;font-weight: 800;">{{ $t("message.TotalPayment") }} </span>
                    </v-col>
                    <v-col cols="6" md="6" sm="6" style="text-align: end;">

                      <span style="font-size: 20px;font-weight: 800;"> {{ numberWithCommas(Total) }} {{
                        $t("message.Baht") }}</span>
                    </v-col>
                  </v-row>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </div>
        </v-card-text>

        <v-card-text v-if="defaultPage == 4" style="display: flex;justify-content: center;">
          <div>
            <v-col cols="12" md="12" sm="12">
              <v-card elevation="10" class="white--text"
                style="border-radius: 15px; background-color: #00B5E4;max-width: 450px;">

                <v-card-title class="text-h5" style="color: #FFFFFF;padding-bottom: 30px;">
                  {{ "Select Payment" }}
                </v-card-title>
                <v-card-subtitle style="background-color: white;padding-top: 5%;">
                  <v-row>

                    <v-col cols="12" md="12" sm="12" style="display: flex;justify-content: center;">
                      <v-card class="mx-auto" max-width="100% ;" @click="native_pay('promptpay')">
                        <v-img class="white--text align-end" height="120px" :src="thaiQr" cover>
                          <!-- <v-card-title>Thai Or</v-card-title> -->
                        </v-img>


                      </v-card>
                    </v-col>



                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>

                <v-card-subtitle style="background-color: white;padding-top: 0px;padding-bottom: 0px;">
                  <v-row>
                    <v-col cols="12" md="12" sm="12" style="display: flex;justify-content: center;">
                      <v-card class="mx-auto" max-width="100%" @click="native_pay('truemoney')">
                        <v-img class="white--text align-end" height="120px" :src="truemoney" cover>
                        </v-img>


                      </v-card>
                    </v-col>
                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>


              </v-card>


            </v-col>
          </div>
        </v-card-text>

        <v-card-text v-if="defaultPage == 2" style="display: flex;justify-content: center;">
          <div>
            <v-col cols="12" md="12" sm="12">
              <v-card elevation="10" class="white--text"
                style="border-radius: 15px; background-color: #00B5E4;max-width: 450px;">

                <v-card-title class="text-h5" style="color: #FFFFFF;padding-bottom: 30px;">
                  {{ "Scan QrCode" }}
                </v-card-title>
                <v-card-subtitle style="background-color: white;padding-top: 10px;">
                  <v-row>

                    <v-col cols="12" md="12" sm="12" style="display: flex;justify-content: center;">
                      <!-- <v-img  alt="Logo" class="ma-0 pa-0" :src="promptpaylogo" height="120px"
                        style="padding-top: 10px;width: 80%;" /> -->
                      <v-img v-if="selectPayment == 'promptpay'" alt="Logo" class="shrink app" contain
                        :src="promptpaylogo" transition="scale-transition" width="250" style="margin-right: 20px;" />
                      <v-img v-else alt="Logo" class="shrink app" contain :src="logotrue" transition="scale-transition"
                        width="250" style="margin-right: 20px;" />
                    </v-col>

                    <v-col cols="12" md="12" sm="12" style="display: flex;justify-content: center;">
                      <img id="capture" :src="qrImage" style="width: 200px; height: 200px;" />
                    </v-col>
                    <v-col cols="6" md="6" sm="6" style="text-align: center;">
                      {{ $t("message.TotalPayment") }} <br>
                      <span style="font-size: 20px;font-weight: 800;"> {{ numberWithCommas(Total) }} {{
                        $t("message.Baht") }}</span>
                    </v-col>
                    <v-col cols="6" md="6" sm="6" style="text-align: center;">
                      {{ "Time" }} <br>
                      <span style="font-size: 20px;font-weight: 800;"> {{ '0:' + minutes + ':' + seconds }}</span>
                    </v-col>
                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>

                <v-card-subtitle style="background-color: white;padding-top: 0px;padding-bottom: 0px;">
                  <v-row>
                    <!-- <v-col cols="2" md="2" sm="2" style="display: flex
;
    align-items: center;justify-content: space-around;">
                      <span class="mdi mdi-license" style="font-size: 30px;"></span>
                    </v-col> -->
                    <!-- <v-col cols="10" md="10" sm="10">
                      {{ "Account Name" }} <br>
                      <span style="font-size: 20px;font-weight: 800;"> {{ getQrcodeData.accountName }}</span>
                    </v-col> -->
                  </v-row>
                  <v-divider style="margin-top: 20px;"></v-divider>
                </v-card-subtitle>

                <v-card-subtitle style="background-color: white;padding-top: 0px;">
                  <v-row style="display: flex;justify-content: center;">
                    <v-col cols="6" md="6" sm="6" style="display: flex;justify-content: center;">
                      <v-card elevation="0"
                        style="border-radius: 15px; background-color: #F3F4F6;width: 120px;height: 100px;border-color: #00B5E4;border-width: 2px;display: grid;align-items: center;align-content: center;"
                        @click="cancel(ksherPay.mch_order_no)">

                        <v-col cols="12" md="12" sm="12"
                          style="display: grid;justify-content: space-around;padding: 0;">
                          <span class="mdi mdi-cancel" style="font-size: 30px;color: #00B5E4;"></span>
                        </v-col>
                        <v-col cols="12" md="12" sm="12"
                          style="display: grid;justify-content: space-around;padding: 0;">
                          <span style="font-size: 15px;color: #00B5E4;">Cancel</span>

                        </v-col>
                      </v-card>

                    </v-col>


                  </v-row>
                </v-card-subtitle>
              </v-card>


            </v-col>
          </div>
        </v-card-text>

        <v-card-text v-if="defaultPage == 3">
          <div>
            <v-row cols="12" xs="12" sm="12" md="12" justify="center" style="height: auto;margin-top: 50px;">
              <!-- <v-col cols="12" md="8" sm="8" align="center" class=" rounded-sm">
                <v-row cols="12" xs="12" sm="12" md="12" justify="center" class="mt-2"> -->
              <v-col cols="12" md="10" sm="12" align="center">
                <v-card elevation="10" class="mx-auto" height="auto" max-width="450" style="border-radius: 20px;">
                  <v-row cols="12" xs="12" sm="12" md="12" justify="center">
                    <v-col cols="12" md="12" sm="12" align="center">
                      <img v-if="payComplated" class="ma-0 pa-0" src="@/assets/successful-logo-01.png" width="150"
                        height="auto" style="padding-top: 10px;" />
                      <img v-if="!payComplated" class="ma-0 pa-0" src="@/assets/unsuccessful-logo-01.png" width="150"
                        height="auto" style="padding-top: 10px;" />
                    </v-col>
                  </v-row>

                  <v-row cols="12" md="12" sm="12" justify="center"
                    style="font-size: 30px;font-weight: 800;color: #00B5E4;">

                    {{ payComplated ? $t("message.PaymentSuccessful") : $t("message.Paymentfailed") }}
                  </v-row>
                  <v-row cols="12" md="12" sm="12" justify="center" style="font-size: 18px;">
                    <v-col cols="12" md="12" sm="12" align="center">
                      {{ payComplated ? $t("message.Thankyou") : $t("message.Error") }}
                    </v-col>

                  </v-row>

                  <v-card v-if="payComplated" elevation="3" class="mx-auto" height="auto" width="300"
                    style="border-radius: 20px;font-size: 15px;margin-top: 30px;">
                    <v-row cols="12" md="12" sm="12" justify="center">
                      <v-col cols="4" md="4" sm="4" align="left">
                        {{ $t("message.Referencenumber") }}
                      </v-col>

                      <v-col cols="6" md="6" sm="6" align="right">
                        {{ inquiryList.invoiceNo }}
                      </v-col>
                    </v-row>
                    <v-row cols="12" md="12" sm="12" justify="center">
                      <v-col cols="3" md="3" sm="3" align="left">
                        {{ $t("message.PaymentDate") }}
                      </v-col>

                      <v-col cols="7" md="7" sm="7" align="right">
                        {{ TimeNowFull }}
                      </v-col>
                    </v-row>
                    <v-row cols="12" md="12" sm="12" justify="center">
                      <v-col cols="5" md="5" sm="5" align="left">
                        {{ $t("message.Amount") }}
                      </v-col>

                      <v-col cols="5" md="5" sm="5" align="right">
                        {{ numberWithCommas(inquiryList.amount) }} {{
                          $t("message.Baht") }}
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card v-if="!payComplated" elevation="3" class="mx-auto" height="auto" width="300"
                    style="border-radius: 20px;font-size: 15px;margin-top: 30px;">
                    <v-row cols="12" md="12" sm="12" justify="center">
                      <v-col cols="10" md="10" sm="10" style="display: flex;justify-content: space-between;">
                        <span>{{ $t("message.Referencenumber") }}</span>
                        <span> {{ inquiryList.partnerTxnUid }}</span>
                      </v-col>

                      <!-- <v-col cols="6" md="6" sm="6" align="right">
                       
                      </v-col> -->
                    </v-row>
                    <v-row cols="12" md="12" sm="12" justify="center">
                      <v-col cols="10" md="10" sm="10" style="display: flex;justify-content: space-between;">
                        <span> {{ $t("message.Reason") }}</span>
                        <span>{{ inquiryList.txnStatus }}</span>
                      </v-col>

                      <!-- <v-col cols="5" md="5" sm="5" align="right">
                        {{ inquiryList.txnStatus }}
                      </v-col> -->
                    </v-row>


                  </v-card>

                  <v-row cols="12" md="12" sm="12" justify="center" v-if="payComplated && $i18n.locale != 'en'"
                    style="color: red;">
                    <v-col cols="12" md="10" sm="10" align="center">
                      กรุณานำรถออกภายในเวลา 15 นาที <br />
                      หากเกิน 15 นาที คิดค่าบริการจอดรถ ชั่วโมงละ {{ CarType == 0 ? '30' : '10' }} บาท <br />
                    </v-col>
                  </v-row>
                  <v-row cols="12" md="12" sm="12" justify="center" v-if="payComplated && $i18n.locale == 'en'"
                    style="color: red;">
                    <v-col cols="12" md="10" sm="10" align="center">
                      If parking time exceed 15 mins, <br />
                      parking fees shall be charge {{ CarType == 0 ? '30' : '10' }} baht/hrs.
                    </v-col>
                  </v-row>
                  <v-card-subtitle style="background-color: white;margin-top: 30px;">
                    <v-row style="display: flex;justify-content: center;">
                      <v-col cols="6" md="6" sm="6" style="display: flex;justify-content: center;">
                        <v-card elevation="2"
                          style="border-radius: 15px; background-color: #F3F4F6;width: 120px;height: 100px;border-color: #00B5E4;border-width: 2px;display: grid;align-items: center;align-content: center;"
                          :disabled="!payComplated" @click="Receipt()">

                          <v-col cols="12" md="12" sm="12"
                            style="display: grid;justify-content: space-around;padding: 0;">
                            <span class="mdi mdi-download" style="font-size: 30px;color: #00B5E4;"></span>
                          </v-col>
                          <v-col cols="12" md="12" sm="12"
                            style="display: grid;justify-content: space-around;padding: 0;">
                            <span style="font-size: 15px;color: #00B5E4;">Receipt</span>

                          </v-col>
                        </v-card>
                      </v-col>
                      <v-col cols="6" md="6" sm="6" style="display: flex;justify-content: center;">
                        <v-card elevation="2"
                          style="border-radius: 15px; background-color: #F3F4F6;width: 120px;height: 100px;border-color: #00B5E4;border-width: 2px;display: grid;align-items: center;align-content: center;"
                          :disabled="payComplated" @click="BackToMain()">

                          <v-col cols="12" md="12" sm="12"
                            style="display: grid;justify-content: space-around;padding: 0;">
                            <span class="mdi mdi-refresh" style="font-size: 30px;color: #00B5E4;"></span>
                          </v-col>
                          <v-col cols="12" md="12" sm="12"
                            style="display: grid;justify-content: space-around;padding: 0;">
                            <span style="font-size: 15px;color: #00B5E4;">Try Again</span>

                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <!-- </v-row>
              </v-col> -->

              <v-col cols="12" md="8" align="center" class=" rounded-sm">
                <v-row cols="12" xs="12" sm="12" md="12" justify="center" class="mt-5">
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text v-if="defaultPage == 5">
          <div>
            <v-row cols="12" xs="12" sm="12" md="12" justify="center">
              <v-col cols="12" md="4" sm="6" class="white " align="center">
                <img class="mt-5" :src="imagesLogo" width="120" height="auto" />
              </v-col>
              <v-col cols="12" md="4" sm="6" class="white" align="center">
                <p v-show="CarLicense != ''" style="font-size: 18px" class="mt-5">
                  {{ $t("message.LicensePlate") }}
                </p>
                <p v-show="CarLicense != ''" style="font-size: 18px">
                  {{ CarLicense }}
                </p>
              </v-col>
            </v-row>

            <v-row cols="12" xs="12" sm="12" md="12" justify="center"> </v-row>
            <v-row cols="12" xs="12" sm="12" md="12" justify="center" style="height: auto;">
              <v-col cols="12" md="8" align="center" class="white rounded-sm">
                <v-divider></v-divider>
                <table style="width: 100%; border-spacing: 12px">
                  <tr>
                    <td class="ParkingInfo-class" style="min-width: 150px">
                      {{ $t("message.TicketNo") }}
                    </td>
                    <td class="ParkingInfo-class-right">{{ TicketNo }}</td>
                  </tr>
                  <tr>
                    <td class="ParkingInfo-class">
                      {{ $t("message.DateTime") }}
                    </td>
                    <td class="ParkingInfo-class-right">{{ DateTime }}</td>
                  </tr>
                  <tr>
                    <td class="ParkingInfo-class">
                      {{ $t("message.DateTimeIn") }}
                    </td>
                    <td class="ParkingInfo-class-right">{{ TimeIn }}</td>
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
                    <td class="ParkingInfo-class-right">{{ VehicleName }}</td>
                  </tr>
                  <tr>
                    <td class="ParkingInfo-class">
                      {{ $t("message.RateDetail") }}
                    </td>

                  </tr>
                  <tr>
                    <td colspan="2" class="ParkingInfo-class" style="color: #ff6600;">
                      {{ $i18n.locale == "en" ? RateDetailEN : RateDetailTH }}
                    </td>
                  </tr>

                  <tr>
                    <td class="ParkingInfo-class">{{ $t("message.Total") }}</td>
                    <td style="text-align: right; color: green; font-size: 18px">
                      {{ numberWithCommas(Total) }}
                      <span style="color: black">
                        {{ $t("message.Baht") }}</span>
                    </td>
                  </tr>
                </table>
              </v-col>
              <v-col cols="12" md="8" align="center" class="white rounded-sm">
                <v-row cols="12" xs="12" sm="12" md="12" justify="center" class="mt-5">

                  <v-col cols="12" md="8" align="center">

                    <v-btn v-if="checkreceipt" height="50" width="160" class="yellow--text" color="black"
                      @click="Receiptexample()">
                      {{ $t("message.Receiptexample") }}
                    </v-btn>
                  </v-col>
                </v-row>

              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12"></v-col>
            </v-row>
          </div>
        </v-card-text>
      </div>

      <v-footer v-bind="localAttrs" :padless="padless">
        <v-row>
          <v-col v-if="defaultPage == 1 && Total != 0" col="12" style="display: inline-flex;">

            <v-card tile width="50%" class="text-center" style="color: #FFFFFF;background-color: #F40005;height: 55px;display: flex;
    align-items: center;
    justify-content: space-around;" @click="native_pay('truemoney')">

              {{ 'True Money' }}

            </v-card>
            <v-card tile width="50%" class="text-center" style="color: #FFFFFF;background-color: #0E3D67;height: 55px;display: flex;
    align-items: center;
    justify-content: space-around;" @click="native_pay('promptpay')">

              {{ 'Thai Qr' }}

            </v-card>
          </v-col>

          <v-col v-if="defaultPage == 1 && Total == 0" col="12">
            <v-card flat tile width="100%" class="text-center" style="color: #FFFFFF;background-color: #F3F4F6;">
              <v-card-text style="color:white ;font-size: 20px;">
                {{ $t("message.PayNow") }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col v-if="defaultPage == 2" col="12">
            <v-card flat tile width="100%" class="text-center"
              style="color: #FFFFFF;background-color: #00B5E4;height: 55px;display: flex;justify-content: center;align-items: center;"
              @click="inquiry(ksherPay.mch_order_no)">

              {{ $t("message.Pleasepress") }}
              <!-- <v-progress-circular indeterminate size="35" style="margin-left: 10px;">
                <span style="font-size: 20px;">{{ timerCount }}</span>
              </v-progress-circular> -->
            </v-card>
          </v-col>

          <v-col v-if="defaultPage == 3" col="12">
            <v-card flat tile width="100%" class="text-center"
              style="color: #FFFFFF;background-color: #00B5E4;height: 55px;display: flex;justify-content: center;align-items: center;"
              @click="BackToMain()">

              {{ $t("message.mainPage") }}
              <!-- <v-progress-circular indeterminate size="35" style="margin-left: 10px;">
                <span style="font-size: 20px;">{{ timerCount }}</span>
              </v-progress-circular> -->
            </v-card>
          </v-col>

          <!-- <v-col v-if="defaultPage == 3" col="12">
            <v-card flat tile width="100%" class="text-center" style="color: #FFFFFF;background-color: #00B5E4;"
              @click="getParkingDetail(defaultPageLink)">
              <v-card-text style="color:#FFFFFF ;font-size: 20px;">
                {{ $t("message.mainPage") }}
              </v-card-text>
            </v-card>
          </v-col> -->
        </v-row>

      </v-footer>
    </v-card>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ subtitle }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay :opacity="5" :value="overlay">
      <v-progress-circular indeterminate size="100">
        Loading...
      </v-progress-circular>
    </v-overlay>

    <v-dialog v-model="LoadingDialog" persistent width="0.01">
      <v-card>
        <v-card-text>
          <v-row>
            <LoadingComponent class="centered"></LoadingComponent>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- <AlertComponent
      :flagAlert="AlertDialog"
      :typeAlert="TypeAlert"
      :mesAlert="MessageAlert"
      @flagClose="ClearDataAlert()"
    /> -->
  </div>
</template>
<script>
import axios from "axios";
import enurl from "@/api/environment";
import LoadingComponent from "@/components/Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import logo from '@/assets/Kinglogo.png';
import ParkingData from "@/models/ParkingData";
import promptpaylogo from "@/assets/promptpay.jpg";
import truemoney from "@/assets/truemoney.jpg";
import logotrue from "@/assets/logotrue.png";
import thaiQr from "@/assets/ThaiQr.jpg";
import requestData from "@/models/request";
import html2canvas from "html2canvas";
// import QrCode from 'vue-qrcode-component'
import QRCode from 'qrcode';

export default {
  name: "ParkingPayment",
  components: {
    LoadingComponent,
  },
  data() {
    return {

      images: {
        logo: "",
      },
      timerCount: 180,
      promptpaylogo: promptpaylogo,
      truemoney: truemoney,
      logotrue: logotrue,
      thaiQr: thaiQr,
      padless: true,
      variant: 'fixed',

      items: [
        {
          color: '#000000',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#000000',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      url: enurl.apiUrl,
      urlCarpark: enurl.apiUrlcarpark,
      dialog: false,
      title: "ชำระเงินสำเร็จแล้ว",
      subtitle: "บัตรจอดรถใบนี้ ชำระเงินเรียบร้อยแล้ว",
      defaultPage: 1,
      defaultPageLink: 0,
      chooseVehicle: "",
      vehicleShow: false,
      LoadingDialog: false,
      AlertDialog: false,
      TypeAlert: null,
      MessageAlert: "",
      id: null,
      response: "",
      search: "",
      LogCarparkID: "",
      vehicleType: "0",
      LogID: null,
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
      TimeNow: "",
      TimeNowFull: "",
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
      AlldataDetailsReceiptlist: [],
      checkreceipt: false,
      receipt: false,
      parkingData: new ParkingData(),
      getQrcodeData: new requestData(),
      qrImage: '',
      countDown: 180,
      payComplated: false,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      isEnded: null,
      selectPayment: "promptpay",
      inquiryList: [],
      ksherPay: [],
    };
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

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            if (this.timerCount == 0) {
              this.BackToMain();
            }
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  mounted() {
    let that = this;
    var logID = window.location.href;
    this.LogCarparkID = logID;
    // that.GetLogoTemplate();

    let data = this.LogCarparkID.split("/");
    let invoiceNo = data[data.length - 1];
    this.defaultPageLink = invoiceNo;
    if (invoiceNo == 0) {
      this.defaultPage = 1;
    } else {
      this.defaultPage = 1;
      this.invoiceNoCarparkid = logID;
      // that.AlldataDetailsReceiptList(invoiceNo);
      that.getParkingDetail(invoiceNo);
      // that.PaymentWithArgentoTech();
    }
  },

  destroy() {
    clearInterval(this.timer);
  },

  methods: {

    countDownTimer() {
      let that = this;
      if (that.countDown > 0 && that.defaultPage == 2) {
        setTimeout(() => {
          that.countDown -= 1;
          that.minutes = String(Math.floor(this.countDown / 60)).padStart(
            2,
            "0"
          );
          that.seconds = String(this.countDown % 60).padStart(2, "0");
          that.countDownTimer();
        }, 1000);
      } else if (that.countDown == 0 && that.defaultPage == 2) {
        that.defaultPage = 1;
      }
    },

    print() {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        // document.body.appendChild(canvas)
        // console.log(document.body.appendChild(canvas));
        const base64 = canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", base64);
        anchor.setAttribute("download", this.defaultPageLink + "ThaiQr.jpg");
        anchor.click();
        anchor.focus();
        anchor.print();
        anchor.remove();
      });
    },

    GetLogoTemplate() {
      let that = this;
      let tempdata = {
        project: "Sathon",
      };
      axios
        .post(`${that.url}Payment/GetLogoTemplate`, tempdata)
        .then(function (response) {
          if (response.data.status == 0) {
            that.imagesLogo = response.data.data.base64;
            // console.log(response.data.data);
          }
          if (response.data.status == 1) {
            that.overlay = false;
          }
        })
        .catch(function (error) {
          that.MessageAlert = error;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        });
    },
    searchData() {
      // this.getParkingDetailReLink(this.search);
    },

    async getParkingDetail(logID) {
      let that = this;
      that.defaultPage = 1;
      that.overlay = true;
      if (logID == 0) {
        return;
      } else {
        let tempdata = {
          search: logID,
          lostCard: false,
        };
        await axios
          .post(`${that.url}Redemption/GetParkingDetail`, tempdata)
          .then(function (response) {
            if (response.data.status == 0) {
              that.Total = response.data.data[0].Total;
              // that.SaveKioskPaymentLog(response.data.data[0]);
              that.BindingDataResponse(response.data.data[0]);
              that.parkingData = response.data.data[0];
              // console.log(that.parkingData);



              that.overlay = false;
            }
            if (response.data.status == 1) {
              if (response.data.message == "QR Exit !") {
                that.receipt = true,
                  that.AlldataDetailsReceiptList(logID);
                // Swal.fire({
                //   icon: "warning",
                //   title: response.data.message,
                //   showCancelButton: true,
                //   confirmButtonText: "Show Receipt",
                // }).then((result) => {
                //   if (result.isConfirmed) {
                //     that.$router.push("/Receipt/" + that.defaultPageLink);
                //   } else {
                //     that.$router.push("/" + 0);
                //   }
                // });
                that.overlay = false;
              } else {
                Swal.fire({
                  icon: "warning",
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: 1500,
                });

                // that.$router.push("/" + 0);
              }

              // Swal.fire({
              //   icon: "warning",
              //   title: response.data.message,
              //   showConfirmButton: false,
              //   timer: 1500,
              // });

              // that.$router.push("/ParkingPayment/" + 0);
              that.overlay = false;
              that.defaultPage = 1;
            }
          })
          .catch(function (error) {
            that.MessageAlert = error;
            that.TypeAlert = "error";
            that.AlertDialog = true;
          });
      }
    },

    async AlldataDetailsReceiptList(logID) {
      let that = this;
      if (logID == 0) {
        return;
      } else {
        let tempdata = {
          trn_Log_ID: logID,
        };
        await axios
          .post(`${that.urlCarpark}Redemption/AlldataDetailsReceiptList`, tempdata)
          .then(function (response) {
            if (response.data.status == 0) {


              if (response.data.data.data.length > 0) {
                that.checkreceipt = true,
                  that.defaultPage = 2,

                  that.AlldataDetailsReceiptlist = response.data.data.data;
                console.log(response.data.data.data.length);
              }
            }

          })
          .catch(function (error) {
            that.MessageAlert = error;
            that.TypeAlert = "error";
            that.AlertDialog = true;
          });
      }
    },



    getParkingDetailReceipt(data) {
      let that = this;
      that.overlay = true;

      that.$router.push("/Receipt/" + data);
      // Receipt

    },


    selectPaymentpage() {
      let that = this;
      that.defaultPage = 4;
      // that.selectPayment = data;
    },

    native_pay(data) {
      let that = this;
      // that.defaultPage = 4;
      that.selectPayment = data;

      let tempdata = {
        invoiceNo: that.parkingData.logId,
        description: that.parkingData.ticketNo,
        amount: that.parkingData.total,
        currency: "THB",
        paymentChannel: that.selectPayment,
      };

      axios
        .post(`${that.url}Payment/native_pay`, tempdata)
        .then(function (response) {
          if (response.status == 200) {
            that.overlay = false;
            if (response.data.code == 0) {
              console.log(response.data.data);
              that.ksherPay = response.data.data;
              that.countDown = 180;
              that.qrImage = response.data.data.imgdat;
              // that.timerCount = 60;

              // that.getQrcodeData = response.data;

              that.inquiry(that.ksherPay.mch_order_no);

              // QRCode.toDataURL(that.getQrcodeData.qrCode, { errorCorrectionLevel: 'M' })
              //   .then((url) => {
              //     that.qrImage = url;
              //   })
              //   .catch((err) => {
              //     console.error(err);
              //   });
              // console.log(that.qrImage);

              that.defaultPage = 2;
              that.countDownTimer();
            }


            // console.log(response.data);

          }

        })
        .catch(function (error) {
          that.MessageAlert = error;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        });




    },

    async PaymentWithKBank() {
      let that = this;
      that.overlay = true;

      let tempdata = {
        logId: that.parkingData.logId,
        ticketNo: that.parkingData.ticketNo,
        plateNo: that.parkingData.plateNo,
        total: that.parkingData.total,
      };

      axios
        .post(`${that.url}Payment/request`, tempdata)
        .then(function (response) {
          if (response.status == 200) {
            that.overlay = false;
            if (response.data.statusCode == "00") {
              that.countDown = 180;
              // that.timerCount = 60;

              that.getQrcodeData = response.data;

              that.inquiry(that.getQrcodeData.partnerTxnUid);

              QRCode.toDataURL(that.getQrcodeData.qrCode, { errorCorrectionLevel: 'M' })
                .then((url) => {
                  that.qrImage = url;
                })
                .catch((err) => {
                  console.error(err);
                });
              // console.log(that.qrImage);

              that.defaultPage = 2;
              that.countDownTimer();
            }


            // console.log(response.data);

          }

        })
        .catch(function (error) {
          that.MessageAlert = error;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        });
    },


    async inquiry(data) {
      let that = this;
      // that.overlay = true;
      console.log(data);
      let tempdata = {
        TransactionNo: data,
      };


      axios
        .post(`${that.url}Payment/InquiryPayment`, tempdata)
        .then(function (response) {

          if (response.status == 200) {
            that.overlay = false;
            that.inquiryList = response.data;
            console.log(that.inquiryList.transactionStatusId);

            if (that.inquiryList.transactionStatusId == 1) {
              if (that.defaultPage == 2) {
                that.inquiry(that.ksherPay.mch_order_no);
              }
            }
            // console.log(data1);
            if (that.inquiryList.transactionStatusId == 2) {
              that.overlay = true;
              that.payComplated = true;
              that.defaultPage = 3;

              that.overlay = false;
            }
            if (that.inquiryList.transactionStatusId == 3) {
              that.overlay = true;
              that.payComplated = false;
              that.defaultPage = 3;

              that.overlay = false;
            }

          }
          // if (response.status == 200) {

          //   if (response.data.statusCode == "00") {

          //     that.inquiryList = response.data;

          //     if (response.data.txnStatus == "PAID") {

          //       that.overlay = true;
          //       that.payComplated = true;
          //       that.defaultPage = 3;

          //       that.overlay = false;
          //     }
          //     else if (response.data.txnStatus == "REQUESTED") {
          //       if (that.defaultPage == 2) {
          //         that.inquiry(that.ksherPay.mch_order_no);
          //       }

          //     }
          //     else {
          //       that.overlay = true;
          //       that.payComplated = false;
          //       that.defaultPage = 3;

          //       that.overlay = false;
          //     }

          //   }
          // }
        })
        .catch(function (error) {
          that.MessageAlert = error;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        });
    },

    async cancel(data) {
      let that = this;
      that.overlay = true;
      console.log(data);
      that.$router.push("/MainMenu");
      // let tempdata = {
      //   partnerTxnUid: data,
      // };

      // axios
      //   .post(`${that.url}Payment/cancel`, tempdata)
      //   .then(function (response) {
      //     if (response.status == 200) {

      //       if (response.data.statusCode == "00") {
      //         // that.overlay = false;
      //       }
      //     }
      //   })
      //   .catch(function (error) {
      //     that.MessageAlert = error;
      //     that.TypeAlert = "error";
      //     that.AlertDialog = true;
      //   });
    },


    Receipt() {
      let that = this;
      // that.$router.push("/PrintQr/" + "2024081316221890");
      that.$router.push("/PrintQr/" + that.defaultPageLink);
    },


    PaymentWithArgentoTechRush() {
      let that = this;
      if (that.Total == 0) {
        return;
      }

      that.overlay = true;

      that.$router.push(
        "/ThaiQR/" + that.invoiceNoCarparkid + ',' + that.Total
      );


    },

    InquiryPaymentWithArgento(invoiceNo) {
      let that = this;
      let tempdata = {
        invoiceNo: invoiceNo,
        amount: that.Total,
      };
      axios
        .post(`${that.url}Redemption/InquiryPaymentWithArgento`, tempdata)
        .then(function (response) {
          if (response.data.status == 0) {
            that.overlay = false;
            let data1 = response.data.data.transactionStatusId;

            console.log(data1);
            if (data1 == 2) {
              that.getParkingDetail(that.invoiceNoCarparkid);
              that.dialog = true;
            }
            if (data1 == 3) {
              that.getParkingDetail(that.invoiceNoCarparkid);
            }
          }
        })
        .catch(function (error) {
          that.MessageAlert = error;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        });
    },

    ClearDataAlert() {
      let that = this;
      that.AlertDialog = false;
      that.TypeAlert = "";
      that.MessageAlert = "";
    },

    BindingDataResponse(data) {
      let that = this;
      that.invoiceNoCarparkid = data.logId;
      if (data != null) {
        if (data.status != "Fail") {
          that.TerminalID = data.terminalInId;
          that.DatetimeIn = data.entryDateTime;
          that.MemberType = data.memberTypeId;
          that.CarType = data.vehicleTypeId;
          that.TicketNo = data.ticketNo;
          that.DateTime = this.formatBuddhistToChristianDate(data.entryDateTime); 
          that.TimeIn =
            data.entryDateTime.split(" ").length > 0
              ? data.entryDateTime.split(" ")[1]
              : "";
          that.TimeNow =
            data.logDateTime.split(" ").length > 0
              ? data.logDateTime.split(" ")[1]
              : "";
          that.TimeNowFull =
            data.logDateTime.split(" ").length > 0
              ? data.logDateTime
              : "";
          that.Duration = data.parkHH + " hrs " + data.parkMM + " mins";
          that.CarLicense = data.plateNo;
          that.VehicleName = data.vehicleTypeName;
          that.RateCodeString = data.rateCode;
          that.RateDetailTH = data.rateDetailTH;
          that.RateDetailEN = data.rateDetailEN;
          that.Total = data.total;
        } else {
          that.MessageAlert = data.message;
          that.TypeAlert = "error";
          that.AlertDialog = true;
        }
      }
      that.overlay = false;
      //
    },


    formatBuddhistToChristianDate(buddhistDateString) {
      // แยกส่วนวันที่และเวลา
      const [datePart, timePart] = buddhistDateString.split(' ');
      const [buddhistYear, month, day] = datePart.split('-');
      const christianEraYear = parseInt(buddhistYear) - 543;
      const christianEraDateString = `${christianEraYear}-${month}-${day} ${timePart}`;
      const dateObject = new Date(christianEraDateString);

      // ฟอร์แมตตามที่คุณต้องการ
      return dateObject.toLocaleDateString(
        "en-us",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      );
    },


    BackToMain() {
      let that = this;
      that.$router.push("/MainMenu");
    },

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ParkingInfo-class {
  color: #14223c;
  font-size: 18px;
}

.ParkingInfo-class-right {
  color: #14223c;
  font-size: 18px;
  text-align: right;
}

#specificElement {
  height: calc(100vh - 98px);
  box-sizing: border-box;
}

</>
