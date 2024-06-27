<template>
  <nav style="z-index:3">
    <v-toolbar color="#373F50" height="60">
      <!-- <v-img
        alt="Logo"
        class="shrink mr-2 app"
        contain
        :src="images.logo"
        @click="GotoMain()"
        transition="scale-transition"
        width="100"
      /> -->
      <p
        style="color: #EDC000;margin-left:1rem;font-size: 18px;margin-top: 14px;font-weight: bold;cursor: default;"
      >
        Registration<span style="color: #5DBEEF;font-weight: bold;cursor: pointer;"> Event</span>
      </p>
      <!-- <v-img
        class="shrink"
        contain
        style="margin-left: -60px;"
        src="@/assets/logoBubble.png"
        transition="scale-transition"
        width="160"
      /> -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="color: white;"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template class="white-color" v-slot:activator="{ on: menu }">
          <v-btn icon v-on="{ ...menu }">
            <v-icon color="#FFFFFF">mdi-menu-down</v-icon>
          </v-btn>
          <div>
            <span style="font-size:16px;color: white;margin-right: 10px;">{{ Username }}</span>
          </div>
          <!-- <img
            src="@/assets/account-circle.png"
            width="40"
            height="30"
            style="padding-right:10px;border-radius: 50%;overflow: hidden;display:inline-block;border-color:#126496"
          /> -->

          <!-- <v-img
            v-show="$i18n.locale == 'en'"
            class="shrink"
            contain
            src="@/assets/united-states-of-america.png"
            style="padding-right:60px;cursor: pointer;"
            @click="SwitchLocales('en')"
            width="35"
            height="35"
          />
          <v-img
            v-show="$i18n.locale == 'th'"
            class="shrink"
            contain
            style="padding-right:60px;cursor: pointer;"
            src="@/assets/thailand.png"
            @click="SwitchLocales('th')"
            width="40"
            height="40"
          /> -->

        </template>      
        <v-list>
          <v-list-item class="list" @click="Logout()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t("message.Logout") }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer
      fixed
      app
      height="auto"
      style="margin-top:65px;background-color:#ffffff;"
      v-model="drawer"
      absolute
    >
      <v-list>
        <v-list-item-group
          v-model="model"
          active-class="border white--text primary"
        >
          <v-list-item
            v-for="(item, i) in MenuSystemList"
            :key="i"
            route
            @click="NavigationPage(item.route)" 
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="font-size:15px"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-navigation-drawer
      fixed
      app
      height="auto"
      style="margin-top:65px;background-color:#ffffff;"
      v-model="drawer"
      absolute
    >
      <v-list>
        <v-list-item-group
          v-model="model"
          active-class="border white--text primary"
        >
          <v-list-item
            v-for="(item, i) in (User_ID == 1 ? ($i18n.locale == 'en' ? itemsAdmin : itemsAdminTH) : ($i18n.locale == 'en' ? items : itemsTH))"
            :key="i"
            route
            @click="NavigationPage(item.route)" 
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="font-size:15px"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-dialog v-model="LoadingDialog" persistent width="300">
      <v-card color="#1D2939" dark>
        <v-card-text class="white--text mt-3">
          <v-row>
            <p style="text-align: center;">{{ $t("message.Loading") }}</p>
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
  </nav>
</template>
<script>
// import axios from "axios";
import store from "../store";
import enurl from "@/api/environment";
export default {
  data() {
    return {
      model: "",
      MenuSystemList: [],
      url: enurl.apiUrl,
      PositionID: null,
      LoadingDialog: false,
      show: false,
      username: store.state.username,
      Username: localStorage.getItem("Username"),
      usertype: store.state.usertype,
      drawer: null,
      // images: {
      //   logo: require("@/assets/logofs.svg"),
      // },
      currentflag: "en",
      languages: [
        { flag: "en", language: "en", title: "English" },
        { flag: "th", language: "th", title: "ไทย" },
      ],
      users: [],
      User_ID: localStorage.getItem("UserID"),
    };
  },
  mounted(){
    this.SetPermissionMenu();
    this.SwitchLocales("th");
    console.log(self.model);
  },
  methods: {
    SetPermissionMenu() {
      let self = this;
      self.MenuSystemList = [];
      var MenuList = localStorage.getItem("MenuList").split(",");
      for(let i = 0; i < MenuList.length; i++){
        if(MenuList[i] == "1"){
          if(this.$i18n.locale == 'en'){
            let temp = {
              title: "Event Management",
              icon: "mdi-calendar-multiple",
              route: "/EventManagement"
            };
            self.MenuSystemList.push(temp);
          }
          else{
            let temp = {
              title: "จัดการอีเวนต์",
              icon: "mdi-calendar-multiple",
              route: "/EventManagement"
            };
            self.MenuSystemList.push(temp);
          }
        }
        else if(MenuList[i] == "2"){
          if(this.$i18n.locale == 'en'){
            let temp = {
              title: "Transaction Register Log",
              icon: "mdi-clipboard-text-outline",
              route: "/TransactionRegisterLog"
            };
            self.MenuSystemList.push(temp);
          }
          else{
            let temp = {
              title: "บันทึกการลงทะเบียน",
              icon: "mdi-clipboard-text-outline",
              route: "/TransactionRegisterLog"
            };
            self.MenuSystemList.push(temp);
          }         
        }
        else if(MenuList[i] == "3"){
          if(this.$i18n.locale == 'en'){
            let temp = {
              title: "Transaction Log",
              icon: "mdi-clipboard-text-outline",
              route: "/TransactionLog"
            };
            self.MenuSystemList.push(temp);
          }
          else{
            let temp = {
              title: "บันทึกการทำธุรกรรม",
              icon: "mdi-clipboard-text-outline",
              route: "/TransactionLog"
            };
            self.MenuSystemList.push(temp);
          }
        }
        else if(MenuList[i] == "4"){
          if(this.$i18n.locale == 'en'){
            let temp = {
              title: "User Management",
              icon: "mdi-account-box-multiple",
              route: "/UserManagement"
            };
            self.MenuSystemList.push(temp);
          }
          else{
            let temp = {
              title: "จัดการผู้ใช้",
              icon: "mdi-account-box-multiple",
              route: "/UserManagement"
            };
            self.MenuSystemList.push(temp);
          }     
        }
        else if(MenuList[i] == "5"){
          if(this.$i18n.locale == 'en'){
            let temp = {
              title: "Role Management",
              icon: "mdi-cog",
              route: "/RoleManagement"
            };
            self.MenuSystemList.push(temp);
          }
          else{
            let temp = {
              title: "จัดการหน้าที่",
              icon: "mdi-cog",
              route: "/RoleManagement"
            };
            self.MenuSystemList.push(temp);
          }
        }
      }
    },

    SetStyleGroupSubName(item){
      if(item != ""){
        if(item.length > 18){
          return "cursor: pointer;color: black;font-size: 12px;";
        }
        else{
          return "cursor: pointer;color: black;";
        }
      }
    },

    SwitchLocales(value){
      let self = this;
      if (value == 'en') {
        self.$i18n.locale = 'th'
      } else {
        self.$i18n.locale = 'en'
      }
      self.SetPermissionMenu();
    },

    NavigationPage(value) {
      let self = this;
      console.log(self.model);
      self.$router.push(value);
    },

    GotoMain() {
      let self = this;
      self.$router.push("/EventManagement");
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
  font-family: "Kanit";
  margin-left: 2rem;
  cursor: pointer;
}
.list {
  cursor: pointer;
}
.apptitle {
  font-size: 20px !important;
}
.v-list-item__content {
  font-size: 20px !important;
}
.white-color {
  background-color: white;
}
.item-title {
  font-size: 16px;
  font-weight: 500;
}
.v-application--is-ltr
  .v-list-group--no-action.v-list-group--sub-group
  .v-list-group__items
  .v-list-item {
  padding-left: 20px !important;
}
</style>
