export function Footer() {
    return (
        <footer className={"flex flex-col items-center justify-center gap-5 text-xs text-gray-500"}>
            <div className="flex flex-col items-center gap-1 text-xs text-gray-500">
                {/* Design flag*/}
                <span>
                        Designed & developed by&nbsp;
                    <a
                        href="https://felixkirchner.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline! transition-colors hover:text-orange-500"
                    >
                            Felix Kirchner
                        </a>
                        .
                    </span>

                {/* Legal & Privacy */}
                <div className={'flex items-center gap-4'}>
                    <a
                        className={"text-black underline transition-all duration-300 hover:text-orange-500"}
                        href={"https://veloclubband.de/impressum"}
                    >
                        Impressum
                    </a>
                    <a
                        className={"text-black underline transition-all duration-300 hover:text-orange-500"}
                        href={"https://veloclubband.de/datenschutz"}
                    >
                        Datenschutz
                    </a>
                </div>

                {/* Copyright */}
                <span className={'mt-2'}>&copy; 2023 - {new Date().getFullYear()} Véloclub</span>
            </div>
        </footer>
    );
}
