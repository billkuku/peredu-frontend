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
import axios from 'axios'
import {
    // create naive ui
    create,
    // component
    NButton, NDatePicker, NSpace, NInput, NCard, NCollapse, NMenu, NTimeline, NTimelineItem, NDataTable
  } from 'naive-ui'
  

require('@/store/subscriber')

axios.defaults.baseURL = 'https://peredu-backend.herokuapp.com'

const naive = create({
    components: [NButton, NDatePicker, NSpace, NInput, NCard, NCollapse, NMenu, NTimeline, NTimelineItem, NDataTable ]
  })

library.add(faUserSecret, faArchive, faInbox, faEdit, faStar, faTrashAlt, faStarHalfAlt, faShareSquare, faUserGraduate, faSchool)

store.dispatch('auth/attempt', localStorage.getItem('token'))

createApp(App)
.use(store)
.use(router)
.use(naive)
.component("StarRating", StarRating)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
