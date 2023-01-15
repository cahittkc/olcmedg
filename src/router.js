import {createRouter, createWebHashHistory} from "vue-router";



const routes = [
    {path : "/" , name : "TestPage" , component: () => import("@/Views/testPage.vue")},
    {path : "/rubrik" , name : "RubrikPage" , component: () => import("@/Views/RubrikPage.vue")},
    {path : "/rubrik-hazirla" , name : "RubrikHazirla" , component: () => import("@/Views/RubrikHazırla.vue")},
    {path : "/portfolyo" , name : "Portfolyo" , component: () => import("@/Views/PortfolyoPage.vue")},
]


const router = createRouter({
    history : createWebHashHistory(),
    routes,
})


export default router