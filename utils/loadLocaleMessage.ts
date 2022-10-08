export async function loadLocaleMessages(
    locale: 'en-us' | 'rw' | 'sw' | 'fr' | string | undefined) {
    return (
        await import(`../locales/${String(locale ?? 'en-us').toLocaleLowerCase()}.json`)
    ).default;
}