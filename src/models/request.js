export default class QrPaymentResponse {
  constructor(data = {}) {
    this.partnerTxnUid = data.partnerTxnUid || "";
    this.partnerId = data.partnerId || "";
    this.statusCode = data.statusCode || "";
    this.errorCode = data.errorCode || "";
    this.errorDesc = data.errorDesc || "";
    this.accountName = data.accountName || "";
    this.qrCode = data.qrCode || "";
    this.sof = data.sof || []; // array of string
  }
}