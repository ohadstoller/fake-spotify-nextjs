import {atom} from "recoil";

const defaultPlaylist = {
    collaborative: false,
    description: "",
    external_urls: {spotify: 'https://open.spotify.com/playlist/1ULrWII99j9006T69KjblM'},
    href: "https://api.spotify.com/v1/playlists/1ULrWII99j9006T69KjblM",
    id: "1ULrWII99j9006T69KjblM",
    images: [{
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273052bd0ef86fa73c77263bfbe",
        width: 640,
    }],
    name: "Tim Maia 1970",
    primary_color: null,
    public: true,
    snapshot_id: "MiwzODIyYjBiOWM5ODJlZWFhNzgyYjBkMDQwODViY2NmYzFmMGI4N2Uz",
    tracks: {
        href: 'https://api.spotify.com/v1/playlists/1ULrWII99j9006T69KjblM/tracks',
        total: 12
    },
    type: "playlist",
    uri: "spotify:playlist:1ULrWII99j9006T6"
}

export const playlistState = atom({
    key: 'playlistState',
    default: defaultPlaylist
})

export const playlistIdState = atom({
    key: 'playlistIdState',
    default: '1pkDuWXb05gu6csAXX0Wpf',

})