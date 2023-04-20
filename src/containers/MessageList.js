import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem"

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { messages, removeMessage, currentUser } = this.props;
        // console.log("message list current user: " + currentUser);
        let messageList = messages.map(m => (
            <MessageItem
                key={m._id}
                date={m.createdAt}
                text={m.text}
                imageUrl={m.imageUrl}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
                isCorrectUser={currentUser === m.user._id}
            />
        ));

        return (
            <div >
                <ul className="space-y-2 divide-y">
                    {messageList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("current user in map: " + state.currentUser.user.id);
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);