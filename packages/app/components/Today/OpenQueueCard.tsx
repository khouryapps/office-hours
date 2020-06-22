import { Avatar, Button, Card } from "antd";
import { QueuePartial } from "../../../common/index";
import styled from "styled-components";

type OpenQueueCard = {
  queue: QueuePartial;
};

const PaddedCard = styled(Card)`
  margin-bottom: 25px;
`;

const AvatarContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  float: left;
`;

const OpenQueueCard = ({ queue }: OpenQueueCard) => {
  const staffList = queue.staffList;
  return (
    <PaddedCard
      title={staffList.map((staffMember) => staffMember.name).join(", ")}
      extra={
        <Button type="primary" size={"middle"}>
          Join Queue
        </Button>
      }
    >
      <h1>{queue.room}</h1>
      {staffList.map((staffMember) => (
        <AvatarContainer key={staffMember.id}>
          <Avatar size={128} src={staffMember.photoURL} shape="square" />
        </AvatarContainer>
      ))}
    </PaddedCard>
  );
};

export default OpenQueueCard;