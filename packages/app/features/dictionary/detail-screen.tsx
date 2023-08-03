import { H3, Input, Paragraph, YStack } from '@my/ui'
import React, { useState } from 'react'
import { WordListSheet } from './sheet'
import { DICTIONARY } from './constants/dictionary'


export function DictionaryDetailScreen() {
  // TODO: Use react-hook-form to reduce unnecessary re-renders
  const [inputText, setInputText] = useState('')

  const handleOnTextChange = (text: string) => {
    setInputText(text)
  }

  return (
    <YStack f={1} jc="center" ai="center" space>
      <YStack>
        <H3>Please enter a string</H3>
        <Paragraph>E.g. "good" or "Goooglasdfkl"</Paragraph>
      </YStack>
      <YStack ai="center" space="$20">
        <Input onChangeText={handleOnTextChange} size="$4" borderWidth={2} width={200}/>
        <WordListSheet inputText={inputText}/>
      </YStack>
      
    </YStack>
  )
}