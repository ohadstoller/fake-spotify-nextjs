import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import useSpotify from "./useSpotify";
import {currentTrackState} from "@/atoms/songAtom";

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrack, setCurrentTrack] =
        useRecoilState(currentTrackState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentTrack) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentTrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        },
                    }
                ).then((res) => res.json());

                setSongInfo(trackInfo);
            }
        };

        fetchSongInfo();
    }, [currentTrack, spotifyApi]);

    return songInfo;
}

export default useSongInfo;