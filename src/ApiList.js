
let urlapi=`https://cors-anywhere.herokuapp.com/http://85a5b63b.ngrok.io/`;
const Api={
    "getOffer":`${urlapi}getOffer`,
    "UserExist":`${urlapi}UserExist`,
    "sendMobileOtp":`${urlapi}sendMobileOtp`,
    "SignIn":`${urlapi}SignIn`,
    "SignUp":`${urlapi}SignUp`,
    "ccgetUserData":`${urlapi}creditCards/getUserData`,
    "saveForm1":`${urlapi}creditCards/saveForm1`,
    "saveForm2":`${urlapi}creditCards/saveForm2`,
    "saveForm3":`${urlapi}creditCards/saveForm3`,
    "getPincodeCityMapping":`${urlapi}creditCards/getPincodeCityMapping`,
    "callBankApi":`${urlapi}creditCards/callBankApi`
}
export default Api;