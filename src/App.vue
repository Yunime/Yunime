<template>
  <div id="app" class="bg-gray-800">
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-10 w-auto"
                src="./assets/logo.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-10 w-auto"
                src="./assets/logo.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                  >Home</a
                >

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Browse</a
                >
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
              >
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
            >Home</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Browse</a
          >
        </div>
      </div>
    </nav>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-semibold text-gray-200">
          Bentornato!
        </h1>

        <!--In evidenza-->
        <div
          class="bg-gray-900 bg-opacity-25 p-8 mt-5 rounded-md drop-shadow-lg"
        >
          <h3 class="text-xl font-sans text-gray-300">In evidenza</h3>
          <div class="sm:grid grid-cols-2 gap-10 items-center mt-3">
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-bljqHE1PFArH.jpg"
                class="rounded-t-lg"
              />
              <div class="container cursor-pointer p-5">
                <dt class="font-medium md:text-4xl	text-white text-center">
                  Gintama
                </dt>
                <dd class="mt-2 text-sm text-gray-500 text-center">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
            </div>
            <div
              class="container cursor-pointer mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700"
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-bljqHE1PFArH.jpg"
                class="rounded-t-lg"
              />
              <div class="container  p-5">
                <dt class="font-medium sm:text-4xl	text-white text-center">
                  Gintama
                </dt>
                <dd class="mt-2 text-sm text-gray-500 text-center">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
            </div>
          </div>
        </div>

        <!--Continua a guardare-->

        <div
          class="bg-gray-900 bg-opacity-25 p-8 mt-10 rounded-md drop-shadow-lg"
        >
          <h3 class="text-xl font-sans text-gray-300">Continua a guardare</h3>
          <div class="sm:grid grid-cols-4 gap-10 items-center mt-3">
            <div class="cursor-pointer container mx-auto filter drop-shadow-lg">
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112667-GYFeAlZ38mXK.jpg"
                class="rounded-t-lg "
              />
              <div class="container">
                <a
                  class="py-3 px-6 w-full flex items-center justify-center text-base font-medium rounded-b-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-800  md:py-4 md:text-lg md:px-10"
                  >Riprendi</a
                >
              </div>
            </div>

            <div
              class="cursor-pointer container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112667-GYFeAlZ38mXK.jpg"
                class="rounded-t-lg "
              />
              <div class="container">
                <a
                  class="py-3 px-6 w-full flex items-center justify-center text-base font-medium rounded-b-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-800  md:py-4 md:text-lg md:px-10"
                  >Riprendi</a
                >
              </div>
            </div>
            <div
              class="cursor-pointer container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112667-GYFeAlZ38mXK.jpg"
                class="rounded-t-lg "
              />
              <div class="container">
                <a
                  class="py-3 px-6 w-full flex items-center justify-center text-base font-medium rounded-b-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-800  md:py-4 md:text-lg md:px-10"
                  >Riprendi</a
                >
              </div>
            </div>
            <div
              class="cursor-pointer container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112667-GYFeAlZ38mXK.jpg"
                class="rounded-t-lg "
              />
              <div class="container">
                <a
                  class="py-3 px-6 w-full flex items-center justify-center text-base font-medium rounded-b-lg text-indigo-100 bg-indigo-900 hover:bg-indigo-800  md:py-4 md:text-lg md:px-10"
                  >Riprendi</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
export default {
  name: "Yunime",
};
</script>
