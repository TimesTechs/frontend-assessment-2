import React from "react";
import { PROFILE_PARAMS } from "../profileUtils";
import { Profile } from "../types";

const ProfilePreview = ({ profile }: { profile: Profile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {PROFILE_PARAMS.map(({ renderValue }, i) => (
        <span key={i} style={{ width: 200 }}>
          {renderValue(profile)}
        </span>
      ))}
    </div>
  );
};

export default ProfilePreview;
