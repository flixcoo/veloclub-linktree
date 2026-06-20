import {TREE_LINKS, SOCIAL_LINKS} from "./data/content.ts";
import type {TreeLink, SocialLink} from "./data/types.ts";

function App() {
    return (
        <>
            <section className={"flex justify-center items-center py-2"}>
                <div className={"max-w-120 w-full flex flex-col items-center space-y-6"}>

                    {/* Name */}
                    <h1 className={"text-3xl text-center text-black"}>Véloclub</h1>

                    {/* Band Image */}
                    <img src={"images/profile.webp"} className={"w-50 h-50 "} alt={""}/>

                    {/* Socials*/}
                    <span className={"text-sm mb-6"}>Hey, check doch mal unsere Socials aus!</span>
                    <div className={"flex flex-row gap-6"}>
                        {SOCIAL_LINKS.map((social: SocialLink) => {
                                const IconComponent = social.icon;
                                return (
                                    <a href={social.url} title={social.title}>
                                        <IconComponent className={"w-6 h-6 hover:text-gray-700 transition-colors"}/>
                                    </a>
                                )
                            }
                        )}
                    </div>

                    {/* Links */}
                    <div className={"flex flex-col w-full px-4 gap-2"}>
                        {TREE_LINKS.map((link: TreeLink) => {
                                return (
                                    <div
                                        className={"w-full rounded-sm flex flex-row justify-start items-center p-2 gap-3 bg-white hover:shadow-md hover:scale-98 transition-all duration-300 ease-in-out cursor-pointer"}>
                                        <div className={"w-12 h-12 bg-red-500"}></div>
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
