import React, { useState, useEffect } from 'react';
import { blankalbum } from '../../public/icons';
import { useLanguage } from './utils/LanguageContext';
import Link from 'next/link';

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

export const LastFmData = ({ userName, apiKey }: LastFmDataProps) => {
    var { getText } = useLanguage();
    const [lfmData, updateLfmData] = useState<LfmData>({});
    const [trackInfo, updateTrackInfo] = useState<TrackInfo | null>(null);

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
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

    const buildLastFmData = () => {
        const { error } = lfmData;
        const track = lfmData?.recenttracks?.track?.[0];

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p className="text-center">{getText('Loading...', 'Cargando...')}</p>;
        }

        const { name: songName = '', artist: { '#text': artistName = '' } = {} } = track;
        const albumCoverUrl = trackInfo?.track?.album?.image?.find((image) => image.size === 'extralarge')?.['#text'];

        return (
            <div className="flex gap-3 w-[500px]">
                <img
                    className="flex w-48 h-48 border border-gray rounded-lg bg-light"
                    src={albumCoverUrl || '../icons/blank-song.webp'}
                    alt="Album cover"
                    onClick={() => console.log(albumCoverUrl)}
                />
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">{getText('Currently listening to:', 'Actualmente escuchando:')}</p>
                    <p className="text-lg max-h-28 overflow-hidden">{songName}</p>
                    <p className="text-md text-gray">
                        by{' '}
                        <Link
                            href={`https://www.last.fm/music/${encodeURIComponent(artistName)}`}
                            className="hover:cursor-pointer hover:text-red transition-all"
                        >
                            {artistName}
                        </Link>
                    </p>
                </div>
            </div>
        );
    };

    return buildLastFmData();
};
