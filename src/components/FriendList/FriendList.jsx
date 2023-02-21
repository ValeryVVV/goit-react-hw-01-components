import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';


export const FriendList =({ friends }) => {
    return (
        <ul>
        {friends.map(friend => {
            return  <FriendListItem 
                        key={friend.id}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                        name={friend.name}
                    />
             
            })}
        </ul>

    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };
  