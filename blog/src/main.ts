import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  ViFileTypeVue,
  FcCollaboration,
  ViFileTypeLightNext,
  ViFileTypeGit,
  ViFileTypeCss,
  ViFileTypeNuxt
} from 'oh-vue-icons/icons'

addIcons(
  ViFileTypeVue,
  FcCollaboration,
  ViFileTypeLightNext,
  ViFileTypeGit,
  ViFileTypeCss,
  ViFileTypeNuxt
)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(router)
app.mount('#app')
