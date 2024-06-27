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
                <v-row style="margin-top: 15%">
                  <v-col
                    cols="12"
                    md="12"
                    style="
                      text-align: center;
                      font-size: 60px;
                      color: #126496;
                    "
                  >
                    <!-- กรุณามองกล้อง -->
                    <!-- Please look Camera -->
                    {{ $t("message.PleaselookCamera") }}
                  </v-col>
                </v-row>
                <v-row style="margin-top: 15%">
                  <v-col cols="12" md="12" style="text-align: center">
                    <div>
                      <video
                        ref="camera"
                        :width="600"
                        :height="500"
                        autoplay
                      ></video>
                      <canvas
                        v-show="isPhotoTaken"
                        id="photoTaken"
                        ref="canvas"
                        :width="600"
                        :height="500"
                      ></canvas>
                    </div>
                  </v-col>
                </v-row>
                <v-row style="margin-top: 15%">
                  <v-col cols="12" md="12" style="text-align: center">
                    <v-btn
                      color="primary"
                      class="white--text mt-2 text-capitalize"
                      router
                      id="downloadPhoto"
                      :download="PictureName"
                      width="500"
                      style="font-size: 45px; border-radius: 50px"
                      height="100"
                      @click="takePhoto"
                      >
                      <!-- Take A Photo -->
                      {{ $t("message.TakeAPhoto") }}
                      </v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12" style="text-align: center">
                    <v-btn
                      color="primary"
                      class="white--text mt-2 text-capitalize"
                      router
                      width="500"
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
  // import axios from "axios";
  import enurl from "@/api/environment";
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
  
        isPhotoTaken: false,
        download: false,
        PictureName: "PersonID.jpg",
        dataParam: [],
        imageParam: "",
      };
    },
    mounted: function () {
      let self = this;
      self.createCameraElement();

      // console.log(self.$route.params);
      self.dataParam = self.$route.params.data;


      setInterval(() => {
        self.getCurrentDate();
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
  
      createCameraElement() {
        const constraints = (window.constraints = {
          audio: false,
          video: true,
        });
  
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream) => {
            this.$refs.camera.srcObject = stream;
          })
          .catch((error) => {
            console.log(error);
          });
      },
  
      stopCameraStream() {
        let tracks = this.$refs.camera.srcObject.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      },
  
      takePhoto() {
        let self = this;
        self.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;
        setTimeout(() => {
          self.isShotPhoto = false;
          self.GotoFindingTenant();
          // this.downloadImage();
        }, FLASH_TIMEOUT);
        const context = self.$refs.canvas.getContext("2d");
        context.drawImage(self.$refs.camera, 0, 0, 600, 500);
      },
  
      downloadImage() {
        const canvas = document
          .getElementById("photoTaken")
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
          console.log(canvas);
        this.imageParam = canvas;
        this.dataParam.image1 =   this.imageParam.split(",")[1] ;
      },
  
      GotoFindingTenant() {
        let self = this;
        self.downloadImage();
        self.stopCameraStream();
        // self.$router.push("/FindingTenant");


        self.$router.push({
              name: "FindingTenant",
              path: "/FindingTenant",
              params: {
                data: self.dataParam,
              },
            });

      },
  
      BacktoNationalIDCard() {
        let self = this;
        self.stopCameraStream();
        self.$router.push("/NationalIDCard");
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
      