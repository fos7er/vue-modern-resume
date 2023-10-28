import {defineStore} from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    menu: [
      {
        id: 'home',
        active: false,
        text: 'home',
        path: '/',
        hash: '#home'
      },
      {
        id: 'about',
        text: 'about',
        path: '/',
        hash: '#about'
      },
      {
        id: 'education',
        active: false,
        text: 'education',
        path: '/',
        hash: '#education'
      },
      {
        id: 'work',
        active: false,
        text: 'work',
        path: '/',
        hash: '#work'
      },
      {
        id: 'skills',
        active: false,
        text: 'skills',
        path: '/',
        hash: '#skills'
      },
      {
        id: 'portfolio',
        active: true,
        text: 'portfolio',
        path: '/',
        hash: '#portfolio'
      },
      {
        id: 'submenu',
        text: 'submenu',
        active: false,
        showGroup: false,
        group: [
          {
            id: 'nested1',
            text: 'link1',
            path:'/test'
          },
          {
            id: 'nested2',
            text: 'link2',
            path:'/test'
          },
          {
            id: 'nested2',
            text: 'link3',
            path:'/test'
          }
        ]
      }
    ]
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    toggleMenu(i) {
      this.menu[i].showGroup = !this.menu[i].showGroup
    }
  },
  share: {
    enable: true,
    initialize: true
  }
})
