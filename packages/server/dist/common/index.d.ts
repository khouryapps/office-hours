import "reflect-metadata";
import { Cache } from "cache-manager";
export declare const PROD_URL = "https://officehours.khoury.northeastern.edu";
export declare const STAGING_URL = "https://staging.khouryofficehours.com";
export declare const getEnv: () => "production" | "staging" | "dev";
export declare const isProd: () => boolean;
export declare function timeDiffInMins(a: Date, b: Date): number;
export declare class User {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    name: string;
    photoURL: string;
    defaultMessage?: string;
    includeDefaultMessage: boolean;
    courses: UserCourse[];
    pendingCourses?: KhouryProfCourse[];
    desktopNotifsEnabled: boolean;
    desktopNotifs: DesktopNotifPartial[];
    phoneNotifsEnabled: boolean;
    phoneNumber: string;
    insights: string[];
}
export declare class DesktopNotifPartial {
    id: number;
    endpoint: string;
    name?: string;
    createdAt: Date;
}
export declare class UserPartial {
    id: number;
    email?: string;
    name?: string;
    photoURL?: string;
}
export declare type CoursePartial = {
    id: number;
    name: string;
};
export declare type UserCourse = {
    course: CoursePartial;
    role: Role;
};
export declare enum Role {
    STUDENT = "student",
    TA = "ta",
    PROFESSOR = "professor"
}
export interface Queue {
    id: number;
    course: CoursePartial;
    room: string;
    staffList: UserPartial[];
    questions: Question[];
    startTime?: Date;
    endTime?: Date;
    allowQuestions: boolean;
}
export declare class QueuePartial {
    id: number;
    room: string;
    staffList: UserPartial[];
    queueSize: number;
    notes?: string;
    isOpen: boolean;
    isDisabled: boolean;
    startTime?: Date;
    endTime?: Date;
    allowQuestions: boolean;
    isProfessorQueue: boolean;
}
export declare type Heatmap = Array<number>;
export declare class Question {
    id: number;
    creator: UserPartial;
    text?: string;
    taHelped?: UserPartial;
    createdAt: Date;
    helpedAt?: Date;
    closedAt?: Date;
    questionType?: QuestionType;
    groupable: boolean;
    status: QuestionStatus;
    location?: string;
}
export declare enum QuestionType {
    Concept = "Concept",
    Clarification = "Clarification",
    Testing = "Testing",
    Bug = "Bug",
    Setup = "Setup",
    Other = "Other"
}
export declare enum OpenQuestionStatus {
    Drafting = "Drafting",
    Queued = "Queued",
    Helping = "Helping",
    PriorityQueued = "PriorityQueued"
}
export declare enum LimboQuestionStatus {
    CantFind = "CantFind",
    ReQueueing = "ReQueueing",
    TADeleted = "TADeleted"
}
export declare enum ClosedQuestionStatus {
    Resolved = "Resolved",
    DeletedDraft = "DeletedDraft",
    ConfirmedDeleted = "ConfirmedDeleted",
    Stale = "Stale"
}
export declare const StatusInQueue: OpenQuestionStatus[];
export declare const StatusInPriorityQueue: OpenQuestionStatus[];
export declare const StatusSentToCreator: (OpenQuestionStatus | LimboQuestionStatus)[];
export declare type QuestionStatus = keyof typeof QuestionStatusKeys;
export declare const QuestionStatusKeys: {
    CantFind: LimboQuestionStatus.CantFind;
    ReQueueing: LimboQuestionStatus.ReQueueing;
    TADeleted: LimboQuestionStatus.TADeleted;
    Resolved: ClosedQuestionStatus.Resolved;
    DeletedDraft: ClosedQuestionStatus.DeletedDraft;
    ConfirmedDeleted: ClosedQuestionStatus.ConfirmedDeleted;
    Stale: ClosedQuestionStatus.Stale;
    Drafting: OpenQuestionStatus.Drafting;
    Queued: OpenQuestionStatus.Queued;
    Helping: OpenQuestionStatus.Helping;
    PriorityQueued: OpenQuestionStatus.PriorityQueued;
};
export declare class QuestionGroup {
    id: number;
    questions: Array<Question>;
    creator: UserPartial;
}
export declare type Season = "Fall" | "Spring" | "Summer_1" | "Summer_2" | "Summer_Full";
export declare type DesktopNotifBody = {
    endpoint: string;
    expirationTime?: number;
    keys: {
        p256dh: string;
        auth: string;
    };
    name?: string;
};
export declare type PhoneNotifBody = {
    phoneNumber: string;
};
export declare class GetProfileResponse extends User {
}
export declare class KhouryDataParams {
    email: string;
    first_name: string;
    last_name: string;
    campus: number;
    photo_url: string;
    courses: KhouryCourse[] | KhouryProfCourse[];
}
export declare class KhouryCourse {
    crn: number;
    semester: string;
    role: "TA" | "Student";
}
export declare class KhouryProfCourse {
    crns: number[];
    semester: string;
    name: string;
}
export declare function isKhouryCourse(c: KhouryCourse | KhouryProfCourse): c is KhouryCourse;
export interface KhouryRedirectResponse {
    redirect: string;
}
export declare class UpdateProfileParams {
    desktopNotifsEnabled?: boolean;
    phoneNotifsEnabled?: boolean;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    defaultMessage?: string;
    includeDefaultMessage?: boolean;
}
export declare class GetCourseResponse {
    id: number;
    name: string;
    queues: QueuePartial[];
    heatmap: Heatmap | false;
    coordinator_email: string;
    crns: number[];
    icalURL: string;
    selfEnroll: boolean;
}
export declare class GetCourseUserInfoResponse {
    users: UserPartial[];
    total: number;
}
export declare class GetSelfEnrollResponse {
    courses: CoursePartial[];
}
export declare class GetCourseOverridesRow {
    id: number;
    role: string;
    name: string;
    email: string;
}
export declare class GetCourseOverridesResponse {
    data: GetCourseOverridesRow[];
}
export declare class UpdateCourseOverrideBody {
    email: string;
    role: Role;
}
export declare class UpdateCourseOverrideResponse extends GetCourseOverridesRow {
}
export declare class GetQueueResponse extends QueuePartial {
}
export declare class GetCourseQueuesResponse extends Array<QueuePartial> {
}
export declare class ListQuestionsResponse {
    yourQuestion?: Question;
    questionsGettingHelp: Array<Question>;
    queue: Array<Question>;
    priorityQueue: Array<Question>;
    groups: Array<QuestionGroup>;
    unresolvedAlerts?: Array<AlertPayload>;
}
export declare class GetQuestionResponse extends Question {
}
export declare class GetStudentQuestionResponse extends Question {
    queueId: number;
}
export declare class CreateQuestionParams {
    text: string;
    questionType?: QuestionType;
    groupable: boolean;
    queueId: number;
    location?: string;
    force: boolean;
}
export declare class CreateQuestionResponse extends Question {
}
export declare class UpdateQuestionParams {
    text?: string;
    questionType?: QuestionType;
    groupable?: boolean;
    queueId?: number;
    status?: QuestionStatus;
    location?: string;
}
export declare class UpdateQuestionResponse extends Question {
}
export declare class GroupQuestionsParams {
    questionIds: number[];
    queueId: number;
}
export declare class ResolveGroupParams {
    queueId: number;
}
export declare type TAUpdateStatusResponse = QueuePartial;
export declare type QueueNotePayloadType = {
    notes: string;
};
export declare class TACheckoutResponse {
    queueId: number;
}
export declare class UpdateQueueParams {
    notes?: string;
    allowQuestions?: boolean;
}
export declare class TACheckinTimesResponse {
    taCheckinTimes: TACheckinPair[];
}
export declare class TACheckinPair {
    name: string;
    checkinTime: Date;
    checkoutTime?: Date;
    forced: boolean;
    inProgress: boolean;
    numHelped: number;
}
export declare enum AlertType {
    REPHRASE_QUESTION = "rephraseQuestion"
}
export declare class AlertPayload {
}
export declare class Alert {
    alertType: AlertType;
    sent: Date;
    payload: AlertPayload;
    id: number;
}
export declare class RephraseQuestionPayload extends AlertPayload {
    questionId: number;
    queueId: number;
    courseId: number;
}
export declare class CreateAlertParams {
    alertType: AlertType;
    courseId: number;
    payload: AlertPayload;
    targetUserId: number;
}
export declare class CreateAlertResponse extends Alert {
}
export declare class GetAlertsResponse {
    alerts: Alert[];
}
export declare class RegisterCourseParams {
    sectionGroupName: string;
    name: string;
    iCalURL: string;
    coordinator_email: string;
    timezone: string;
}
export declare class EditCourseInfoParams {
    name?: string;
    coordinator_email?: string;
    icalURL?: string;
    crns?: number[];
}
export declare class SemesterPartial {
    id: number;
    season: string;
    year: number;
}
export declare class SSEQueueResponse {
    queue?: GetQueueResponse;
    questions?: ListQuestionsResponse;
}
export interface TwilioBody {
    ToCountry: string;
    ToState: string;
    SmsMessageSid: string;
    NumMedia: string;
    ToCity: string;
    FromZip: string;
    SmsSid: string;
    FromState: string;
    SmsStatus: string;
    FromCity: string;
    Body: string;
    FromCountry: string;
    To: string;
    ToZip: string;
    NumSegments: string;
    MessageSid: string;
    AccountSid: string;
    From: string;
    ApiVersion: string;
}
export interface GetReleaseNotesResponse {
    releaseNotes: unknown;
    lastUpdatedUnixTime: number;
}
export declare type GetInsightOutputResponse = PossibleOutputTypes;
export declare type ListInsightsResponse = Record<string, InsightDisplayInfo>;
export declare type InsightDisplayInfo = {
    displayName: string;
    description: string;
    component: InsightComponent;
    size: "small" | "default";
};
export interface InsightObject {
    displayName: string;
    description: string;
    roles: Role[];
    component: InsightComponent;
    size: "default" | "small";
    compute: (insightFilters: any, cacheManager?: Cache) => Promise<PossibleOutputTypes>;
}
export declare enum InsightComponent {
    SimpleDisplay = "SimpleDisplay",
    BarChart = "BarChart",
    SimpleTable = "SimpleTable"
}
export declare type PossibleOutputTypes = SimpleDisplayOutputType | BarChartOutputType | SimpleTableOutputType;
export declare type SimpleDisplayOutputType = number | string;
export declare type BarChartOutputType = {
    data: StringMap<number>[];
    xField: string;
    yField: string;
    seriesField: string;
    xAxisName?: string;
    yAxisName?: string;
};
export declare type SimpleTableOutputType = {
    dataSource: StringMap<string>[];
    columns: StringMap<string>[];
    totalStudents: number;
};
export declare type StringMap<T> = {
    [key: string]: T;
};
export declare type DateRangeType = {
    start: string;
    end: string;
};
export declare type InsightParamsType = {
    start: string;
    end: string;
    limit: number;
    offset: number;
};
export declare const ERROR_MESSAGES: {
    common: {
        pageOutOfBounds: string;
    };
    courseController: {
        checkIn: {
            cannotCheckIntoMultipleQueues: string;
        };
        courseAlreadyRegistered: string;
        courseNotFound: string;
        sectionGroupNotFound: string;
        courseOfficeHourError: string;
        courseHeatMapError: string;
        courseCrnsError: string;
        courseModelError: string;
        noUserFound: string;
        noSemesterFound: string;
        updatedQueueError: string;
        queuesNotFound: string;
        queueNotFound: string;
        queueAlreadyExists: string;
        queueNotAuthorized: string;
        saveQueueError: string;
        clearQueueError: string;
        createEventError: string;
        icalCalendarUpdate: string;
        checkInTime: string;
        removeCourse: string;
        createCourse: string;
        updateCourse: string;
        createCourseMappings: string;
        updateProfLastRegistered: string;
        invalidApplyURL: string;
        crnAlreadyRegistered: (crn: number, courseId: number) => string;
    };
    questionController: {
        createQuestion: {
            invalidQueue: string;
            noNewQuestions: string;
            closedQueue: string;
            oneQuestionAtATime: string;
        };
        updateQuestion: {
            fsmViolation: (role: string, questionStatus: string, bodyStatus: string) => string;
            taOnlyEditQuestionStatus: string;
            otherTAHelping: string;
            otherTAResolved: string;
            taHelpingOther: string;
            loginUserCantEdit: string;
        };
        groupQuestions: {
            notGroupable: string;
        };
        saveQError: string;
        notFound: string;
        unableToNotifyUser: string;
    };
    loginController: {
        receiveDataFromKhoury: string;
        invalidPayload: string;
        invalidTempJWTToken: string;
        addUserFromKhoury: string;
    };
    notificationController: {
        messageNotFromTwilio: string;
    };
    notificationService: {
        registerPhone: string;
    };
    questionRoleGuard: {
        questionNotFound: string;
        queueOfQuestionNotFound: string;
        queueDoesNotExist: string;
    };
    queueController: {
        getQueue: string;
        getQuestions: string;
        saveQueue: string;
        cleanQueue: string;
        cannotCloseQueue: string;
        missingStaffList: string;
    };
    queueRoleGuard: {
        queueNotFound: string;
    };
    releaseNotesController: {
        releaseNotesTime: (e: any) => string;
    };
    insightsController: {
        insightUnathorized: string;
        insightNameNotFound: string;
        insightsDisabled: string;
    };
    roleGuard: {
        notLoggedIn: string;
        noCourseIdFound: string;
        notInCourse: string;
        mustBeRoleToJoinCourse: (roles: string[]) => string;
    };
    profileController: {
        accountNotAvailable: string;
        userResponseNotFound: string;
        noDiskSpace: string;
    };
    alertController: {
        duplicateAlert: string;
        notActiveAlert: string;
        incorrectPayload: string;
    };
    sseService: {
        getSubClient: string;
        getDBClient: string;
        getPubClient: string;
        moduleDestroy: string;
        cleanupConnection: string;
        clientIdSubscribe: string;
        subscribe: string;
        unsubscribe: string;
        removeFromRoom: string;
        directConnections: string;
        roomMembers: string;
        serialize: string;
        publish: string;
        clientIdNotFound: string;
    };
    resourcesService: {
        noDiskSpace: string;
        saveCalError: string;
    };
};
