import Image from 'next/image';
import { useLanguage } from './utils/LanguageContext';
import { linkedin, mail } from '../../public/icons';
import Link from 'next/link';
import CustomTooltip from './utils/CustomTooltip';
import axios from 'axios';
import { AlertColor } from '@mui/material';

import { useState } from 'react';
import { Alert } from '@mui/material';

const initValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

function CopyClipboard() {
    var { getText } = useLanguage();
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('me@apocalix.dev');
            setCopySuccess(
                `me@apocalix.dev - ${getText('copied!', 'copiado!')}`
            );
        } catch (err) {
            setCopySuccess(
                `me@apocalix.dev - ${getText(
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
                <p>{getText('copy to clipboard', 'copiar al portapapeles')}</p>
            }
        >
            <p
                className="text-lg md:text-[28px] xl:text-[32px] 2xl:text-[40px] 3xl:text-5xl hover:text-red transition-all duration-[250ms] hover:cursor-pointer select-none text-start"
                onClick={copyToClipboard}
            >
                {copySuccess ? copySuccess : 'me@apocalix.dev'}
            </p>
        </CustomTooltip>
    );
}

const Contact = () => {
    var { getText } = useLanguage();

    const [formState, setFormState] = useState(initValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formSeverity, setFormSeverity] = useState<AlertColor | undefined>(
        undefined
    );

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        let result;
        try {
            result = await axios.post('/api/mail', formState);
            setFormMessage(
                getText(
                    'email sent correctly!',
                    '¡correo enviado correctamente!'
                )
            );
            setFormSeverity('success');
        } catch (error) {
            setFormMessage(
                getText(
                    'there was a problem, try again later',
                    'hubo un problema, intenta más tarde'
                )
            );
            setFormSeverity('error');
        } finally {
            setIsSubmitting(false);
            setHasSubmitted(result?.status === 200);
            if (result?.status === 200) {
                setFormState(initValues);
                setIsSubmitting(false);
            }
            setTimeout(() => {
                setFormMessage('');
                setFormSeverity(undefined);
            }, 3000);
        }
    };

    return (
        <section
            id={getText('contact', 'contacto')}
            className="w-full flex items-center justify-center pb-8 md:pb-16 xl:pb-32 pt-24 md:pt-32 px-8 sm:p-16 xl:pt-80 xl:px-32"
        >
            <div className="w-full h-fit text-center sm:text-start flex flex-col items-center gap-8 sm:gap-16 max-w-[1800px]">
                <h2 className="w-full font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                    {getText('contact', 'contacto')} 📩
                </h2>
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex justify-between items-center pb-5">
                        <CopyClipboard />
                        <div className="flex items-center gap-1 xxs:gap-4">
                            <CustomTooltip
                                followCursor
                                title={
                                    <p>
                                        {getText(
                                            "let's connect on linkedin!",
                                            '¡conectémos en linkedin!'
                                        )}
                                    </p>
                                }
                            >
                                <Link
                                    scroll={false}
                                    href="https://www.linkedin.com/in/apocalix/"
                                >
                                    <Image
                                        className="h-6 xxs:h-8 lg:h-10 w-auto hover:scale-110 transition-all"
                                        src={linkedin}
                                        alt="linkedin"
                                    />
                                </Link>
                            </CustomTooltip>
                            <CustomTooltip
                                followCursor
                                title={
                                    <p>
                                        {getText(
                                            'send me an email!',
                                            '¡mándame un correo!'
                                        )}
                                    </p>
                                }
                            >
                                <Link
                                    scroll={false}
                                    href="mailto:contact@apocalix.dev"
                                >
                                    <Image
                                        className="h-6 xxs:h-9 lg:h-12 w-auto hover:scale-110 transition-all"
                                        src={mail}
                                        alt="mail"
                                    />
                                </Link>
                            </CustomTooltip>
                        </div>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        className="w-full flex flex-col gap-3 select-none"
                    >
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="w-full flex flex-col lg:max-w-[50%] gap-3">
                                <input
                                    className="bg-lightgray rounded-[16px] text-dark p-3"
                                    placeholder="name"
                                    name="name"
                                    onChange={onInputChange}
                                    value={formState.name}
                                    required
                                />
                                <input
                                    className="bg-lightgray rounded-[16px] text-dark p-3"
                                    placeholder="email"
                                    name="email"
                                    type="email"
                                    onChange={onInputChange}
                                    value={formState.email}
                                    required
                                />
                                <input
                                    className="bg-lightgray rounded-[16px] text-dark p-3"
                                    placeholder="subject"
                                    name="subject"
                                    onChange={onInputChange}
                                    value={formState.subject}
                                    required
                                />
                            </div>
                            <textarea
                                className="bg-lightgray rounded-[16px] text-dark p-3 w-full justify-start min-h-fit"
                                rows={5}
                                placeholder="message"
                                name="message"
                                onChange={onInputChange}
                                value={formState.message}
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                {formMessage && (
                                    <Alert severity={formSeverity}>
                                        {formMessage}
                                    </Alert>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="flex self-end py-3 px-6 bg-red rounded-[16px] gap-2 hover:bg-green transition-all duration-[250ms] group hover:cursor-pointer"
                                disabled={isSubmitting}
                            >
                                <p className="text-light group-hover:text-light transition-all duration-[250ms]">
                                    {isSubmitting
                                        ? 'Sending...'
                                        : hasSubmitted
                                        ? 'Sent'
                                        : 'Send'}
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
