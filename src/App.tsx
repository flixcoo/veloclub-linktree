import {
    APPLE_MUSIC_EMBED_URL,
    SOCIAL_LINKS,
    SOUNDCLOUD_EMBED_LINK,
    SPOTIFY_EMBED_URL,
    TREE_LINKS
} from "./data/content.ts";
import type {SocialLink, TreeLink} from "./data/types.ts";

function App() {
    return (
        <>
            <section className={"mt-12 mb-4 flex flex-col items-center  justify-center space-y-8"}>
                {/* Linktree */}
                <div className={"flex w-full max-w-120 flex-col items-center space-y-6"}>

                    {/* Name */}
                    <h1
                        className={"text-center text-3xl text-black lowercase select-none"}
                        style={{fontFamily: "Antique Olive Compact, sans-serif"}}
                    >Véloclub</h1>

                    {/* Band Image */}
                    <a href={"https://veloclubband.de"} target="_blank" rel="noopener noreferrer">
                        <img src={"images/profile.webp"}
                             className={"shadow-uxl size-50 rounded-full transition-all duration-300 ease-in-out hover:scale-98"}
                             alt={"Die Band Véloclub"}/>
                    </a>

                    {/* Socials*/}
                    <span className={"mb-6 text-sm"}>Hey, check doch mal unsere Socials aus!</span>
                    <div className={"flex flex-row gap-6"}>
                        {SOCIAL_LINKS.map((social: SocialLink) => {
                                const IconComponent = social.icon;
                                return (
                                    <a href={social.url} title={social.title}>
                                        <IconComponent
                                            className={"size-6 transition-all duration-300 ease-in-out hover:scale-90"}/>
                                    </a>
                                )
                            }
                        )}
                    </div>

                    {/* Links */}
                    <div className={"flex w-full flex-col gap-2 px-4"}>
                        {TREE_LINKS.map((link: TreeLink, index: number) => {
                                const animationDurationMs = 300 + index * 125;
                                return (
                                    <div
                                        key={link.url}
                                        className={"link-intro flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                                        style={{animationDuration: `${animationDurationMs}ms`}}
                                    >
                                        <img className={"size-11 rounded-sm"} src={link.image} alt={link.title}/>
                                        <a href={link.url}>{link.title}</a>
                                    </div>
                                )
                            }
                        )}

                        <div className={"flex gap-4"}>
                            <div
                                className={"link-intro flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                                style={{animationDuration: `${300 + TREE_LINKS.length * 125}ms`}}
                            >
                                <div className={"pr-1 text-4xl"}>🎫</div>
                                <a href={"mailto:booking@veloclubband.de"}>{"Booking"}</a>
                            </div>
                            <div
                                className={"link-intro flex  w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 text-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95"}
                                style={{animationDuration: `${300 + TREE_LINKS.length * 125}ms`}}
                            >
                                <div className={"pr-1 text-4xl"}>📧</div>
                                <a href={"mailto:hi@veloclubband.de"}>{"Kontakt"}</a>
                            </div>
                        </div>

                        {/* Spotify Embed */}
                        <iframe
                            src={SPOTIFY_EMBED_URL}
                            width="100%"
                            height="80"
                            allow="encrypted-media"
                            className={"link-intro rounded-sm"}
                            style={{animationDuration: `${300 + (TREE_LINKS.length + 1) * 125}ms`}}
                        />

                        {/* Apple Music Embed */}
                        <iframe
                            src={APPLE_MUSIC_EMBED_URL}
                            width="100%"
                            height="450px"
                            allow="encrypted-media"
                            className={"link-intro rounded-sm"}
                            style={{animationDuration: `${300 + (TREE_LINKS.length + 2) * 125}ms`}}
                        />

                        {/* Sundcloud Embed */}
                        <iframe
                            src={SOUNDCLOUD_EMBED_LINK}
                            allowFullScreen
                            allow="encrypted-media *;"
                            className={"link-intro rounded-sm"}
                            style={{animationDuration: `${300 + (TREE_LINKS.length + 3) * 125}ms`}}
                        />
                    </div>
                </div>

                {/* Footer */}
                <footer className={"flex flex-col items-center justify-center gap-5 text-xs text-gray-500"}>

                    <div className={"flex gap-4"}>
                        <a
                            className={"text-black underline transition-all duration-300 hover:text-orange-500"}
                            href={"https://veloclubband.de/impressung"}
                        >Impressum</a>

                        <a
                            className={"text-black underline transition-all duration-300 hover:text-orange-500"}
                            href={"https://veloclubband.de/datenschutz"}
                        >Datenschutz</a>
                    </div>

                    <span>
                    Designed & developed by&nbsp;
                        <a
                            href="https://felixkirchner.de" target="_blank" rel="noopener noreferrer"
                            className="text-black underline transition-colors hover:text-orange-500"
                        >Felix Kirchner</a>.
                </span>


                </footer>
            </section>


        </>
    )
}

export default App
