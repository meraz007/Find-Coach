import { createStore } from 'vuex'
import CoachesModule from './modules/coaches/index.js'
import RequestsModule from './modules/requests/index.js'
export default createStore({
  modules: {
    coaches:CoachesModule,
    RequestsModule
  }
});

