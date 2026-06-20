import type {SocialLink, TreeLink} from "./types.ts";
import {FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaYoutube} from "react-icons/fa";

export const SPOTIFY_EMBED_URL: string = 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?theme=0';

export const APPLE_MUSIC_EMBED_URL: string = 'https://embed.music.apple.com/de/album/gef%C3%BChle-an-gef%C3%BChle-aus/6770928701';

export const TREE_LINKS: TreeLink[] = [
    {
        title: "gefühle an, gefühle aus out now!",
        url: "https://push.fm/fl/p4vwfpwf",
        image: "images/release.webp",
    },
    {
        title: " Véloclub - renn los // MITTINDRIN Live Sessions",
        url: "https://www.youtube.com/watch?v=mW8woxPvl-I&list=PLBOogAx07jd4Sg6Q1UOiJNgUBABEwynD0",
        image: "images/mittendrin.webp",
    },
    {
        title: "29.08. - Organic Beats Festival, Braunschweig",
        url: "https://organicbeats.org/",
        image: "images/organic-beats.webp",
    },
    {
        title: "18.09. - Umbaubar, Oldenburg",
        url: "https://rausgegangen.de/events/konzert-velo-club-0/",
        image: "images/umbaubar.webp",
    },
    {
        title: "Booking",
        url: "mailto:booking@veloclubband.de",
        image: "images/booking.webp",
    },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        title: "Véloclub auf Instagram",
        url: "https://instagram.com/veloclubband",
        icon: FaInstagram
    },
    {
        title: "Véloclub auf Spotify",
        url: "https://open.spotify.com/artist/2ATI9IAeXPE31HKReWj40a",
        icon: FaSpotify
    },
    {
        title: "Véloclub auf Apple Music",
        url: "https://music.apple.com/de/artist/v%C3%A9loclub/1706116595",
        icon: FaApple
    },
    {
        title: "Véloclub auf TikTok",
        url: "https://www.tiktok.com/@veloclubband",
        icon: FaTiktok
    },
    {
        title: "Véloclub auf Youtube",
        url: "https://www.youtube.com/@veloclubband",
        icon: FaYoutube
    },
    {
        title: "Véloclub auf Facebook",
        url: "https://soundcloud.com/veloclubband",
        icon: FaSoundcloud
    }


];