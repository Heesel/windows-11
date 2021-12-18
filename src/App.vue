<template>
  <div>
    <div class="flex flex-col h-screen justify-between relative">
      <div class="relative w-screen h-screen overflow-hidden flex justify-center items-center font-sans">
        <div></div>
        <img src="./assets/img/windows-11.jpg" alt="windows" class="w-screen h-screen bg-no-repeat bg-cover object-cover object-center bg-fixed" />
      </div>
      <footer class="bg-gray-taskbar w-full h-25 z-10">
        <div class="flex justify-between items-center">
          <div class="flex mx-auto items-center justify-center pl-28 my-4">
            <div class="flex justify-between gap-x-8">
              <div>
                <img src="./assets/img/icons/icon-windows.png" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
              <div>
                <img src="./assets/img/icons/icon-search.png" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
              <div>
                <img src="./assets/img/icons/icon-screens.png" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
              <div>
                <img src="./assets/img/icons/icon-internet-search.png" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
              <div>
                <img src="./assets/img/icons/icon-ms-teams.png" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
              <div>
                <img src="./assets/img/icons/icon-folder.png" class="h-8 w-8 object-center object-cover hover:cursor-pointer my-1"/>
              </div>
              <div>
                <img src="./assets/img/icons/edge.svg" class="h-10 w-10 object-center object-cover hover:cursor-pointer"/>
              </div>
            </div>
          </div>
          <div class="flex items-center pr-6 gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-80 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 text-blue-mic" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="9" y="2" width="6" height="11" rx="3" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <div class="h-10 w-10 opacity-80 text-white mt-6 text-xs">ENG</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-80 text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="18" x2="12.01" y2="18" />
              <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
              <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
              <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 8a5 5 0 0 1 0 8" />
              <path d="M17.7 5a9 9 0 0 1 0 14" />
              <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            </svg>
            <div class="flex flex-col gap-y-1">
               <div v-text="currentTime" class="text-white ml-5 text-xs"></div>
               <div v-text="currentDate" class="text-white text-xs"></div>
            </div>
          </div>
        </div>
      </footer>
    </div> 
  </div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      currentTime: null
    }
  },

  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("LT");
    }
  },

  created() {
    this.currentTime = moment().format("LT");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },

  computed: {
    currentDate() {
      return moment().format('MM-DD-YYYY')
    }
  }
}
</script>
