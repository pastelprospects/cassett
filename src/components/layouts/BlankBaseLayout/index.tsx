import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <Head>
                {/* <!-- Start cookieyes banner --> */}
                <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/def65fd35e3d2a37aaea8c55/script.js"></script>
                {/* <!-- End cookieyes banner --> */}
                <title>{page.title}</title>
                <meta name="description" content="Components Library" />
                {site.favicon && <link rel="icon" href={site.favicon} />
            </Head>
            {props.children}
        </div>
    );
}
