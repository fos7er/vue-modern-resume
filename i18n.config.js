function loadMessages() {
  const modules = import.meta.glob('./src/locales/**/*.json', {eager: true})
  const messages = {}

  for (const [path, module] of Object.entries(modules)) {
    const locale = path.match(/\/([a-z0-9-_]+)\.json$/i)[1]
    messages[locale] = {
      ...messages[locale],
      ... module.default
    }
  }

  return messages
}

const messages = loadMessages()
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
}))
