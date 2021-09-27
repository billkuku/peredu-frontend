import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArchive, faEdit, faInbox, faStar, faUserSecret, faTrashAlt, faStarHalfAlt, faShareSquare, faUserGraduate, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// https://www.npmjs.com/package/vue-star-rating
import StarRating from 'vue-star-rating';
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css"
import axios from 'axios'

require('@/store/subscriber')
library.add(faUserSecret, faArchive, faInbox, faEdit, faStar, faTrashAlt, faStarHalfAlt, faShareSquare, faUserGraduate, faSchool)
store.dispatch('auth/attempt', localStorage.getItem('token'))

axios.defaults.baseURL = '/api'

createApp(App)
.use(store)
.use(DatePicker)
.use(router)
.component("StarRating", StarRating)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
