import Vue from "vue";
import Router from "vue-router";
import MainMenu from "./views/MainMenu";
import CapturePerson from "./views/CapturePerson";
import FindingTenant from "./views/FindingTenant";
import IdentifySelection from "./views/IdentifySelection";
import NationalIDCard from "./views/NationalIDCard";
import PrintQr from "./views/PrintQr";
import PDPAPage from "./views/PDPAPage";
import ScanQrcode from "./views/ScanQrcode";
import NationalPassport from "./views/NationalPassport";
import DetailCarpark from "./views/DetailCarpark";
import Qrcode from "./views/Qrcode";

// import store from "./store"
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        name: "MainMenu",
      },
    },   
    {
      path: "/MainMenu",
      name: "MainMenu",
      component: MainMenu
    },
    {
      path: "/CapturePerson",
      name: "CapturePerson",
      component: CapturePerson
    },
    {
      path: "/FindingTenant",
      name: "FindingTenant",
      component: FindingTenant
    },
    {
      path: "/IdentifySelection",
      name: "IdentifySelection",
      component: IdentifySelection
    },
    {
      path: "/NationalIDCard",
      name: "NationalIDCard",
      component: NationalIDCard
    },
    {
      path: "/PrintQr",
      name: "PrintQr",
      component: PrintQr
    },
    {
      path: "/PDPAPage",
      name: "PDPAPage",
      component: PDPAPage
    },
    {
      path: "/ScanQrcode",
      name: "ScanQrcode",
      component: ScanQrcode
    },
    {
      path: "/DetailCarpark/:id",
      name: "DetailCarpark",
      component: DetailCarpark
    },
    {
      path: "/Qrcode/:id",
      name: "Qrcode",
      component: Qrcode
    },
    {
      path: "/NationalPassport",
      name: "NationalPassport",
      component: NationalPassport
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    var LoginStatus =
      localStorage.getItem("isLoggedIn") == "true" ? true : false;
    if (LoginStatus == true) {
      next();
      return;
    }
    next("/Login");
    // next()
  } else {
    next();
  }
});
export default router;
