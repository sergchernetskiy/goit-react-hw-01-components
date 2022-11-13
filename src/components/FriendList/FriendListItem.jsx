import PropTypes from 'prop-types';
import { Status, NameFriend, Avatar } from './StyledFriendListItem';
import { Item } from './StyledFriendListItem';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="75" />
      <NameFriend>{name}</NameFriend>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
