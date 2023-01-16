<template>
        <div class="flex justify-end gap-x-2">
            <button @click="ornekModal = true" class="modal-ok">Örnek Rubrik</button>
            <button @click="this.$router.push('/rubrik-hazirla')" class="modal-ok">Rubrik Hazırla</button>
        </div>
        <div class="h-[500px] mb-8">
            <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 500px; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX3YlB81Y&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
        </div>
       <div class="flex justify-center mb-8">
            <div class="flex flex-col gap-y-3">
                <p class="nt">Rubrikler öğrenciden beklenen performansın tanımlarını farklı parçalara bölünmesiyle
                    oluşturulan ölçeklerdir.
                </p>
                <p class="nt">
                    Rubrikler çok farklı formalarda ve seviyelerde oluşturulabilir. Rubrikler kriterlerden
                    oluşmuştur ve bu kriterler performans, davranış veya bir niteliğin ölçülmesinde
                    kullanılırlar.
                </p>
                <p class="nt">
                    Öğrencilerin var olan yeteneklerinin sonuçlarının değerlendirilmesinde rubriklerden
                    yararlanılır. Rubriklerin puanlanmasında objektif olabilmek için tanımlanmış olan bir performans veya öğrencinin yaptığı performansı belirten görevler belirlenmelidir.
                </p>
                <p class="nt">
                    Öğretmenler tarafından 
                    performans
                    görevleri mükemmel, iyi, orta, yetersiz veya daima, bazen, nadir ve hiç şeklinde 
                    tanımlanmaktadır
                </p>
                <p class="nt !text-red-400">
                    Rubrik hazırlama aşamaları;
                </p>
                <ul class="list-disc ml-8 p-1 flex flex-col gap-y-2">
                    <li class="nt">Bir üretim ve gelişim süreci seçilir.</li>
                    <li class="nt">Belirlenen bu ürün oluşturma ve gelişim süreci için bir kriter belirlenir.</li>
                    <li class="nt">Rubrik için kullanılan seviyelere karar verilir. Bunlar 3–5 arası kategorilerden oluşur.</li>
                    <li class="nt">En üst seviye için kullanılan performansın ne ifade ettiği yazılır.</li>
                    <li class="nt">Diğer seviyeler içinde aynı şekilde gerçekleştirilmesi beklenen performans düzeyleri ifade edilir.</li>
                    <li class="nt">Her bir öğrencinin performans seviyeleri karşılaştırılır.</li>
                    <li class="nt">En son olarak öğrenci seviyesi belirlenir.</li>
                </ul>
                <p class="nt">
                    Rubrikler hazırlanış amaçlarına göre 2’ye ayrılmaktadır. <strong>Analitik</strong> ve <strong>holistik</strong> rubrikler.
                </p>
                <p class="nt">
                    Analitik rubrikler holistik rubriklere göre daha fazla sınırlayıcı davranış özelliğine sahiptirler.
                    Analitik rubrikler daha çok süreç değerlendirmesi üzerinde dururken holistik rubrikler genel 
                    olarak sonuç değerlendirmesi üzerinde dururlar. Holistik rubriklerde daha çok sonuçta 
                    gerçekleşmesi istenen performansın gerçekleşme durumuna bakılmaktadır. Rubriklerin 
                    hazırlanmasında ilk öncelik; öğrencinin sonuçta kazanması gereken performans seviyeleri 
                    açık olarak belirlenmeli ve bu kriterler öğrencilere duyurulmalıdır
                </p>
                <p class="nt">
                    Holistik rubriklerin hazırlanmasında matrislerden yararlanılmaktadır. Bu matrislerde
                    oluşturulan performanslar sol kısma ve belirlenen kriterler sağ üst kısma yazılarak daha fazla
                    performans seviyesinden oluşan kapsamlı rubrikler oluşturulmuş olur
                </p>
                <p class="nt">
                    Analitik ve holistik rubrikler öğrenci performanslarını değerlendirmede farklı açılardan 
                    yaklaşmaktadırlar. Analitik rubriklerde öğrenciye ait özel zayıf ve güçlü oldukları noktalara 
                    yer verilirken holistik rubriklerde buna yer verilmez. Öğrencilere, ailelerine ve öğretmene 
                    öğrenci performansı hakkında bilgi veren rubriklerin, bazı dezavantajları da vardır. Bunlardan 
                    bir tanesi de puanlamadaki güvenirliktir.
                </p>
                <p class="nt">
                    Süreç değerlendirmede analitik rubrik, sonuç değerlendirmesinde ise holistik rubrik 
                    kullanılmasıyla birlikte bir ödev aynı zamanda hem analitik hem de holistik rubrik ile 
                    değerlendirilebilir.
                </p>
                <p class="nt">
                    Bir analitik rubrikte farklı başlık altında bulunan performanslar farlı puanlarla 
                    puanlanabilirler. Örneğin bir bölüm 4–3–2–1–0 puanlarıyla puanlanırken diğer bölüm 2–1–0 
                    puanlarıyla puanlanabilir. Her bir bölümden alınan puanların toplanmasıyla birlikte 
                    öğrencinin toplam puanı bulunabilir.
                </p>
                <p class="nt">
                    Analitik rubrikler performansın alt parçalarının puanlanmasını içerirken holistik rubrikler 
                    davranışı bütün olarak değerlendirip, ürünü veya sonucu değerlendirmede kullanılır.
                </p>
                <p class="nt !text-red-400">
                    Rubrikleri geliştirirken dikkat edilecek konular aşağıda verilmiştir;
                </p>
                <ul class="list-disc ml-8 p-1 flex flex-col gap-y-2">
                    <li class="nt">Performans değerlendirmesinde gözlemleyebileceğiniz ve yargılayabileceğiniz öğrencidavranışlarını belirleyiniz.</li>
                    <li class="nt">Değerlendirilecek anahtar davranışlarının boyutlarını belirleyiniz. Eğer değerlendirme görevi karmaşık ise, davranışların birkaç boyutu değerlendirilebilir.</li>
                    <li class="nt">Değerlendireceğiniz davranışların somut örneklerini geliştiriniz.</li>
                    <li class="nt">Ne tür bir rubrik kullanacağınıza karar veriniz. (Holistik veya analitik, genelleyici veya özelveya bunların birleşiminden oluşan)</li>
                    <li class="nt">Performans düzeyini belirlemek için mükemmelliğin standartlarını veya kriterlerinigeliştiriniz.</li>
                    <li class="nt">Performansın değerlendirmesini kimin (öğretmen, öğrenci, dışardan bir uzman, kendi kendine veya akranların) puanlayacağına karar veriniz.</li>
                    <li class="nt">Puanlamaya katılan değerlendirme sistemindeki tüm katılımcıların (aileler, öğretmenler,öğrenciler) aynı şeyi anlamalarını sağlayınız.</li>
                </ul>
            </div>

       </div>


       <general-modal width="w-[600px]" v-model="ornekModal" title="Örnek Rubrik">
            <template #content>
                <img class="object-contain" src="../assets/Screenshot_4.png" alt="">
            </template>
       </general-modal>
</template>


<script>
export default {
    data(){
        return {
            ornekModal : false,
        }
    }
}
</script>




<style scoped>


table  tr{
    border: 1px solid #000;
}
table tbody tr td{
    padding: 0 16px;
}
</style>