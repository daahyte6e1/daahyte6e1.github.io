import withMainLayout from '@/hoc/withMainLayout'

import './HomePage.css'
import React from 'react';
import FrensList from '@/components/Frens/FrensList';
import InviteButton from '@/components/HomePage/InviteBlock/InviteButton'

interface UserInfo {
    telegram_id: string;
    first_name: string,
    isEmpty: boolean,
    points: number,
    username: string,
    claiming_speed: number
}

export const HomePageComponent: FC = ({userInfo}: { userInfo: UserInfo }) => {
    return (
    <div className='frens'>
        <div className='frens-info frens-border flex align-center'>
            <div className='soupofjustice flex align-center'>
                <img src="assets/friends.png" alt="friends" className="image" />
                <div className='text-block'>YOUR FRIENDS: {userInfo.friends_count || 0}</div>
            </div>
            <div className='soupofjustice align-center flex'>
                <img src="assets/crumble.png" alt="crumble" className="image" />
                Referral reward: {userInfo.friends_reward || 0}
            </div>
            <div className='description'>
                Every time your friend claims CRUMB you get 20% cashback
            </div>
        </div>
        <FrensList />
        <InviteButton userInfo={userInfo} />
    </div>)
}

const HomePageComponentWithLayout = withMainLayout(HomePageComponent);

export default HomePageComponentWithLayout
