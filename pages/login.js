import React from 'react';
import {getProviders, signIn} from "next-auth/react";

const Login = ({providers}) => {
    return (
        <div>
            <img className="w-52 mb-5" src="https://tinyurl.com/2p8vwsd4" alt=""/>

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        onClick={
                            () => {
                                signIn(provider.id, {callbackUrl: "/"})
                            }
                        }

                    >
                        login with {provider.name}
                    </button>
                </div>

            ))
            }
        </div>
    );
};

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }

}