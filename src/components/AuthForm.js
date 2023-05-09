import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/squawker-logo.jpg";
import errors from "../store/reducers/errors";

export default class AuthForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            this.props.router.navigate("/");
        }).catch(() => {
            return;
        });
    }

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, removeError } = this.props;

        if (errors.message === "Sorry, that username and/or email is taken"
            && signUp === undefined) {
            removeError();
        }

        return (
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={LogoImg}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {heading}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className={signUp ? "space-y-2" : "space-y-4"} onSubmit={this.handleSubmit}>
                        {errors.message && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{errors.message}</div>}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                email address {signUp && <span class="text-red-600">*</span>}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                    type="text"
                                    // type="email"
                                    // autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                password {signUp && <span class="text-red-600">*</span>}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    // autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {signUp && (
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    username {signUp && <span class="text-red-600">*</span>}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        onChange={this.handleChange}
                                        value={username}
                                        type="text"
                                        // type="email"
                                        // autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        )}
                        {signUp && (
                            <div>
                                <label htmlFor="image-url" className="block text-sm font-medium leading-6 text-gray-900">
                                    profile image URL
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image-url"
                                        name="profileImageUrl"
                                        onChange={this.handleChange}
                                        value={profileImageUrl}
                                        type="text"
                                        // type="email"
                                        // autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </form>

                    {signUp ? (
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Have an account?{' '}
                            <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign in.
                            </Link>
                        </p>

                    ) : (


                        <p className="mt-10 text-center text-sm text-gray-500">
                            No account?{' '}
                            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Create one.
                            </Link>
                        </p>
                    )}
                </div >
            </div >
        )
        // return (
        //     <div className="flex flex-col min-h-full items-center justify-center px-6 py-12 lg:px-8">
        //         <div className="w-full max-w-md space-y-8">
        //             <div>
        //                 <img
        //                     className="mx-auto h-12 w-auto"
        //                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        //                     alt="Your Company"
        //                 />
        //                 <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        //                     {heading}
        //                 </h2>
        //                 {/* <p className="mt-2 text-center text-sm text-gray-600">
        //                     Or{' '}
        //                     <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
        //                         start your 14-day free trial
        //                     </a>
        //                 </p> */}
        //             </div>

        //             <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
        //                 {/* <input type="hidden" name="remember" defaultValue="true" /> */}
        //                 <div className="-space-y-px rounded-md shadow-sm">

        //                     {errors.message && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{errors.message}</div>}

        //                     <div>
        //                         <label htmlFor="Email" className="sr-only">
        //                             Email
        //                         </label>
        //                         <input
        //                             id="email"
        //                             name="email"
        //                             onChange={this.handleChange}
        //                             value={email}
        //                             type="text"
        //                             // type="email"
        //                             // autoComplete="email"
        //                             // required
        //                             className="relative block w-full rounded-t-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                             placeholder="email address"
        //                         />
        //                     </div>


        //                     <div>
        //                         <label htmlFor="password" className="sr-only">Password</label>
        //                         <input
        //                             id="password"
        //                             name="password"
        //                             type="password"
        //                             onChange={this.handleChange}
        //                             // autoComplete="current-password"
        //                             // required
        //                             className={`${signUp ? null : "rounded-b-md "} relative block w-full border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        //                             placeholder="password"
        //                         />
        //                     </div>


        //                     {signUp && (
        //                         <div>
        //                             <label htmlFor="username" className="sr-only">Username</label>
        //                             <input
        //                                 id="username"
        //                                 name="username"
        //                                 type="text"
        //                                 onChange={this.handleChange}
        //                                 value={username}
        //                                 className="relative block w-full border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                                 placeholder="username"
        //                             />

        //                             <label htmlFor="image-url" className="sr-only">Image URL</label>
        //                             <input
        //                                 id="image-url"
        //                                 name="profileImageUrl"
        //                                 type="text"
        //                                 onChange={this.handleChange}
        //                                 value={profileImageUrl}
        //                                 className="relative block w-full rounded-b-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //                                 placeholder="image URL"
        //                             />
        //                         </div>
        //                     )}
        //                 </div>

        //                 <div>
        //                     <button
        //                         type="submit"
        //                         className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                     >
        //                         {buttonText}
        //                     </button>
        //                 </div>
        //             </form>
        //         </div >
        //     </div >
        // )
    }
}



{/* */ }