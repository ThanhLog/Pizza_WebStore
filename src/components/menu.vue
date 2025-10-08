<template>
  <div class="main shadow-lg sticky top-0 left-0">
    <div class="relative">
      <div class="Menu w-full h-full p-3">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.png" alt="logo" style="height: 40px" />
          </router-link>
        </div>
        <div class="itemMenu h-full">
          <button class="Notify border-none" @click="togglePages('notify')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"
              />
            </svg>
          </button>
          <div class="account">
            <button class="Login flex" @click="togglePages('login')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#CB2843"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"
                />
              </svg>
              <span class="text-xl">Account</span>
            </button>
            <button class="TrackOder flex" @click="togglePages('trackOrder')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 56 34"
              >
                <defs>
                  <filter
                    id="a"
                    width="102.9%"
                    height="112.5%"
                    x="-1.5%"
                    y="-4.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="1"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      result="shadowMatrixOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g
                  fill="none"
                  fill-rule="evenodd"
                  filter="url(#a)"
                  transform="translate(1.51 1)"
                >
                  <path
                    fill="#C8102E"
                    d="M0 20.8l16.506-16c4.072 2.533 6.291 4.235 6.657 5.105.549 1.306-.714 1.075.837 9.504-3.587 0-11.587.464-24 1.391zM18.601 3.702c-1.194-.867-1.32-1.778-.379-2.732.942-.954 1.765-1.204 2.471-.75C22.7.51 25.135 1.797 28 4.085c0 0-2.691 2.121-3.268 3.914-2.276-2.266-4.32-3.698-6.13-4.298zM31.924 8c-1.895 1.03-2.826 2.145-3.07 4.934-.164 1.86.047 2.936.63 3.231.302-.367.922-.55 1.86-.55 1.405 0 2.12.235 3.056 1.185 0-1.185-.488-4.4-2.476-8.8zM30.4 18.973l2.394-.573 1.606 1.849c-.124 1.14-.66 1.558-1.606 1.256-.946-.302-1.744-1.146-2.394-2.532zM.8 21.791L24.875 20c1.299 2.644 2.34 4.178 3.125 4.601 0 0-18.348 1.799-25.028 1.799A20.972 20.972 0 0 0 .8 21.791z"
                  />
                  <ellipse
                    cx="36.8"
                    cy="15.2"
                    stroke="#C8102E"
                    stroke-width="4"
                    rx="10.4"
                    ry="11.2"
                  />
                  <path
                    fill="#C8102E"
                    d="M44.623 22.401l2.848-.801 4.164 3.616c.593 1.527.464 2.756-.387 3.686-.85.93-2.11.93-3.777 0L44 25.216l.623-2.815z"
                  />
                  <path
                    stroke="#FFF"
                    stroke-width=".8"
                    d="M15.2 15.335l1.6-.135M19.2 9.6l1.6.136M20.8 12.831c1.039.997 1.042 1.064.147-.031"
                  />
                </g>
              </svg>
              <span class="text-xl">Track Oder!</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="h-full w-80 absolute right-[0]"
        style="bottom: -100%"
        v-if="mainPage"
      >
        <div
          class="notify bg-white h-screen z-10"
          v-if="currentPage === 'notify'"
        >
          <div class="p-1" style="background: #282828">
            <button class="animate-spin">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="white"
                  stroke="none"
                >
                  <path
                    d="M2265 4703 c-632 -85 -1207 -461 -1550 -1014 -201 -324 -315 -722
                                        -315 -1100 l0 -129 -160 0 -160 0 -36 -33 c-46 -42 -56 -105 -26 -152 32 -48
                                        750 -867 759 -865 11 2 730 826 755 865 30 47 20 111 -26 152 l-36 33 -186 0
                                        -187 0 6 158 c14 382 154 701 426 972 277 276 594 414 981 427 140 4 184 2
                                        288 -16 261 -44 484 -145 686 -310 l80 -65 34 40 c18 21 121 141 228 266 l194
                                        228 -73 60 c-175 147 -453 307 -658 378 -127 45 -318 90 -452 107 -147 19
                                        -424 18 -572 -2z"
                  />
                  <path
                    d="M3970 3090 c-206 -237 -381 -442 -388 -457 -23 -43 -9 -102 32 -140
                                        l36 -33 185 0 186 0 -6 -47 c-49 -368 -178 -637 -425 -884 -226 -226 -479
                                        -356 -795 -411 -100 -17 -146 -19 -280 -15 -294 10 -531 86 -764 242 -81 54
                                        -85 56 -102 38 -10 -10 -112 -128 -228 -263 -194 -228 -208 -246 -193 -263 26
                                        -29 232 -163 332 -216 599 -315 1344 -323 1955 -21 231 114 410 245 595 437
                                        275 283 449 592 544 965 31 122 66 338 66 409 l0 29 160 0 160 0 36 33 c46 41
                                        56 105 26 152 -14 22 -689 801 -751 867 -4 4 -175 -186 -381 -422z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div class="h-screen overflow-hidden">
            <div
              class="text-center h-full flex flex-col justify-center items-center"
            >
              <p>We have no updates.</p>
              <p>Please check back later.</p>
            </div>
            <div></div>
          </div>
        </div>
        <div
          class="login shadow-lg shadow-[#111]-500/40 bg-white p-3 z-50"
          v-if="currentPage === 'login'"
        >
          <div class="flex items-center justify-center gap-5 p-3 border-b-2">
            <img
              src="../assets/favicon.ico"
              alt=""
              width="50px"
              height="50px"
            />
            <h1 class="text-4xl font-bold">Sign In</h1>
          </div>
          <div class="mt-5 px-4 h-full flex flex-col items-center gap-1">
            <form action="username" class="flex w-full border-2 rounded-md">
              <div class="border-r-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="6" r="4" fill="#282828" />
                  <path
                    fill="#282828"
                    d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                class="w-full outline-none p-2"
              />
            </form>
            <form action="password" class="flex w-full border-2 rounded-md">
              <div class="border-r-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#282828"
                    fill-rule="evenodd"
                    d="M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293m-6.319 2.196a2.2 2.2 0 0 0 2.204-2.195a2.2 2.2 0 0 0-2.204-2.196a2.2 2.2 0 0 0-2.204 2.196a2.2 2.2 0 0 0 2.204 2.195"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="w-full flex items-center px-1">
                <input
                  :type="show === true ? 'text' : 'password'"
                  v-model="password"
                  placeholder="Password"
                  class="w-full outline-none p-2"
                />
              </div>
            </form>
          </div>
          <div class="w-full">
            <div class="mt-[10px]">
              <a href="" class="min-w-full text-end hover:text-cyan-500"
                >Forgot Password?</a
              >
            </div>
            <div class="w-full mt-[10px] px-2">
              <button
                class="bg-[#0A8020] w-full p-2 text-white font-bold rounded-[25px]"
              >
                Sign In
              </button>
            </div>
            <div>
              <p class="text-[13px] mt-3">
                You don't have an account?
                <a
                  href=""
                  class="text-[#0A8020] hover:underline hover:decoration-1"
                  >Register now</a
                >
                or learn more about
                <a
                  href=""
                  class="text-[#0A8020] hover:underline hover:decoration-1"
                  >Membership Terms and Benefits.</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="trackOder bg-white shadow-lg shadow-[#111]-500/40 p-4"
          v-if="currentPage === 'trackOrder'"
        >
          <div class="text-center">
            <h3 class="font-bold">TRACK YOUR ORDER</h3>
            <p>Only available for Delivery order.</p>
          </div>
          <div class="mt-6">
            <input
              type="tel"
              class="w-full border-2 p-2 rounded-md outline-none"
              placeholder="Phone number or order code*"
            />
            <button
              class="mt-2 px-5 bg-[#0A8020] text-white w-full p-1 rounded-md"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainPage: null,
      currentPage: null,
      password: "",
      show: false,
    };
  },
  methods: {
    togglePages(page) {
      if (this.currentPage === page) {
        this.mainPage = null;
        this.currentPage = null; // Nếu trang hiện tại đã được chọn thì đóng nó
      } else {
        this.mainPage = page;
        this.currentPage = page; // Nếu không, chuyển đến trang mới
        console.log(page);
      }
    },
  },
};
</script>
<style>
.main {
  z-index: 1;
  background: white;
}

.Menu {
  height: 20px;
  display: flex;
  justify-content: space-between;
}

.itemMenu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.itemMenu button {
  height: 100%;
}

.itemMenu div.account {
  display: flex;
  gap: 20px;
  align-items: center;
}

.notify {
  animation: sildeNotify 0.25s ease-in-out;
}

.login,
.trackOder {
  animation: slideShow 0.25s ease-in-out;
}

@keyframes sildeNotify {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }

  25% {
    transform: translateX(-15px);
    opacity: 0.25;
  }

  50% {
    transform: translateX(0);
    opacity: 0.5;
  }

  75% {
    transform: translateX(15px);
    opacity: 0.75;
  }

  100% {
    transform: translateX(30px);
    opacity: 1;
  }
}

@keyframes slideShow {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }

  25% {
    transform: translateY(-15px);
    opacity: 0.25;
  }

  50% {
    transform: translateY(0);
    opacity: 0.5;
  }

  75% {
    transform: translateY(15px);
    opacity: 0.75;
  }

  100% {
    transform: translateY(30px);
    opacity: 1;
  }
}
</style>
