import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './StyledProfile';
import { Box } from '../Box';

export const Profile = ({
  userName,
  tag,
  location,
  avatar = 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png',
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      mx="auto"
      width="390px"
      bg="white"
      borderRadius="normal"
      boxShadow="standart"
    >
      <Card>
        <Avatar src={avatar} alt="User avatar" className="avatar" width={150} />
        <Name>{`${userName}`}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{`${location}`}</Location>
      </Card>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{`${followers}`}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{`${views}`}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{`${likes}`}</Quantity>
        </Item>
      </List>
    </Box>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
