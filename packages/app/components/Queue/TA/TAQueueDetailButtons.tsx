import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  PhoneOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { API } from "@koh/api-client";
import {
  ClosedQuestionStatus,
  LimboQuestionStatus,
  OpenQuestionStatus,
  Question,
  QuestionStatus,
} from "@koh/common";
import { message, Popconfirm, Tooltip } from "antd";
import React, { ReactElement, useCallback } from "react";
import { useQuestions } from "../../../hooks/useQuestions";
import { useTAInQueueInfo } from "../../../hooks/useTAInQueueInfo";
import {
  BannerDangerButton,
  BannerPrimaryButton,
  CantFindButton,
  FinishHelpingButton,
  RequeueButton,
} from "../Banner";

const PRORITY_QUEUED_MESSAGE_TEXT =
  "This student has been temporarily removed from the queue. They must select to rejoin the queue and will then be placed in the Priority Queue.";

export default function TAQueueDetailButtons({
  queueId,
  question,
}: {
  queueId: number;
  question: Question;
}): ReactElement {
  const { mutateQuestions } = useQuestions(queueId);
  const changeStatus = useCallback(
    async (status: QuestionStatus) => {
      await API.questions.update(question.id, { status });
      mutateQuestions();
    },
    [question.id, mutateQuestions]
  );
  const { isCheckedIn, isHelping } = useTAInQueueInfo(queueId);
  if (question.status === OpenQuestionStatus.Helping) {
    return (
      <>
        <Popconfirm
          title="Are you sure you want to send this student back to the queue?"
          okText="Yes"
          cancelText="No"
          onConfirm={async () => {
            message.success(PRORITY_QUEUED_MESSAGE_TEXT, 2);
            await changeStatus(LimboQuestionStatus.ReQueueing);
          }}
        >
          <Tooltip title="Requeue Student">
            <RequeueButton
              icon={<UndoOutlined />}
              data-cy="requeue-student-button"
            />
          </Tooltip>
        </Popconfirm>
        <Popconfirm
          title="Are you sure you can't find this student?"
          okText="Yes"
          cancelText="No"
          onConfirm={async () => {
            message.success(PRORITY_QUEUED_MESSAGE_TEXT, 2);
            await changeStatus(LimboQuestionStatus.CantFind);
            await API.questions.notify(question.id);
          }}
        >
          <Tooltip title="Can't Find">
            <CantFindButton
              shape="circle"
              icon={<CloseOutlined />}
              data-cy="cant-find-button"
            />
          </Tooltip>
        </Popconfirm>
        <Tooltip title="Finish Helping">
          <FinishHelpingButton
            icon={<CheckOutlined />}
            onClick={() => changeStatus(ClosedQuestionStatus.Resolved)}
            data-cy="finish-helping-button"
          />
        </Tooltip>
      </>
    );
  } else {
    const [canHelp, helpTooltip] = ((): [boolean, string] => {
      if (!isCheckedIn) {
        return [false, "You must check in to help students!"];
      } else if (isHelping) {
        return [false, "You are already helping a student"];
      } else {
        return [true, "Help Student"];
      }
    })();
    return (
      <>
        <Popconfirm
          title="Are you sure you want to delete this question from the queue?"
          disabled={!isCheckedIn}
          okText="Yes"
          cancelText="No"
          onConfirm={async () => {
            await changeStatus(
              question.status === OpenQuestionStatus.Drafting
                ? ClosedQuestionStatus.DeletedDraft
                : LimboQuestionStatus.TADeleted
            );
            await API.questions.notify(question.id);
          }}
        >
          <Tooltip
            title={
              isCheckedIn
                ? "Remove From Queue"
                : "You must check in to remove students from the queue"
            }
          >
            <span>
              {/* This span is a workaround for tooltip-on-disabled-button 
              https://github.com/ant-design/ant-design/issues/9581#issuecomment-599668648 */}
              <BannerDangerButton
                shape="circle"
                icon={<DeleteOutlined />}
                data-cy="remove-from-queue"
                disabled={!isCheckedIn}
              />
            </span>
          </Tooltip>
        </Popconfirm>
        <Tooltip title="Send student back to draft their question more clearly">
          <button
            onClick={async () => {
              await changeStatus(OpenQuestionStatus.Rephrasing);
            }}
          >
            Rephrase
          </button>
        </Tooltip>
        <Tooltip title={helpTooltip}>
          <span>
            <BannerPrimaryButton
              icon={<PhoneOutlined />}
              onClick={() => {
                changeStatus(OpenQuestionStatus.Helping);
                if (question.isOnline) {
                  window.open(
                    `https://teams.microsoft.com/l/chat/0/0?users=${question.creator.email}`
                  );
                }
              }}
              disabled={!canHelp}
              data-cy="help-student"
            />
          </span>
        </Tooltip>
      </>
    );
  }
}
