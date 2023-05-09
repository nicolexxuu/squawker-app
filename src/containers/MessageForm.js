import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            imageUrl: ""
        };
    }

    handleNewMessage = event => {
        event.preventDefault();
        this.props.postNewMessage(this.state.message, this.state.imageUrl); //?
        this.setState({ message: "", imageUrl: "" });
        this.props.router.navigate("/");
    };

    render() {
        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <form className="mt-8 space-y-4" onSubmit={this.handleNewMessage}>
                        {this.props.errors.message && (
                            <div>
                                {this.props.errors.message}
                            </div>
                        )}

                        <div>
                            <label htmlFor="price" className="sr-only block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div> */}
                                <input
                                    type="text"
                                    // name="price"
                                    // id="price"
                                    value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })}
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="what's going on?"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                // name="price"
                                // id="price"
                                value={this.state.imageUrl}
                                onChange={e => this.setState({ imageUrl: e.target.value })}
                                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="image URL (optional)"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                            >
                                post
                            </button>
                        </div>
                    </form>
                </div>

            </div >

        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors,
    };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);