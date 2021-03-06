import {useEffect, useState} from 'react';
import {
    HeartIcon,
    HomeIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon
} from "@heroicons/react/outline";
import {signOut, useSession} from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import {useRecoilState} from "recoil";
import {playlistIdState} from "@/atoms/playlistAtom";

const SideBar = () => {
    const spotifyApi = useSpotify()
    const {data: session, status} = useSession()
    const [playlists, setPlaylists] = useState([])
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

    console.log(playlistId)

    useEffect(
        async () => {
            if (spotifyApi.getAccessToken()) {
                const data = await spotifyApi.getUserPlaylists()
                setPlaylists(data.body.items)
                console.log('playlist: ', playlists)


            }
        },
        [session, spotifyApi]
    )
    console.log('session/: ', session);
    return (
        <div
            className="text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rm] lg:max-w-[15rm]
            hidden md:flex
            border-r border-gray-900 overflow-y-scroll h-screen">
            <div className="space-y-4">
                <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 hover:text-white">
                    <p>Sign out</p>
                </button>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Home</p>
                </button>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="h-5 w-5"/>
                    <p>Search</p>
                </button>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h-5 w-5"/>
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>Create playlist</p>
                </button>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-5 w-5"/>
                    <p>Liked songs</p>
                </button>
                <button
                    className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h-5 w-5"/>
                    <p>Your episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>
                {/*Plalists*/}


                {playlists.map((playlist) => (
                    <p key={playlist.id}
                       onClick={() => setPlaylistId(playlist.id)}
                       className="cursor-pointer hover:text-white">{playlist.name}
                    </p>

                ))}
            </div>
        </div>

    );
};

export default SideBar;