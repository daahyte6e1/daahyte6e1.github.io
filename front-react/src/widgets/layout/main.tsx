import { ReactNode } from 'react'

import { Header } from './ui/Header'
import { Footer } from './ui/Footer'

import {UserInfo} from '@/types/user'
import './main.css'
type Props = {
    children?: ReactNode,
    userInfo?: UserInfo
}

export function MainLayout({ children, userInfo }: Props) {
    return (
        <div className="app">
            <Header className="header" userInfo={userInfo} />
            <main className="container">
                {children}
            </main>
            <Footer className="footer" />
        </div>
    )
}
