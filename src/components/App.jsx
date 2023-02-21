import { Profile } from './Profile/Profile';
import user from '../configs/user';

import { Statistics } from './Statistics/Statistics';
import data from '../configs/data'

import { FriendList } from './FriendList/FriendList';
import friends from '../configs/friends';

import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout'; 

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../configs/transactions';


export const App = () => {
  return (
    <Layout>
           <GlobalStyle />
            <Profile
                avatar={user.avatar}
                username={user.username}
                tag={user.tag}
                location={user.location}
                stats={user.stats} 
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
    </Layout>
  );
};
