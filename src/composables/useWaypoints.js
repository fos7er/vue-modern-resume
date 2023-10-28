import { useHeaderStore } from '~/store/header'

let observer = null

export function useWaypoints (ids) {
  const store = useHeaderStore()

  onMounted(() => {
    let options = {
      rootMargin: '-15% 0px -70% 0px'
    }

    const callBack = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          store.highlightMenuItem(entry.target.id)
        }
      })
    }

    if (!observer) {
      observer = new IntersectionObserver(callBack, options)
    }

    ids.forEach(id => {
      observer.observe(document.getElementById(id))
    })

  })

  onBeforeUnmount(() => {
    observer = null
  })
}
