import React from "react";
import "./css/profile_landing_style.css";
import { getAuth } from "firebase/auth"

function ProfileLanding()
{
    const auth = getAuth();
    const user = auth.currentUser;


    if (user !== null) {
        user.providerData.forEach((profile) => {
          document.getElementById("profile_pic").src = profile.photoURL;
        });
      }
    return(
        <>
            <div className="container1">
                <div className="profile-box">

                </div>
            </div>
        </>
    )

}

export default ProfileLanding;