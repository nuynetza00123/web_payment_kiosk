<template>
  <nav style="z-index:3;zoom: 200%;">
    <v-toolbar color="#3A5408" height="80">
      <span class="mdi mdi-home" style="font-size: 30px;color: #F3DAB2" @click="home()"></span>
      <v-img alt="Logo" class="shrink app" contain :src="images.logo" transition="scale-transition" width="100" />
      <p style="color: #F3DAB2;margin-left:1rem;font-size: 18px;margin-top: 14px;font-weight: bold;cursor: default;">
        {{ $t("message.ParkingPayment") }}

      </p>
      <v-spacer></v-spacer>

      <span v-show="$i18n.locale == 'en'" style="color: #F3DAB2;" @click="SwitchLocales('en')">
        EN
      </span>
      <span v-show="$i18n.locale == 'th'" style="color: #F3DAB2;" @click="SwitchLocales('th')">
        TH
      </span>

      <!-- <v-img
        v-show="$i18n.locale == 'en'"
        class="shrink"
        contain
        src="@/assets/united-kingdom.png"
        @click="SwitchLocales('en')"
        style="padding-right: 65px; cursor: pointer"
        width="35"
        height="35"
      />
      <v-img
        v-show="$i18n.locale == 'th'"
        class="shrink"
        contain
        src="@/assets/thailand.png"
        @click="SwitchLocales('th')"
        style="padding-right: 65px; cursor: pointer"
        width="35"
        height="35"
      /> -->
    </v-toolbar>

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
  </nav>
</template>
<script>
import axios from "axios";
import store from "../store";
import enurl from "@/api/environment";
import logo from '@/assets/Kinglogo1.png';
export default {
  data() {
    return {
      MenuSystemList: [],
      url: enurl.apiUrl,
      PositionID: null,
      LoadingDialog: false,
      show: false,
      Username: localStorage.getItem("Username"),
      usertype: store.state.usertype,
      drawer: null,
      images: {
        logo: logo,
      },
      currentflag: "en",
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "th", language: "th", title: "ไทย" },
      ],
      users: [],

      LogoImageString: "",
      ActiveStatus: false,
    };
  },


  mounted() {

    this.SwitchLocales("th");
    // this.GetLogoTemplate();
    // this.LoadDataSettingLogin();

  },

  methods: {

    home() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    GetLogoTemplate() {
      let self = this;
      let tempdata = {
        project: 'Sathon',
      };
      axios
        .post(`${self.url}Payment/GetLogoTemplate`, tempdata)
        .then(function (response) {
          if (response.data.status == 0) {
            self.images.logo = response.data.data.base64;
            // console.log(response.data.data);
          }
          if (response.data.status == 1) {
            self.overlay = false;
            self.defaultPage = true;
          }
        })
        .catch(function (error) {
          self.MessageAlert = error;
          self.TypeAlert = "error";
          self.AlertDialog = true;
        });
    },

    LoadDataSettingLogin() {
      let self = this;
      axios
        .get(`${self.url}Setting/LoadDataSettingLogin`)
        .then(function (response) {
          if (response.data.status == 0) {
            if (response.data.data.activeStatus == true) {
              self.LogoImageString = response.data.data.logoImageString;
              self.ActiveStatus = response.data.data.activeStatus;
            }
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },

    SwitchLocales(value) {
      let self = this;
      if (value == 'en') {
        self.$i18n.locale = 'th'
      } else {
        self.$i18n.locale = 'en'
      }
    },

    Logout() {
      localStorage.clear();
      this.$router.push("/Login");
    },
  },
};
</script>
<style>
.app {
  margin-left: 1rem;
  cursor: pointer;
}

.list {
  cursor: pointer;
}

.apptitle {
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
}

.v-list-item__content {
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
}

.mdi-menu-down::before {
  color: black;
}

.white-color {
  background-color: red;
  color: red;
}

.item-title {
  font-size: 16px;
  font-weight: 500;
}

.v-application--is-ltr .v-list-group--no-action.v-list-group--sub-group .v-list-group__items .v-list-item {
  padding-left: 20px !important;
}
</style>
