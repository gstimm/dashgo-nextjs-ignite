import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Gabriel Timm</Text>
        <Text color='gray.300' fontSize='small'>
          contato.gabrieltimm@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Gabriel Timm'
        src='https://github.com/gstimm.png'
      />
    </Flex>
  );
}
