import '@/styles/globals.css'
import '@/styles/prism.css'
import Layout from '@/components/Layout/Layout'
// import { ThemeUIProvider } from 'theme-ui'
import { motion, AnimatePresence } from 'framer-motion'


export default function App({ Component, pageProps, router }) {
  return (
      <Layout>
        <AnimatePresence initial={false}
          mode="wait"
        >
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
          > */}
            <Component key={router.pathname} {...pageProps} />
          {/* </motion.div> */}
        </AnimatePresence>
      </Layout>
  )
}
