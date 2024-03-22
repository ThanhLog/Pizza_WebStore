<template>
    <div class=" bg-black text-white px-[20px] mt-20">
        <div class=" flex justify-between pt-6 px-4">
            <div class="menuFooter">
                <h4 class=" font-bold text-[#FDD760]">MENU</h4>
                <ul>
                    <li><router-link to="#">Combo</router-link></li>
                    <li><router-link to="#">Chicken Love</router-link></li>
                    <li><router-link to="#">Pizza</router-link></li>
                    <li><router-link to="#">Starter</router-link></li>
                    <li><router-link to="#">Drink</router-link></li>
                </ul>
            </div>
            <div class="aboutFooter">
                <h4 class=" font-bold text-[#FDD760]">ABOUT US</h4>
                <ul>
                    <li><router-link to="#">Introduction</router-link></li>
                    <li><router-link to="#">Our Vision and Mission</router-link></li>
                    <li><router-link to="#">Core Values</router-link></li>
                    <li><router-link to="#">Food Safety</router-link></li>
                </ul>
            </div>
            <div class="storeFooter">
                <h4 class=" font-bold text-[#FDD760]">STORE LOCATOR</h4>
                <ul>
                    <li><router-link to="#">North</router-link></li>
                    <li><router-link to="#">Central</router-link></li>
                    <li><router-link to="#">South</router-link></li>
                </ul>
            </div>
            <div class="contactFooter">
                <div class="join">
                    <h4 class=" font-bold text-[#FDD760]">JOIN US</h4>
                    <router-link to="#">Career Track</router-link>
                </div>
                <div class="help">
                    <h4 class=" font-bold text-[#FDD760]">NEED HELP?</h4>
                    <router-link to="#">19001822</router-link>
                </div>
            </div>
            <div class="connectFooter">
                <div>
                    <h4 class=" font-bold text-[#FDD760]">CONNECR WITH PIZZA HUT</h4>
                    <div class="flex items-center gap-3">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                                <path fill="#1877f2"
                                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                                <path fill="#fff"
                                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180">
                                <path fill="#f00"
                                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="#f00" fill-rule="evenodd"
                                    d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm3.43 4.136a.75.75 0 0 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 11.585z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="downloadFooter">
                    <h4 class=" font-bold text-[#FDD760]">DOWNLOAD THE APP ON YOUR PHONE</h4>
                    <div class="downloadStyle flex gap-2 h-[100px]">
                        <img src="../assets/App-QR-CODE.png" alt="App Qr Code" width="100px" class="Qr h-full">
                        <div>
                            <router-link to=""><img src="../assets/appstore.png" alt="App store"
                                    class="appStore h-[50%]"></router-link>
                            <router-link to=""><img src="../assets/playstore.png" alt="Google play"
                                    class="playStore h-[50%] "></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-[20px] border-t-[1px]">
            <div>
                <p>Công ty TNHH Pizza Việt Nam | Số ĐKKD: 0303902751</p>
                <p>Tầng 10, Tòa nhà Opal Office, số 92 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP.HCM, Việt Nam.</p>
            </div>
            <div>
                <router-link to="">
                    <p>Điều khoản và sử dụng</p>
                    <img src="../assets/thongbaobocongthuong.png" alt="" srcset="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
router-link{
    font-size: 12px;
}
</style>