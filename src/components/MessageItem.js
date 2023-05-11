import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";


const MessageItem = ({ messageId, userId, date, profileImageUrl, text, imageUrl, username, removeMessage, editMessage, isCorrectUser }) => (
    <li className="flex items-center space-x-3 py-1">
        <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
        />
        <div className="message-area space-y-1">
            <Link to="/">@{username} &nbsp;</Link>
            <span>
                <Moment format="Do MMM YYYY">
                    {date}
                </Moment>
            </span>

            <p>{text}</p>
            {isCorrectUser && (
                <div className="space-x-2">

                    <span className="relative rounded-full px-3 text-sm leading-6 ring-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <a onClick={removeMessage} className="font-semibold">
                            <span className="absolute inset-0" aria-hidden="true" />
                            delete
                        </a>
                    </span>
                    <span className="relative rounded-full px-3 text-sm leading-6 ring-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <Link to={`/users/${userId}/messages/${messageId}/edit`} state={{ messageId, userId, text, imageUrl }} className="font-semibold">
                            <span className="absolute inset-0" aria-hidden="true" />
                            edit
                        </Link>
                    </span>
                </div>
            )}
        </div>
        {imageUrl && (
            <img src={imageUrl} height="100" width="100" />
        )}

    </li>
)

export default MessageItem;