<template>
    <div class="h-[500px] my-6">
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0;  margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 500px; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX3teWbHk&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
    </div>
    <div class="flex flex-col gap-y-2 mb-8">
        <p class="nt leading-6">
            Portfolyolar yıllardır artistler, fotoğraf sanatçıları, yazarlar vb. tarafından çalışmalarının en iyi örneklerini toplamak ve göstermek için kullanılmaktadır. Bu yaklaşım, eğitim alanına öğrenci performansını değerlendirmenin temel yöntemlerinden biri olarak adapte
            edilmiştir. Portfolyo, ilköğretimden yüksek öğretime kadar eğitimin
            her düzeyinde, profesyonel ve mesleki
            eğitimlerde kullanılmaktadır. Portfolyo, bir ya da daha fazla alanda öğrencinin çabasını, gelişimini ve başarılarını gösteren öğrenci çalışmalarının amaca yönelik olarak toplanmasıdır. Portfolyo geliştirme süreci ve onun
            değerlendirilmesi portfolyo değerlendirme olarak adlandırılmaktadır.
            Portfolyo tanımı zaman içinde değişmiş ve gelişmiştir. Önceki tanımlara,
            performans kanıtlarını seçme ve içeriğin belirlenmesine öğrencinin katılımı
            ve öğrencinin kendi kendini değerlendirmesi de dahil edilmiştir. 
        </p>
        <span class="title !text-red-400">Portfolyonun Kulanım Amaçları ;</span>
        <div>
            <ul class="list-disc flex flex-col gap-y-2 p-2">
                <li class="nt">
                    Karar verici/tanılayıcı (summative) ve
                    biçimlendirici (formative) değerlendirme yapmak.
                </li>
                <li class="nt">
                    Geleneksel yöntemlerle değerlendirilmesi zor olan öğrenme çıktılarını (kişisel gelişme, öz-yönlendirilen öğrenme,yansıtma yeteneği, kişisel gelişimin öz değerlendirmesi, profesyonelizm) değerlendirmek. 
                </li>
                <li class="nt">
                    Öğrenme çıktılarını başarma yönündeöğrencinin gelişimini göstermek.
                </li>
                <li class="nt">
                    Çeşitli kaynaklardan belirli bir zaman periyodunda elde edilen performans kanıtlarını ortaya koymak. 
                </li>
                <li class="nt">
                    Programda gelişmeye ihtiyaç olan
alanları belirlemek. 
                </li>
                <li class="nt">
                    Öğrencilerin tipik performanslarını ortaya koyarak, gelecek yıllar için eğiticilere veri sağlamak. 
                </li>
            </ul>
        </div>

        <span class="title !text-red-400">Portfolyo Geliştirme Aşamaları</span>
        <div class="mt-4 flex justify-center gap-7 flex-wrap">
        <div @click="amacModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Amacın Tanımlanması</p>
        </div>
        <div @click="icerikModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color"> Portfolyo içeriğine ve nasıl yapılandırılacağına karar verilmesi</p>
        </div>
        <div @click="gelistirmesüresi = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Geliştirme ve değerlendirme sürecinin (zaman takvimi) tasarımı</p>
        </div>
        <div @click="degerlendiriciModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Değerlendiricilerin seçilmesi ve eğitimi</p>
        </div>
        <div @click="adaptasyonModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Öğrenci Adaptasyonu</p>
        </div>
        <div  class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Karar vermede kullanılacak rehberlerin geliştirilmesi 
</p>
        </div>
        <div @click="güvenilirlikModal = true" class=" w-[250px] cursor-pointer rounded-lg border bdr p-4 flex justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
            <p class="nt text-base !text-mny-color ">Güvenirlik ve geçerlilik kanıtlarının oluşturulması </p>
        </div>

        </div>

        <span class="title !text-red-400">Portfolyonun değerlendirilmesi </span>
        <p class="nt">
            Değerlendirmenin amacı, profesyonel
standartların korunmasına/sürdürülmesine katkıda bulunmak, önceden
belirlenen kriterler kullanılarak öğrencilerin nitelikleri, yetenekleri ve bilgileri hakkında kararlar almaktır.
Portfolyo, değerlendirme açısından
özellik taşır
        </p>
        <p class="nt">
            Portfolyo değerlendirmede biçimlendirici
            ve tanılayıcı ayrımını yapmak önemlidir. Portfolyo ile tanı koymak
            amaçlanıyorsa, başarının değerlendirilmesi ya da öğrencilerin derecelendirilmesi / sınıflandırılması gerekir. Bu
            amaçla gelişim grafikleri, bazı özetleyici ve puanlamaya yönelik formlar kullanılabilir. Ancak, portfolyo öğrencilere ne öğrendiklerini, ne kadar
            iyi öğrendiklerini ve ne öğreneceklerini anlamalarına yardım eden biçimlendirici bir değerlendirme aracı olarak da
            kullanılabilir.
        </p>
        <p class="nt">
            Değerlendirici etkisi, bir değerlendiricinin
            zaman içindeki (test – tekrar test) tutarlığı, değerlendiriciler arası tutarlılık
            ve geçme/kalma konusunda konsensüs
            veya çıkarımı kapsar. Konsensüs yaklaşımı, öğrencilerin performanslarına
            karar vermede yaygın olarak kullanılan bir yaklaşımdır. Değerlendiriciler
            kendi bağımsız puanlamalarını yaptıktan sonra, konsensüs sürecinde puanlarını öğrencinin performans kanıtları
            ile gerekçelendirir ve performansa ilişkin yorumlarını açıklarlar. Yorumların
            uygunluğu ve çıkarımların özgünlüğü
            portfolyo geçerlik ve güvenirlik tartışmaları kapsamında ele alınır. 
        </p>   
        <span class="title !text-red-400">Portfolyonun güçlü yanları </span>
    <div class="">
        <ul class="list-disc p-2 flex flex-col gap-y-2">
            <li class="nt">Eğitim sürecinin değerlendirilmesinde öğrenci ve eğiticilerin rolünü pozitif yönde etkiler</li>
            <li class="nt">Portfolyo oluşturma sürecinde öğrenciler değerlendirme korkusundan uzaklaştır ve hata yapmaktan korkmazlar</li>
            <li class="nt">Portfolyo, öğretimle değerlendirme arasındaki bağı da güçlendirir, etkili öğrenme ve öğretmeyi destekler</li>
            <li class="nt">Öğrencilerin metabilişsel becerilerini geliştirir</li>
            <li class="nt">Öğrenciler çalışma konularını/portfolyo ürünlerini seçebilirler, ancak neden seçtiklerine ilişkin yorum yaparlar . Böylelikle, seçimleri üzerinde düşünür, nedenlerini irdeler, güçlü ve zayıf yönlerini daha iyi değerlendirebilirler</li>
            <li class="nt">Öğrencilerin geliştirdikleri ilk taslaklara yönelik geribildirimler ve bu doğrultuda yaptıkları geliştirme çalışmaları, onların problem çözme, karar verme, yeni şeyler yaratma ve sorumluluk alma becerilerinin gelişimine katkıda bulunur</li>
            <li class="nt">Portfolyolar yoluyla kazanılan bu beceriler otonom öğrenenler olmalarını destekler</li>
        </ul>
    </div> 
    </div>
    
    



     <general-modal v-model="amacModal" title="Amacın Belirlenmesi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
               Portfolyo
            gibi geleneksel olmayan değerlendirme
            yaklaşımının uygulanmaya başlaması,
            öncelikle amacı hakkında belirsizliklere ve kafa karışıklığına neden olabilir.
            Bu aşamada Portfolyo ve diğer değerlendirme bileşenleri arasındaki ilişkinin ortaya konması önemlidir. 
            </p>
           </div>
        </template>
    </general-modal>
    <general-modal v-model="icerikModal" title="Portfolyo içeriğine ve nasıl yapılandırılacağına karar verilmesi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
              Tanımlanan amaç doğrultusunda değerlendirilecek yeterliklerin belirlenmesi, portfolyo yapılandırmanın başlangıç noktasıdır. Ardından, ölçülecek yeterliklerin göstergesi olabilen performans davranışları belirlenir. Belirlenen performans davranışları portfolyo içerik seçimine rehberlik yapar. Değerlendirme/
puanlama sisteminin geliştirilmesi Değerlendirme kriterleri, portfolyonun
amacına uygun olmalı, öğrencinin zaman içindeki gelişimini dikkate almalı,
güçlü ve zayıf yönlerini belirleyebilmesine olanak sağlamalıdır. Ör. “bilgi yönetimi” öğrenme çıktısı altında tanımlanan yeterlik, “komputer içeren yöntemleri kullanarak bilgiyi kaydetme,
geri getirme ve analiz etmede yeterlik”
olabilir. Değerlendirme kriterlerinden
biri de, “araştırma sorularının ve yönteminin” formule edilmesinin puanlamasını içerebilir.
            </p>
           </div>
        </template>
    </general-modal>
    <general-modal v-model="gelistirmesüresi" title="Geliştirme ve değerlendirme süreci tasarımı" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
              Portfolyo geliştirme ve değerlendirme
                sürecinin tasarımında, ihtiyaç duyulan
                zaman, insangücü, lojistik, idari konular ve personel desteğinin mevcudiyeti
                dikkate alınmalıdır. 
            </p>
           </div>
        </template>
    </general-modal>
    <general-modal v-model="degerlendiriciModal" title="Değerlendiricilerin seçilmesi ve eğitimi" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
              Portfolyo, amacına uygun ve bu konuda eğitim almış değerlendiriciler gerektirir. Değerlendiriciler geniş bir perspektifte (temel bilim ve klinik bilimlerden eğiticiler, eğitim ve öğrenci gelişimi
alanındaki çalışan fakülte personeli vb.)
olabilir. Değerlendiricilerin, portfolyonun, amacı, kapsamı ve değerlendirmesi/puanlaması konusunda yeterince bilgi sahibi olmaları sağlanmalıdır
            </p>
           </div>
        </template>
    </general-modal>
    <general-modal v-model="adaptasyonModal" title="Öğrenci Adaptasyonu" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
              Öğrenciler programın başında portfolyonun geliştirilmesi ve değerlendirilmesi konusunda
bilgilendirilmelidir. Bu amaçla özel bir
kitapçık/rehber hazırlanması ve bu kitapçıkta, portfolonun amacı ve içeriği,
yapılandırılması, portfolyo değerlendirme süreci ve puanlama sisteminin
açıklanması önerilmektedir. 
            </p>
           </div>
        </template>
    </general-modal>
    <general-modal v-model="güvenilirlikModal" title="Güvenirlik ve geçerlilik kanıtlarının oluşturulması" width="w-[600px]">
        <template #content>
           <div class="flex flex-col gap-4">
            <p class="nt">
             Portfolyo değerlendirmede dereceleme ölçeği (rubric) kullanmak, puanlanmaya açıklık getirmesi ve bir ölçme aracı
olarak güvenirliği sağlaması açısından
uygundur. Portfolyonun değerlendirilmesinde her bir ürünün değerlendirilmesinin yanı sıra, organizasyonu, görüntüsü, öğrenci değerlendirmesinin kalitesi de göz önünde bulundurulmalıdır. Her portfolyonun puanlanmasında yeterli eğitim almış en
az iki puanlayıcının görev alması önerilmektedir.
            </p>
           </div>
        </template>
    </general-modal>
</template>


<script>
export default {
    data(){
        return {
            amacModal : false,
            icerikModal : false,
            gelistirmesüresi : false,
            degerlendiriciModal : false,
            adaptasyonModal : false,
            güvenilirlikModal : false,
        }
    }
}
</script>