import type {SocialLink, TreeLink} from './types.ts';
import {SiApplemusic, SiBandsintown, SiInstagram, SiSpotify, SiTiktok, SiYoutube} from 'react-icons/si';
import {FaGlobe} from 'react-icons/fa';

export const SPOTIFY_EMBED_URL: string = 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?theme=0';

export const APPLE_MUSIC_EMBED_URL: string =
    'https://embed.music.apple.com/de/album/gef%C3%BChle-an-gef%C3%BChle-aus/6770928701';

export const SOUNDCLOUD_EMBED_LINK: string =
    'https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2235664676&show_artwork=true&show_comments=false';

export const TREE_LINKS: TreeLink[] = [
    {
        content: "04.01. Groovestation, Dresden - Handreicher Newcomer",
        title: "Hier kannst du unseren neuen Song 'L'AMOUR' hören",
        url: 'https://landstreicher-konzerte.de/konzerte/handreicher-indie-dd-27',
        image: 'images/links/handreicher.webp',
        expireAt: new Date('2027-01-05T00:00:00'),
    },
    {
        content: "L'AMOUR hier hören",
        title: "Hier kannst du unseren neuen Song 'L'AMOUR' hören",
        url: 'https://push.fm/fl/lamour',
        image: 'images/links/release.webp',
        publishAt: new Date('2026-09-04T00:00:00'),
    },
    {
        content: ' Véloclub - ich brauch dich nicht // MITTINDRIN Live Sessions ',
        title: "Hier geht's zu unserem Song 'ich brauch dich nicht' aus der MITTINDRIN Live Session",
        url: 'https://www.youtube.com/watch?v=v76iIlg8P9o&list=PLBOogAx07jd4Sg6Q1UOiJNgUBABEwynD0&index=2',
        image: 'images/links/mittendrin.webp',
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        title: 'Véloclub auf Instagram',
        url: 'https://instagram.com/veloclubband',
        icon: SiInstagram,
    },
    {
        title: 'Véloclub auf TikTok',
        url: 'https://www.tiktok.com/@veloclubband',
        icon: SiTiktok,
    },
    {
        title: 'Véloclub auf Youtube',
        url: 'https://www.youtube.com/@veloclubband',
        icon: SiYoutube,
    },
    {
        title: 'Véloclub auf Spotify',
        url: 'https://open.spotify.com/artist/2ATI9IAeXPE31HKReWj40a',
        icon: SiSpotify,
    },
    {
        title: 'Véloclub auf Apple Music',
        url: 'https://music.apple.com/de/artist/v%C3%A9loclub/1706116595',
        icon: SiApplemusic,
    },
    {
        title: 'Véloclub auf Bandsintown',
        url: 'https://www.bandsintown.com/a/15536074-veloclub',
        icon: SiBandsintown,
    },
    {
        title: 'Webseite',
        url: 'https://veloclubband.de',
        icon: FaGlobe,
    },
];
