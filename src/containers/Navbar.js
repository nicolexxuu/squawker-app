import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoImg from "../images/squawker-logo.jpg";

const navigation = [
    { name: 'sign up', to: "/signup" },
    { name: 'log in', to: "/signin" }
]

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { mobileMenuOpen: false, setMobileMenuOpen: false };
    }

    // render() {
    // return <nav className="navbar navbar-expand text-rose-500">
    //     <div className="container-fluid">
    //         <Link to="/" className="navbar-brand">
    //             <img src="" alt="homepage img" />
    //         </Link>
    //     </div>

    //     <ul>
    //         <li>
    //             <Link to="/signup">sign up</Link>
    //         </li>
    //         <li>
    //             <Link to="/signin">log in</Link>
    //         </li>
    //     </ul>
    // </nav>

    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.setState({ mobileMenuOpen: false });
    }

    render() {
        return <header className="absolute top-0 inset-x-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8 z-50" aria-label="Global" >
                <div className="flex lg:flex-1 ">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src={LogoImg}
                            alt=""
                        />

                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => this.setState({ mobileMenuOpen: true })}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>


                {this.props.currentUser.isAuthenticated ? (
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to={`/users/${this.props.currentUser.user.id}/messages/new`} className="text-sm font-semibold leading-6 text-gray-900">
                            {"new message"}
                        </Link>
                        <a onClick={this.logout} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer" >log out</a>
                    </div>

                ) :
                    (<div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (

                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>)
                }
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div> */}
            </nav >
            <Dialog as="div" className="lg:hidden" open={this.state.mobileMenuOpen} onClose={() => this.setState({ mobileMenuOpen: false })}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={LogoImg}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => this.setState({ mobileMenuOpen: false })}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">

                            {this.props.currentUser.isAuthenticated ? (
                                <div className="space-y-2 py-6">
                                    <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}
                                        onClick={() => { this.setState({ mobileMenuOpen: false }); }}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        new message
                                    </Link>
                                    <Link
                                        onClick={this.logout}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                                        log out
                                    </Link>

                                </div>
                            ) : (
                                < div className="space-y-2 py-6">
                                    {navigation.map((item) => (

                                        <Link key={item.name} to={item.to} onClick={() => this.setState({ mobileMenuOpen: false })} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            {/* <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Navbar);
