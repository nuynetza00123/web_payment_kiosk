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
                    text-align: left;
                    font-size: 60px;
                    color: #126496;
                    font-weight: bold;
                    padding-left: 20px;
                  "
                >
                Place to contact : <br>
                {{ ShowData }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12" style="text-align: center">
                  <v-text-field
                    outlined
                    v-model="SearchTenant"
                    ref="inputTenant"
                    height="70"
                  ></v-text-field>

                  <v-virtual-scroll
                    v-if="SearchTenant != ''"
                    :items="TenantList"
                    height="250"
                    item-height="48"
                  >
                    <template v-slot:default="{ item }">
                      <v-list-item
                        :key="item"
                        @click="
                          dataTenant(item)
                        "
                      >
                        <v-list-item-content style="text-align: start;">
                          <v-list-item-title>
                            <v-row>
                              <v-col cols="1" md="1" sm="1">
                                Tenant :
                              </v-col>
                              
                                <v-col cols="3" md="3" sm="3">
                                  <strong>{{ item.nameEng }} </strong>
                                </v-col>
                             
                             
                                <v-col cols="3" md="3" sm="3">
                                  <strong>  {{ item.nameThai }} </strong>
                                </v-col>
                             
                                
                              

                              <v-col cols="1" md="1" sm="1">
                                Floor :
                              </v-col>
                              
                                <v-col cols="1" md="1" sm="1">
                                  <strong> {{ item.floorID }} </strong>
                                </v-col>
                              <v-col cols="1" md="1" sm="1">
                                Zone :
                              </v-col>
                              
                                <v-col cols="1" md="1" sm="1">
                                  <strong> {{ item.zoneName }} </strong>
                                </v-col>
                              
                            </v-row>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-virtual-scroll>
                  <v-sheet height="250" v-if="SearchTenant == ''"> </v-sheet>

                  <!-- <v-autocomplete
                    outlined
                    v-model="SearchTenant"
                    :items="TenantList"
                    item-value="tenantID"
                    item-text="tenantName"
                    ref="inputTenant"
                  ></v-autocomplete> -->
                </v-col>
              </v-row>
              <v-row style="margin-top: 30%">
                <!-- <div
                  style="width: 100%; padding-left: 10px; padding-right: 10px"
                >
                  <MultiSimpleKeyboardTenant @onChange="onChangeTenant" />
                </div> -->
                <div
                  style="width: 100%; padding-left: 10px; padding-right: 10px"
                >
                  <MultiSimpleKeyboardTenant @onChange="onChangeTenant" />
                </div>
              </v-row>
              <v-row style="margin-top: 5%">
                <v-col cols="6" md="6" lg="6" sm="6" style="text-align: center">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    @click="BackToIdentifySelection()"
                    >{{ $t("message.Back") }}</v-btn
                  >
                </v-col>
                <v-col cols="6" md="6" lg="6" sm="6" style="text-align: center">
                  <v-btn
                    color="primary"
                    class="white--text mt-2 text-capitalize"
                    router
                    width="400"
                    style="font-size: 45px; border-radius: 50px"
                    height="100"
                    :disabled = "ShowData == ''"
                    @click="printQr()"
                    >{{ $t("message.Continue") }}</v-btn
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
import axios from "axios";
import enurl from "@/api/environment";
import MultiSimpleKeyboardTenant from "@/components/MultiSimpleKeyboard";
import ChangeLanguage from "@/components/ChangeLanguage";
export default {
  name: "FindingTenant",
  components: {
    MultiSimpleKeyboardTenant,
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

      inputTenantName: "",
      TenantName: "",
      Textkeyboard: "",
      SearchTenant: "",
      ShowData: "",
      TenantList: [],
      TenantListName: [],
      data: [],
      zoneName: "",
      tenantName: "",
      floorID: "",
    };
  },

  mounted: function() {
    let self = this;
    // console.log(self.$route.params.data);
    self.data = self.$route.params.data;
    setInterval(() => {
      this.getCurrentDate();
    }, 1000);
    this.$refs.inputTenant.focus();
    // this.SearchDataTenant();
  },

  watch: {
    // SearchTenant: function (value) {
    //     let self = this;
    //     if(value.length > 3){
    //         self.SearchDataTenant(value);
    //     }
    // }
  },

  methods: {
    dataTenant(item) {
      // let data = input.replace("undefined", "");
      // this.SearchTenant = data;
      let self = this;
      let text = item.nameEng + '  ' + 'F. ' + item.floorID
      self.zoneName = item.zoneName;
      self.tenantName = item.tenantName;


      if(self.data != null){
        if(self.data.documentNumber != undefined && self.data.documentNumber != "") {
        self.data.zoneID = item.zoneID;
        self.data.floorID = item.floorID;
        self.data.locationID = item.locationID;
        self.data.tenantID = item.tenantID;
        self.data.referenceQr = localStorage.getItem("LogId");
        self.data.ip = localStorage.getItem("IP");
      }
      }
      this.ShowData = text;
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

    select() {
      this.$refs.inputTenant.select();
    },

    onChangeTenant(input) {
      let self = this;
      self.SearchTenant = input;
      self.SearchDataTenant();
    },

    BackToIdentifySelection() {
      let self = this;
      self.$router.push("/CapturePerson");
    },
    printQr() {
      let self = this;
      // self.$router.push("/PrintQr");
      self.$router.push({
              name: "PrintQr",
              path: "/PrintQr",
              params: {
                data: self.data,
                zoneName : self.zoneName,
                tenantName : self.tenantName,
              },
            });
    },

    CapturePerson() {
      let self = this;
      self.$router.push("/CapturePerson");
    },

    // SearchDataTenant(value) {
    //   let self = this;
    //   let temp = {
    //     search: value,
    //   };
    //   axios
    //     .post(`${self.url}Main/searchDataTenant`, temp)
    //     .then(function(response) {
    //       if (response.data.status == 0) {
    //         self.TenantList = response.data.data;
    //         console.log(response.data.data);
    //       }
    //     })
    //     .catch(function(error) {
    //       self.MessageAlert = error;
    //     });
    // },

    SearchDataTenant() {
      let self = this;
      let temp = {
        search: self.SearchTenant,
        lang: 'en',
      };
      axios
        .post(`${self.url}VMS/searchDataTenant`, temp)
        .then(function(response) {
          if (response.data.status == 0) {
            self.TenantList = response.data.data;
            // console.log(self.TenantList);
          }
          if (response.data.status == 1) {
            self.TenantList = [];
          }
        })
        .catch(function(error) {
          self.MessageAlert = error;
        });
    },
  },
};
</script>
<style scoped>

.v-input input {
    font-size: 2.2em !important;
}

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
