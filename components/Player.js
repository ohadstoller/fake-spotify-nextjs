import useSpotify from "@/hooks/useSpotify";
import useSongInfo from "@/hooks/useSongInfo";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {currentTrackState, isPlayingState} from "@/atoms/songAtom";
import {useState} from "react";

export function Player() {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

    const songInfo = useSongInfo()


    return (
        <div>

            <div>
                <img
                    className="hidden md:inline h-10 w-10"
                    src={songInfo?.album.images?.[0]?.url}
                    alt=""
                />
            </div>




        </div>
    );
}