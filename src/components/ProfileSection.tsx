import {SOCIAL_LINKS} from "../data/content.ts";
import type {SocialLink} from "../data/types.ts";

export function ProfileSection() {
    return (
        <>
            {/* Title */}
            <h1
                className={"text-center text-3xl text-black lowercase select-none"}
                style={{fontFamily: "Antique Olive Compact, sans-serif"}}
            >Véloclub</h1>

            {/* Image */}
            <a href={"https://veloclubband.de"} target="_blank" rel="noopener noreferrer">
                <img
                    src={"images/profile.webp"}
                    className={"shadow-uxl size-50 rounded-full transition-all duration-300 ease-in-out hover:scale-98"}
                    alt={"Die Band Véloclub"}
                />
            </a>

            {/* Social Links */}
            <span className={"mb-6 text-sm"}>Hey, check doch mal unsere Socials aus!</span>
            <div className={"flex flex-row gap-6"}>
                {SOCIAL_LINKS.map((social: SocialLink) => {
                    const IconComponent = social.icon;
                    return (
                        <a key={social.url} href={social.url} title={social.title}>
                            <IconComponent className={"size-6 transition-all duration-300 ease-in-out hover:scale-90"}/>
                        </a>
                    );
                })}
            </div>
        </>
    );
}
