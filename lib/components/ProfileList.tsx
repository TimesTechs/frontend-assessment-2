import React from "react";
import { PROFILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";
import { Profile } from "../types";

const ProfileList = ({ profiles }: { profiles: Profile[] }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {PROFILE_PARAMS.map(({ columnTitle }, i) => (
          <h3 key={i} style={{ width: 200, textAlign: "center" }}>
            {columnTitle}
          </h3>
        ))}
      </div>
      {profiles.map((profile, i) => (
        <ProfilePreview profile={profile} key={i} />
      ))}
    </div>
  );
};

export default ProfileList;
