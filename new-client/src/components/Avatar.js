import { Avatar as AvatarMantine } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { defaultImages } from "data/defaultProfileImages";
import { useMoralis, useMoralisQuery } from "react-moralis";

const LoadAvatar = ({ userId, props }) => {
  const { Moralis } = useMoralis();
  const Users = Moralis.Object.extend("Users");
  const [profilePic, setProfilePic] = useState(defaultImages[1]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Todo make proper loading
    async function getUsers() {
      try {
        const query = new Moralis.Query(Users);
        const results = await query.find();

        console.log(results);
        setProfilePic(results[0].attributes.profileImage);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }

    if (!loaded) {
      getUsers();
    }
  }, []);

  return <AvatarMantine src={profilePic} radius="xl" {...props} />;
};

const Avatar = ({ userId, props, src }) => {
  // Given specific user returns avatar for that user
  // Else returns avatar of an current user
  const { Moralis } = useMoralis();
  if (userId !== undefined) {
    return <LoadAvatar userId={userId} {...props} />;
  }
  if (src !== undefined) {
    return <AvatarMantine src={src} radius="xl" {...props} />;
  }
  const user = Moralis.User.current();

  return (
    <AvatarMantine
      src={
        user.attributes.profilePicture
          ? user.attributes.profilePicture
          : defaultImages[0]
      }
      radius="xl"
      {...props}
    />
  );
};

export default Avatar;