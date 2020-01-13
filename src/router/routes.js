
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Focus.vue') },
      { path: 'frame', component: () => import('pages/Frame.vue') },
      { path: 'sequence', component: () => import('pages/Sequence.vue') }
    ]
  }
]

export default routes
