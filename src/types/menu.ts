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
