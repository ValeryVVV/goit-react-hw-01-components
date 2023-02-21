import PropTypes from 'prop-types';
import styles from './Friends.module.css';



export const FriendListItem =({ avatar, name, isOnline }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
                    <img src={avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            </ul>
        </div>

    )
}

FriendListItem.prototype = { 
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
