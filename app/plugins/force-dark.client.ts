export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  if (colorMode.preference !== 'dark') {
    colorMode.preference = 'dark'
  }
})
