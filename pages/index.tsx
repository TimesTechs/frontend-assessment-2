import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileList from "../lib/components/ProfileList";
import { Profile, Results } from "../lib/types";

const Home = () => {
  const [profiles, setProfiles] = useState<Profile[]>();

  useEffect(() => {
    axios
      .get<Results<Profile>>("https://randomuser.me/api", {
        params: { results: 20 },
      })
      .then((res) => {
        setProfiles(res.data.results);
      })
      .catch((err) => {
        console.error(err);
        alert("Profile request failed");
      });
  }, []);

  if (!profiles) return <h1>Loading profiles...</h1>;

  return <ProfileList profiles={profiles} />;
};

export default Home;
