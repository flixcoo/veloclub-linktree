import {TREE_LINKS, SOCIAL_LINKS} from "./data/content.ts";
import type {TreeLink, SocialLink} from "./data/types.ts";

function App() {
    return (
        <>
            <section className={"flex items-center justify-center py-2"}>
                <div className={"flex w-full max-w-120 flex-col items-center space-y-6"}>

                    {/* Name */}
                    <h1 className={"text-center text-3xl text-black"}>Véloclub</h1>

                    {/* Band Image */}
                    <img src={"images/profile.webp"} className={"size-50 "} alt={""}/>

                    {/* Socials*/}
                    <span className={"mb-6 text-sm"}>Hey, check doch mal unsere Socials aus!</span>
                    <div className={"flex flex-row gap-6"}>
                        {SOCIAL_LINKS.map((social: SocialLink) => {
                                const IconComponent = social.icon;
                                return (
                                    <a href={social.url} title={social.title}>
                                        <IconComponent className={"size-6 transition-colors hover:text-gray-700"}/>
                                    </a>
                                )
                            }
                        )}
                    </div>

                    {/* Links */}
                    <div className={"flex w-full flex-col gap-2 px-4"}>
                        {TREE_LINKS.map((link: TreeLink) => {
                                return (
                                    <div
                                        className={"flex w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-sm bg-white p-2 transition-all duration-300 ease-in-out hover:scale-98 hover:shadow-md"}>
                                        <div className={"size-12 bg-red-500"}></div>
                                        <a href={link.url}>{link.title}</a>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
