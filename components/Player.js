import useSpotify from "@/hooks/useSpotify";
import useSongInfo from "@/hooks/useSongInfo";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {currentTrackState, isPlayingState} from "@/atoms/songAtom";
import {useCallback, useEffect, useState} from "react";

import {
    FastForwardIcon,
    PauseIcon,
    PlayIcon,
    ReplyIcon,
    RewindIcon,
    SwitchHorizontalIcon,
    VolumeUpIcon,
} from "@heroicons/react/solid";
import {VolumeUpIcon as VolumeDownIcon} from "@heroicons/react/outline";
import {debounce} from "lodash";


export function Player() {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

    const songInfo = useSongInfo()

    const fetchCurrentSong = async () => {
        if (!songInfo) {
            const currentPlayingTrack = await spotifyApi?.getMyCurrentPlayingTrack()
            console.log("-> Now playing: ", currentPlayingTrack.body?.item);
            setCurrentTrack(currentPlayingTrack.body?.item?.id)

            const currentPlaybackState = await spotifyApi?.getMyCurrentPlaybackState()
            setIsPlaying(currentPlaybackState?.body?.is_playing)

        }
    }

    useEffect(() => {
        if (spotifyApi?.getAccessToken() && !currentTrack) {
            fetchCurrentSong()
            setVolume(50)
        }


    }, [currentTrackState, currentTrack, spotifyApi, session])

    const handlePlayPause = () => {
        spotifyApi?.getMyCurrentPlaybackState().then((data) => {
            if (data.body.is_playing) {
                spotifyApi?.pause();
                setIsPlaying(false);
            } else {
                spotifyApi?.play();
                setIsPlaying(true);
            }
        });
    };

    useEffect(() => {
        if (volume > 0 && volume < 100) {
            debouncedAdjastVolume(volume);
        }
    }, [volume]);

    const debouncedAdjastVolume = useCallback(
        debounce((volume) => {
            spotifyApi?.setVolume(volume).catch((err) => console.log(err));
        }, 500),
        []
    );


    return (
        <div
            className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
            <div className="flex items-center space-x-4">
                <img
                    className="hidden md:inline h-10 w-10"
                    src={songInfo?.album.images?.[0]?.url}
                    alt=""
                />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="button"/>
                <RewindIcon
                    className="button"
                    // onClick={()=>spotifyApi.skipToPrevious()}
                />
                {isPlaying ? (
                    <PauseIcon onClick={handlePlayPause}
                               className="button w-10 h-10"/>
                ) : (
                    <PlayIcon onClick={handlePlayPause}
                              className="button w-10 h-10"/>
                )}
                <FastForwardIcon className="button"/>
                <ReplyIcon className="button"/>
            </div>

            <div
                className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
                <VolumeDownIcon
                    onClick={() => volume > 0 && setVolume(volume - 10)}
                    className="button"
                />
                <input
                    className="w-14 md:w-28"
                    type="range"
                    onChange={(e) => setVolume(Number(e.target.value))}
                    value={volume}
                    min={0}
                    max={100}
                />
                <VolumeUpIcon
                    className="button"
                    onClick={() => volume < 100 && setVolume(volume + 10)}
                />
            </div>
        </div>
    );
}