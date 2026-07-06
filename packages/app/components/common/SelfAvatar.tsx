import { Avatar } from "antd";
import React, { ReactElement, useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import AvatarWithInitals from "./AvatarWithInitials";

type SelfAvatarProps = {
  size: number;
  style?: any;
};

type KOHAvatarProps = {
  size: number;
  name: string;
  photoURL?: string;
  style?: any;
  className?: string;
};

export default function SelfAvatar({
  size,
  style,
}: SelfAvatarProps): ReactElement {
  const profile = useProfile();

  return (
    <KOHAvatar
      size={size}
      name={profile?.name}
      photoURL={profile?.photoURL}
      style={style}
    />
  );
}

export function KOHAvatar({
  size,
  name,
  photoURL,
  style,
  className,
}: KOHAvatarProps): ReactElement {
  const [photoFailed, setPhotoFailed] = useState(false);

  return photoURL && !photoFailed ? (
    <Avatar
      src={"/api/v1/profile/get_picture/" + photoURL}
      size={size}
      style={style}
      className={className}
      onError={() => {
        // Fall back to initials if the image is missing or fails to load
        setPhotoFailed(true);
        return false;
      }}
    />
  ) : (
    <AvatarWithInitals
      name={name}
      size={size}
      fontSize={(3 / 7) * size}
      style={style}
      className={className}
    />
  );
}
