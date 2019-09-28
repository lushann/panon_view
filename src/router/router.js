import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo.vue'

const routers = [
  {
    path: '/home',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/',
    component: demo
  }
]
export default routers
