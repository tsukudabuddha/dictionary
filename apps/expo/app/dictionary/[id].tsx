import { DictionaryDetailScreen } from 'app/features/dictionary/detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Dictionary Take Home',
        }}
      />
      <DictionaryDetailScreen />
    </>
  )
}
