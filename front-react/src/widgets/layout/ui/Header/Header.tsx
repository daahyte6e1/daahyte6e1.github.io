import React from 'react';
import {UserInfo} from '@/types/user'

import './Header.css'

const Header = ({ className, userInfo }: {className: string, userInfo: UserInfo}) => {
    return (
        <header className={className}>
            <div className="header-main ">
                <div className='header-level soupofjustice'>
                    LVL 1
                </div>
                <div className='header-user'>
                    {userInfo.first_name}
                    <div className="black-circle" />
                </div>
            </div>
        </header>
    );
};

export {Header};
