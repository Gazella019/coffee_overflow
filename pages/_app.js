import '@/styles/globals.css'
import '@/styles/prism.css'
import { ThemeUIProvider } from 'theme-ui';
import { toTheme } from '@theme-ui/typography'
import Layout from '@/components/Layout/Layout'
import githubTheme from 'typography-theme-github'
import noriegaTheme from 'typography-theme-noriega'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  // const theme = toTheme(noriegaTheme)
  const theme = toTheme(githubTheme)
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <AnimatePresence initial={false}
        mode="wait"
        >
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          >
            <Component key={router.pathname} {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeUIProvider>
  )
}
