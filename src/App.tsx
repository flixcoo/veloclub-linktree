import {Footer} from "./components/Footer.tsx";
import {LinktreeContent} from "./components/LinktreeContent.tsx";
import {ProfileSection} from "./components/ProfileSection.tsx";

function App() {
    return (
        <section className={"mt-12 mb-4 flex flex-col items-center justify-center space-y-8"}>
            <div className={"flex w-full max-w-120 flex-col items-center space-y-6"}>
                <ProfileSection/>
                <LinktreeContent/>
            </div>
            <Footer/>
        </section>
    );
}

export default App;
