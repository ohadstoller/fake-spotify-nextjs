import {useRecoilValue} from "recoil";
import {playlistState} from "@/atoms/playlistAtom";
import {Song} from "@/components/Song";


function Songs() {
    const playlist = useRecoilValue(playlistState);
    console.log(playlist)
    return (
        <div className="text-white px-8 flex flex-col space-y-8 pb-28">
            {playlist?.tracks.items.map((track) => (
                <Song track={track}/>
            ))}
        </div>
    );
}

export default Songs;