import { Factory } from "typeorm-factory";
import { QuestionModel } from "../entity/QuestionModel";
import { QuestionType } from "@template/common";
import { QueueModel } from "../entity/QueueModel";
import { CourseModel } from "../entity/CourseModel";
import { SemesterModel } from "../entity/SemesterModel";
import { UserModel } from "../entity/UserModel";

export const UserFactory = new Factory(UserModel)
  .sequence("username", (i) => `user${i}`)
  .sequence("email", (i) => `user${i}@neu.edu`)
  .sequence("name", (i) => `John Doe the ${i}th`)
  .sequence("photoURL", (i) => `https://pics/${i}`);

export const SemesterFactory = new Factory(SemesterModel)
  .attr("season", "Fall")
  .attr("year", 2020);

export const CourseFactory = new Factory(CourseModel)
  .attr("name", "CS 2500")
  .attr("icalURL", "hi.com")
  .assocOne("semester", SemesterFactory);

export const QueueFactory = new Factory(QueueModel)
  .sequence("room", (i) => `WVH ${i}`)
  .assocOne("course", CourseFactory);

export const QuestionFactory = new Factory(QuestionModel)
  .sequence("text", (i) => `question ${i}`)
  .attr("status", "Queued")
  .attr("questionType", QuestionType.Other)
  .assocOne("queue", QueueFactory)
  .assocOne("creator", UserFactory);