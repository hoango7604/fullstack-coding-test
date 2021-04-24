import React, { useRef } from 'react'
import Head from 'next/head'
import { Box, Flex, Input } from '@chakra-ui/react'

import DynamicText from 'components/DynamicText'
import styles from 'styles/Home.module.css'

const Home = () => {
  const dynamicTextRef = useRef<DynamicText>(undefined)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    console.log(newValue)
    dynamicTextRef.current.changeValue(newValue)
  }

  return (
    <Box className={styles.container}>
      <Head>
        <title>Coding Test</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex className={styles.main}>
        <DynamicText ref={dynamicTextRef} />

        <Input onChange={onChange} />
      </Flex>
    </Box>
  )
}

export default Home
