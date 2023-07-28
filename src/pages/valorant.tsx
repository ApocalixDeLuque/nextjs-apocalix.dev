import CustomTooltip from '@/components/utils/CustomTooltip';
import { useLanguage } from '@/components/utils/LanguageContext';
import { useState } from 'react';

const Valorant = () => {
    var { getText } = useLanguage();

    function CopyClipboard() {
        var { getText } = useLanguage();
        const [copySuccess, setCopySuccess] = useState('');

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText('sushiτгаsh ヰ#ap0');
                setCopySuccess(
                    `sushiτгаsh ヰ#ap0 - ${getText('copied!', 'copiado!')}`
                );
            } catch (err) {
                setCopySuccess(
                    `sushiτгаsh ヰ#ap0 - ${getText(
                        'there was a problem',
                        'hubo un problema'
                    )} :(`
                );
            }

            setTimeout(() => setCopySuccess(''), 1000);
        };

        return (
            <CustomTooltip
                followCursor
                title={
                    <p>
                        {getText('copy to clipboard', 'copiar al portapapeles')}
                    </p>
                }
            >
                <p
                    className="text-dark hover:text-red w-fit transition-all duration-[250ms] hover:cursor-pointer select-none text-start"
                    onClick={copyToClipboard}
                >
                    {copySuccess ? (
                        copySuccess
                    ) : (
                        <>
                            sushiτгаsh ヰ<span className="text-gray">#ap0</span>
                        </>
                    )}
                </p>
            </CustomTooltip>
        );
    }

    return (
        <section className="flex flex-col justify-start items-center h-screen py-4 px-4 xs:px-16 xl:px-32 3xl:py-8 bg-[url('/hero-pattern.png')] bg-center ">
            <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl py-16 min-900:py-32">
                valorant 🌙
            </h2>
            {/* TODO: make it actually work */}
            <div>
                <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl pb-24">
                    {getText('coming soon', 'próximamente')}...
                </p>
            </div>
            <div className="w-full flex flex-col gap-3 max-w-2xl border rounded-[16px] border-lightgray p-4 bg-light">
                <p className="text-red">Riot ID: </p>
                <CopyClipboard />
            </div>
        </section>
    );
};

export default Valorant;
