import {defineStore} from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    menu: [
      {
        id: 'item1',
        text: 'item1',
        active: false,
        showGroup: false,
        group: [
          {
            id: 'item1-nested1',
            text: 'item1-nested1',
            path: '/some'
          },
          {
            id: 'item1-nested2',
            text: 'item1-nested2',
            path: '/some'
          },
          {
            id: 'item1-nested2',
            text: 'item1-nested2',
            path: '/some'
          }
        ]
      },
      {
        id: 'item2',
        text: 'item2',
        group: [
          {
            id: 'item2-nested1',
            text: 'item2-nested1',
            path: '/some'
          },
          {
            id: 'item2-nested2',
            text: 'item2-nested2',
            path: '/some'
          }
        ]
      },
      {
        id: 'item3',
        text: 'item3',
        path: '/some'
      },
      {
        id: 'item4',
        text: 'item4',
        path: '/some'
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
