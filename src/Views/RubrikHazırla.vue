<template>
    <div class="flex flex-col gap-y-4 mb-4 dark:bg-zinc-700 bg-gray-300 p-4 rounded-lg no-show">
        <div class="flex flex-col gap-y-1">
            <span class="nt"> Değerlendirme Alanı Başlığı: </span>
            <input v-model="rubrikObj.title" placeholder="Değerlendirme alanı başlığı giriniz.." class="input-item w-full " type="text">
        </div>
        <div class="flex flex-col gap-y-1">
            <span class="nt"> Değerlendirme Kriterleri: </span>
            <textarea v-model="rubrikObj.content" placeholder="Her bir değerlendirme kriterinden sonra =(eşittir) işareti bırakarak bir sonraki değerlendirme kriterinizi yazmaya devam ediniz.." class="input-item w-full h-[200px] resize-none p-2" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="flex flex-col gap-y-1">
            <span class="nt"> Düzey ve Puan: </span>
            <input v-model="rubrikObj.points" placeholder="Her bir puanlama arasına ,(virgül) bırakarak puan veya düzeylerinizi belirtebilirsiniz.." class="input-item w-full " type="text">
        </div>
        <div class="flex flex-col gap-y-1">
            <span class="nt"> Okule veya Kurum bilgisi, detaylar,açıklama </span>
            <input v-model="info" placeholder="" class="input-item w-full " type="text">
        </div>
       
        <div class="flex justify-end">
            <button @click="setObj" class="modal-ok">Satırı Ekle</button>
        </div>
    </div>
    <div class="flex justify-center nt">
        <span class="nt"> {{info}} </span>
    </div>
    
    <div v-if="rubrikList.length > 0" class="flex justify-between px-2 border-4 border-b-0 border-black">
        <span  class="nt !text-[10px]">Değerlendirme Alanı</span>
        <span class="nt !text-[10px]">Değerlendirme Kriterleri</span>
        <span class="nt !text-[10px]">Düzey ve Puan</span>
    </div>
    <div v-if="rubrikList.length > 0">
         <div  v-for="(r,index) in rubrikList" :key="index" class="flex justify-between  border-4 border-black ">
        <div class="flex justify-center items-center border-r-2 border-black px-2 min-w-[150px] ">
            <span class="nt"> {{r.title}} </span>
        </div>
        <div class="flex flex-1 w-full">
            <div class="flex flex-col flex-1 w-full items-center border-r-2 border-black py-1">
                <span  v-for="(c,index) in r.content" :key="index" class="nt !text-[10px] w-full flex flex-1 border-b-2 justify-start border-black leading-3 p-[2px] last:border-none"> {{c}} </span>
            </div>
            <div class="flex flex-col justify-center items-center   py-1">
                <span class="nt !text-[10px] flex flex-1 border-b-2 justify-center items-center border-black  px-6 last:border-none " v-for="(p,index) in r.points" :key="index"> {{p}} </span>    
            </div>
        </div>
      
    </div>
    </div>
   
    
</template>



<script>
export default {
    data(){
        return {
            info : "",
            rubrikObj : {
                title : "",
                content : null,
                points : null
            },
            rubrikList : [],
        }
    },
    methods :{
        setObj(){
            let data = {
                title : "",
                content : [],
                points : [],
            }
            data.title = this.rubrikObj.title
            if(this.rubrikObj.content){
                let c = this.rubrikObj.content.split("=")
                for (let i = 0; i < c.length; i++) {
                    data.content.push(c[i])
                }
            }
            if(this.rubrikObj.points){
                let p = this.rubrikObj.points.split(",")
                for (let j = 0; j < p.length; j++) {
                    data.points.push(p[j])
                }
            }
            this.rubrikList.push(data)
        }
    }
}
</script>


<style scoped>
@media  print {
    .no-show {
        display: none !important;
    }
}
</style>