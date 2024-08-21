import React from 'react';
import { MainLayout } from '@/widgets/layout/main';

const withMainLayout = (PageComponent: React.ComponentType) => {
    return function WrappedComponent(pageProps) {
        return (
            <MainLayout {...pageProps}>
                <PageComponent {...pageProps} />
            </MainLayout>
        );
    };
};

export default withMainLayout;
