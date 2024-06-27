import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
// $t("message.PaymentWithin")
const messages = {
  en: {
    message: {
      PrivacyPolicy: "Privacy Policy",
      Register: "Register",
      OneBangkokRegister: "One Bangkok Register",
      Reject: "Reject",
      Accept: "Accept",
      PleaseSelect: "Please Select",
      Back: "Back",
      Pleaseinsert: "Please insert your ID card.",
      PleaseinsertPassport: "Please insert your Passport.",
      TakeAPhoto: "Take A Photo",
      PleaselookCamera: "Please look Camera",
      Continue: "Continue",
      QRCodeVisitors: "QR Code Visitors",
      PrintQRCode: "Print QR Code",
      Passport: "Passport",
      IDcard: "ID Card",
      Scan: "Scan QR Code",
      PleaseScan: "Please Scan QR Code",
    },
  },
  th: {
    message: {
      PrivacyPolicy: "นโยบายความเป็นส่วนตัว",
      Register: "ลงทะเบียน",
      OneBangkokRegister: "ลงทะเบียนเข้าอาคาร",
      Reject: "ปฏิเสธ",
      Accept: "ยอมรับ",
      PleaseSelect: "กรุณาเลือกรายการด้านล่าง",
      Back: "กลับ",
      Pleaseinsert: "กรุณาเสียบบัตรประชาชน",
      PleaseinsertPassport: "กรุณาเสียบหนังสือเดินทาง",
      TakeAPhoto: "ถ่ายรูป",
      PleaselookCamera: "กรุณามองกล้อง",
      Continue: "ดำเนินการต่อ",
      QRCodeVisitors: "คิวอาร์โค้ดผู้มาติดต่อ",
      PrintQRCode: "พิมพ์คิวอาร์โค้ด",
      Passport: "หนังสือเดินทาง",
      IDcard: "บัตรประชาชน",
      Scan: "สแกนคิวอาร์โค้ด",
      PleaseScan: "กรุณาสแกนคิวอาร์โค้ด",
    },
  },
};
const i18n = new VueI18n({
  locale: "en",
  messages,
});

Vue.filter("myLocale", function(value) {
  return i18n.t(value);
});

export default i18n;
