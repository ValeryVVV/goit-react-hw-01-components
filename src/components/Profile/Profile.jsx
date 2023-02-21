import PropTypes from 'prop-types';
import { ProfileContainer, Image, UserName, UserInfo, StatsContainer, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export const Profile =({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileContainer>
        <div>
            <Image
            src={avatar}
            alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserInfo>{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
        </div>

        <StatsContainer>
            <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </StatsContainer>
    </ProfileContainer>

    )
}

Profile.prototype = { 
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,

    }),
};