import { Button, Flex, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeToggle = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const toggleTheme = () => {
   if (colorScheme === 'light') {
    setColorScheme('dark');
   } else {
    setColorScheme('light');
   }
  }

  return (
    <Flex justify="flex-end">
      <Button mr={20} mt={20} onClick={toggleTheme}>Theme</Button>
    </Flex>
  );
}
