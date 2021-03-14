import React from 'react';
import App from 'next/app';
import styled from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';

import Theme, { GlobalStyle } from '../Theme';

const Container = styled.section`
    background: black;
    width: 100%;
    min-height: 100vh;
`;

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        if (ctx.req && ctx.req.session.passport) {
            pageProps.user = ctx.req.session.passport.user;
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);
        this.state = {
            user: props.pageProps.user,
        };
    }

    render() {
        const { Component, pageProps } = this.props;

        const props = {
            ...pageProps,
            user: this.state.user,
        };

        return (
            <>
                <Head>
                    {/* add meta stuff here */}
                    <title>Movie Search</title>
                </Head>
                <Theme>
                    <GlobalStyle />
                    <Navbar user={this.state.user} />
                    <Container>
                        <Component {...props} />
                    </Container>
                </Theme>
            </>
        );
    }
}

export default MyApp;
