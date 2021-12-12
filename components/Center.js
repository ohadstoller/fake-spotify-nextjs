import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline";
import {shuffle} from "lodash";
const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
];

function Center(props) {
    const {data: session} = useSession()
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, []);


    return (
        <div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div
                    className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
                    // onClick={signOut}
                >
                    <img
                        className="rounded-full w-10 h-10"
                        src={session?.user?.image}
                        alt="user image"
                    />
                    <h2>{session?.user?.name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </header>
            <section
                className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
            >
                <img
                    className="h-44 w-44 shadow-2xl"
                    src=""
                    alt=""
                />
                <div>
                    <p>PLAYLIST</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
                        playlist name
                    </h1>
                </div>
            </section>
            <div id="songs">
                SONGS
            </div>
        </div>
    );
}

export default Center;