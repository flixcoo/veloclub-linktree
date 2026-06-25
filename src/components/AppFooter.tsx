export function AppFooter() {
    return (
        <footer className={"flex flex-col items-center justify-center gap-5 text-xs text-gray-500"}>
            <div className={"flex gap-4"}>
                <a
                    className={"text-black underline transition-all duration-300 hover:text-orange-500"}
                    href={"https://veloclubband.de/impressung"}
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

            <span>
                Designed & developed by&nbsp;
                <a
                    href="https://felixkirchner.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline transition-colors hover:text-orange-500"
                >
                    Felix Kirchner
                </a>
                .
            </span>
        </footer>
    );
}
