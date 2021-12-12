import SideBar from "@/components/SideBar";
import Center from "@/components/Center";

export default function Home() {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <main className="flex">
                <SideBar/>
                <Center/>
                {/*Center .... should have overflow scroll*/ }
            </main>
            <div>
                {/*Player*/}
            </div>
        </div>
    )
}
