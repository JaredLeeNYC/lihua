<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://z3.ax1x.com/2021/10/09/5FtCmn.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75"
            style="background-color: rgba(5, 31, 60, 0.6)"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-0 mr-auto text-left">
              <div class="">
                <h1 class="text-white font-semibold text-5xl">
                  台山市利华电子厂有限公司
                </h1>
                <p class="mt-12 text-lg text-gray-300">
                  超25年专注于电子制造服务，完善的工业配套方案为客户提供世界级质量以及有竞争性的产品与服务。产品分布于航空控制，工业仪器，医疗设备，多媒体，专业音响设备，交通运输以及电机驱动系统等领域。
                </p>
                <!-- <h1 class="text-white font-semibold text-5xl">
                  台山市利华电子厂
                </h1> -->
                <!-- <ul class="mt-12">
                  <li class="mt-4 text-lg text-gray-300">
                   1993年，成立于中国·台山。 厂区占地50亩，生产车间占地7,000平方米
                  </li>
                  <li class="mt-4 text-lg text-gray-300">
                    1993年，成立于中国·台山
                  </li>
                  <li class="mt-4 text-lg text-gray-300">
                    超过25年的电子制造服务经验，财政稳健
                  </li>
                  <li class="mt-4 text-lg text-gray-300">
                    全面的电子制造服务—供应链管理，完整的生产配套方案
                  </li>
                  <li class="mt-4 text-lg text-gray-300">
                    产品分布于航空控制，工业仪器，医疗设备，多媒体，专业音响设备和交通运输等领域
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
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
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">PCBA</h6>
                  <img
                    alt="..."
                    src="../assets/img/pcba.png"
                    class="shadow-lg rounded-lg max-w-full mx-auto my-4"
                    style="max-width: 260px"
                  />
                  <!-- <p class="mt-2 mb-4 text-gray-600">
                    工业控制、汽车或航天类定制线束。压接、焊接&绝缘穿刺（IDC）连接工艺。可靠性测试，自动线束测试，高压测试。
                  </p> -->
                  <!-- <ul>
                    <li class="mt-2 mb-4 text-gray-600">
                      表 面 贴 装 、 通 孔 插 装 、 R o H S 或 N o n - R o H S
                      、 水 洗 或 免 洗 焊 接 工 艺
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      软 硬 结 合 板 的 焊 接。
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      自 动 光 学 检 验 、 BGA X - R a y 检 查
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      I C T / F C T 测 试 ， 敷 形 涂 层 ， I C 编 程 ， 温 度
                      循 环 试 验
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Cable</h6>
                  <!-- <ul>
                    <li class="mt-2 mb-4 text-gray-600">
                      工 业 控 制 、 汽 车 或 航 天 类 定 制 线 束。
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      压 接 、 焊 接 & 绝 缘 穿 刺（ I D C ）连 接 工 艺
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      可 靠 性 测 试 ， 自 动 线 束 测 试 ， 高 压 测 试
                    </li>
                  </ul> -->
                  <!-- <p class="mt-2 mb-4 text-gray-600">
                    工业控制、汽车或航天类定制线束。压接、焊接&绝缘穿刺（IDC）连接工艺。可靠性测试，自动线束测试，高压测试。
                  </p> -->
                  <img
                    alt="..."
                    src="../assets/img/cable.png"
                    class="shadow-lg rounded-lg max-w-full mx-auto my-4"
                    style="max-width: 260px"
                  />
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Box</h6>

                  <!-- <ul>
                    <li class="mt-2 mb-4 text-gray-600">
                      整 机 组 装 / 机 电 装 配
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      半 成 品 检 测 ， 整 机 功 能 测 试 、 高 压 测 试 、 老
                      化 测 试 以 及 温 度 循 环 测 试
                    </li>
                    <li class="mt-2 mb-4 text-gray-600">
                      定 制 化 的 组 装 、 测 试 以 及 包 装 方 式
                    </li>
                  </ul> -->
                  <!-- <p class="mt-2 mb-4 text-gray-600">
                    工业控制、汽车或航天类定制线束。压接、焊接&绝缘穿刺（IDC）连接工艺。可靠性测试，自动线束测试，高压测试。
                  </p> -->
                  <img
                    alt="..."
                    src="../assets/img/box.png"
                    class="shadow-lg rounded-lg max-w-full mx-auto my-4"
                    style="max-width: 260px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                利华简介
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                利华成立于 1993
                年，致力于全球电子制造服务的全方位服务，为OEM提供“一站式生产方案”、供应链管理和测试解决方案，以始终如一的质量、准时交货和具有竞争力的价格满足客户的期望。
              </p>
              <!-- <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                利华位于广东省台山市，厂区占地50亩，生产车间占地7,000平方米。
              </p> -->
              <!-- <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8"
                >Check Tailwind Starter Kit!</a
              > -->
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/13/5KeGr9.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">利华厂区</h4>
                  <p class="text-md font-light mt-2 text-white">
                    利华位于广东省台山市，厂区占地50亩，生产车间占地7,000平方米。
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://z3.ax1x.com/2021/09/23/4d0JnU.jpg"
              />
            </div>
            <div class="w-full md:w-4/12 ml-auto mr-auto">
              <div class="md:pr-12">
                <!-- <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div> -->
                <h3 class="text-3xl font-semibold">联系我们</h3>
                <!-- <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p> -->
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-location-arrow"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          地址：中国广东省台山市台城北坑工业区89号
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-phone"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">电话：+86 750 5625181</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-envelope-square"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Email：raylee@ts-lihua.com
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-8">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">利华服务</h2>
              <!-- <p class="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p> -->
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mt-12">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/09/5FcK2R.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 360px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">插件组装工艺</h5>
                  <!-- <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p> -->
                  <!-- <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i></button
                    ><button
                      class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mt-12">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/09/5FcnPJ.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 360px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">专用线缆和线束组件</h5>
                  <!-- <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Marketing Specialist
                  </p> -->
                  <!-- <div class="mt-6">
                    <button
                      class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mt-12">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/09/5Fce54.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 360px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">机电装配</h5>
                  <!-- <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    UI/UX Designer
                  </p> -->
                  <!-- <div class="mt-6">
                    <button
                      class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mt-12">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://z3.ax1x.com/2021/10/09/5FcZaF.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 360px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">测试服务</h5>
                  <!-- <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Founder and CEO
                  </p> -->
                  <!-- <div class="mt-6">
                    <button
                      class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-dribbble"></i></button
                    ><button
                      class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-google"></i></button
                    ><button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i></button
                    ><button
                      class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
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
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">利华优势</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                团队稳定，协作熟练，从而确保项目质量，并使得执行效率远高于行业一般水平，我们与行业专家保持密切沟通合作，具备丰富的项目经验。
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                长期合作伙伴
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                与客户建立长期合作伙伴关系，提供定制化的服务
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">质量&交付</h5>
              <p class="mt-2 mb-4 text-gray-500">
                优异的产品质量以及准时交付服务
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">高成本效益</h5>
              <p class="mt-2 mb-4 text-gray-500">提供符合成本效益的解决方案</p>
            </div>
            <!-- <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                多品种，灵活批量的市场策略
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                快捷、灵活的运作以满足客户需求  
              </p>
            </div> -->
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fab fa-instagram text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">灵活性</h5>
              <p class="mt-2 mb-4 text-gray-500">
                快捷、灵活的运作以满足客户需求
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">欢迎留下您的合作意向</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    完成下面的表格我们会在2个工作日内尽快回复您
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >姓名</label
                    ><input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="姓名"
                      style="transition: all 0.15s ease 0s"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >信息</label
                    ><textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="请输入您的信息..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s"
                    >
                      发送
                    </button>
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
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
