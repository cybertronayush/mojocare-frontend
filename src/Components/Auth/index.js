import React, { useContext, useState } from "react";
import { api } from "../../api";
import { NotificationBannerContext } from "../NotificationBanner/NotificationContext";

const Auth = ({ setIsLoggedIn }) => {
    const [form, setForm] = useState({});
    const [authToggle, setAuthToggle] = useState(true); // True === Login, False === Register
    const onSubmit = (e) => {
        e.preventDefault();
        if (authToggle) {
            //LOGIN
            api.login(form)
                .then((res) => {
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (!authToggle) {
            //REGISTER
            api.register(form)
                .then((res) => {
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log(form);
    };

    const { setNotifyMessage } = useContext(NotificationBannerContext);

    return (
        <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                    <a className="bg-black text-white font-bold text-xl p-4">
                        MOJO-AMS
                    </a>
                </div>

                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Welcome.</p>
                    <form
                        className="flex flex-col pt-3 md:pt-8"
                        onSubmit={onSubmit}
                    >
                        {!authToggle && (
                            <>
                                <div className="flex flex-col pt-4">
                                    <label for="name" className="text-lg">
                                        Role
                                    </label>
                                    <select class="form-select appearance-none
                                                         block
                                                         w-full
                                                         px-3
                                                         py-1.5
                                                         text-base
                                                         font-normal
                                                         text-gray-700
                                                         bg-white bg-clip-padding bg-no-repeat
                                                         border border-solid border-gray-300
                                                         rounded
                                                         transition
                                                         ease-in-out
                                                         m-0
                                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">Doctor</option>
                                        <option value="2">Patient</option>
                                        {/* <option value="3">Three</option> */}
                                    </select>
                                    <label for="name" className="text-lg">
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        placeholder="Your name"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>{" "}
                            </>
                        )}
                        <div className="flex flex-col pt-4">
                            <label for="email" className="text-lg">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex flex-col pt-4">
                            <label for="password" className="text-lg">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <input
                            type="submit"
                            value={authToggle ? "Log In" : "Sign Up"}
                            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
                        />
                    </form>
                    <div className="text-center pt-12 pb-12">
                        {authToggle ? (
                            <p>
                                Don't have an account?{" "}
                                <a
                                    onClick={() => setAuthToggle(!authToggle)}
                                    className="underline font-semibold cursor-pointer"
                                >
                                    Register here.
                                </a>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{" "}
                                <a
                                    onClick={() => setAuthToggle(!authToggle)}
                                    className="underline font-semibold cursor-pointer"
                                >
                                    Log in here.
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-1/2 shadow-2xl">
                <img
                    className="object-cover w-full h-screen hidden md:block"
                    src="https://source.unsplash.com/IXUM4cJynP0"
                />
            </div>
        </div>
    );
};

export default Auth;
