import '@/styles/globals.css'
import '@/styles/prism.css'
import Layout from '@/components/Layout/Layout'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
      <Layout>
        <AnimatePresence initial={false}
          mode="wait"
        >
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Layout>
  )
}
