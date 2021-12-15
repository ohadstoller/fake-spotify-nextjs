import useSpotify from "@/hooks/useSpotify";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {currentTrackState, isPlayingState} from "@/atoms/songAtom";
import {useState} from "react";

export function Player() {
    const spotifyApi = useSpotify()
    const { data: session, status} = useSession()
    const [ currentTrack, setCurrentTrack] = useRecoilState(currentTrackState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

    return (
        <div>
            {/*left*/}
            <div><img src="" alt=""/></div>
        </div>
    );
}