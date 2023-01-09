import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./router"
import GeneralModal from "@/components/GeneralModal"

const app = createApp(App)
app.use(router)
app.component("GeneralModal",GeneralModal)

app.mount('#app')
