import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
    return (
        <div className="w-full mx-auto">
            <UserAside profileImageUrl={props.profileImageUrl} username={props.username} />
            <MessageList />
        </div>
    )
}

export default MessageTimeline;