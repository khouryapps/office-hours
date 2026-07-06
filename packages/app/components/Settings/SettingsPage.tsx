import {
  BellOutlined,
  BookOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import { API } from "@koh/api-client";
import { Role } from "@koh/common";
import { useWindowWidth } from "@react-hook/window-size";
import { Button, Col, Menu, message, Row, Space } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import NotificationsSettings from "./NotificationsSettings";
import ProfileSettings from "./ProfileSettings";
import TeamsSettings from "./TeamsSettings";
import CoursePreferenceSettings from "./CoursePreferenceSettings";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SettingsPanelAvatar } from "./SettingsSharedComponents";
import { useRoleInCourse } from "../../hooks/useRoleInCourse";
import { useRouter } from "next/router";

export enum SettingsOptions {
  PROFILE = "PROFILE",
  NOTIFICATIONS = "NOTIFICATIONS",
  TEAMS_SETTINGS = "TEAMS_SETTINGS",
  PREFERENCES = "PREFERENCES",
}

interface SettingsPageProps {
  defaultPage: SettingsOptions;
}

export const VerticalDivider = styled.div`
  @media (min-width: 767px) {
    border-right: 1px solid #cfd6de;
    margin-right: 32px;
  }
`;

const { Panel } = Collapse;

export default function SettingsPage({
  defaultPage,
}: SettingsPageProps): ReactElement {
  const { data: profile, error } = useSWR(`api/v1/profile`, async () =>
    API.profile.index()
  );
  const router = useRouter();
  const { cid } = router.query;
  const role = useRoleInCourse(Number(cid));
  const isTAOrProfessor = role === Role.TA || role === Role.PROFESSOR;

  const [currentSettings, setCurrentSettings] = useState(
    defaultPage || SettingsOptions.PROFILE
  );
  const isMobile = useIsMobile();
  const windowWidth = useWindowWidth();
  const [avatarSize, setAvatarSize] = useState(windowWidth / 2);

  useEffect(() => {
    const widthDivider = isMobile ? 6 : 10;
    setAvatarSize(windowWidth / widthDivider);
  });

  if (error) {
    message.error(error);
  }

  const AvatarSettings = () => (
    <Col>
      {avatarSize ? (
        <Row
          style={{
            marginTop: avatarSize / 6,
            justifyContent: `${isMobile ? "left" : "center"}`,
          }}
        >
          <SettingsPanelAvatar avatarSize={avatarSize} />
          <Col>
            {profile && (
              <h2>
                {profile.firstName} {profile.lastName}
              </h2>
            )}
            {profile?.hasUnregisteredCourses &&
              profile?.courses?.some((c) => c.role === Role.PROFESSOR) && (
                <Button
                  icon={<BookOutlined />}
                  style={{ marginTop: '10px', width: '100%' }}
                  onClick={async () => {
                    await API.profile.resetRegistration();
                    router.push('/apply');
                  }}
                >
                  Register More Courses
                </Button>
              )}
          </Col>
        </Row>
      ) : null}
    </Col>
  );

  const SettingsMenu = () => (
    <>
      {isMobile ? (
        <Collapse accordion style={{ marginTop: "10px" }}>
          <Panel header="Personal Information" key="profile">
            <ProfileSettings />
          </Panel>
          {isTAOrProfessor && (
            <Panel header="Teams Settings" key="teams_settings">
              <TeamsSettings />
            </Panel>
          )}
          <Panel header="Notifications" key="notifications">
            <NotificationsSettings />
          </Panel>
          <Panel header="Course Preferences" key="preferences">
            <CoursePreferenceSettings />
          </Panel>
        </Collapse>
      ) : (
        <Menu
          style={{ background: "none", marginTop: "10px" }}
          defaultSelectedKeys={[currentSettings]}
          onClick={(e) => setCurrentSettings(e.key as SettingsOptions)}
        >
          <Menu.Item key={SettingsOptions.PROFILE} icon={<UserOutlined />}>
            Personal Information
          </Menu.Item>
          {isTAOrProfessor && (
            <Menu.Item
              key={SettingsOptions.TEAMS_SETTINGS}
              icon={<WindowsOutlined />}
            >
              Teams Settings
            </Menu.Item>
          )}
          <Menu.Item
            key={SettingsOptions.NOTIFICATIONS}
            icon={<BellOutlined />}
          >
            Notifications
          </Menu.Item>
          <Menu.Item key={SettingsOptions.PREFERENCES} icon={<BookOutlined />}>
            Course Preferences
          </Menu.Item>
        </Menu>
      )}
    </>
  );

  const DesktopSettingsSubpage = () => (
    <Col>
      {currentSettings === SettingsOptions.PROFILE && <ProfileSettings />}
      {currentSettings === SettingsOptions.NOTIFICATIONS && (
        <NotificationsSettings />
      )}
      {currentSettings === SettingsOptions.TEAMS_SETTINGS && <TeamsSettings />}
      {currentSettings === SettingsOptions.PREFERENCES && (
        <CoursePreferenceSettings />
      )}
    </Col>
  );

  return (
    <div>
      {isMobile ? (
        <Col>
          <AvatarSettings />
          <SettingsMenu />
        </Col>
      ) : (
        <Row>
          <Col span={5} style={{ textAlign: "center" }}>
            <AvatarSettings />
            <SettingsMenu />
          </Col>
          <VerticalDivider />
          <Space direction="vertical" size={40} style={{ flexGrow: 1 }}>
            <DesktopSettingsSubpage />
          </Space>
        </Row>
      )}
    </div>
  );
}
