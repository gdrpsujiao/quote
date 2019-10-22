export default [
  {
    path: '/example',
    name: 'example',
    component: () => import('@/views/example/index'),
    meta: {
      keepAlive: true
    }
  }
]