import React, { ReactElement } from "react";
import { useProfile } from "../../hooks/useProfile";
import AvatarWithInitals from "./AvatarWithInitials";

type SelfAvatarProps = {
  size: number;
  style?: any;
};

type KOHAvatarProps = {
  size: number;
  name: string;
  style?: any;
  className?: string;
};

export default function SelfAvatar({
  size,
  style,
}: SelfAvatarProps): ReactElement {
  const profile = useProfile();

  return <KOHAvatar size={size} name={profile?.name} style={style} />;
}

export function KOHAvatar({
  size,
  name,
  style,
  className,
}: KOHAvatarProps): ReactElement {
  return (
    <AvatarWithInitals
      name={name}
      size={size}
      fontSize={(3 / 7) * size}
      style={style}
      className={className}
    />
  );
}
