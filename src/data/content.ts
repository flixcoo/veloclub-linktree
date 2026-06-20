import type {TreeLink, SocialLink} from "./types.ts";
import {FaApple, FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube} from "react-icons/fa";

export const TREE_LINKS : TreeLink[] = [
    {
        title: "Das ist ein Beispiel",
        url: "https://veloclubband.com"
    },
    {
        title: "Das ist ein Beispiel 2",
        url: "https://veloclubband.com"
    },
    {
        title: "Das ist ein Beispiel 3",
        url: "https://veloclubband.com"
    },
]

export const SOCIAL_LINKS : SocialLink[] = [
    {
        title: "Véloclub auf Instagram",
        url: "https://instagram.com/veloclubband",
        icon: FaInstagram
    },
    {
        title: "Véloclub auf Spotify",
        url : "https://spotify.com",
        icon: FaSpotify
    },
    {
        title: "Véloclub auf Apple Music",
        url: "https://music.apple.com",
        icon: FaApple
    },
    {
        title: "Véloclub auf TikTok",
        url: "https://tiktok.com",
        icon: FaTiktok
    },
    {
        title: "Véloclub auf Youtube",
        url: "https://youtube.com",
        icon: FaYoutube
    },
    {
        title: "Véloclub auf Facebook",
        url: "https://facebook.com",
        icon: FaFacebook
    }


];