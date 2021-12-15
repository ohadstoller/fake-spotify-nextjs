import SideBar from "@/components/SideBar";
import Center from "@/components/Center";
import {getSession} from "next-auth/react";
import {Player} from "@/components/Player";


export default function Home() {

    return (
        <div className="bg-black h-screen overflow-hidden">
            <main className="flex">
                <SideBar/>
                <Center/>
                {/*Center .... should have overflow scroll*/ }
            </main>
            <div>
                <Player/>
            </div>
        </div>
    )
}

async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}

