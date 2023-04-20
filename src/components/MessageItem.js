import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { TrashIcon } from '@heroicons/react/24/outline';


const MessageItem = ({ date, profileImageUrl, text, imageUrl, username, removeMessage, isCorrectUser }) => (
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
                <div className="relative rounded-full px-3 text-sm leading-6 ring-1 text-gray-400 hover:text-gray-600">
                    <a onClick={removeMessage} className="font-semibold cursor-pointer">
                        <span className="absolute inset-0" aria-hidden="true" />
                        delete
                    </a>
                </div>
            )}
        </div>
        {imageUrl && (
            <img src={imageUrl} height="100" width="100" />
        )}

    </li>
)

export default MessageItem;