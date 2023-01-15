<template>
  <div class="flex justify-center px-2">
    <p class="nt text-sm">
      Çoktan seçmeli soru geliştirme amacının belirlenmesi ile başlar. Test
      geliştirme, test maddelerine verilecek yanıtların veya testten alınacak
      puanların ne şekilde yorumlanacağına dair bir amaç içerir.
    </p>
  </div>
  <div class="mt-4 flex justify-center gap-7 flex-wrap">
        <div @click="amacModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Amacın belirlenmesi</p>
        </div>
        <div @click="kapsamModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color">Kapsamın belirlenmesi</p>
        </div>
        <div @click="maddeModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Maddelerin yazılması ve gözden geçirilmesi</p>
        </div>
        <div @click="denemeModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Deneme formunun hazırlanması</p>
        </div>
        <div @click="uygulamaModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Deneme Formunun Uygulanması</p>
        </div>
        <div @click="analizModal=true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Madde analizi ve madde seçimi</p>
        </div>
        <div @click="sonModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Nihai testin oluşturulması, uygulanması ve puanlanması</p>
        </div>
        <div  class="w-[250px]"></div>
        <div  class="w-[250px]"></div>
        <div  class="w-[250px]"></div>
        <div  class="w-[250px]"></div>
  </div>

    <div class="mt-2 flex justify-center">
        <p class="nt">Dilerseniz sizin için incelediğimiz online test hazırlama videomuzu aşağıdan izleyebilirsiniz.</p>
    </div>  

    <div class="flex justify-center my-4 rounded-lg "> 
        <iframe width="800" height="500" src="https://www.youtube.com/embed/HMFwOkYpzGA" title="Test Hazırlama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <general-modal v-model="amacModal" title="Amacın Belirlenmesi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
                Öğrencilerin öğrenme eksiklikleri mi, hazır bulunuşluk düzeyleri mi yoksa bir dersi 
                öğrenme düzeyleri mi belirlenecek? Belirli bir amaçla elde edilen sonuçlar genellikle başka 
                bir amaç için kullanmaya uygun olmaz. Testin amaca hizmet edebilmesi için amaçlardaki bu 
                farklılığın testin içeriğine de yansıması gerekir.
            </p>
            <p class="nt">
                Öğretim eksiklerini belirlemek için geliştirilen bir test en başarılı üç öğrenciye burs vermek 
                için yapılacak bir testle aynı güçlükte olmamalıdır. Yani bir testin güçlük düzeyi ve kapsamı 
                ne amaçla kullanılacağına göre ayarlanmalıdır.
            </p>
           </div>
        </template>
    </general-modal>

    <general-modal v-model="kapsamModal" title="Kapsamın Belirlenmesi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
               Testte hangi öğrenme çıktılarının kapsanacağının planlanması üç önemli soruyu gündeme 
                getirmektedir.
            </p>
            <ul class="flex flex-col gap-y-4 !list-disc p-4">
                <li class="nt">
                    <p class="nt !text-red-400">Öğrenciler için bu konu alanında hangi temel becerileri kazanmak önemlidir?</p>
                </li>
                <li class="nt">
                    <p class="nt !text-red-400">Öğrenciler için hangi konular önemlidir?</p>
                </li>
                <li class="nt">
                    <p class="nt !text-red-400">Kazanılan temel becerileri karmaşık öğrenme durumlarında kullanmayı gerektirecek 
                        hangi zihinsel süreçler dikkate alınmalıdır?
                    </p>
                </li>
            </ul>
            <p class="nt">
                Bu soruların cevapları en az iki boyutlu konu kapsamı-düşünme becerileri tabloları ile 
                cevaplanabilmektedir.
            </p>
            <p class="nt">
                Test kapsamını belirlemek için belirtke tabloları kullanmak yaygın bir yoldur. Belirtke 
                tablosunda, hangi konulardan/ kazanımlardan kaç soru sorulacağı, bu soruların bilişsel 
                düzeylerinin ne olacağı mutlaka belirtilmelidir. Belirtke tablosunun hazırlanması testin 
                planlanmasındaki en önemli iştir.
            </p>
            <p class="nt">
                Burada önemli olan farklı konu alanlarında farklı düşünme süreçlerin tanımlanması gereğidir. 
                Bir fen bilgisi dersinde önemli olan süreçler gözlem yapma becerisi, araştırma problemi 
                önerme, hipotez önerme, deney tasarlama vs. gibi bilimsel yöntem süreçlerine dönük 
                düşünülürken, türkçe dersinde okuduğu metinden doğrudan çıkarım yapma, yorum geliştirme, okuduğu 
                metindeki karakterlerin özelliklerini belirleme vs. gibi daha farklı boyutlarda da ele 
                alınabilmektedir.
            </p>
           </div>
           
        </template>
    </general-modal>

    <general-modal v-model="maddeModal" title="Maddelerin Yazılması ve Gözden Geçirilmesi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            
            <ul class="flex flex-col gap-y-4 !list-disc p-4">
                <li class="nt">
                    <p class="nt ">Her madde formatının sahip olması gereken özellikler ve yazımında dikkat edilmesi gereken 
                        noktalar vardır. Bazı formatların hazırlanması, bazılarının puanlanması diğerlerinden daha 
                        zordur. Her madde formatının avantaj ve dezavantajları vardır.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Maddeleri yazarken her madde formatının sahip olduğu madde yazım kurallarına uygun 
                        olarak ve ölçülmek istenen özelliği yansıtacak şekilde yazılması gerekmektedir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Burada temel ilke öğrencide gözlenmek istenen özelliği ortaya çıkaracak madde formatını 
                        tercih etmektir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Madde yazacak kişiler alan uzmanı olmalıdır ancak iyi test maddesi yazmak, eğitim almayı 
                        gerektirir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Ölçülecek her bir davranış için en az iki ya da üç madde yazmak yararlı olacaktır. Maddelerin 
                        çokluğu deneme uygulaması sonucunda kaliteli madde seçme olanağı verir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Maddelerin öncelikle ölçmek için yazıldığı kazanımı yansıtıp yansıtmadığı açısından alan 
                        uzmanları tarafından incelenir. Daha sonra ise; dil bilgisi ve anlatım, madde yazım kurallarına 
                        uygunluk, ifadelerin anlaşılırlığı vb. açılardan incelenmelidir.
                    </p>
                </li>
            </ul>
            
           </div>
        </template>
    </general-modal>


    <general-modal v-model="denemeModal" title="Deneme Formunun Hazırlanması" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            
            <ul class="flex flex-col gap-y-4 !list-disc p-4">
                <li class="nt">
                    <p class="nt ">Testte yer alacak maddeler hazırlandıktan sonra, deneme formu oluşturulurken test 
                        yönergesinin hazırlanması gerekir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Yönergede testin amacı, testte kaç soru bulunduğu, soruların nasıl cevaplanacağı, sınav süresi, 
                    düzeltme formülünün kullanılıp kullanılmayacağı, maddelerin nasıl puanlanacağı gibi
                    noktalara yer verilir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                        Yönerge hazırlandıktan sonra test oluşturulurken soruların forma kolaydan zora doğru 
                        yerleştirilmesi önerilmektedir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Sorular arasında boşluk olmasına ve soruların forma düzgün yerleştirilmesine, çoktan seçmeli 
                        maddelerden madde kökü ile seçeneklerin aynı sayfada olması gibi test formunun biçimsel 
                        özelliklerine de dikkat edilmelidir
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Bağlam açısından testin bölümleri içerisinde bütünlük olması da önemlidir.
                    </p>
                </li>
               
            </ul>
            
           </div>
        </template>
    </general-modal>


    <general-modal v-model="uygulamaModal" title="Deneme Formunun Uygulanması" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            
            <ul class="flex flex-col gap-y-4 !list-disc p-4">
                <li class="nt">
                    <p class="nt ">Deneme formu oluşturulduktan sonra asıl uygulamanın yapılacağı grupla benzer özelliklere 
                        sahip en az 200 kişiden oluşan bir grup üzerinde deneme uygulaması gerçekleştirilir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Deneme uygulamasına mümkünse tüm bireylerin tüm sorulara ulaşabilmesi sağlanmalı ve 
                            katılımcıların soru sormalarına ve dönüt vermelerine olanak tanınmalıdır.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                        Deneme uygulamasına mümkünse tüm bireylerin tüm sorulara ulaşabilmesi sağlanmalı ve 
                        katılımcıların soru sormalarına ve dönüt vermelerine olanak tanınmalıdır.
                    </p>
                </li>
            </ul>
            
           </div>
        </template>
    </general-modal>

    <general-modal v-model="analizModal" title="Madde Analizi ve Madde Seçimi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            
            <ul class="flex flex-col gap-y-4 !list-disc p-4">
                <li class="nt">
                    <p class="nt ">Madde seçmek için en temel iki ölçüt olan madde güçlüğü ve madde ayırt ediciliği hesaplanır. 
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">Madde analizi yapılması iyi maddelerin belirlenmesine yardımcı olur.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                       Madde güçlüğü maddenin hedef kitle için zorluk derecesini göstermektedir. Madde güçlüğü 
                        tek başına madde seçmede ölçüt olarak kullanılması doğru değildir. Çünkü madde güçlüğü 
                        maddenin kalitesi ile ilgili bir konu değildir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                       Maddenin kalitesinin bir göstergesi olarak madde ayırt ediciliği alınabilir. Madde ayırt 
                        ediciliği maddenin ölçtüğü kazanıma sahip olan ve sahip olmayan öğrencileri ayırma gücüdür.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                       Testten yüksek puan alan öğrencilerin maddeyi doğru cevaplamaları, düşük alan öğrencilerin 
                        ise maddeyi yanlış cevaplaması beklenmektedir.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                      Madde ayırt ediciliği maddelerin seçiminde en önemli ölçüttür.
                    </p>
                </li>
                <li class="nt">
                    <p class="nt ">
                      Madde analizi sonucunda, düşük kalitede olan sorular testten çıkarılır; çoktan seçmeli 
                        maddelerde işlemeyen seçenekler varsa düzeltilir.
                    </p>
                </li>
            </ul>
            
           </div>
        </template>
    </general-modal>
    <general-modal v-model="sonModal" title="Nihai testin oluşturulması, uygulanması ve puanlanması" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            
            <ul class="flex flex-col gap-y-4 !list-none p-4">
                <li class="nt">
                    <p class="nt ">Deneme uygulaması sonuçlarına göre seçilen maddelerle ölçme amaç ve kapsamı da dikkate 
                    alınarak nihai test oluşturulur. Nihai form oluşturulurken her bir davranışı yoklayan 
                    özelliklere uygun kaliteli maddeler seçilir 
                    </p>
                </li>
            </ul>
            
           </div>
        </template>
    </general-modal>


</template>


<script>
export default {
    data(){
       return {
        sonModal : false,
        analizModal : false,
        uygulamaModal : false,
        denemeModal : false,
        maddeModal : false,
        kapsamModal : false,   
        amacModal : false

       }
    },
}
</script>