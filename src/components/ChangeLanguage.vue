<template>
  <v-row>
    <v-col cols="12" md="6">
      <!-- <span style="font-size: 30px;">{{ Datetime }}</span> -->
    </v-col>
    <v-col cols="12" md="6" style="text-align: -webkit-right">
      <!-- <span style="font-size: 30px;">EN</span>
      <span style="font-size: 30px;">/TH</span> -->
      
        <!-- <v-btn value="TH" style="font-size: 50px;"  @click="SwitchLocales('th')">
          TH
        </v-btn>
        <span style="font-size: 30px;margin-top: 5px;">/</span>
        <v-btn value="EN" style="font-size: 50px;" @click="SwitchLocales('en')">
          EN
        </v-btn> -->

       
        <span v-if="lang == 'en'" style="font-size: 50px;margin-top: 5px;color: #126496;text-decoration: underline;" >EN</span>
        <span v-if="lang != 'en'" style="font-size: 50px;margin-top: 5px;color: #126496;" @click="SwitchLocales('en')">EN</span>
        <span style="font-size: 50px;margin-top: 5px;color: #126496;">/</span>
        <span v-if="lang == 'th'" style="font-size: 50px;margin-top: 5px;color: #126496;text-decoration: underline;" >TH</span>
        <span v-if="lang != 'th'" style="font-size: 50px;margin-top: 5px;color: #126496;" @click="SwitchLocales('th')">TH</span>
      
        
       
        
    </v-col>
  </v-row>
</template>

<script>
import enurl from "@/api/environment";

export default {
  name: "ChangeLanguage",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
    input: {
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
    url: enurl.apiUrl,
    settingUrl: enurl.settingUrl,
    DefaultLogo: "@/assets/logo192.png",
    DefaultBG: "@/assets/1D2939.png",
    Datetime: "",
    LoadingDialog: false,
    text: "en",
    lang: "en",
  }),
  mounted() {
    // localStorage.setItem("lang", 'en');
    let self = this;
    this.text = localStorage.getItem("lang");
    this.lang = localStorage.getItem("lang");
    self.$i18n.locale = this.lang;
    // setInterval(() => {
    //   this.getCurrentDate();
    // }, 1000);
  },
  methods: {

    SwitchLocales(value){
      let self = this;
      self.lang = value;
      if (value == 'en') {
        self.$i18n.locale = 'en';
        localStorage.setItem("lang", 'en');
      } else {
        self.$i18n.locale = 'th'
        localStorage.setItem("lang", 'th');
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
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.simple-keyboard {
  max-width: 850px;
}
</style>
