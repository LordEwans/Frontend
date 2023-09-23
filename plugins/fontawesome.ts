import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faCompass, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitterSquare, faTwitch, faGithubSquare, faHouse, faCompass, faPlus)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})