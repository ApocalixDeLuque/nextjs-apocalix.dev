import React, { useState, useEffect } from 'react';
import { blankalbum } from '../../public/icons';
import { useLanguage } from './utils/LanguageContext';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface LastFmDataProps {
    userName: string;
    apiKey: string;
}

interface LfmData {
    error?: string;
    recenttracks?: {
        track: {
            name: string;
            artist: {
                '#text': string;
            };
        }[];
    };
}

interface TrackInfo {
    track: {
        album: {
            image: {
                '#text': string;
                size: string;
            }[];
        };
    };
}

interface CurrentSongDisplayProps {
    title: string;
    src: string;
    song: string;
    artist: string;
}

export const LastFmData = ({ userName, apiKey }: LastFmDataProps) => {
    var { getText } = useLanguage();
    const [lfmData, updateLfmData] = useState<LfmData>({});
    const [trackInfo, updateTrackInfo] = useState<TrackInfo | null>(null);

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=10&nowplaying=true&format=json`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then((data) => {
                updateLfmData(data);
                const track = data.recenttracks.track?.[0];
                if (track) {
                    fetch(
                        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${encodeURIComponent(
                            track.artist['#text']
                        )}&track=${encodeURIComponent(track.name)}&format=json`
                    )
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                            throw new Error('error');
                        })
                        .then((data) => updateTrackInfo(data))
                        .catch(() => updateTrackInfo(null));
                } else {
                    updateTrackInfo(null);
                }
            })
            .catch(() => {
                updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' });
                updateTrackInfo(null);
            });
    }, [userName, apiKey]);

    const RecentTracks = () => {
        type Track = {
            name: string;
            artist: {
                '#text': string;
            };
            image?: {
                size: string;
                '#text': string;
            }[];
        };

        const { recenttracks: { track = [] } = {} } = lfmData || {};

        return (
            <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">{getText('Recently listened to:', 'Escuchado recientemente:')}</p>
                <div className="flex flex-col gap-2">
                    {track.map((track: Track, index: number) => {
                        const { name: songName = '', artist: { '#text': artistName = '' } = {}, image = {} } = track;
                        const albumCoverUrl = track?.image?.[3]?.['#text'] ?? '../icons/blank-song.webp';
                        if (index > 0)
                            return (
                                <div key={index} className="flex gap-2" onClick={() => console.log(track?.image?.[3]?.['#text'].toString())}>
                                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                                    <img className="flex w-16 h-16 border border-gray rounded-lg bg-light" src={albumCoverUrl} alt="Album cover" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-md max-h-16 overflow-hidden">{songName}</p>
                                        <p className="text-md text-gray">
                                            {getText('by', 'de')}{' '}
                                            <span
                                                onClick={() => window.open(`https://www.last.fm/music/${encodeURIComponent(artistName)}`, 'mywindow')}
                                                className="hover:cursor-pointer hover:text-red transition-all"
                                            >
                                                {artistName}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            );
                    })}
                </div>
            </div>
        );
    };

    const CurrentSongDisplay = ({ title, src, song, artist }: CurrentSongDisplayProps) => {
        return (
            <>
                <div className="flex bg-light rounded-lg border border-lightgray gap-3 w-[500px] p-3 h-fit">
                    {/*TODO: turn this into a next/image (didn't because of width/height problems)*/}
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img className="flex w-48 h-48 border border-gray rounded-lg bg-light" src={src} alt="Album cover" onClick={() => console.log(src)} />
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{title}</p>
                        <p className="text-lg max-h-28 overflow-hidden">{song}</p>
                        <p className="text-md text-gray">
                            {getText('by', 'de')}{' '}
                            <span
                                onClick={() => window.open(`https://www.last.fm/music/${encodeURIComponent(artist)}`, 'mywindow')}
                                className="hover:cursor-pointer hover:text-red transition-all"
                            >
                                {artist}
                            </span>
                        </p>
                    </div>
                </div>
                <RecentTracks />
            </>
        );
    };

    const buildLastFmData = () => {
        const { error } = lfmData;
        const track = lfmData?.recenttracks?.track?.[0];

        if (error) {
            return (
                <CurrentSongDisplay
                    title="-"
                    src="../icons/blank-song.webp"
                    song={getText('No current song playing', 'Ninguna canción en reproducción')}
                    artist="-"
                />
            );
        }

        if (!track) {
            return (
                <CurrentSongDisplay
                    title={getText('Loading...', 'Cargando...')}
                    src="../icons/blank-song.webp"
                    song={getText('Checking Last.fm', 'Comprobando Last.fm')}
                    artist="-"
                />
            );
        }

        const { name: songName = '', artist: { '#text': artistName = '' } = {} } = track;
        const albumCoverUrl = track?.image?.[3]?.['#text'] ?? '../icons/blank-song.webp';

        return (
            <CurrentSongDisplay title={getText('Currently listening to:', 'Actualmente escuchando:')} src={albumCoverUrl} song={songName} artist={artistName} />
        );
    };

    return buildLastFmData();
};
