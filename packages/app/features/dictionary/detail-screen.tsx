import { Button, H1, H3, Input, ListItem, Paragraph, ScrollView, Sheet, YStack } from '@my/ui'
import { ChevronDown, ChevronLeft } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { getListOfValidWords } from './utils/getListOfValidWords'


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
        <ListSheet inputText={inputText}/>
      </YStack>
      
    </YStack>
  )
}

type Props = {
  inputText: string
}

function ListSheet({ inputText }: Props) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  const words = getListOfValidWords({ inputText })

  const handleOnPress = () => {
    setOpen((x) => !x)
  }

  // TODO: Replace the word list YStack with some kind of list component

  return (
    <>
      <Button
        icon={open ? ChevronDown : undefined}
        onPress={handleOnPress}
      >{open ? undefined : 'List words'}</Button>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
        disableDrag
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" space>
          {/* <Sheet.Handle /> */}
          <YStack ai="center">
            <H3>String Entered:</H3>
            <Paragraph>{inputText}</Paragraph>
          </YStack>
          <ScrollView>
            <YStack ai="center">
              <H3>Words Found:</H3>
              {words.map(word => (<Paragraph>{word}</Paragraph>))}
            </YStack>
          </ScrollView>
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
            mb={20}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}