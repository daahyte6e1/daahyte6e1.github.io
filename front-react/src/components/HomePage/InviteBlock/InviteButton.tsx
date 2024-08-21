import React from 'react';
import WebApp from '@twa-dev/sdk'


import {UserInfo} from '@/types/user'

import './InviteButton.css';

const InviteButton: React.FC = ({userInfo}: { userInfo: UserInfo }) => {
    const handleClick = () => {
        WebApp.openTelegramLink(
            `https://t.me/share/url?url=https://t.me/test_airdrop_my_bot?start=r${userInfo.telegram_id}`
        );

    };

    return (
        <div className="invite-block align-center cl-brown">
            <div
                className="button pointer"
                onClick={handleClick}
            >
                <div className="soupofjustice text">
                    Invite a friend
                </div>
                <img src="assets/invite-button.png" alt="invite" className="claim" />
            </div>
        </div>
    );
}

export default InviteButton;
