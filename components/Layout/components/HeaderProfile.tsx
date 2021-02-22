import {
  Avatar, Box, CircularProgress, Flex, Tag, TagLabel, TagLeftIcon, Text,
} from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';

interface HeaderProfileProps {
  name?: string,
  imageURI?: string,
  levelXp?: number
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  name,
  imageURI,
  levelXp,
}) => (
  <Box >
    <Flex flexDirection="row">
      <div style={{
        position: 'relative',
        height: 140,
      }}>
        <CircularProgress
          value={levelXp}
          size="130px"
          thickness="4px"
          color="cyan"
          style={{
            position: 'relative',
            zIndex: 2,
          }} />
        <Avatar size="xl" name={name} src={imageURI} style={{
          position: 'absolute',
          zIndex: 1,
          left: 13,
          top: 10,
        }} />
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          zIndex: 3,
        }} />
      </div>
      <Flex flexDirection="column" justifyContent="center" height="130px" style={{
        marginLeft: 10,
      }}>
        <Text fontSize="lg">
          {name}
        </Text>
        <Text fontSize="sm">
          LVL 1
        </Text>
        <Tag size="md" key="md" variant="subtle" colorScheme="cyan" width="min-content">
          <TagLeftIcon boxSize="12px" as={FaTrophy} />
          <TagLabel>0</TagLabel>
        </Tag>
      </Flex>
    </Flex>
  </Box>
);

export default HeaderProfile;
