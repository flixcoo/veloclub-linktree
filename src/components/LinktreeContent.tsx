import {APPLE_MUSIC_EMBED_URL, SOUNDCLOUD_EMBED_LINK, SPOTIFY_EMBED_URL, TREE_LINKS} from "../data/content.ts";
import type {TreeLink} from "../data/types.ts";

export function LinktreeContent() {
    return (
        <div className={"flex w-full flex-col gap-2 px-4"}>
            {TREE_LINKS.map((link: TreeLink, index: number) => {
                const animationDurationMs = 300 + index * 125;
                return (
                    <a key={link.url} href={link.url}>
                        <div
                            className={"link-intro flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                            style={{animationDuration: `${animationDurationMs}ms`}}
                        >
                            <img className={"size-11 rounded-sm"} src={link.image} alt={link.title}/>
                            {link.title}
                        </div>
                    </a>
                );
            })}

            <div className={"flex gap-3"}>
                <a
                    href={"mailto:booking@veloclubband.de"}
                    className={"link-intro flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                    style={{animationDuration: `${300 + TREE_LINKS.length * 125}ms`}}
                >
                    <div className={"pr-1 text-4xl"}>🎫</div>
                    <span>Booking</span>
                </a>
                <a
                    href={"mailto:hi@veloclubband.de"}
                    className={"link-intro flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                    style={{animationDuration: `${300 + TREE_LINKS.length * 125}ms`}}
                >
                    <div className={"pr-1 text-4xl"}>📧</div>
                    <span>Kontakt</span>
                </a>
            </div>

            <iframe
                src={SPOTIFY_EMBED_URL}
                width="100%"
                height="80"
                allow="encrypted-media"
                className={"link-intro rounded-sm shadow-lg"}
                style={{animationDuration: `${300 + (TREE_LINKS.length + 1) * 125}ms`}}
            />

            <iframe
                src={APPLE_MUSIC_EMBED_URL}
                width="100%"
                height="450px"
                allow="encrypted-media"
                className={"link-intro rounded-sm shadow-lg"}
                style={{animationDuration: `${300 + (TREE_LINKS.length + 2) * 125}ms`}}
            />

            <iframe
                src={SOUNDCLOUD_EMBED_LINK}
                allowFullScreen
                allow="encrypted-media *;"
                className={"link-intro rounded-sm shadow-lg"}
                style={{animationDuration: `${300 + (TREE_LINKS.length + 3) * 125}ms`}}
            />
        </div>
    );
}
