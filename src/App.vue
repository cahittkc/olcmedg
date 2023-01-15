<template>
  <header  class="header h-[55px] min-h-[55px] dark:bg-zinc-700 bg-gray-300 sticky w-full top-0  border-b dark:border-zinc-700  px-8 border-gray-200 items-center flex gap-x-6 justify-between  ">
    <div></div>
    <ul class="flex   gap-x-4 p-1 overflow-x-auto ">
      <li class="nt !text-base cursor-pointer whitespace-nowrap rounded-lg p-1">
          <router-link class="p-1" exactActiveClass="dark:!text-white text-orange-500 " to="/">
             Test Geliştirme
          </router-link>
      </li>
      <li class="nt !text-base cursor-pointer whitespace-nowrap rounded-lg p-1">
          <router-link class="p-1" exactActiveClass="dark:!text-white text-orange-500 " to="/rubrik">
             Rubrik Geliştirme
          </router-link>
      </li>
      <li class="nt !text-base cursor-pointer whitespace-nowrap rounded-lg p-1">
          <router-link class="p-1" exactActiveClass="dark:!text-white text-orange-500 " to="/portfolyo">
             Portfolyo
          </router-link>
      </li>
    </ul>
   <div @click="changeTheme()" class="flex  justify-between w-[60px] px-1 py-1  dark:bg-zinc-800 bg-gray-400 rounded-lg">
        <span :class="{'bg-zinc-600' : theme.darkMode}" class="cursor-pointer px-[6px] flex items-center  rounded-full">
          <i class="fas fa-moon text-black text-xs mt-1"></i>
        </span>
        <span :class="{'bg-blue-600' : !theme.darkMode}" class="cursor-pointer px-[5px] flex items-center  rounded-full">
          <i class="far fa-moon text-white text-xs mt-1"></i>
        </span>
      </div>
  </header>
  <div class="mt-5  w-full   ">
    <div class="container mx-auto max-sm:p-2">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
   data(){
    return {
      theme : {
        darkMode : false,
      },
    }
  },
  methods : {
    changeTheme(){
      let e = document.getElementById("html")
      e.classList.toggle("dark")
      this.theme.darkMode= !this.theme.darkMode
      localStorage.setItem("theme", JSON.stringify(this.theme))
    },
  },
  created(){
     let theme = JSON.parse(localStorage.getItem("theme"))
    if(!theme){
      this.theme.darkMode = true
      localStorage.setItem("theme", JSON.stringify(this.theme))
      let e = document.getElementById("html")
      e.classList.add("dark")
    } 
    if(theme){
        this.theme.darkMode = theme.darkMode
        if(this.theme.darkMode){
          let e = document.getElementById("html")
          e.classList.add("dark")
        }else{
          let e = document.getElementById("html")
          e.classList.remove("dark")
        }
    } 
  }
}
</script>

<style>
@media print {
  .header {
    display: none !important;
  }
}
#app {
  font-family: 'Mulish', sans-serif;
 
}
*{
  box-sizing: border-box;
  
}
.active{
  color : orange
}
</style>
