<template>
    <Transition name="fade">
        <div @click="close()"  v-if="modelValue" style="background : rgba(0, 0, 0, 0.7)" class="fixed top-0 left-0 w-full h-full z-20 flex text-black ">
        <div @click="stopClose($event)" id="content" :class="[`${width}`]"  class=" bgr z-50   max-[450px]:!w-[98%] rounded-md absolute top-1/2 transition-all left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-h-[700px] overflow-y-auto text-black ">
            <div class=" p-2 border-b dark:border-zinc-800 border-gray-300 flex justify-between  items-center">
                <span></span>
                <span class="text-base  max-lg:text-xs !text-red-400 font-semibold"> {{title}} </span>
                <i @click="close()" class="fas fa-times cursor-pointer  nt hover:text-red-400 transition-all"></i>
            </div>
            <div class="p-2 overflow-y-auto dark:text-secondary-color text-black ">
               <slot name="content"></slot>
            </div>
            <div class="mt-auto py-2 flex items-center justify-center gap-x-3 border-t dark:border-zinc-800 border-gray-300 w-full">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
    </Transition>
</template>


<script>
export default {
    watch : {
        modelValue : {
            handler : function(){
                if(this.modelValue){
                    const body = document.querySelector("body");
                    body.style.overflow = "hidden";
                }
                if(!this.modelValue){
                    const body = document.querySelector("body");
                    body.style.overflow = "auto";
                }
            },
            deep : true
        }
    },
    props :{
        title : {type : String, default : ""},
        modelValue : {type : Boolean,default : false},
        width : {type : String, default: "w-[500px]"}
    },
   methods : {
    toggle(){
           this.$emit('update:modelValue', true)
        },
        close(){
            this.$emit('update:modelValue', false)
        },
        stopClose(e){
            e.stopPropagation()
        }   
   },
   
    
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>