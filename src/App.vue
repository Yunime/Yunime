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
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
            >
              <img src="./assets/search.svg" class="h-5 w-5" />
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
        <div class="px-4 py-6 sm:px-0">
          <h3 class="text-xl font-sans text-gray-300">In evidenza</h3>
          <div class="sm:grid grid-cols-2 gap-10 items-center mt-3">
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-bljqHE1PFArH.jpg"
                class="rounded-t-lg"
              />
              <div class="container  p-5">
                <dt class="font-medium md:text-4xl	text-white text-center">
                  Gintama
                </dt>
                <dd class="mt-2 text-sm text-gray-500 text-center">
                  Designed by Good Goods, Inc.
                </dd>
              </div>
            </div>
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700"
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
        <div class="px-4 py-6 sm:px-0">
          <h3 class="text-xl font-sans text-gray-300">Continua a guardare</h3>
          <div class="sm:grid grid-cols-4 gap-6 items-center mt-3">
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
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
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700"
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
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
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
            <div
              class="container mx-auto filter drop-shadow-lg bg-gray-900 rounded-lg hover:bg-gray-700 "
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
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Yunime",
};
</script>
