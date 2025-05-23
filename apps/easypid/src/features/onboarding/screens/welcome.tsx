import { Blob, Button, FlexPage, Heading, Image, Paragraph, Stack, XStack, YStack } from '@package/ui'

import { useAppIcon } from '@easypid/config/copy'

export interface OnboardingWelcomeProps {
  goToNextStep: () => void
}

export default function OnboardingWelcome({ goToNextStep }: OnboardingWelcomeProps) {
  const appIcon = useAppIcon()
  return (
    <YStack fg={1} pos="relative">
      <YStack pos="absolute" h="50%" w="100%">
        <Blob />
        <YStack
          transform={[{ translateX: -48 }]} // Half of the image width (96/2)
          pos="absolute"
          top="40%"
          left="50%"
          ai="center"
          jc="center"
        >
          <Stack
            br="$7"
            ov="hidden"
            bg="$primary-500"
            shadowOffset={{ width: 5, height: 5 }}
            shadowColor="$grey-400"
            shadowOpacity={0.5}
            shadowRadius={24}
          >
            <Image backgroundColor="$primary-500" height={96} width={96} src={appIcon} />
          </Stack>
        </YStack>
      </YStack>
      <FlexPage safeArea="y" fg={1} jc="space-between" backgroundColor="$transparent">
        <Stack h="40%" />
        <YStack gap="$4" ai="center">
          <Heading fontSize={32}>Paradym Wallet</Heading>
          <Paragraph px="$2" ta="center">
            This is your digital wallet. With it, you can store and share information about yourself.
          </Paragraph>
        </YStack>
        <XStack gap="$2">
          <Button.Solid flexGrow={1} onPress={goToNextStep}>
            Get Started
          </Button.Solid>
        </XStack>
      </FlexPage>
    </YStack>
  )
}
