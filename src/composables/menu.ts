type MenuItem = {
  id: string,
  path?: string,
  text: string,
  hash?: string,
  showGroup?: boolean,
  active: boolean,
  group?: MenuItemNested[]
}

type MenuItemNested = {
  id: string,
  path?: string,
  text: string,
  hash?: string,
}

export type Menu = MenuItem[]

const route = useRoute()

const setActivePath = (item: MenuItem, path: string): boolean => {
  if (item.path === path) {
    return item.active = true
  }
  if (item.group) {
    return item.active = item.group.some(i => setActivePath(i, path))
  }

  return item.active = false
}

//header supports nested groups:
const nestedMenu = [
  {
    id: 'item1',
    text: 'item1',
    active: false,
    showGroup: false,
    group: [
      {
        id: 'item1-nested1',
        text: 'item1-nested1',
      },
      {
        id: 'item1-nested2',
        text: 'item1-nested2',
      },
      {
        id: 'item1-nested2',
        text: 'item1-nested2',
      }
    ],
  },
  {
    id: 'item2',
    text: 'item2',
  },
  {
    id: 'item3',
    text: 'item3',
  }
]

export function useMenu () {
  const menu = reactive([
    {
      id: 'home',
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
      text: 'education',
      path: '/',
      hash: '#education'
    },
    {
      id: 'skills',
      text: 'skills',
      path: '/',
      hash: '#skills'
    },
    {
      id: 'portfolio',
      text: 'portfolio',
      path: '/',
      hash: '#portfolio'
    }
  ] as Menu)
  const toggleMenu = (i: number) => {
    menu[i].showGroup = !menu[i].showGroup
  }

  watch(() => route.path, (path) => {
    menu.forEach(item => {
      setActivePath(item, path)
    })
  })

  onMounted(() => {
    menu.forEach(item => {
      setActivePath(item, route.path)
    })
  })

  return { menu, toggleMenu }
}
