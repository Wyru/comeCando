import { Box, Heading, Stack } from '@chakra-ui/react';

interface AsideMenuOptionProps {
  title: string,
  description: string
}

interface AsideMenuProps {
  options: ReadonlyArray<AsideMenuOptionProps>,
  spacing: number
}

const AsideMenuOption: React.FC<AsideMenuOptionProps> = ({
  title,
  description,
  ...otherProps
}) => (
  <Box p={5} shadow="md" borderWidth="1px" {...otherProps}>
    <Heading fontSize="xl">{title}</Heading>
  </Box>
);

const AsideMenu: React.FC<AsideMenuProps> = ({
  options,
  spacing,
}) => (
  <Stack spacing={spacing}>
    {options.map((option) => <AsideMenuOption
      key={JSON.stringify(option)}
      title={option.title}
      description={option.description} />)}
  </Stack>
);

export default AsideMenu;
