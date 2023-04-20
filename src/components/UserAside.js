import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username }) => {
    return (
        <aside>
            <div>
                <div>
                    {/* <img
                        src={profileImageUrl || DefaultProfileImg}
                        alt={username}
                        width="200"
                        height="200"
                    /> */}
                </div>
            </div>
        </aside>
    )
}

export default UserAside;