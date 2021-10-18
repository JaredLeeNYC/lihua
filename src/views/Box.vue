<template>
  <div>
    <navbar-component></navbar-component>
    <main class="profile-page">
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://z3.ax1x.com/2021/10/09/5FtCmn.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  Box
                </h3>
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBF58.png"
                  class="mx-auto mt-12"
                />
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBV2Q.png"
                  class="mx-auto mt-12"
                />
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBAPS.png"
                  class="mx-auto mt-12"
                />

                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBiUf.png"
                  class="mx-auto mt-12"
                />
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBE8g.png"
                  class="mx-auto mt-12"
                />
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBZvj.png"
                  class="mx-auto mt-12"
                />
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/18/5NBmKs.png"
                  class="mx-auto mt-12"
                />

                <!-- <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                  >University of Computer Science
                </div> -->
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      超25年专注于电子制造服务，完善的工业配套方案为客户提供世界级质量以及有竞争性的产品与服务。产品分布于航空控制，工业仪器，医疗设备，多媒体，专业音响设备，交通运输以及电机驱动系统等领域。
                    </p>
                    <!-- <a href="#pablo" class="font-normal text-pink-500"
                      >Show more</a
                    > -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "profile-page",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
