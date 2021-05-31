import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import React, { useMemo } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Header } from '../components';

const AppRoot = ({ Component, pageProps, router }: AppProps) => {
    let isFooter = useMemo(() => {
        let excluded = ['/', '/posts/[postId]'];
        let currentRouter = router.route;
        return excluded.indexOf(currentRouter) !== -1;
    }, [router]);

    let isHeader = useMemo(() => {
        let excluded = ['/register', '/login'];
        let currentRouter = router.route;
        return excluded.indexOf(currentRouter) !== -1;
    }, [router]);

    return (
        <div className="root">
            <Head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, minimum-scale=1, maximum-scale=1"
                />
                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="Cộng đồng chế ảnh ZendVN" />
                <meta name="author" content="etheme.com" />
                <title>Cộng đồng chế ảnh ZendVN</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
                    rel="stylesheet"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="/fonts/font-awesome/css/font-awesome.css"
                />
                <link rel="stylesheet" href="/fonts/emotion/style.css" />
                <link rel="stylesheet" href="/css/style.css" />
                {/* JAVA SCRIPT */}
                {/* require */}
                {/*  */}
                {/* HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries */}
                {/*[if lt IE 9]>
                <![endif]*/}
            </Head>

            {!isHeader && <Header />}
            <main>
                <Component {...pageProps} />
            </main>
            {!isFooter && <Footer />}
        </div>
    );
};

AppRoot.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    return {
        pageProps: {
            ...appProps.pageProps,
        },
    };
};

export default AppRoot;
