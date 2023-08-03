import {
  Button,
  H1,
  Paragraph,
  Separator,
  XStack,
  Text,
  YStack,
} from '@my/ui'
import React from 'react'
import { useLink } from 'solito/link'

export const HomeScreen = () => {
  const linkProps = useLink({
    href: '/dictionary/test',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome.</H1>
        <Text ta="center">
          Disclaimer: I used ChatGPT to write the dictionary exercise. 
        </Text>
        <Paragraph>
          ChatGPT is pretty good at solving straightforward technical problems and I wanted to spend more time trying out Tamagui
        </Paragraph>

        <Separator />
       
      </YStack>

      <XStack>
        <Button {...linkProps}>Go to assignment</Button>
        
      </XStack>
    </YStack>
  )
}

