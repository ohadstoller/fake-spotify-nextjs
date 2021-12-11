import {getProviders, signIn} from "next-auth/react";

function Login({providers}) {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img
                className="w-52 mb-4"
                src="https://tinyurl.com/2p98n3vn"
                alt="fake spotify"
            />

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                        className="bg-[#35B300] text-black font-bold uppercase p-2 rounded-full"
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}