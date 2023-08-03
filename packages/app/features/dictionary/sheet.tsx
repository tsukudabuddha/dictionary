import { useState } from "react"
import { getListOfValidWords } from "./utils/getListOfValidWords"
import { Button, H3, Paragraph, ScrollView, Sheet, YStack } from "@my/ui"
import { ChevronDown } from "@tamagui/lucide-icons"

type Props = {
  inputText: string
}

export const WordListSheet = ({ inputText }: Props) => {
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