type MenuItem = {
  id: string,
  path?: string,
  text: string,
  hash?: string,
  showGroup?: boolean,
  active: boolean,
  group?: MenuItem[]
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

export function useMenu() {
  const menu = reactive([
    {
      id: 'ip-telephony',
      text: 'IP telephony',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'ip-telefoniya',
          path: '/ip-telefoniya',
          text: 'IP telephony'
        },
        {
          id: 'sip-phone',
          path: '/ip-telefoniya/sip-trunk',
          text: 'SIP phone'
        },
        {
          id: 'sip-numbers',
          path: '/ip-telefoniya/sip-nomera',
          text: 'SIP numbers'
        },
        {
          id: 'ip-telephony-for-business',
          path: '/ip-telefoniya/dlya-biznesa',
          text: 'IP telephony for business'
        },
        {
          id: 'services',
          text: 'Services',
          active: false,
          showGroup: false,
          group: [
            {
              id: 'autocall',
              path: '/avtoobzvon',
              text: 'Auto call'
            },
            {
              id: 'voicemail',
              path: '/sms-marketing/golosovye-rassylki',
              text: 'Voicemail'
            },
            {
              id: 'text-to-speech',
              path: '/text-to-speech',
              text: 'Text to speech'
            },
            {
              id: 'flashcall',
              path: '/podtverzhdenie-nomera-zvonkom',
              text: 'Flash call'
            }
          ]
        }
      ]
    },
    {
      id: 'virtual-numbers',
      text: 'Virtual numbers',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'virtualnye-nomera',
          path: '/virtualnye-nomera',
          text: 'Virtual numbers'
        },
        {
          id: 'mobile-numbers',
          path: '/virtualnye-nomera/mobilnye',
          text: 'Mobile numbers'
        },
        {
          id: '8800',
          path: '/virtualnye-nomera/8800',
          text: 'Toll free numbers'
        },
        {
          id: 'international-numbers',
          path: '/virtualnye-nomera/mezhdunarodnye',
          text: 'International numbers'
        },
        {
          id: 'landline-numbers',
          path: '/virtualnye-nomera/gorodskie',
          text: 'Landline numbers Russia'
        },
        {
          id: 'beautiful numbers',
          path: '/virtualnye-nomera/krasivye',
          text: 'Beautiful numbers'
        },
        {
          id: 'SMS messengers',
          path: '/virtualnye-nomera/dlya-sms',
          text: 'Virtual numbers for SMS and messengers'
        }
      ]
    },
    {
      id: 'virtual-pbx',
      path: '/virtualnaya-atc',
      text: 'Virtual PBX'
      // active: false,
      // showGroup: false,
      // group: [
      //   {
      //     id: 'connect',
      //     path: '/connect',
      //     text:  'Connect'
      //   },
      //   {
      //     id: 'tariffs',
      //     path: '/tariffs',
      //     text:  'Tariffs'
      //   },
      //   {
      //     id: 'numbers',
      //     path: '/numbers',
      //     text:  'Numbers'
      //   },
      //   {
      //     id: 'for-subscribers',
      //     path: '/for-subscribers',
      //     text:  'For subscribers'
      //   },
      //   {
      //     id: 'services',
      //     text:  'Services' ,
      //     group: [
      //       {
      //         id: 'callback',
      //         path: '/callback',
      //         text:  'Callback'
      //       },
      //       {
      //         id: 'call-monitor',
      //         path: '/call-monitor',
      //         text:  'Call monitor'
      //       },
      //       {
      //         id: 'call-recording',
      //         path: '/call-recording',
      //         text:  'Call recording'
      //       }
      //     ]
      //   }
      // ]

    },
    {
      id: 'mobile-telephony',
      text: 'Mobile telephony',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'm2m',
          path: '/mobile/platforma-m2m',
          text: 'M2M'
        },
        {
          id: 'm2m sim',
          path: '/mobile/m2m-sim-karty',
          text: 'M2M SIM cards'
        },
        {
          id: 'converged-services',
          path: '/mobile/konvergentnye-uslugi',
          text: 'Converged services'
        },
        {
          id: 'pLTE',
          path: '/mobile/private-lte-resheniya',
          text: 'pLTE'
        },
        {
          id: 'mnp',
          path: '/mobile/opredelenie-operatora-mnp',
          text: 'MNP'
        },
        {
          id: 'iot',
          path: '/mobile/iot-recheniya',
          text: 'IoT solutions'
        },
        {
          id: 'ip-sim-cards',
          path: '/mobile/ip-sim-cards-fmc',
          text: 'IP SIM cards (FMC)'
        },
        {
          id: 'mvno',
          path: '/mobile/mvno-virtualny-operator',
          text: 'MVNO'
        },
        {
          id: 'mvne',
          path: '/mobile/mvne-platforma',
          text: 'MVNE'
        }
      ]
    },
    {
      id: 'sms',
      text: 'SMS',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'sms-marketing',
          path: '/sms-marketing',
          text: 'SMS Marketing'
        },
        {
          id: 'bulk-sms',
          path: '/sms-marketing/sms-rassylka',
          text: 'Bulk SMS'
        },
        {
          id: 'sms-to-messengers',
          path: '/sms-marketing/rassylka-v-messendzhery',
          text: 'SMS to messengers'
        },
        {
          id: 'international-bulk-sms',
          path: '/sms-marketing/mezhdunarodnye-sms',
          text: 'International bulk SMS'
        },
        {
          id: 'sms-forwarding',
          path: '/sms-marketing/pereadresacija-sms',
          text: 'SMS forwarding'
        },
        {
          id: 'sms2email',
          path: '/sms-marketing/sms-to-email',
          text: 'SMS to Email/Email to SMS'
        },
        {
          id: 'hlr-requests',
          path: '/sms-marketing/ping-sms',
          text: 'HLR requests'
        }
      ]
    },
    {
      id: 'tariffs',
      text: 'Tariffs',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'ip-telephony',
          text: 'IP telephony',
          path: '/tarify/ip-telefoniya'
        },
        {
          id: '8800',
          path: '/tarify/nomera-8800',
          text: 'Toll free numbers'
        },
        {
          id: 'virtual-pbx',
          path: '/tarify/vats',
          text: 'Virtual PBX'
        },
        {
          id: 'bulk-sms',
          path: '/tarify/rassylka-sms',
          text: 'Bulk SMS'
        },
        {
          id: 'mobile telephony',
          path: '/tarify/mobile',
          text: 'Mobile telephony'
        }
      ]
    },
    {
      id: 'technology',
      text: 'Technologies',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'blog',
          path: '/blog',
          text: 'Technologies'
        },
        {
          id: 'opportunities and principle of IP telephony',
          path: '/blog/vozmozhnosti-i-tehnologii-voip',
          text: 'Opportunities and principle of IP telephony'
        },
        {
          id: 'setting up IP telephony',
          path: '/blog/nastroyka-ip-telefonii',
          text: 'Setting up IP telephony'
        },
        {
          id: 'iot',
          path: '/blog/tehnologii-interneta-veschey-iot',
          text: 'Internet of Things - technologies and protocols'
        },
        {
          id: 'sip-trunk',
          path: '/blog/sip-trunk-ponyatie-nastroyka',
          text: 'SIP trunk - concept, technology, setting'
        }
      ]
    },
    {
      id: 'about',
      text: 'About',
      active: false,
      showGroup: false,
      group: [
        {
          id: 'contacts',
          path: '/contacts',
          text: 'Contacts'
        },
        {
          id: 'documents',
          path: '/documents',
          text: 'Documents'
        },
        {
          id: 'career',
          path: '/career',
          text: 'Career'
        }
      ]
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
