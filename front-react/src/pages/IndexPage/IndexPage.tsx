import type { FC } from 'react'
import { Loader } from '@/components/Loader.tsx'
import { useQuery } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import HomePage from '@/components/HomePage/HomePage'
import {UserInfo} from '@/types/user'

WebApp.ready()

const API_URL = 'https://7992-81-23-183-157.ngrok-free.app'


const getUserInfo = (initData: string) => {
    return useQuery<UserInfo, Error>({
        retry: 1,
        queryKey: ['getUserInfo', initData],
        queryFn: async (): Promise<UserInfo> => {
            const response = await fetch(`${API_URL}/api/get-user-info`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tgData: initData }),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
}


export const IndexPage: FC = () => {
    if (!window.Telegram || !window.Telegram.WebApp) return <Loader />

    const initData = window.Telegram.WebApp.initData
    const { isLoading, error, data } = getUserInfo(initData)

    if (isLoading) return <Loader />
    if (error) return <div>Error loading data</div>

    if (data && data.telegram_id) return <HomePage userInfo={data} />

    return <HomePage userInfo={data} />
}
