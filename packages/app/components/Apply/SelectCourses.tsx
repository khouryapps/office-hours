import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Alert, Select, Button, Tag } from "antd";
import { useProfile } from "../../hooks/useProfile";
import { KhouryProfCourse } from "@koh/common";
import { useEffect } from "react";
import { createSGString } from "./ApplyPage";

const Italics = styled.span`
  font-weight: normal;
  font-size: 16px;
  font-style: italic;
`;

const FormSection = styled.div`
  margin-top: 20px;
`;

const CoursesBlock = styled.div`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const LargeTag = styled(Tag)`
  font-size: 14px;
  padding: 2px 6px;
`;

export default function SelectCourses({
  onSubmit,
  initialValues,
}: {
  onSubmit: (courses: KhouryProfCourse[]) => any;
  initialValues: string[];
}): ReactElement {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const profile = useProfile();

  // populate initially selected courses when returning to first selection page
  useEffect(() => {
    const defaultValues = profile?.pendingCourses?.reduce(
      (defaults: number[], course, idx) => {
        if (initialValues.find((name) => name === course.name)) {
          defaults.push(idx);
          return defaults;
        } else return defaults;
      },
      []
    );
    setSelectedCourses(defaultValues || []);
  }, []);

  const handleCoursesChange = (indicies) => {
    setSelectedCourses(indicies);
  };
  const handleSubmit = () =>
    onSubmit(
      selectedCourses.map((courseIdx) => profile?.pendingCourses[courseIdx])
    );

  return (
    <div>
      <Alert
        message="Notice"
        description="The Admin Portal will start sending data 1 week before the start of the semester. Once it does, this form can be filled out."
        type="warning"
        showIcon
        style={{ marginBottom: '16px' }}
      />
      <Alert
        message="Course list may be out of date"
        description="This list reflects the courses assigned to you at your last login. If you are missing a course, please log out and log back in to refresh your course data."
        type="info"
        showIcon
        style={{ marginBottom: '16px' }}
      />
      <Alert
        message="New as of Summer 2026"
        description="You can now register additional courses at any time during the semester. Use the Register More Courses button on your profile settings page to return here."
        type="success"
        showIcon
        style={{ marginBottom: '16px' }}
      />
      <div>
        Please select the courses you want to use Khoury Office Hours for.
        Courses already registered for the app are shown below.
      </div>

      <FormSection>
        <h3>
          Courses{" "}
          <Italics>(Select all the courses you are applying for)</Italics>
        </h3>

        <Select
          mode="multiple"
          placeholder="Please select your courses"
          onChange={handleCoursesChange}
          style={{ width: "100%" }}
          value={selectedCourses}
        >
          {profile?.pendingCourses?.map((course, idx) => (
            <Select.Option key={course.name} value={idx}>
              {createSGString(course)}
            </Select.Option>
          ))}
        </Select>
      </FormSection>

      <FormSection>
        <h3>The following courses have already registered for the app:</h3>
        <CoursesBlock>
          {profile?.courses.map((course) => (
            <LargeTag key={course.course?.id}>{course.course?.name}</LargeTag>
          ))}
        </CoursesBlock>
      </FormSection>

      <Button
        onClick={handleSubmit}
        type="primary"
        style={{ marginTop: "30px" }}
      >
        Next
      </Button>
    </div>
  );
}
