import SideBar from "../components/SideBar";

export default function Home() {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <main>
                <SideBar/>
                {/*Center .... should have overflow scroll*/ }
            </main>
            <div>
                {/*Player*/}
            </div>
        </div>
    )
}
