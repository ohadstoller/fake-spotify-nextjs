import React from 'react';
import {HomeIcon, PlusCircleIcon, LibraryIcon, SearchIcon, HeartIcon, RssIcon} from "@heroicons/react/outline";
import {signOut, useSession} from "next-auth/react";

const SideBar = () => {
    const {data: session, status} = useSession()
    console.log('session/: ',session);
    return (
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen">
            <div className="space-y-4">
                <button
                onClick={()=> signOut()}
                    className="flex items-center space-x-2 hover:text-white">
                    <p>Sign out</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <SearchIcon className="h-5 w-5"/>
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h-5 w-5"/>
                    <p>Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>Create playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-5 w-5"/>
                    <p>Liked songs</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <RssIcon className="h-5 w-5"/>
                    <p>Your episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900"/>
                {/*Plalists*/}
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
                <p className="cursor-pointer hover:text-white">Plalist name ....</p>
            </div>
        </div>

    );
};

export default SideBar;