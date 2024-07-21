const accessToken = "";
const apiKey = "";
const region = "";

import eWeLink from "./mod/ewelink-api-next/dist/index.mjs";
let button = document.getElementById('load-button');
button.addEventListener('click', ConnectAPI);

const client = new eWeLink.WebAPI({
    appId: "Uw83EKZFxdif7XFXEsrpduz5YyjP7nTl",
    appSecret: "mXLOjea0woSMvK9gw7Fjsy7YlFO4iSu6",
    region: "eu",
    logObj: eWeLink.createLogger("eu") // or console
  });
  
  try {
    const response = await client.user.login({ account: "zenazybak@gmail.com", password: "Lemon4ik_123", areaCode: "+380" });
    const userInfo = response.error === 0 ? response.data.user : {};
    console.log("userInfo：", userInfo);
  } catch (err) {
    console.log("Failed to get user information:", err.message);
  }

export async function ConnectAPI(){
    console.log(await client.device.addDevice(options.deviceId = "10009f0b72"));
}
  
function Up(){

}

function Down(){
    
}

function Left(){
    
}

function Right(){
    
}
