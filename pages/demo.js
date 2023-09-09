
// This is the demo page for all pre-made components
import React from 'react'
import InstaGallery from '@/components/ImageGallery/InstaGallery'
import { MdWidthNormal } from 'react-icons/md';
import { ThemeUIProvider } from 'theme-ui';
import { Box, Label, Input, Button } from 'theme-ui'
import { motion } from 'framer-motion';

export const theme = {
  fonts: {
    body: 'Menlo, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

export default function Home({ galleryData }) {
    return (
      <ThemeUIProvider theme={theme}>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .6 }}
      >
        <h1
          sx={{
            color: 'primary',
            fontFamily: 'monospace',
          }}
        >
          Hello
        </h1>
        <InstaGallery galleryData={galleryData}/>
      </motion.div>
      </ThemeUIProvider>
    )
  }


export async function getStaticProps() {
  const cloudinary = require('cloudinary').v2;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  const result = await cloudinary.api.resources();
  const { resources } = result;
  // console.log(resources);
  const galleryData = resources.map(resource => {
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.url,
      date: resource.created_at,
      width: resource.width,
      height: resource.height
    }
  })
  // console.log("---------------------------")
  // console.log(galleryData);
  return {
      props: {
        galleryData
      }
  }
}