import { createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
      {
        path:"/securitiesDetails",
        name: "SecuritiesDetails",
        component: () => import('../components/SecuritiesDetails.vue')
      },
      {
        path:"/securities",
        name: "Securities",
        component: () => import('../components/Securities.vue')
      },
      {
        path:"/fileList",
        name: "FileList",
        component: () => import('../components/FileList.vue')
      },
      {path: '/', redirect: 'fileList'},
    ],
  })
  
export default router