import { Form, Input, Modal, Row, Switch } from "antd";
import useSWR from "swr";
import { API } from "@template/api-client";
import { UpdateProfileParams } from "@template/common";
import styled from "styled-components";
import { pick } from "lodash";
import { register } from "next-offline/runtime";
import { ReactElement } from "react";

const LabelText = styled.div`
  font-weight: normal;
  font-size: 16px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  width: 150px;
  margin-left: 30px;
  margin-top: 10px;
`;

const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};

const requestNotificationPermission = async () => {
  if (Notification.permission === "granted") {
    console.log(`permission previously granted`);
  } else if (Notification.permission === "denied") {
    console.log("permission previously denied");
  } else if (Notification.permission === "default") {
    console.log("permission not set > requesting");
    await window.Notification.requestPermission();
  }
};

interface NotificationSettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function NotificationSettingsModal({
  visible,
  onClose,
}: NotificationSettingsModalProps): ReactElement {
  const { data: profile, error, mutate } = useSWR(`api/v1/profile`, async () =>
    API.profile.index()
  );

  const [form] = Form.useForm();
  const editProfile = async (updateProfile: UpdateProfileParams) => {
    const newProfile = { ...profile, ...updateProfile };
    mutate(newProfile, false);
    await API.profile.patch(
      pick(newProfile, [
        "desktopNotifsEnabled",
        "phoneNotifsEnabled",
        "phoneNumber",
      ])
    );
    if (updateProfile.desktopNotifsEnabled) {
      await requestNotificationPermission();
      // get rid of old service worker, and then try and re-register.
      // just kidding, this breaks Chrome for some reason (ai ya).
      // unregister();
      // have to use setTimeout because unregister does async things, but is sync
      setTimeout(() => {
        register();
      }, 500);
    }
    mutate();
  };

  return (
    <Modal
      title="Notification Settings"
      visible={visible}
      onCancel={() => onClose()}
      onOk={async () => {
        const value = await form.validateFields();
        try {
          await editProfile(value);
          onClose();
        } catch (e) {
          if (
            e.response?.status === 400 &&
            e.response?.data?.message === "phone number invalid"
          ) {
            form.setFields([
              { name: "phoneNumber", errors: ["Invalid phone number"] },
            ]);
          }
        }
      }}
    >
      {profile && (
        <Form form={form} initialValues={profile}>
          <p>Get notified when you reach the top of the queue.</p>
          <Form.Item
            label="Enable browser notifications"
            name="desktopNotifsEnabled"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label="Enable SMS notifications"
            name="phoneNotifsEnabled"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {() =>
              form?.getFieldValue("phoneNotifsEnabled") && (
                <Form.Item
                  label="Phone #"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please input your number to enable text notifications",
                    },
                  ]}
                >
                  <Input placeholder={"XXX-XXX-XXXX"} />
                </Form.Item>
              )
            }
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
}
