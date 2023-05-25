import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    // graphql setting
    const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
    });

    return (
        <ApolloProvider client={client}>
            <Head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </Head>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
