import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import { loadLocaleMessages } from '../loadLocaleMessage';

type WithMessages<P> = P & {
    messages?:any;
};

export function withLocaleMessages<P>(fn: GetStaticProps) {
    return async (context: GetStaticPropsContext) => {
        const {locale} = context;
        const messages = await loadLocaleMessages(locale ?? 'en-US');
        const response: any = await fn(context);
        return {
            ...response,
            props: {
                ...(response?.prop ?? {}),
                messages,
            },
        } as GetStaticPropsResult<WithMessages<P>>;
    };
}