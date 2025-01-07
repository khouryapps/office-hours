/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);

Object.defineProperty(exports, "__esModule", ({ value: true }));
const bootstrap_1 = __webpack_require__(1);
(0, bootstrap_1.bootstrap)(module.hot);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addGlobalsToApp = exports.bootstrap = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const core_1 = __webpack_require__(7);
const integrations_1 = __webpack_require__(8);
const Sentry = __webpack_require__(9);
const Tracing = __webpack_require__(10);
const cookieParser = __webpack_require__(11);
const morgan = __webpack_require__(12);
const app_module_1 = __webpack_require__(13);
const stripUndefined_pipe_1 = __webpack_require__(134);
async function bootstrap(hot) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });
    if (process.env.NODE_ENV === 'production') {
        setupAPM(app);
    }
    app.enableShutdownHooks();
    addGlobalsToApp(app);
    app.setGlobalPrefix('api/v1');
    if ((0, common_1.isProd)()) {
        console.log(`Running production at ${process.env.DOMAIN}.`);
    }
    else {
        console.log(`Running non-production at ${process.env.DOMAIN}. THIS MSG SHOULD NOT APPEAR ON PROD VM`);
    }
    addGlobalsToApp(app);
    app.setGlobalPrefix('api/v1');
    app.use(morgan('dev'));
    await app.listen(3002);
    if (hot) {
        hot.accept();
        hot.dispose(() => app.close());
    }
}
exports.bootstrap = bootstrap;
function setupAPM(app) {
    Sentry.init({
        dsn: process.env.SENTRY_APM_DSN,
        tracesSampleRate: 0.2,
        integrations: [
            new Sentry.Integrations.Http({ tracing: true }),
            new Tracing.Integrations.Postgres(),
            new Tracing.Integrations.Express({
                app: app.getHttpAdapter().getInstance(),
            }),
            new integrations_1.RewriteFrames(),
        ],
        release: process.env.SERVICE_VERSION,
        environment: (0, common_1.getEnv)(),
    });
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
}
function addGlobalsToApp(app) {
    app.useGlobalPipes(new common_2.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalPipes(new stripUndefined_pipe_1.StripUndefinedPipe());
    app.use(cookieParser());
}
exports.addGlobalsToApp = addGlobalsToApp;


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertPayload = exports.AlertType = exports.TACheckinPair = exports.TACheckinTimesResponse = exports.UpdateQueueParams = exports.TACheckoutResponse = exports.ResolveGroupParams = exports.GroupQuestionsParams = exports.UpdateQuestionResponse = exports.UpdateQuestionParams = exports.CreateQuestionResponse = exports.CreateQuestionParams = exports.GetStudentQuestionResponse = exports.GetQuestionResponse = exports.ListQuestionsResponse = exports.GetCourseQueuesResponse = exports.GetQueueResponse = exports.UpdateCourseOverrideResponse = exports.UpdateCourseOverrideBody = exports.GetCourseOverridesResponse = exports.GetCourseOverridesRow = exports.GetSelfEnrollResponse = exports.GetCourseUserInfoResponse = exports.GetCourseResponse = exports.UpdateProfileParams = exports.isKhouryCourse = exports.KhouryProfCourse = exports.KhouryCourse = exports.KhouryDataParams = exports.GetProfileResponse = exports.QuestionGroup = exports.QuestionStatusKeys = exports.StatusSentToCreator = exports.StatusInPriorityQueue = exports.StatusInQueue = exports.ClosedQuestionStatus = exports.LimboQuestionStatus = exports.OpenQuestionStatus = exports.QuestionType = exports.Question = exports.QueuePartial = exports.Role = exports.UserPartial = exports.DesktopNotifPartial = exports.User = exports.timeDiffInMins = exports.isProd = exports.getEnv = exports.STAGING_URL = exports.PROD_URL = void 0;
exports.ERROR_MESSAGES = exports.InsightComponent = exports.SSEQueueResponse = exports.SemesterPartial = exports.EditCourseInfoParams = exports.RegisterCourseParams = exports.GetAlertsResponse = exports.CreateAlertResponse = exports.CreateAlertParams = exports.RephraseQuestionPayload = exports.Alert = void 0;
const class_transformer_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(4);
__webpack_require__(5);
exports.PROD_URL = "https://officehours.khoury.northeastern.edu";
exports.STAGING_URL = "https://staging.khouryofficehours.com";
const domain = () => {
    var _a;
    return process.env.DOMAIN ||
        (typeof window !== "undefined" && ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.origin));
};
const getEnv = () => {
    switch (domain()) {
        case exports.PROD_URL:
            return "production";
        case exports.STAGING_URL:
            return "staging";
        default:
            return "dev";
    }
};
exports.getEnv = getEnv;
const isProd = () => domain() === exports.PROD_URL;
exports.isProd = isProd;
function timeDiffInMins(a, b) {
    return (a.getTime() - b.getTime()) / (1000 * 60);
}
exports.timeDiffInMins = timeDiffInMins;
class User {
}
__decorate([
    (0, class_transformer_1.Type)(() => DesktopNotifPartial),
    __metadata("design:type", Array)
], User.prototype, "desktopNotifs", void 0);
exports.User = User;
class DesktopNotifPartial {
}
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DesktopNotifPartial.prototype, "createdAt", void 0);
exports.DesktopNotifPartial = DesktopNotifPartial;
class UserPartial {
}
exports.UserPartial = UserPartial;
var Role;
(function (Role) {
    Role["STUDENT"] = "student";
    Role["TA"] = "ta";
    Role["PROFESSOR"] = "professor";
})(Role = exports.Role || (exports.Role = {}));
class QueuePartial {
}
__decorate([
    (0, class_transformer_1.Type)(() => UserPartial),
    __metadata("design:type", Array)
], QueuePartial.prototype, "staffList", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], QueuePartial.prototype, "startTime", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], QueuePartial.prototype, "endTime", void 0);
exports.QueuePartial = QueuePartial;
class Question {
}
__decorate([
    (0, class_transformer_1.Type)(() => UserPartial),
    __metadata("design:type", UserPartial)
], Question.prototype, "creator", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => UserPartial),
    __metadata("design:type", UserPartial)
], Question.prototype, "taHelped", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], Question.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], Question.prototype, "helpedAt", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], Question.prototype, "closedAt", void 0);
exports.Question = Question;
var QuestionType;
(function (QuestionType) {
    QuestionType["Concept"] = "Concept";
    QuestionType["Clarification"] = "Clarification";
    QuestionType["Testing"] = "Testing";
    QuestionType["Bug"] = "Bug";
    QuestionType["Setup"] = "Setup";
    QuestionType["Other"] = "Other";
})(QuestionType = exports.QuestionType || (exports.QuestionType = {}));
var OpenQuestionStatus;
(function (OpenQuestionStatus) {
    OpenQuestionStatus["Drafting"] = "Drafting";
    OpenQuestionStatus["Queued"] = "Queued";
    OpenQuestionStatus["Helping"] = "Helping";
    OpenQuestionStatus["PriorityQueued"] = "PriorityQueued";
})(OpenQuestionStatus = exports.OpenQuestionStatus || (exports.OpenQuestionStatus = {}));
var LimboQuestionStatus;
(function (LimboQuestionStatus) {
    LimboQuestionStatus["CantFind"] = "CantFind";
    LimboQuestionStatus["ReQueueing"] = "ReQueueing";
    LimboQuestionStatus["TADeleted"] = "TADeleted";
})(LimboQuestionStatus = exports.LimboQuestionStatus || (exports.LimboQuestionStatus = {}));
var ClosedQuestionStatus;
(function (ClosedQuestionStatus) {
    ClosedQuestionStatus["Resolved"] = "Resolved";
    ClosedQuestionStatus["DeletedDraft"] = "DeletedDraft";
    ClosedQuestionStatus["ConfirmedDeleted"] = "ConfirmedDeleted";
    ClosedQuestionStatus["Stale"] = "Stale";
})(ClosedQuestionStatus = exports.ClosedQuestionStatus || (exports.ClosedQuestionStatus = {}));
exports.StatusInQueue = [
    OpenQuestionStatus.Drafting,
    OpenQuestionStatus.Queued,
];
exports.StatusInPriorityQueue = [OpenQuestionStatus.PriorityQueued];
exports.StatusSentToCreator = [
    ...exports.StatusInPriorityQueue,
    ...exports.StatusInQueue,
    OpenQuestionStatus.Helping,
    LimboQuestionStatus.ReQueueing,
    LimboQuestionStatus.CantFind,
    LimboQuestionStatus.TADeleted,
];
exports.QuestionStatusKeys = Object.assign(Object.assign(Object.assign({}, OpenQuestionStatus), ClosedQuestionStatus), LimboQuestionStatus);
class QuestionGroup {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], QuestionGroup.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Question),
    __metadata("design:type", Array)
], QuestionGroup.prototype, "questions", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => UserPartial),
    __metadata("design:type", UserPartial)
], QuestionGroup.prototype, "creator", void 0);
exports.QuestionGroup = QuestionGroup;
class GetProfileResponse extends User {
}
exports.GetProfileResponse = GetProfileResponse;
class KhouryDataParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryDataParams.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryDataParams.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryDataParams.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], KhouryDataParams.prototype, "campus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryDataParams.prototype, "photo_url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Array)
], KhouryDataParams.prototype, "courses", void 0);
exports.KhouryDataParams = KhouryDataParams;
class KhouryCourse {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], KhouryCourse.prototype, "crn", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryCourse.prototype, "semester", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(String),
    __metadata("design:type", String)
], KhouryCourse.prototype, "role", void 0);
exports.KhouryCourse = KhouryCourse;
class KhouryProfCourse {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], KhouryProfCourse.prototype, "crns", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryProfCourse.prototype, "semester", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KhouryProfCourse.prototype, "name", void 0);
exports.KhouryProfCourse = KhouryProfCourse;
function isKhouryCourse(c) {
    return (c.role !== undefined &&
        c.crn !== undefined);
}
exports.isKhouryCourse = isKhouryCourse;
class UpdateProfileParams {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateProfileParams.prototype, "desktopNotifsEnabled", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateProfileParams.prototype, "phoneNotifsEnabled", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.phoneNotifsEnabled),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileParams.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileParams.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileParams.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileParams.prototype, "defaultMessage", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateProfileParams.prototype, "includeDefaultMessage", void 0);
exports.UpdateProfileParams = UpdateProfileParams;
class GetCourseResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => QueuePartial),
    __metadata("design:type", Array)
], GetCourseResponse.prototype, "queues", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array)
], GetCourseResponse.prototype, "crns", void 0);
exports.GetCourseResponse = GetCourseResponse;
class GetCourseUserInfoResponse {
}
exports.GetCourseUserInfoResponse = GetCourseUserInfoResponse;
class GetSelfEnrollResponse {
}
exports.GetSelfEnrollResponse = GetSelfEnrollResponse;
class GetCourseOverridesRow {
}
exports.GetCourseOverridesRow = GetCourseOverridesRow;
class GetCourseOverridesResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => GetCourseOverridesRow),
    __metadata("design:type", Array)
], GetCourseOverridesResponse.prototype, "data", void 0);
exports.GetCourseOverridesResponse = GetCourseOverridesResponse;
class UpdateCourseOverrideBody {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseOverrideBody.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCourseOverrideBody.prototype, "role", void 0);
exports.UpdateCourseOverrideBody = UpdateCourseOverrideBody;
class UpdateCourseOverrideResponse extends GetCourseOverridesRow {
}
exports.UpdateCourseOverrideResponse = UpdateCourseOverrideResponse;
class GetQueueResponse extends QueuePartial {
}
exports.GetQueueResponse = GetQueueResponse;
class GetCourseQueuesResponse extends Array {
}
exports.GetCourseQueuesResponse = GetCourseQueuesResponse;
class ListQuestionsResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => Question),
    __metadata("design:type", Question)
], ListQuestionsResponse.prototype, "yourQuestion", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Question),
    __metadata("design:type", Array)
], ListQuestionsResponse.prototype, "questionsGettingHelp", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Question),
    __metadata("design:type", Array)
], ListQuestionsResponse.prototype, "queue", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Question),
    __metadata("design:type", Array)
], ListQuestionsResponse.prototype, "priorityQueue", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => QuestionGroup),
    __metadata("design:type", Array)
], ListQuestionsResponse.prototype, "groups", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => AlertPayload),
    __metadata("design:type", Array)
], ListQuestionsResponse.prototype, "unresolvedAlerts", void 0);
exports.ListQuestionsResponse = ListQuestionsResponse;
class GetQuestionResponse extends Question {
}
exports.GetQuestionResponse = GetQuestionResponse;
class GetStudentQuestionResponse extends Question {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetStudentQuestionResponse.prototype, "queueId", void 0);
exports.GetStudentQuestionResponse = GetStudentQuestionResponse;
class CreateQuestionParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuestionParams.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(QuestionType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuestionParams.prototype, "questionType", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateQuestionParams.prototype, "groupable", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQuestionParams.prototype, "queueId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuestionParams.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateQuestionParams.prototype, "force", void 0);
exports.CreateQuestionParams = CreateQuestionParams;
class CreateQuestionResponse extends Question {
}
exports.CreateQuestionResponse = CreateQuestionResponse;
class UpdateQuestionParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuestionParams.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(QuestionType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuestionParams.prototype, "questionType", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateQuestionParams.prototype, "groupable", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQuestionParams.prototype, "queueId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(exports.QuestionStatusKeys),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuestionParams.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuestionParams.prototype, "location", void 0);
exports.UpdateQuestionParams = UpdateQuestionParams;
class UpdateQuestionResponse extends Question {
}
exports.UpdateQuestionResponse = UpdateQuestionResponse;
class GroupQuestionsParams {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array)
], GroupQuestionsParams.prototype, "questionIds", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GroupQuestionsParams.prototype, "queueId", void 0);
exports.GroupQuestionsParams = GroupQuestionsParams;
class ResolveGroupParams {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ResolveGroupParams.prototype, "queueId", void 0);
exports.ResolveGroupParams = ResolveGroupParams;
class TACheckoutResponse {
}
exports.TACheckoutResponse = TACheckoutResponse;
class UpdateQueueParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQueueParams.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateQueueParams.prototype, "allowQuestions", void 0);
exports.UpdateQueueParams = UpdateQueueParams;
class TACheckinTimesResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => TACheckinPair),
    __metadata("design:type", Array)
], TACheckinTimesResponse.prototype, "taCheckinTimes", void 0);
exports.TACheckinTimesResponse = TACheckinTimesResponse;
class TACheckinPair {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TACheckinPair.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], TACheckinPair.prototype, "checkinTime", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], TACheckinPair.prototype, "checkoutTime", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TACheckinPair.prototype, "forced", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TACheckinPair.prototype, "inProgress", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TACheckinPair.prototype, "numHelped", void 0);
exports.TACheckinPair = TACheckinPair;
var AlertType;
(function (AlertType) {
    AlertType["REPHRASE_QUESTION"] = "rephraseQuestion";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
class AlertPayload {
}
exports.AlertPayload = AlertPayload;
class Alert {
}
__decorate([
    (0, class_validator_1.IsEnum)(AlertType),
    __metadata("design:type", String)
], Alert.prototype, "alertType", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Alert.prototype, "sent", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => AlertPayload),
    __metadata("design:type", AlertPayload)
], Alert.prototype, "payload", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Alert.prototype, "id", void 0);
exports.Alert = Alert;
class RephraseQuestionPayload extends AlertPayload {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RephraseQuestionPayload.prototype, "questionId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RephraseQuestionPayload.prototype, "queueId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RephraseQuestionPayload.prototype, "courseId", void 0);
exports.RephraseQuestionPayload = RephraseQuestionPayload;
class CreateAlertParams {
}
__decorate([
    (0, class_validator_1.IsEnum)(AlertType),
    __metadata("design:type", String)
], CreateAlertParams.prototype, "alertType", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAlertParams.prototype, "courseId", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", AlertPayload)
], CreateAlertParams.prototype, "payload", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAlertParams.prototype, "targetUserId", void 0);
exports.CreateAlertParams = CreateAlertParams;
class CreateAlertResponse extends Alert {
}
exports.CreateAlertResponse = CreateAlertResponse;
class GetAlertsResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => Alert),
    __metadata("design:type", Array)
], GetAlertsResponse.prototype, "alerts", void 0);
exports.GetAlertsResponse = GetAlertsResponse;
class RegisterCourseParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCourseParams.prototype, "sectionGroupName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCourseParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCourseParams.prototype, "iCalURL", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCourseParams.prototype, "coordinator_email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCourseParams.prototype, "timezone", void 0);
exports.RegisterCourseParams = RegisterCourseParams;
class EditCourseInfoParams {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCourseInfoParams.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCourseInfoParams.prototype, "coordinator_email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditCourseInfoParams.prototype, "icalURL", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Array)
], EditCourseInfoParams.prototype, "crns", void 0);
exports.EditCourseInfoParams = EditCourseInfoParams;
class SemesterPartial {
}
exports.SemesterPartial = SemesterPartial;
class SSEQueueResponse {
}
exports.SSEQueueResponse = SSEQueueResponse;
var InsightComponent;
(function (InsightComponent) {
    InsightComponent["SimpleDisplay"] = "SimpleDisplay";
    InsightComponent["BarChart"] = "BarChart";
    InsightComponent["SimpleTable"] = "SimpleTable";
})(InsightComponent = exports.InsightComponent || (exports.InsightComponent = {}));
exports.ERROR_MESSAGES = {
    common: {
        pageOutOfBounds: "Can't retrieve out of bounds page.",
    },
    courseController: {
        checkIn: {
            cannotCheckIntoMultipleQueues: "Cannot check into multiple queues at the same time",
        },
        courseAlreadyRegistered: "One or more of the courses is already registered",
        courseNotFound: "The course was not found",
        sectionGroupNotFound: "One or more of the section groups was not found",
        courseOfficeHourError: "Unable to find a course's office hours",
        courseHeatMapError: "Unable to get course's cached heatmap",
        courseCrnsError: "Unable to get course's crn numbers",
        courseModelError: "Course Model not found",
        noUserFound: "No user found with given email",
        noSemesterFound: "No semester exists for the submitted course",
        updatedQueueError: "Error updating a course queue",
        queuesNotFound: "Queues not found",
        queueNotFound: "Queue not found",
        queueAlreadyExists: "Queue already exists.",
        queueNotAuthorized: "Unable to join this professor queue as a TA",
        saveQueueError: "Unable to save queue",
        clearQueueError: "Unable to determine if queue can be cleared",
        createEventError: "An error occurred while creating an event",
        icalCalendarUpdate: "Unable to update calendar",
        checkInTime: "Unable to get TA check in times",
        removeCourse: "Error occurred while trying to remove a course",
        createCourse: "Error occurred while trying to create a course",
        updateCourse: "Error occurred while trying to update a course",
        createCourseMappings: "Unable to create a course mappings",
        updateProfLastRegistered: "Unable to update professor's last registered semester",
        invalidApplyURL: "You are unauthorized to submit an application. Please email help@khouryofficehours.com for the correct URL.",
        crnAlreadyRegistered: (crn, courseId) => `The CRN ${crn} already exists for another course with course id ${courseId}`,
    },
    questionController: {
        createQuestion: {
            invalidQueue: "Posted to an invalid queue",
            noNewQuestions: "Queue not allowing new questions",
            closedQueue: "Queue is closed",
            oneQuestionAtATime: "You can't create more than one question at a time.",
        },
        updateQuestion: {
            fsmViolation: (role, questionStatus, bodyStatus) => `${role} cannot change status from ${questionStatus} to ${bodyStatus}`,
            taOnlyEditQuestionStatus: "TA/Professors can only edit question status",
            otherTAHelping: "Another TA is currently helping with this question",
            otherTAResolved: "Another TA has already resolved this question",
            taHelpingOther: "TA is already helping someone else",
            loginUserCantEdit: "Logged-in user does not have edit access",
        },
        groupQuestions: {
            notGroupable: "One or more of the questions is not groupable",
        },
        saveQError: "Unable to save a question",
        notFound: "Question not found",
        unableToNotifyUser: "Unable to notify user",
    },
    loginController: {
        receiveDataFromKhoury: "Invalid request signature",
        invalidPayload: "The decoded JWT payload is invalid",
        invalidTempJWTToken: "Error occurred while signing a JWT token",
        addUserFromKhoury: "Error occurred while translating account from Khoury to Office Hours",
    },
    notificationController: {
        messageNotFromTwilio: "Message not from Twilio",
    },
    notificationService: {
        registerPhone: "phone number invalid",
    },
    questionRoleGuard: {
        questionNotFound: "Question not found",
        queueOfQuestionNotFound: "Cannot find queue of question",
        queueDoesNotExist: "This queue does not exist!",
    },
    queueController: {
        getQueue: "An error occurred while trying to retrieve a Queue",
        getQuestions: "Unable to get questions from queue",
        saveQueue: "Unable to save queue",
        cleanQueue: "Unable to clean queue",
        cannotCloseQueue: "Unable to close professor queue as a TA",
        missingStaffList: "Stafflist relation not present on Queue",
    },
    queueRoleGuard: {
        queueNotFound: "Queue not found",
    },
    releaseNotesController: {
        releaseNotesTime: (e) => "Error Parsing release notes time: " + e,
    },
    insightsController: {
        insightUnathorized: "User is not authorized to view this insight",
        insightNameNotFound: "The insight requested was not found",
        insightsDisabled: "Insights are currently unavailable, sorry :(",
    },
    roleGuard: {
        notLoggedIn: "Must be logged in",
        noCourseIdFound: "No courseid found",
        notInCourse: "Not In This Course",
        mustBeRoleToJoinCourse: (roles) => `You must have one of roles [${roles.join(", ")}] to access this course`,
    },
    profileController: {
        accountNotAvailable: "The user account is undefined",
        userResponseNotFound: "The user response was not found",
        noDiskSpace: "There is no disk space left to store an image. Please immediately contact your course staff and let them know. They will contact the Khoury Office Hours team as soon as possible.",
    },
    alertController: {
        duplicateAlert: "This alert has already been sent",
        notActiveAlert: "This is not an alert that's open for the current user",
        incorrectPayload: "The payload provided was not of the correct type",
    },
    sseService: {
        getSubClient: "Unable to get the redis subscriber client",
        getDBClient: "Unable to get the redis database client",
        getPubClient: "Unable to get publisher client",
        moduleDestroy: "Unable to destroy the redis module",
        cleanupConnection: "Unable to cleanup the connection",
        clientIdSubscribe: "Client ID not found during subscribing to client",
        subscribe: "Unable to subscribe to the client",
        unsubscribe: "Unable to unsubscribe from the client",
        removeFromRoom: "Error removing from redis room",
        directConnections: "Unable to cleanup direct connections",
        roomMembers: "Unable to get room members",
        serialize: "Unable to serialize payload",
        publish: "Publisher client is unable to publish",
        clientIdNotFound: "Client ID not found during subscribing to client",
    },
    resourcesService: {
        noDiskSpace: "There is no disk space left to store a iCal file. Please immediately contact your course staff and let them know. They will contact the Khoury Office Hours team as soon as possible.",
        saveCalError: "There was an error saving an iCal to disk",
    },
};


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@sentry/integrations");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@sentry/node");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@sentry/tracing");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
const schedule_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(16);
const insights_module_1 = __webpack_require__(17);
const alerts_module_1 = __webpack_require__(41);
const backfill_module_1 = __webpack_require__(45);
const nestjs_command_1 = __webpack_require__(19);
const nestjs_redis_1 = __webpack_require__(58);
const release_notes_module_1 = __webpack_require__(59);
const typeormConfig = __webpack_require__(61);
const admin_module_1 = __webpack_require__(68);
const course_module_1 = __webpack_require__(77);
const healthcheck_module_1 = __webpack_require__(104);
const login_module_1 = __webpack_require__(90);
const notification_module_1 = __webpack_require__(46);
const profile_module_1 = __webpack_require__(107);
const question_module_1 = __webpack_require__(116);
const queue_module_1 = __webpack_require__(78);
const seed_module_1 = __webpack_require__(121);
const sse_module_1 = __webpack_require__(88);
const semester_module_1 = __webpack_require__(126);
const resources_module_1 = __webpack_require__(130);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeormConfig),
            schedule_1.ScheduleModule.forRoot(),
            login_module_1.LoginModule,
            profile_module_1.ProfileModule,
            course_module_1.CourseModule,
            queue_module_1.QueueModule,
            notification_module_1.NotificationModule,
            question_module_1.QuestionModule,
            seed_module_1.SeedModule,
            resources_module_1.ResourcesModule,
            config_1.ConfigModule.forRoot({
                envFilePath: [
                    '.env',
                    ...(process.env.NODE_ENV !== 'production' ? ['.env.development'] : []),
                ],
                isGlobal: true,
            }),
            admin_module_1.AdminModule,
            nestjs_command_1.CommandModule,
            sse_module_1.SSEModule,
            backfill_module_1.BackfillModule,
            release_notes_module_1.ReleaseNotesModule,
            insights_module_1.InsightsModule,
            nestjs_redis_1.RedisModule.register([{ name: 'pub' }, { name: 'sub' }, { name: 'db' }]),
            healthcheck_module_1.HealthcheckModule,
            alerts_module_1.AlertsModule,
            semester_module_1.SemesterModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InsightsModule = void 0;
const common_1 = __webpack_require__(6);
const insights_command_1 = __webpack_require__(18);
const insights_service_1 = __webpack_require__(21);
const insights_controller_1 = __webpack_require__(35);
let InsightsModule = class InsightsModule {
};
InsightsModule = __decorate([
    (0, common_1.Module)({
        controllers: [insights_controller_1.InsightsController],
        imports: [common_1.CacheModule.register()],
        providers: [insights_command_1.InsightsCommand, insights_service_1.InsightsService],
    })
], InsightsModule);
exports.InsightsModule = InsightsModule;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InsightsCommand = void 0;
const nestjs_command_1 = __webpack_require__(19);
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(20);
const insights_service_1 = __webpack_require__(21);
const insight_objects_1 = __webpack_require__(22);
let InsightsCommand = class InsightsCommand {
    constructor(connection, insightsService) {
        this.connection = connection;
        this.insightsService = insightsService;
    }
    async generateSemesterInsights(courseId) {
        const insights = await this.insightsService.generateAllInsights({
            insights: [
                insight_objects_1.INSIGHTS_MAP.TotalStudents,
                insight_objects_1.INSIGHTS_MAP.QuestionTypeBreakdown,
            ],
            filters: [
                {
                    type: 'courseId',
                    conditional: `"courseId" = ${courseId}`,
                },
            ],
        });
        for (const insight of Object.values(insights)) {
            console.log('Name:   ', insight['displayName']);
            console.log('Output: ', insight['output']);
            console.log('-');
        }
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'semester_insights:generate <courseId>',
        describe: 'aggregates semesterly analytics for a course',
        autoExit: true,
    }),
    __param(0, (0, nestjs_command_1.Positional)({
        name: 'courseId',
        describe: 'the id of the coure to aggregate data for',
        type: 'number',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InsightsCommand.prototype, "generateSemesterInsights", null);
InsightsCommand = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        insights_service_1.InsightsService])
], InsightsCommand);
exports.InsightsCommand = InsightsCommand;


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("nestjs-command");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InsightsService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(20);
const insight_objects_1 = __webpack_require__(22);
let InsightsService = class InsightsService {
    constructor(connection, cacheManager) {
        this.connection = connection;
        this.cacheManager = cacheManager;
    }
    async computeOutput({ insight, filters, }) {
        const output = await insight.compute(filters, this.cacheManager);
        return output;
    }
    async generateAllInsights({ insights, filters, }) {
        return await Promise.all(insights.map(async (insight) => await this.computeOutput({ insight, filters })));
    }
    convertToInsightsListResponse(insightNames) {
        return insightNames.reduce((obj, insightName) => {
            const { displayName, description, component, size } = insight_objects_1.INSIGHTS_MAP[insightName];
            return Object.assign(Object.assign({}, obj), { [insightName]: {
                    displayName,
                    description,
                    component,
                    size,
                } });
        }, {});
    }
    async toggleInsightOn(user, insightName) {
        var _a;
        user.hideInsights = (_a = user.hideInsights) === null || _a === void 0 ? void 0 : _a.filter((insight) => insight !== insightName);
        await user.save();
        return;
    }
    async toggleInsightOff(user, insightName) {
        if (user.hideInsights === null) {
            user.hideInsights = [];
        }
        user.hideInsights = [insightName, ...user.hideInsights];
        await user.save();
        return;
    }
};
InsightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_1.Connection, Object])
], InsightsService);
exports.InsightsService = InsightsService;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.INSIGHTS_MAP = exports.QuestionToStudentRatio = exports.MedianHelpingTime = exports.MedianWaitTime = exports.QuestionTypeBreakdown = exports.MostActiveStudents = exports.TotalQuestionsAsked = exports.TotalStudents = void 0;
const common_1 = __webpack_require__(2);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const question_entity_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(20);
function addFilters({ query, modelName, allowedFilters, filters, }) {
    for (const filter of filters) {
        if (allowedFilters.includes(filter.type)) {
            APPLY_FILTER_MAP[modelName][filter.type]({ query, filter });
        }
    }
    return query;
}
const APPLY_FILTER_MAP = {
    QuestionModel: {
        courseId: ({ query, filter }) => {
            query
                .innerJoin('QuestionModel.queue', 'queue')
                .andWhere('queue."courseId" = :courseId', {
                courseId: filter.courseId,
            });
        },
        timeframe: ({ query, filter }) => {
            query.andWhere('QuestionModel.createdAt BETWEEN :start AND :end', {
                start: filter.start,
                end: filter.end,
            });
        },
    },
    UserCourseModel: {
        courseId: ({ query, filter }) => {
            query.andWhere('"courseId" = :courseId', {
                courseId: filter.courseId,
            });
        },
    },
};
exports.TotalStudents = {
    displayName: 'Total Students',
    description: 'What is the total number of students that are enrolled in the course?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleDisplay,
    size: 'small',
    async compute(filters) {
        return await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(user_course_entity_1.UserCourseModel).where("role = 'student'"),
            modelName: user_course_entity_1.UserCourseModel.name,
            allowedFilters: ['courseId', 'role'],
            filters,
        }).getCount();
    },
};
exports.TotalQuestionsAsked = {
    displayName: 'Total Questions',
    description: 'How many questions have been asked in total?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleDisplay,
    size: 'small',
    async compute(filters) {
        return await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(question_entity_1.QuestionModel).select(),
            modelName: question_entity_1.QuestionModel.name,
            allowedFilters: ['courseId', 'timeframe'],
            filters,
        }).getCount();
    },
};
exports.MostActiveStudents = {
    displayName: 'Most Active Students',
    description: 'Who are the students who have asked the most questions in Office Hours?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleTable,
    size: 'default',
    async compute(filters, cacheManager) {
        const dataSource = await getCachedActiveStudents(cacheManager, filters);
        const totalStudents = await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(user_course_entity_1.UserCourseModel).where("role = 'student'"),
            modelName: user_course_entity_1.UserCourseModel.name,
            allowedFilters: ['courseId', 'role'],
            filters,
        }).getCount();
        return {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Questions Asked',
                    dataIndex: 'questionsAsked',
                    key: 'questionsAsked',
                },
            ],
            dataSource,
            totalStudents,
        };
    },
};
const getCachedActiveStudents = async (cacheManager, filters) => {
    const courseId = filters.find((filter) => filter.type === 'courseId')['courseId'];
    const timeframe = filters.find((filter) => filter.type === 'timeframe');
    const getStartString = timeframe
        ? `${timeframe['start'].getDay()}-${timeframe['start'].getMonth()}-${timeframe['start'].getFullYear()}`
        : '';
    const getEndString = timeframe
        ? `${timeframe['start'].getDay()}-${timeframe['start'].getMonth()}-${timeframe['start'].getFullYear()}`
        : '';
    const cacheLengthInSeconds = 3600;
    return cacheManager.wrap(`questions/${courseId}/${getStartString}:${getEndString}`, () => getActiveStudents(filters), { ttl: cacheLengthInSeconds });
};
const getActiveStudents = async (filters) => {
    const activeStudents = await addFilters({
        query: (0, typeorm_1.createQueryBuilder)()
            .select('"QuestionModel"."creatorId"', 'studentId')
            .addSelect('concat("UserModel"."firstName", \' \',"UserModel"."lastName")', 'name')
            .addSelect('"UserModel"."email"', 'email')
            .addSelect('COUNT(*)', 'questionsAsked')
            .from(question_entity_1.QuestionModel, 'QuestionModel')
            .where('"QuestionModel"."questionType" IS NOT NULL'),
        modelName: question_entity_1.QuestionModel.name,
        allowedFilters: ['courseId', 'timeframe'],
        filters,
    })
        .innerJoin(user_entity_1.UserModel, 'UserModel', '"UserModel".id = "QuestionModel"."creatorId"')
        .groupBy('"QuestionModel"."creatorId"')
        .addGroupBy('name')
        .addGroupBy('"UserModel".email')
        .orderBy('4', 'DESC')
        .getRawMany();
    return activeStudents;
};
exports.QuestionTypeBreakdown = {
    displayName: 'Question Type Breakdown',
    description: 'What is the distribution of student-selected question-types on the question form?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.BarChart,
    size: 'default',
    async compute(filters) {
        const info = await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(question_entity_1.QuestionModel)
                .select('"QuestionModel"."questionType"', 'questionType')
                .addSelect('COUNT(*)', 'totalQuestions')
                .andWhere('"QuestionModel"."questionType" IS NOT NULL'),
            modelName: question_entity_1.QuestionModel.name,
            allowedFilters: ['courseId', 'timeframe'],
            filters,
        })
            .groupBy('"QuestionModel"."questionType"')
            .having('"QuestionModel"."questionType" IS NOT NULL')
            .getRawMany();
        const typesFromInfo = info.map((obj) => obj['questionType']);
        info.forEach((pair) => {
            pair['totalQuestions'] = Number.parseInt(pair['totalQuestions']);
        });
        Object.values(common_1.QuestionType).forEach((v) => {
            if (!typesFromInfo.includes(v)) {
                info.push({ questionType: v, totalQuestions: 0 });
            }
        });
        const insightObj = {
            data: info.sort((a, b) => a.questionType === b.questionType
                ? 0
                : a.questionType > b.questionType
                    ? 1
                    : -1),
            xField: 'totalQuestions',
            yField: 'questionType',
            seriesField: 'questionType',
            xAxisName: 'totalQuestions',
            yAxisName: 'questionType',
        };
        return insightObj;
    },
};
exports.MedianWaitTime = {
    displayName: 'Median Wait Time',
    description: 'What is the median wait time for a student to get help in the queue?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleDisplay,
    size: 'small',
    async compute(filters) {
        const questions = await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(question_entity_1.QuestionModel)
                .select()
                .where('QuestionModel.firstHelpedAt IS NOT NULL'),
            modelName: question_entity_1.QuestionModel.name,
            allowedFilters: ['courseId', 'timeframe'],
            filters,
        }).getMany();
        if (questions.length === 0) {
            return `0 min`;
        }
        const waitTimes = questions.map((question) => Math.floor((question.firstHelpedAt.getTime() - question.createdAt.getTime()) /
            1000) / 60);
        return `${Math.floor(Math.round(median(waitTimes)))} min`;
    },
};
exports.MedianHelpingTime = {
    displayName: 'Median Helping Time',
    description: 'What is the median duration that a TA helps a student on a call?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleDisplay,
    size: 'small',
    async compute(filters) {
        const questions = await addFilters({
            query: (0, typeorm_1.createQueryBuilder)(question_entity_1.QuestionModel)
                .select()
                .where('QuestionModel.helpedAt IS NOT NULL AND QuestionModel.closedAt IS NOT NULL'),
            modelName: question_entity_1.QuestionModel.name,
            allowedFilters: ['courseId', 'timeframe'],
            filters,
        }).getMany();
        if (questions.length === 0) {
            return `0 min`;
        }
        const helpTimes = questions.map((question) => Math.floor((question.closedAt.getTime() - question.helpedAt.getTime()) / 1000) / 60);
        return `${Math.round(median(helpTimes))} min`;
    },
};
const median = (numbers) => {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
};
exports.QuestionToStudentRatio = {
    displayName: 'Questions per Student',
    description: 'How many questions were asked per student?',
    roles: [common_1.Role.PROFESSOR],
    component: common_1.InsightComponent.SimpleDisplay,
    size: 'small',
    async compute(filters) {
        const totalQuestions = await exports.TotalQuestionsAsked.compute(filters);
        const totalStudents = await exports.TotalStudents.compute(filters);
        return totalStudents !== 0
            ? (totalQuestions / totalStudents).toFixed(2)
            : '0 students';
    },
};
exports.INSIGHTS_MAP = {
    TotalStudents: exports.TotalStudents,
    TotalQuestionsAsked: exports.TotalQuestionsAsked,
    MedianWaitTime: exports.MedianWaitTime,
    QuestionTypeBreakdown: exports.QuestionTypeBreakdown,
    MostActiveStudents: exports.MostActiveStudents,
    QuestionToStudentRatio: exports.QuestionToStudentRatio,
    MedianHelpingTime: exports.MedianHelpingTime,
};


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCourseModel = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(26);
let UserCourseModel = class UserCourseModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserCourseModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel, (user) => user.courses),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserModel)
], UserCourseModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserCourseModel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => course_entity_1.CourseModel, (course) => course.userCourses),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.CourseModel)
], UserCourseModel.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], UserCourseModel.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: common_1.Role, default: common_1.Role.STUDENT }),
    __metadata("design:type", String)
], UserCourseModel.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCourseModel.prototype, "override", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], UserCourseModel.prototype, "expires", void 0);
UserCourseModel = __decorate([
    (0, typeorm_1.Entity)('user_course_model')
], UserCourseModel);
exports.UserCourseModel = UserCourseModel;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseModel = void 0;
const class_transformer_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(20);
const alerts_entity_1 = __webpack_require__(25);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const queue_entity_1 = __webpack_require__(29);
const semester_entity_1 = __webpack_require__(34);
let CourseModel = class CourseModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => queue_entity_1.QueueModel, (q) => q.course),
    __metadata("design:type", Array)
], CourseModel.prototype, "queues", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], CourseModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], CourseModel.prototype, "sectionGroupName", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], CourseModel.prototype, "coordinator_email", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CourseModel.prototype, "icalURL", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => user_course_entity_1.UserCourseModel, (ucm) => ucm.course),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", user_course_entity_1.UserCourseModel)
], CourseModel.prototype, "userCourses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => semester_entity_1.SemesterModel, (semester) => semester.courses),
    (0, typeorm_1.JoinColumn)({ name: 'semesterId' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", semester_entity_1.SemesterModel)
], CourseModel.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], CourseModel.prototype, "semesterId", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { nullable: true }),
    __metadata("design:type", Boolean)
], CourseModel.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], CourseModel.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => event_model_entity_1.EventModel, (event) => event.course),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], CourseModel.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => alerts_entity_1.AlertModel, (alert) => alert.course),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], CourseModel.prototype, "alerts", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { nullable: true, default: false }),
    __metadata("design:type", Boolean)
], CourseModel.prototype, "selfEnroll", void 0);
CourseModel = __decorate([
    (0, typeorm_1.Entity)('course_model')
], CourseModel);
exports.CourseModel = CourseModel;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertModel = void 0;
const common_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(26);
let AlertModel = class AlertModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AlertModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: common_1.AlertType }),
    __metadata("design:type", String)
], AlertModel.prototype, "alertType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AlertModel.prototype, "sent", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], AlertModel.prototype, "resolved", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel, (user) => user.alerts),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserModel)
], AlertModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], AlertModel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => course_entity_1.CourseModel, (course) => course.alerts),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.CourseModel)
], AlertModel.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], AlertModel.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", common_1.AlertPayload)
], AlertModel.prototype, "payload", void 0);
AlertModel = __decorate([
    (0, typeorm_1.Entity)('alert_model')
], AlertModel);
exports.AlertModel = AlertModel;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModel = void 0;
const class_transformer_1 = __webpack_require__(3);
const insight_objects_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(20);
const desktop_notif_entity_1 = __webpack_require__(27);
const phone_notif_entity_1 = __webpack_require__(28);
const queue_entity_1 = __webpack_require__(29);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const alerts_entity_1 = __webpack_require__(25);
let UserModel = class UserModel extends typeorm_1.BaseEntity {
    computeInsights() {
        let hideInsights = this.hideInsights;
        if (!hideInsights) {
            hideInsights = [];
        }
        const insightNames = Object.keys(insight_objects_1.INSIGHTS_MAP);
        this.insights = insightNames.filter((name) => !hideInsights.includes(name));
    }
    setFullNames() {
        this.name = this.firstName + ' ' + this.lastName;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "photoURL", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], UserModel.prototype, "defaultMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "includeDefaultMessage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => user_course_entity_1.UserCourseModel, (ucm) => ucm.user),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], UserModel.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserModel.prototype, "desktopNotifsEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserModel.prototype, "phoneNotifsEnabled", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => desktop_notif_entity_1.DesktopNotifModel, (notif) => notif.user),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], UserModel.prototype, "desktopNotifs", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => phone_notif_entity_1.PhoneNotifModel, (notif) => notif.user),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", phone_notif_entity_1.PhoneNotifModel)
], UserModel.prototype, "phoneNotif", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToMany)((type) => queue_entity_1.QueueModel, (queue) => queue.staffList),
    __metadata("design:type", Array)
], UserModel.prototype, "queues", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToMany)((type) => event_model_entity_1.EventModel, (event) => event.user),
    __metadata("design:type", Array)
], UserModel.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => alerts_entity_1.AlertModel, (alert) => alert.user),
    __metadata("design:type", Array)
], UserModel.prototype, "alerts", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], UserModel.prototype, "hideInsights", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserModel.prototype, "computeInsights", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserModel.prototype, "setFullNames", null);
UserModel = __decorate([
    (0, typeorm_1.Entity)('user_model')
], UserModel);
exports.UserModel = UserModel;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesktopNotifModel = void 0;
const typeorm_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(26);
let DesktopNotifModel = class DesktopNotifModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DesktopNotifModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DesktopNotifModel.prototype, "endpoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DesktopNotifModel.prototype, "expirationTime", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DesktopNotifModel.prototype, "p256dh", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DesktopNotifModel.prototype, "auth", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel, (user) => user.desktopNotifs),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserModel)
], DesktopNotifModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DesktopNotifModel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], DesktopNotifModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DesktopNotifModel.prototype, "name", void 0);
DesktopNotifModel = __decorate([
    (0, typeorm_1.Entity)('desktop_notif_model')
], DesktopNotifModel);
exports.DesktopNotifModel = DesktopNotifModel;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhoneNotifModel = void 0;
const typeorm_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(26);
let PhoneNotifModel = class PhoneNotifModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PhoneNotifModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PhoneNotifModel.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.UserModel, (user) => user.phoneNotif),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserModel)
], PhoneNotifModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PhoneNotifModel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PhoneNotifModel.prototype, "verified", void 0);
PhoneNotifModel = __decorate([
    (0, typeorm_1.Entity)('phone_notif_model')
], PhoneNotifModel);
exports.PhoneNotifModel = PhoneNotifModel;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueModel = void 0;
const class_transformer_1 = __webpack_require__(3);
const question_group_entity_1 = __webpack_require__(30);
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(26);
const question_entity_1 = __webpack_require__(31);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(2);
let QueueModel = class QueueModel extends typeorm_1.BaseEntity {
    async checkIsOpen() {
        if (!this.staffList) {
            console.error(common_2.ERROR_MESSAGES.queueController.missingStaffList, this.id);
            throw new common_1.HttpException(common_2.ERROR_MESSAGES.queueController.missingStaffList, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        this.isOpen = this.staffList.length > 0 && !this.isDisabled;
        return this.isOpen;
    }
    async addQueueSize() {
        this.queueSize = await question_entity_1.QuestionModel.waitingInQueue(this.id).getCount();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QueueModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => course_entity_1.CourseModel, (course) => course.queues),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.CourseModel)
], QueueModel.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], QueueModel.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], QueueModel.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => question_entity_1.QuestionModel, (qm) => qm.queue),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], QueueModel.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => question_group_entity_1.QuestionGroupModel, (qg) => qg.queue),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Array)
], QueueModel.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], QueueModel.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => user_entity_1.UserModel, (user) => user.queues),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QueueModel.prototype, "staffList", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], QueueModel.prototype, "allowQuestions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], QueueModel.prototype, "isProfessorQueue", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], QueueModel.prototype, "isDisabled", void 0);
QueueModel = __decorate([
    (0, typeorm_1.Entity)('queue_model')
], QueueModel);
exports.QueueModel = QueueModel;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionGroupModel = void 0;
const typeorm_1 = __webpack_require__(20);
const user_course_entity_1 = __webpack_require__(23);
const queue_entity_1 = __webpack_require__(29);
const question_entity_1 = __webpack_require__(31);
let QuestionGroupModel = class QuestionGroupModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionGroupModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => question_entity_1.QuestionModel, (q) => q.group),
    __metadata("design:type", Array)
], QuestionGroupModel.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_course_entity_1.UserCourseModel),
    (0, typeorm_1.JoinColumn)({ name: 'creatorId' }),
    __metadata("design:type", user_course_entity_1.UserCourseModel)
], QuestionGroupModel.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QuestionGroupModel.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => queue_entity_1.QueueModel, (q) => q.groups),
    (0, typeorm_1.JoinColumn)({ name: 'queueId' }),
    __metadata("design:type", queue_entity_1.QueueModel)
], QuestionGroupModel.prototype, "queue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], QuestionGroupModel.prototype, "queueId", void 0);
QuestionGroupModel = __decorate([
    (0, typeorm_1.Entity)('question_group_model')
], QuestionGroupModel);
exports.QuestionGroupModel = QuestionGroupModel;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var QuestionModel_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionModel = void 0;
const common_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
const question_fsm_1 = __webpack_require__(32);
const question_group_entity_1 = __webpack_require__(30);
let QuestionModel = QuestionModel_1 = class QuestionModel extends typeorm_1.BaseEntity {
    changeStatus(newStatus, role) {
        if ((0, question_fsm_1.canChangeQuestionStatus)(this.status, newStatus, role)) {
            this.status = newStatus;
            return true;
        }
        else {
            return false;
        }
    }
    static inQueueWithStatus(queueId, statuses) {
        return this.createQueryBuilder('question')
            .where('question.queueId = :queueId', { queueId })
            .andWhere('question.status IN (:...statuses)', {
            statuses,
        })
            .orderBy('question.createdAt', 'ASC');
    }
    static waitingInQueue(queueId) {
        return QuestionModel_1.inQueueWithStatus(queueId, common_1.StatusInQueue);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => queue_entity_1.QueueModel, (q) => q.questions),
    (0, typeorm_1.JoinColumn)({ name: 'queueId' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", queue_entity_1.QueueModel)
], QuestionModel.prototype, "queue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], QuestionModel.prototype, "queueId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], QuestionModel.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel),
    (0, typeorm_1.JoinColumn)({ name: 'creatorId' }),
    __metadata("design:type", user_entity_1.UserModel)
], QuestionModel.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], QuestionModel.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel),
    (0, typeorm_1.JoinColumn)({ name: 'taHelpedId' }),
    __metadata("design:type", user_entity_1.UserModel)
], QuestionModel.prototype, "taHelped", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], QuestionModel.prototype, "taHelpedId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], QuestionModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], QuestionModel.prototype, "firstHelpedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], QuestionModel.prototype, "helpedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], QuestionModel.prototype, "closedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], QuestionModel.prototype, "questionType", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], QuestionModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QuestionModel.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], QuestionModel.prototype, "groupable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => question_group_entity_1.QuestionGroupModel, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'groupId' }),
    __metadata("design:type", question_group_entity_1.QuestionGroupModel)
], QuestionModel.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], QuestionModel.prototype, "groupId", void 0);
QuestionModel = QuestionModel_1 = __decorate([
    (0, typeorm_1.Entity)('question_model')
], QuestionModel);
exports.QuestionModel = QuestionModel;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.canChangeQuestionStatus = void 0;
const common_1 = __webpack_require__(2);
const QUEUE_TRANSITIONS = {
    ta: [common_1.OpenQuestionStatus.Helping, common_1.LimboQuestionStatus.TADeleted],
    student: [common_1.ClosedQuestionStatus.ConfirmedDeleted],
};
const QUESTION_STATES = {
    [common_1.OpenQuestionStatus.Drafting]: {
        student: [common_1.OpenQuestionStatus.Queued, common_1.ClosedQuestionStatus.ConfirmedDeleted],
        ta: [common_1.OpenQuestionStatus.Helping, common_1.ClosedQuestionStatus.DeletedDraft],
    },
    [common_1.OpenQuestionStatus.Queued]: QUEUE_TRANSITIONS,
    [common_1.OpenQuestionStatus.PriorityQueued]: QUEUE_TRANSITIONS,
    [common_1.OpenQuestionStatus.Helping]: {
        ta: [
            common_1.LimboQuestionStatus.CantFind,
            common_1.LimboQuestionStatus.ReQueueing,
            common_1.ClosedQuestionStatus.Resolved,
            common_1.LimboQuestionStatus.TADeleted,
        ],
        student: [common_1.ClosedQuestionStatus.ConfirmedDeleted],
    },
    [common_1.LimboQuestionStatus.CantFind]: {
        student: [
            common_1.OpenQuestionStatus.PriorityQueued,
            common_1.ClosedQuestionStatus.ConfirmedDeleted,
        ],
    },
    [common_1.LimboQuestionStatus.ReQueueing]: {
        student: [
            common_1.OpenQuestionStatus.PriorityQueued,
            common_1.ClosedQuestionStatus.ConfirmedDeleted,
        ],
    },
    [common_1.LimboQuestionStatus.TADeleted]: {
        student: [common_1.ClosedQuestionStatus.ConfirmedDeleted],
    },
    [common_1.ClosedQuestionStatus.Resolved]: {},
    [common_1.ClosedQuestionStatus.ConfirmedDeleted]: {},
    [common_1.ClosedQuestionStatus.Stale]: {},
    [common_1.ClosedQuestionStatus.DeletedDraft]: {},
};
function canChangeQuestionStatus(oldStatus, goalStatus, role) {
    var _a;
    return (oldStatus === goalStatus ||
        ((_a = QUESTION_STATES[oldStatus][role]) === null || _a === void 0 ? void 0 : _a.includes(goalStatus)));
}
exports.canChangeQuestionStatus = canChangeQuestionStatus;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventModel = exports.EventType = void 0;
const class_transformer_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
var EventType;
(function (EventType) {
    EventType["TA_CHECKED_IN"] = "taCheckedIn";
    EventType["TA_CHECKED_OUT"] = "taCheckedOut";
    EventType["TA_CHECKED_OUT_FORCED"] = "taCheckedOutForced";
})(EventType = exports.EventType || (exports.EventType = {}));
let EventModel = class EventModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EventModel.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EventType }),
    __metadata("design:type", String)
], EventModel.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserModel, (user) => user.events),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserModel)
], EventModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], EventModel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => course_entity_1.CourseModel, (course) => course.events),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.CourseModel)
], EventModel.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], EventModel.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], EventModel.prototype, "queueId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => queue_entity_1.QueueModel, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'queueId' }),
    __metadata("design:type", queue_entity_1.QueueModel)
], EventModel.prototype, "queue", void 0);
EventModel = __decorate([
    (0, typeorm_1.Entity)('event_model')
], EventModel);
exports.EventModel = EventModel;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemesterModel = void 0;
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
let SemesterModel = class SemesterModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SemesterModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], SemesterModel.prototype, "season", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SemesterModel.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => course_entity_1.CourseModel, (course) => course.semester),
    __metadata("design:type", Array)
], SemesterModel.prototype, "courses", void 0);
SemesterModel = __decorate([
    (0, typeorm_1.Entity)('semester_model')
], SemesterModel);
exports.SemesterModel = SemesterModel;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InsightsController = void 0;
const insights_service_1 = __webpack_require__(21);
const common_1 = __webpack_require__(6);
const jwt_auth_guard_1 = __webpack_require__(36);
const typeorm_1 = __webpack_require__(20);
const common_2 = __webpack_require__(2);
const user_decorator_1 = __webpack_require__(38);
const insight_objects_1 = __webpack_require__(22);
const user_entity_1 = __webpack_require__(26);
const roles_decorator_1 = __webpack_require__(39);
const course_role_decorator_1 = __webpack_require__(40);
let InsightsController = class InsightsController {
    constructor(connection, insightsService) {
        this.connection = connection;
        this.insightsService = insightsService;
    }
    async get(role, courseId, insightName, start, end, limit, offset) {
        const insightNames = Object.keys(insight_objects_1.INSIGHTS_MAP);
        if (!insightNames.includes(insightName)) {
            throw new common_1.BadRequestException(common_2.ERROR_MESSAGES.insightsController.insightNameNotFound);
        }
        if (!insight_objects_1.INSIGHTS_MAP[insightName].roles.includes(role)) {
            throw new common_1.BadRequestException(common_2.ERROR_MESSAGES.insightsController.insightUnathorized);
        }
        const filters = [
            {
                type: 'courseId',
                courseId,
            },
        ];
        if (start && end) {
            filters.push({
                type: 'timeframe',
                start: new Date(start),
                end: new Date(end),
            });
        }
        let insight = await this.insightsService.computeOutput({
            insight: insight_objects_1.INSIGHTS_MAP[insightName],
            filters,
        });
        if (insightName === 'MostActiveStudents') {
            let dataSource = insight.dataSource;
            if (offset) {
                dataSource = dataSource.slice(offset, dataSource.length);
            }
            if (limit) {
                dataSource = dataSource.slice(0, limit);
            }
            insight = Object.assign(Object.assign({}, insight), { dataSource });
        }
        return insight;
    }
    async getAllInsights() {
        return this.insightsService.convertToInsightsListResponse(Object.keys(insight_objects_1.INSIGHTS_MAP));
    }
    async toggleInsightOn(body, user) {
        await this.insightsService.toggleInsightOn(user, body.insightName);
        return;
    }
    async toggleInsightOff(body, user) {
        await this.insightsService.toggleInsightOff(user, body.insightName);
        return;
    }
};
__decorate([
    (0, common_1.Get)(':courseId/:insightName'),
    __param(0, (0, course_role_decorator_1.CourseRole)()),
    __param(1, (0, common_1.Param)('courseId')),
    __param(2, (0, common_1.Param)('insightName')),
    __param(3, (0, common_1.Query)('start')),
    __param(4, (0, common_1.Query)('end')),
    __param(5, (0, common_1.Query)('limit')),
    __param(6, (0, common_1.Query)('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], InsightsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, roles_decorator_1.Roles)(common_2.Role.PROFESSOR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InsightsController.prototype, "getAllInsights", null);
__decorate([
    (0, common_1.Patch)(''),
    (0, roles_decorator_1.Roles)(common_2.Role.PROFESSOR),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], InsightsController.prototype, "toggleInsightOn", null);
__decorate([
    (0, common_1.Delete)(''),
    (0, roles_decorator_1.Roles)(common_2.Role.PROFESSOR),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], InsightsController.prototype, "toggleInsightOff", null);
InsightsController = __decorate([
    (0, common_1.Controller)('insights'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        insights_service_1.InsightsService])
], InsightsController);
exports.InsightsController = InsightsController;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(37);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserId = exports.User = void 0;
const common_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(26);
exports.User = (0, common_1.createParamDecorator)(async (relations, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return await user_entity_1.UserModel.findOne(request.user.userId, { relations });
});
exports.UserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return Number(request.user.userId);
});


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(6);
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseRole = void 0;
const common_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(26);
exports.CourseRole = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const courseId = request.params.courseId;
    const user = await user_entity_1.UserModel.findOne(request.user.userId, {
        relations: ['courses'],
    });
    const userCourse = user.courses.find((course) => {
        return Number(course.courseId) === Number(courseId);
    });
    return userCourse.role;
});


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsModule = void 0;
const common_1 = __webpack_require__(6);
const alerts_controller_1 = __webpack_require__(42);
const alerts_service_1 = __webpack_require__(43);
let AlertsModule = class AlertsModule {
};
AlertsModule = __decorate([
    (0, common_1.Module)({
        controllers: [alerts_controller_1.AlertsController],
        providers: [alerts_service_1.AlertsService],
    })
], AlertsModule);
exports.AlertsModule = AlertsModule;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
const user_entity_1 = __webpack_require__(26);
const roles_decorator_1 = __webpack_require__(39);
const alerts_entity_1 = __webpack_require__(25);
const alerts_service_1 = __webpack_require__(43);
let AlertsController = class AlertsController {
    constructor(alertsService) {
        this.alertsService = alertsService;
    }
    async getAlerts(courseId, user) {
        const alerts = await alerts_entity_1.AlertModel.find({
            where: {
                courseId,
                user,
                resolved: null,
            },
        });
        return { alerts: await this.alertsService.removeStaleAlerts(alerts) };
    }
    async createAlert(body) {
        const { alertType, courseId, payload, targetUserId } = body;
        if (!this.alertsService.assertPayloadType(alertType, payload)) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.alertController.incorrectPayload);
        }
        const anotherAlert = await alerts_entity_1.AlertModel.findOne({
            where: {
                alertType,
                userId: targetUserId,
                resolved: null,
            },
        });
        if (anotherAlert) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.alertController.duplicateAlert);
        }
        const alert = await alerts_entity_1.AlertModel.create({
            alertType,
            sent: new Date(),
            userId: targetUserId,
            courseId,
            payload,
        }).save();
        return alert;
    }
    async closeAlert(alertId) {
        const alert = await alerts_entity_1.AlertModel.findOne({
            where: {
                id: alertId,
            },
        });
        if (!alert) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.alertController.notActiveAlert);
        }
        alert.resolved = new Date();
        await alert.save();
    }
};
__decorate([
    (0, common_2.Get)(':courseId'),
    __param(0, (0, common_2.Param)('courseId')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "getAlerts", null);
__decorate([
    (0, common_2.Post)(),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.CreateAlertParams]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "createAlert", null);
__decorate([
    (0, common_2.Patch)(':alertId'),
    (0, roles_decorator_1.Roles)(common_1.Role.STUDENT, common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('alertId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "closeAlert", null);
AlertsController = __decorate([
    (0, common_2.Controller)('alerts'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [alerts_service_1.AlertsService])
], AlertsController);
exports.AlertsController = AlertsController;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsService = void 0;
const common_1 = __webpack_require__(2);
const lodash_1 = __webpack_require__(44);
const common_2 = __webpack_require__(6);
const question_entity_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(20);
const queue_entity_1 = __webpack_require__(29);
const alerts_entity_1 = __webpack_require__(25);
let AlertsService = class AlertsService {
    constructor(connection) {
        this.connection = connection;
    }
    async removeStaleAlerts(alerts) {
        const nonStaleAlerts = [];
        for (const alert of alerts) {
            switch (alert.alertType) {
                case common_1.AlertType.REPHRASE_QUESTION:
                    const payload = alert.payload;
                    const question = await question_entity_1.QuestionModel.findOne(payload.questionId);
                    const queue = await queue_entity_1.QueueModel.findOne(payload.queueId, {
                        relations: ['staffList'],
                    });
                    const isQueueOpen = await (queue === null || queue === void 0 ? void 0 : queue.checkIsOpen());
                    if (question.closedAt || !isQueueOpen) {
                        alert.resolved = new Date();
                        await alert.save();
                    }
                    else {
                        nonStaleAlerts.push((0, lodash_1.pick)(alert, ['sent', 'alertType', 'payload', 'id']));
                    }
                    break;
            }
        }
        return nonStaleAlerts;
    }
    assertPayloadType(alertType, payload) {
        switch (alertType) {
            case common_1.AlertType.REPHRASE_QUESTION:
                const castPayload = payload;
                return (!!castPayload.courseId &&
                    !!castPayload.questionId &&
                    !!castPayload.queueId &&
                    typeof castPayload.courseId === 'number' &&
                    typeof castPayload.questionId === 'number' &&
                    typeof castPayload.queueId === 'number');
        }
    }
    async getUnresolvedRephraseQuestionAlert(queueId) {
        const alertType = common_1.AlertType.REPHRASE_QUESTION;
        return await alerts_entity_1.AlertModel.createQueryBuilder('alert')
            .where('alert.resolved IS NULL')
            .andWhere('alert.alertType = :alertType', { alertType })
            .andWhere("(alert.payload ->> 'queueId')::INTEGER = :queueId ", {
            queueId,
        })
            .getMany();
    }
};
AlertsService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], AlertsService);
exports.AlertsService = AlertsService;


/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillModule = void 0;
const common_1 = __webpack_require__(6);
const notification_module_1 = __webpack_require__(46);
const backfill_course_timezones_1 = __webpack_require__(51);
const backfill_default_user_teams_messages_1 = __webpack_require__(52);
const backfill_husky_emails_to_northeastern_1 = __webpack_require__(53);
const backfill_question_groupable_1 = __webpack_require__(54);
const backfill_section_group_name_1 = __webpack_require__(55);
const backfill_user_insights_command_1 = __webpack_require__(56);
const make_empty_photourl_null_command_1 = __webpack_require__(57);
let BackfillModule = class BackfillModule {
};
BackfillModule = __decorate([
    (0, common_1.Module)({
        imports: [notification_module_1.NotificationModule],
        providers: [
            make_empty_photourl_null_command_1.BackfillMakeEmptyPhotoURLNull,
            backfill_course_timezones_1.BackfillCourseTimezones,
            backfill_default_user_teams_messages_1.BackfillDefaultUserTeamsMessages,
            backfill_husky_emails_to_northeastern_1.BackfillHuskyEmailsAsNortheastern,
            backfill_question_groupable_1.BackfillQuestionGroupable,
            backfill_user_insights_command_1.BackfillUserInsights,
            backfill_section_group_name_1.BackfillSectionGroupName,
        ],
    })
], BackfillModule);
exports.BackfillModule = BackfillModule;


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const common_1 = __webpack_require__(6);
const desktop_notif_subscriber_1 = __webpack_require__(47);
const notification_controller_1 = __webpack_require__(50);
const notification_service_1 = __webpack_require__(48);
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    (0, common_1.Module)({
        controllers: [notification_controller_1.NotificationController],
        providers: [notification_service_1.NotificationService, desktop_notif_subscriber_1.DesktopNotifSubscriber],
        exports: [notification_service_1.NotificationService],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesktopNotifSubscriber = void 0;
const typeorm_1 = __webpack_require__(20);
const desktop_notif_entity_1 = __webpack_require__(27);
const notification_service_1 = __webpack_require__(48);
let DesktopNotifSubscriber = class DesktopNotifSubscriber {
    constructor(connection, notifService) {
        this.notifService = notifService;
        connection.subscribers.push(this);
    }
    listenTo() {
        return desktop_notif_entity_1.DesktopNotifModel;
    }
    async afterInsert(event) {
        await this.notifService.notifyDesktop(event.entity, "You've successfully signed up for desktop notifications!");
    }
};
DesktopNotifSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection, notification_service_1.NotificationService])
], DesktopNotifSubscriber);
exports.DesktopNotifSubscriber = DesktopNotifSubscriber;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationService = exports.NotifMsgs = void 0;
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
const webPush = __webpack_require__(49);
const user_entity_1 = __webpack_require__(26);
const desktop_notif_entity_1 = __webpack_require__(27);
exports.NotifMsgs = {
    phone: {
        WRONG_MESSAGE: 'Please respond with either YES or NO. Text STOP at any time to stop receiving text messages',
        COULD_NOT_FIND_NUMBER: 'Could not find an Office Hours account with your phone number.',
        UNREGISTER: "You've unregistered from text notifications for Khoury Office Hours. Feel free to re-register any time through the website",
        DUPLICATE: "You've already been verified to receive text notifications from Khoury Office Hours!",
        OK: 'Thank you for verifying your number with Khoury Office Hours! You are now signed up for text notifications!',
    },
    queue: {
        ALERT_BUTTON: "The TA could't reach you, please have Microsoft Teams open and confirm you are back!",
        THIRD_PLACE: `You're 3rd in the queue. Be ready for a TA to call you soon!`,
        TA_HIT_HELPED: (taName) => `${taName} is coming to help you!`,
        REMOVED: `You've been removed from the queue. Please return to the app for more information.`,
    },
    ta: {
        STUDENT_JOINED_EMPTY_QUEUE: 'A student has joined your (previously empty) queue!',
    },
};
let NotificationService = class NotificationService {
    constructor(configService) {
        this.configService = configService;
        webPush.setVapidDetails(this.configService.get('EMAIL'), this.configService.get('PUBLICKEY'), this.configService.get('PRIVATEKEY'));
        this.desktopPublicKey = this.configService.get('PUBLICKEY');
    }
    async registerDesktop(info) {
        let dn = await desktop_notif_entity_1.DesktopNotifModel.findOne({
            where: { userId: info.userId, endpoint: info.endpoint },
        });
        if (!dn) {
            dn = await desktop_notif_entity_1.DesktopNotifModel.create(info).save();
            await dn.reload();
        }
        return dn;
    }
    async notifyUser(userId, message) {
        const notifModelsOfUser = await user_entity_1.UserModel.findOne({
            where: {
                id: userId,
            },
            relations: ['desktopNotifs', 'phoneNotif'],
        });
        if (notifModelsOfUser.desktopNotifsEnabled) {
            await Promise.all(notifModelsOfUser.desktopNotifs.map(async (nm) => this.notifyDesktop(nm, message)));
        }
    }
    async notifyDesktop(nm, message) {
        try {
            await webPush.sendNotification({
                endpoint: nm.endpoint,
                keys: {
                    p256dh: nm.p256dh,
                    auth: nm.auth,
                },
            }, message);
        }
        catch (error) {
            await desktop_notif_entity_1.DesktopNotifModel.remove(nm);
        }
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NotificationService);
exports.NotificationService = NotificationService;


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("web-push");

/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = void 0;
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
const desktop_notif_entity_1 = __webpack_require__(27);
const notification_service_1 = __webpack_require__(48);
let NotificationController = class NotificationController {
    constructor(notifService, configService) {
        this.notifService = notifService;
        this.configService = configService;
    }
    getDesktopCredentials() {
        return JSON.stringify(this.notifService.desktopPublicKey);
    }
    async registerDesktopUser(body, userId) {
        const device = await this.notifService.registerDesktop({
            endpoint: body.endpoint,
            expirationTime: body.expirationTime && new Date(body.expirationTime),
            p256dh: body.keys.p256dh,
            auth: body.keys.auth,
            name: body.name,
            userId: userId,
        });
        return {
            id: device.id,
            endpoint: device.endpoint,
            createdAt: device.createdAt,
            name: device.name,
        };
    }
    async deleteDesktopUser(deviceId, userId) {
        const dn = await desktop_notif_entity_1.DesktopNotifModel.find({ id: deviceId, userId });
        if (dn.length > 0) {
            await desktop_notif_entity_1.DesktopNotifModel.remove(dn);
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
};
__decorate([
    (0, common_1.Get)('desktop/credentials'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], NotificationController.prototype, "getDesktopCredentials", null);
__decorate([
    (0, common_1.Post)('desktop/device'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "registerDesktopUser", null);
__decorate([
    (0, common_1.Delete)('desktop/device/:deviceId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteDesktopUser", null);
NotificationController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        config_1.ConfigService])
], NotificationController);
exports.NotificationController = NotificationController;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillCourseTimezones = void 0;
const nestjs_command_1 = __webpack_require__(19);
const common_1 = __webpack_require__(6);
const course_entity_1 = __webpack_require__(24);
let BackfillCourseTimezones = class BackfillCourseTimezones {
    async copy() {
        await course_entity_1.CourseModel.createQueryBuilder()
            .update()
            .set({ timezone: () => `'America/New_York'` })
            .callListeners(false)
            .execute();
        console.log(`Updated ${await course_entity_1.CourseModel.count()} courses`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:course-timezones',
        describe: 'set all course timezones from null to "America/New_York"',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillCourseTimezones.prototype, "copy", null);
BackfillCourseTimezones = __decorate([
    (0, common_1.Injectable)()
], BackfillCourseTimezones);
exports.BackfillCourseTimezones = BackfillCourseTimezones;


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillDefaultUserTeamsMessages = void 0;
const nestjs_command_1 = __webpack_require__(19);
const common_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(26);
let BackfillDefaultUserTeamsMessages = class BackfillDefaultUserTeamsMessages {
    async fix() {
        const users = await user_entity_1.UserModel.find();
        users.forEach((user) => {
            user.defaultMessage = `Hello! I'm ${user.firstName}. How can I help you today?`;
        });
        await user_entity_1.UserModel.save(users);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:default-user-teams-messages',
        describe: 'set default Teams chat message for all users.',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillDefaultUserTeamsMessages.prototype, "fix", null);
BackfillDefaultUserTeamsMessages = __decorate([
    (0, common_1.Injectable)()
], BackfillDefaultUserTeamsMessages);
exports.BackfillDefaultUserTeamsMessages = BackfillDefaultUserTeamsMessages;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillHuskyEmailsAsNortheastern = void 0;
const common_1 = __webpack_require__(6);
const nestjs_command_1 = __webpack_require__(19);
const user_entity_1 = __webpack_require__(26);
let BackfillHuskyEmailsAsNortheastern = class BackfillHuskyEmailsAsNortheastern {
    async fix() {
        const users = await user_entity_1.UserModel.find();
        const usersToBeUpdated = users.filter((user) => user.email.includes('@husky.neu.edu'));
        users.forEach((user) => {
            user.email = user.email.replace('@husky.neu.edu', '@northeastern.edu');
        });
        await user_entity_1.UserModel.save(users);
        console.log(`Updated the emails of ${usersToBeUpdated.length} users`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:husky-emails-to-northeastern',
        describe: 'Converts @husky.neu.edu emails to @northeastern.edu emails',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillHuskyEmailsAsNortheastern.prototype, "fix", null);
BackfillHuskyEmailsAsNortheastern = __decorate([
    (0, common_1.Injectable)()
], BackfillHuskyEmailsAsNortheastern);
exports.BackfillHuskyEmailsAsNortheastern = BackfillHuskyEmailsAsNortheastern;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillQuestionGroupable = void 0;
const common_1 = __webpack_require__(6);
const nestjs_command_1 = __webpack_require__(19);
const question_entity_1 = __webpack_require__(31);
let BackfillQuestionGroupable = class BackfillQuestionGroupable {
    async fix() {
        const questions = await question_entity_1.QuestionModel.find();
        const questionsToUpdate = questions.filter((q) => q.groupable === null);
        questionsToUpdate.forEach((q) => (q.groupable = false));
        await question_entity_1.QuestionModel.save(questions);
        console.log(`Filled in groupable for ${questionsToUpdate.length} questions`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:question-groupable',
        describe: 'Fills in groupable column for old Questions',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillQuestionGroupable.prototype, "fix", null);
BackfillQuestionGroupable = __decorate([
    (0, common_1.Injectable)()
], BackfillQuestionGroupable);
exports.BackfillQuestionGroupable = BackfillQuestionGroupable;


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillSectionGroupName = void 0;
const common_1 = __webpack_require__(6);
const course_entity_1 = __webpack_require__(24);
const nestjs_command_1 = __webpack_require__(19);
let BackfillSectionGroupName = class BackfillSectionGroupName {
    async fix() {
        const result = await course_entity_1.CourseModel.createQueryBuilder()
            .update()
            .set({ sectionGroupName: () => 'name' })
            .where('sectionGroupName IS NULL')
            .execute();
        console.log(`Set sectionGroupName for ${result.affected} courses`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:section-group-name',
        describe: 'set the sectionGroupName of older courses as the same as the course name',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillSectionGroupName.prototype, "fix", null);
BackfillSectionGroupName = __decorate([
    (0, common_1.Injectable)()
], BackfillSectionGroupName);
exports.BackfillSectionGroupName = BackfillSectionGroupName;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillUserInsights = void 0;
const common_1 = __webpack_require__(6);
const nestjs_command_1 = __webpack_require__(19);
const user_entity_1 = __webpack_require__(26);
let BackfillUserInsights = class BackfillUserInsights {
    async copy() {
        await user_entity_1.UserModel.createQueryBuilder()
            .update()
            .set({ hideInsights: [] })
            .callListeners(false)
            .execute();
        console.log(`Updated ${await user_entity_1.UserModel.count()} users`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:user-insights',
        describe: "sets a user's hidden insights attribute to the empty list",
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillUserInsights.prototype, "copy", null);
BackfillUserInsights = __decorate([
    (0, common_1.Injectable)()
], BackfillUserInsights);
exports.BackfillUserInsights = BackfillUserInsights;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackfillMakeEmptyPhotoURLNull = void 0;
const common_1 = __webpack_require__(6);
const nestjs_command_1 = __webpack_require__(19);
const user_entity_1 = __webpack_require__(26);
let BackfillMakeEmptyPhotoURLNull = class BackfillMakeEmptyPhotoURLNull {
    async fix() {
        let countOfChanged = 0;
        const users = await user_entity_1.UserModel.find();
        users.forEach((user) => {
            if (user.photoURL === '') {
                user.photoURL = null;
                countOfChanged += 1;
            }
        });
        await user_entity_1.UserModel.save(users);
        console.log(`Updated names for ${countOfChanged} users`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'backfill:make-empty-photoURL-null',
        describe: 'changes empty string photoURLs to null',
        autoExit: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackfillMakeEmptyPhotoURLNull.prototype, "fix", null);
BackfillMakeEmptyPhotoURLNull = __decorate([
    (0, common_1.Injectable)()
], BackfillMakeEmptyPhotoURLNull);
exports.BackfillMakeEmptyPhotoURLNull = BackfillMakeEmptyPhotoURLNull;


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("nestjs-redis");

/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseNotesModule = void 0;
const common_1 = __webpack_require__(6);
const release_notes_controller_1 = __webpack_require__(60);
let ReleaseNotesModule = class ReleaseNotesModule {
};
ReleaseNotesModule = __decorate([
    (0, common_1.Module)({
        controllers: [release_notes_controller_1.ReleaseNotesController],
        providers: [],
        imports: [
            common_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            }),
        ],
    })
], ReleaseNotesModule);
exports.ReleaseNotesModule = ReleaseNotesModule;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReleaseNotesController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const jwt_auth_guard_1 = __webpack_require__(36);
const typeorm_1 = __webpack_require__(20);
let ReleaseNotesController = class ReleaseNotesController {
    constructor(connection, httpService) {
        this.connection = connection;
        this.httpService = httpService;
    }
    async getReleaseNotes() {
        var _a, _b, _c;
        const response = {
            lastUpdatedUnixTime: null,
            releaseNotes: null,
        };
        const request = await this.httpService
            .get('https://notion-api.splitbee.io/v1/page/abba246bfa0847baa2706ab30d0c6c7d')
            .toPromise();
        const data = request.data;
        try {
            const timeText = (_c = (_b = (_a = data[process.env.RELEASE_NOTE_TIMESTAMP_ID]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.title[0][0];
            response.lastUpdatedUnixTime = timeText.split('Unix ')[1] * 1000;
        }
        catch (e) {
            throw new common_2.InternalServerErrorException(common_1.ERROR_MESSAGES.releaseNotesController.releaseNotesTime(e));
        }
        data[process.env.RELEASE_NOTE_TIMESTAMP_ID].value.properties.title = [];
        data[process.env.WANT_TO_SEE_MORE_ID].value.properties.title = [];
        response.releaseNotes = data;
        return response;
    }
};
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReleaseNotesController.prototype, "getReleaseNotes", null);
ReleaseNotesController = __decorate([
    (0, common_2.Controller)('release_notes'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        common_2.HttpService])
], ReleaseNotesController);
exports.ReleaseNotesController = ReleaseNotesController;


/***/ }),
/* 61 */
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const dotenv_1 = __webpack_require__(62);
const admin_user_entity_1 = __webpack_require__(63);
const course_entity_1 = __webpack_require__(24);
const semester_entity_1 = __webpack_require__(34);
const course_section_mapping_entity_1 = __webpack_require__(65);
const desktop_notif_entity_1 = __webpack_require__(27);
const phone_notif_entity_1 = __webpack_require__(28);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const question_entity_1 = __webpack_require__(31);
const question_group_entity_1 = __webpack_require__(30);
const queue_entity_1 = __webpack_require__(29);
const alerts_entity_1 = __webpack_require__(25);
const last_registration_model_entity_1 = __webpack_require__(66);
const prof_section_groups_entity_1 = __webpack_require__(67);
(0, dotenv_1.config)();
const inCLI = {
    migrations: ['migration/*.ts'],
    cli: {
        migrationsDir: 'migration',
    },
};
const typeorm = Object.assign({ type: 'postgres', url: process.env.DB_URL || 'postgres://postgres@localhost:5432/dev', synchronize: process.env.NODE_ENV !== 'production', entities: [
        course_entity_1.CourseModel,
        course_section_mapping_entity_1.CourseSectionMappingModel,
        semester_entity_1.SemesterModel,
        user_entity_1.UserModel,
        user_course_entity_1.UserCourseModel,
        question_entity_1.QuestionModel,
        queue_entity_1.QueueModel,
        desktop_notif_entity_1.DesktopNotifModel,
        phone_notif_entity_1.PhoneNotifModel,
        admin_user_entity_1.AdminUserModel,
        event_model_entity_1.EventModel,
        question_group_entity_1.QuestionGroupModel,
        alerts_entity_1.AlertModel,
        last_registration_model_entity_1.LastRegistrationModel,
        prof_section_groups_entity_1.ProfSectionGroupsModel,
    ], keepConnectionAlive: true, logging: process.env.NODE_ENV !== 'production'
        ? ['error']
        : !!process.env.TYPEORM_LOGGING }, (!!process.env.TYPEORM_CLI ? inCLI : {}));
module.exports = typeorm;


/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminUserModel = void 0;
const typeorm_1 = __webpack_require__(20);
const bcrypt_1 = __webpack_require__(64);
let AdminUserModel = class AdminUserModel extends typeorm_1.BaseEntity {
    setPassword(password) {
        this.passwordHash = (0, bcrypt_1.hashSync)(password, 5);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminUserModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128, unique: true, nullable: false }),
    __metadata("design:type", String)
], AdminUserModel.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128, nullable: false }),
    __metadata("design:type", String)
], AdminUserModel.prototype, "passwordHash", void 0);
AdminUserModel = __decorate([
    (0, typeorm_1.Entity)('admin_user_model')
], AdminUserModel);
exports.AdminUserModel = AdminUserModel;


/***/ }),
/* 64 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseSectionMappingModel = void 0;
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
let CourseSectionMappingModel = class CourseSectionMappingModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseSectionMappingModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CourseSectionMappingModel.prototype, "crn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => course_entity_1.CourseModel),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.CourseModel)
], CourseSectionMappingModel.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CourseSectionMappingModel.prototype, "courseId", void 0);
CourseSectionMappingModel = __decorate([
    (0, typeorm_1.Entity)('course_section_mapping_model')
], CourseSectionMappingModel);
exports.CourseSectionMappingModel = CourseSectionMappingModel;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.khourySemesterCodes = exports.LastRegistrationModel = void 0;
const user_entity_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(20);
let LastRegistrationModel = class LastRegistrationModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LastRegistrationModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.UserModel),
    (0, typeorm_1.JoinColumn)({ name: 'profId' }),
    __metadata("design:type", user_entity_1.UserModel)
], LastRegistrationModel.prototype, "prof", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LastRegistrationModel.prototype, "profId", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], LastRegistrationModel.prototype, "lastRegisteredSemester", void 0);
LastRegistrationModel = __decorate([
    (0, typeorm_1.Entity)('last_registration_model')
], LastRegistrationModel);
exports.LastRegistrationModel = LastRegistrationModel;
exports.khourySemesterCodes = {
    Fall: '10',
    Spring: '30',
    Summer_1: '40',
    Summer_Full: '50',
    Summer_2: '60',
};


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfSectionGroupsModel = void 0;
const user_entity_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(20);
let ProfSectionGroupsModel = class ProfSectionGroupsModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfSectionGroupsModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.UserModel),
    (0, typeorm_1.JoinColumn)({ name: 'profId' }),
    __metadata("design:type", user_entity_1.UserModel)
], ProfSectionGroupsModel.prototype, "prof", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProfSectionGroupsModel.prototype, "profId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
    }),
    __metadata("design:type", Array)
], ProfSectionGroupsModel.prototype, "sectionGroups", void 0);
ProfSectionGroupsModel = __decorate([
    (0, typeorm_1.Entity)('prof_section_groups_model')
], ProfSectionGroupsModel);
exports.ProfSectionGroupsModel = ProfSectionGroupsModel;


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminModule = void 0;
const common_1 = __webpack_require__(6);
const nestjs_admin_1 = __webpack_require__(69);
const credentialValidator_1 = __webpack_require__(70);
const typeorm_1 = __webpack_require__(16);
const admin_user_entity_1 = __webpack_require__(63);
const admin_entities_1 = __webpack_require__(71);
const admin_command_1 = __webpack_require__(72);
const session = __webpack_require__(74);
const connectRedis = __webpack_require__(75);
const redis_1 = __webpack_require__(76);
const redisClient = (0, redis_1.createClient)();
const RedisStore = connectRedis(session);
if (process.env.NODE_ENV === 'test') {
    redisClient.quit();
}
const CoreModule = nestjs_admin_1.AdminCoreModuleFactory.createAdminCoreModule({
    appConfig: {
        session: {
            store: new RedisStore({ client: redisClient }),
        },
    },
});
const AuthModule = nestjs_admin_1.AdminAuthModuleFactory.createAdminAuthModule({
    adminCoreModule: CoreModule,
    credentialValidator: credentialValidator_1.adminCredentialValidator,
    imports: [typeorm_1.TypeOrmModule.forFeature([admin_user_entity_1.AdminUserModel])],
    providers: [],
});
let AdminModule = class AdminModule {
    constructor(adminSite) {
        this.adminSite = adminSite;
        adminSite.register('Course', admin_entities_1.CourseAdmin);
        adminSite.register('User', admin_entities_1.UserAdmin);
        adminSite.register('UserCourse', admin_entities_1.UserCourseAdmin);
        adminSite.register('Queue', admin_entities_1.QueueAdmin);
        adminSite.register('CourseSectionMapping', admin_entities_1.CourseSectionMappingAdmin);
        adminSite.register('Semester', admin_entities_1.SemesterAdmin);
    }
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [CoreModule, AuthModule],
        exports: [CoreModule, AuthModule],
        providers: [admin_command_1.AdminCommand],
    }),
    __metadata("design:paramtypes", [nestjs_admin_1.DefaultAdminSite])
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("nestjs-admin");

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.adminCredentialValidator = void 0;
const bcrypt_1 = __webpack_require__(64);
const admin_user_entity_1 = __webpack_require__(63);
exports.adminCredentialValidator = {
    inject: [],
    useFactory: () => {
        return async function validateCredentials(username, password) {
            const user = await admin_user_entity_1.AdminUserModel.findOne({ username });
            if (user) {
                if (await (0, bcrypt_1.compare)(password, user.passwordHash)) {
                    return user;
                }
            }
            return null;
        };
    },
};


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemesterAdmin = exports.CourseSectionMappingAdmin = exports.UserCourseAdmin = exports.UserAdmin = exports.QueueAdmin = exports.CourseAdmin = void 0;
const nestjs_admin_1 = __webpack_require__(69);
const course_entity_1 = __webpack_require__(24);
const queue_entity_1 = __webpack_require__(29);
const user_entity_1 = __webpack_require__(26);
const course_section_mapping_entity_1 = __webpack_require__(65);
const user_course_entity_1 = __webpack_require__(23);
const semester_entity_1 = __webpack_require__(34);
class CourseAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = course_entity_1.CourseModel;
        this.listDisplay = ['id', 'name'];
        this.fields = ['id', 'name', 'icalURL', 'semesterId', 'enabled', 'timezone'];
    }
}
exports.CourseAdmin = CourseAdmin;
class QueueAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = queue_entity_1.QueueModel;
        this.listDisplay = ['id', 'room', 'courseId'];
    }
}
exports.QueueAdmin = QueueAdmin;
class UserAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = user_entity_1.UserModel;
        this.listDisplay = ['id', 'email', 'name'];
        this.searchFields = ['email', 'name'];
        this.fields = [
            'id',
            'email',
            'name',
            'desktopNotifsEnabled',
            'phoneNotifsEnabled',
            'queues',
        ];
    }
}
exports.UserAdmin = UserAdmin;
class UserCourseAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = user_course_entity_1.UserCourseModel;
        this.listDisplay = ['id', 'userId', 'courseId'];
    }
}
exports.UserCourseAdmin = UserCourseAdmin;
class CourseSectionMappingAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = course_section_mapping_entity_1.CourseSectionMappingModel;
        this.listDisplay = ['id', 'genericCourseName', 'section', 'courseId'];
    }
}
exports.CourseSectionMappingAdmin = CourseSectionMappingAdmin;
class SemesterAdmin extends nestjs_admin_1.AdminEntity {
    constructor() {
        super(...arguments);
        this.entity = semester_entity_1.SemesterModel;
        this.listDisplay = ['id', 'season', 'year'];
    }
}
exports.SemesterAdmin = SemesterAdmin;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminCommand = void 0;
const nestjs_command_1 = __webpack_require__(19);
const common_1 = __webpack_require__(6);
const admin_user_entity_1 = __webpack_require__(63);
const readline_sync_1 = __webpack_require__(73);
let AdminCommand = class AdminCommand {
    async create(username) {
        let user = await admin_user_entity_1.AdminUserModel.findOne({ username });
        if (user) {
            const changePassword = (0, readline_sync_1.keyInYN)(`User ${username} already exists. Do you want to change their password?`);
            if (!changePassword) {
                return;
            }
        }
        else {
            user = admin_user_entity_1.AdminUserModel.create({ username });
        }
        const password = (0, readline_sync_1.question)('Password: ', {
            hideEchoBack: true,
        });
        user.setPassword(password);
        await user.save();
        console.log(`Created user: ${user.username}`);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'create:admin <username>',
        describe: 'create an admin user',
        autoExit: true,
    }),
    __param(0, (0, nestjs_command_1.Positional)({
        name: 'username',
        describe: 'the admin username',
        type: 'string',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminCommand.prototype, "create", null);
AdminCommand = __decorate([
    (0, common_1.Injectable)()
], AdminCommand);
exports.AdminCommand = AdminCommand;


/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = require("readline-sync");

/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),
/* 75 */
/***/ ((module) => {

module.exports = require("connect-redis");

/***/ }),
/* 76 */
/***/ ((module) => {

module.exports = require("redis");

/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseModule = void 0;
const common_1 = __webpack_require__(6);
const queue_module_1 = __webpack_require__(78);
const login_module_1 = __webpack_require__(90);
const login_course_service_1 = __webpack_require__(95);
const course_controller_1 = __webpack_require__(98);
const course_service_1 = __webpack_require__(100);
const heatmap_service_1 = __webpack_require__(101);
let CourseModule = class CourseModule {
};
CourseModule = __decorate([
    (0, common_1.Module)({
        controllers: [course_controller_1.CourseController],
        imports: [queue_module_1.QueueModule, login_module_1.LoginModule, common_1.CacheModule.register()],
        providers: [login_course_service_1.LoginCourseService, heatmap_service_1.HeatmapService, course_service_1.CourseService],
    })
], CourseModule);
exports.CourseModule = CourseModule;


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueModule = void 0;
const common_1 = __webpack_require__(6);
const queue_controller_1 = __webpack_require__(79);
const queue_clean_service_1 = __webpack_require__(80);
const sse_module_1 = __webpack_require__(88);
const queue_service_1 = __webpack_require__(87);
const queue_sse_service_1 = __webpack_require__(85);
const queue_subscriber_1 = __webpack_require__(89);
const alerts_service_1 = __webpack_require__(43);
const alerts_module_1 = __webpack_require__(41);
let QueueModule = class QueueModule {
};
QueueModule = __decorate([
    (0, common_1.Module)({
        controllers: [queue_controller_1.QueueController],
        providers: [
            queue_clean_service_1.QueueCleanService,
            queue_service_1.QueueService,
            queue_sse_service_1.QueueSSEService,
            queue_subscriber_1.QueueSubscriber,
            alerts_service_1.AlertsService,
        ],
        exports: [queue_clean_service_1.QueueCleanService, queue_sse_service_1.QueueSSEService],
        imports: [sse_module_1.SSEModule, alerts_module_1.AlertsModule],
    })
], QueueModule);
exports.QueueModule = QueueModule;


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const user_decorator_1 = __webpack_require__(38);
const typeorm_1 = __webpack_require__(20);
const jwt_auth_guard_1 = __webpack_require__(36);
const roles_decorator_1 = __webpack_require__(39);
const queue_clean_service_1 = __webpack_require__(80);
const queue_role_decorator_1 = __webpack_require__(82);
const queue_role_guard_1 = __webpack_require__(83);
const queue_sse_service_1 = __webpack_require__(85);
const queue_service_1 = __webpack_require__(87);
const question_entity_1 = __webpack_require__(31);
let QueueController = class QueueController {
    constructor(connection, queueSSEService, queueCleanService, queueService) {
        this.connection = connection;
        this.queueSSEService = queueSSEService;
        this.queueCleanService = queueCleanService;
        this.queueService = queueService;
    }
    async getQueue(queueId) {
        try {
            return this.queueService.getQueue(queueId);
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.getQueue, common_2.HttpStatus.NOT_FOUND);
        }
    }
    async getQuestions(queueId, role, userId) {
        try {
            const questions = await this.queueService.getQuestions(queueId);
            return await this.queueService.personalizeQuestions(queueId, questions, userId, role);
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.getQuestions, common_2.HttpStatus.NOT_FOUND);
        }
    }
    async updateQueue(queueId, body) {
        const queue = await this.queueService.getQueue(queueId);
        if (queue === undefined) {
            throw new common_2.NotFoundException();
        }
        queue.notes = body.notes;
        queue.allowQuestions = body.allowQuestions;
        try {
            await queue.save();
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.saveQueue, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return queue;
    }
    async cleanQueue(queueId) {
        try {
            setTimeout(async () => {
                await this.queueCleanService.cleanQueue(queueId, true);
                await this.queueSSEService.updateQueue(queueId);
            });
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.cleanQueue, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    sendEvent(queueId, role, userId, res) {
        res.set({
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'X-Accel-Buffering': 'no',
            Connection: 'keep-alive',
        });
        try {
            this.queueSSEService.subscribeClient(queueId, res, { role, userId });
        }
        catch (err) {
            console.error(err);
        }
    }
    async disableQueue(queueId, role) {
        const queue = await this.queueService.getQueue(queueId);
        if (!queue) {
            throw new common_2.NotFoundException();
        }
        if (queue.isProfessorQueue && role === common_1.Role.TA) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.cannotCloseQueue, common_2.HttpStatus.UNAUTHORIZED);
        }
        queue.isDisabled = true;
        queue.staffList = [];
        const questions = await question_entity_1.QuestionModel.inQueueWithStatus(queueId, [
            ...Object.values(common_1.OpenQuestionStatus),
            ...Object.values(common_1.LimboQuestionStatus),
        ]).getMany();
        questions.forEach((q) => {
            q.status = common_1.ClosedQuestionStatus.Stale;
            q.closedAt = new Date();
        });
        try {
            await question_entity_1.QuestionModel.save(questions);
            await queue.save();
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.queueController.saveQueue, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_2.Get)(':queueId'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR, common_1.Role.STUDENT),
    __param(0, (0, common_2.Param)('queueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "getQueue", null);
__decorate([
    (0, common_2.Get)(':queueId/questions'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR, common_1.Role.STUDENT),
    __param(0, (0, common_2.Param)('queueId')),
    __param(1, (0, queue_role_decorator_1.QueueRole)()),
    __param(2, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "getQuestions", null);
__decorate([
    (0, common_2.Patch)(':queueId'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('queueId')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_1.UpdateQueueParams]),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "updateQueue", null);
__decorate([
    (0, common_2.Post)(':queueId/clean'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('queueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "cleanQueue", null);
__decorate([
    (0, common_2.Get)(':queueId/sse'),
    __param(0, (0, common_2.Param)('queueId')),
    __param(1, (0, queue_role_decorator_1.QueueRole)()),
    __param(2, (0, user_decorator_1.UserId)()),
    __param(3, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Object]),
    __metadata("design:returntype", void 0)
], QueueController.prototype, "sendEvent", null);
__decorate([
    (0, common_2.Delete)(':queueId'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('queueId')),
    __param(1, (0, queue_role_decorator_1.QueueRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "disableQueue", null);
QueueController = __decorate([
    (0, common_2.Controller)('queues'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, queue_role_guard_1.QueueRolesGuard),
    (0, common_2.UseInterceptors)(common_2.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        queue_sse_service_1.QueueSSEService,
        queue_clean_service_1.QueueCleanService,
        queue_service_1.QueueService])
], QueueController);
exports.QueueController = QueueController;


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueCleanService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const schedule_1 = __webpack_require__(15);
const async_1 = __webpack_require__(81);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const typeorm_1 = __webpack_require__(20);
const question_entity_1 = __webpack_require__(31);
const queue_entity_1 = __webpack_require__(29);
const alerts_entity_1 = __webpack_require__(25);
let QueueCleanService = class QueueCleanService {
    constructor(connection) {
        this.connection = connection;
    }
    async cleanAllQueues() {
        const queuesWithOpenQuestions = await queue_entity_1.QueueModel.getRepository()
            .createQueryBuilder('queue_model')
            .leftJoinAndSelect('queue_model.questions', 'question')
            .where('question.status IN (:...status)', {
            status: [
                ...Object.values(common_1.OpenQuestionStatus),
                ...Object.values(common_1.LimboQuestionStatus),
            ],
        })
            .getMany();
        await async_1.default.mapLimit(queuesWithOpenQuestions, 1, async (queue) => await this.cleanQueue(queue.id));
    }
    async checkoutAllStaff() {
        const queuesWithCheckedInStaff = await queue_entity_1.QueueModel.getRepository().find({ relations: ['staffList'] });
        queuesWithCheckedInStaff.forEach(async (queue) => {
            await queue.staffList.forEach(async (ta) => {
                await event_model_entity_1.EventModel.create({
                    time: new Date(),
                    eventType: event_model_entity_1.EventType.TA_CHECKED_OUT_FORCED,
                    userId: ta.id,
                    courseId: queue.courseId,
                    queueId: queue.id,
                }).save();
            });
            queue.staffList = [];
        });
        await queue_entity_1.QueueModel.save(queuesWithCheckedInStaff);
    }
    async cleanSelfEnrollOverrides() {
        await user_course_entity_1.UserCourseModel.delete({
            expires: true,
        });
    }
    async cleanQueue(queueId, force) {
        const queue = await queue_entity_1.QueueModel.findOne(queueId, {
            relations: ['staffList'],
        });
        if (force || !(await queue.checkIsOpen())) {
            await this.unsafeClean(queue.id);
        }
    }
    async unsafeClean(queueId) {
        const questions = await question_entity_1.QuestionModel.inQueueWithStatus(queueId, [
            ...Object.values(common_1.OpenQuestionStatus),
            ...Object.values(common_1.LimboQuestionStatus),
        ]).getMany();
        const alerts = await alerts_entity_1.AlertModel.createQueryBuilder('alert')
            .where('alert.resolved IS NULL')
            .andWhere("(alert.payload ->> 'queueId')::INTEGER = :queueId ", {
            queueId,
        })
            .getMany();
        questions.forEach((q) => {
            q.status = common_1.ClosedQuestionStatus.Stale;
            q.closedAt = new Date();
        });
        alerts.forEach((a) => {
            a.resolved = new Date();
        });
        await question_entity_1.QuestionModel.save(questions);
        await alerts_entity_1.AlertModel.save(alerts);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueCleanService.prototype, "cleanAllQueues", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueCleanService.prototype, "checkoutAllStaff", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueCleanService.prototype, "cleanSelfEnrollOverrides", null);
QueueCleanService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], QueueCleanService);
exports.QueueCleanService = QueueCleanService;


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("async");

/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueRole = void 0;
const common_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
exports.QueueRole = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const queue = await queue_entity_1.QueueModel.findOne(request.params.queueId);
    const courseId = queue === null || queue === void 0 ? void 0 : queue.courseId;
    const user = await user_entity_1.UserModel.findOne(request.user.userId, {
        relations: ['courses'],
    });
    const userCourse = user.courses.find((course) => {
        return Number(course.courseId) === Number(courseId);
    });
    if (!userCourse) {
        throw new common_1.NotFoundException("cannot read propery 'role ' of undefined on user: " + user.id + user);
    }
    return userCourse.role;
});


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueRolesGuard = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const role_guard_1 = __webpack_require__(84);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
let QueueRolesGuard = class QueueRolesGuard extends role_guard_1.RolesGuard {
    async setupData(request) {
        const queue = await queue_entity_1.QueueModel.findOne(request.params.queueId);
        if (!queue) {
            throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.queueRoleGuard.queueNotFound);
        }
        const courseId = queue.courseId;
        const user = await user_entity_1.UserModel.findOne(request.user.userId, {
            relations: ['courses'],
        });
        return { courseId, user };
    }
};
QueueRolesGuard = __decorate([
    (0, common_2.Injectable)()
], QueueRolesGuard);
exports.QueueRolesGuard = QueueRolesGuard;


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const core_1 = __webpack_require__(7);
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const { courseId, user } = await this.setupData(request);
        if (!user) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.roleGuard.notLoggedIn);
        }
        if (!courseId) {
            throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.roleGuard.noCourseIdFound);
        }
        return this.matchRoles(roles, user, courseId);
    }
    matchRoles(roles, user, courseId) {
        const userCourse = user.courses.find((course) => {
            return Number(course.courseId) === Number(courseId);
        });
        if (!userCourse) {
            throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.roleGuard.notInCourse);
        }
        const remaining = roles.filter((role) => {
            return userCourse.role.toString() === role;
        });
        if (remaining.length <= 0) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.roleGuard.mustBeRoleToJoinCourse(roles));
        }
        return remaining.length > 0;
    }
};
RolesGuard = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueSSEService = void 0;
const common_1 = __webpack_require__(6);
const lodash_1 = __webpack_require__(44);
const sse_service_1 = __webpack_require__(86);
const queue_service_1 = __webpack_require__(87);
const idToRoom = (queueId) => `q-${queueId}`;
let QueueSSEService = class QueueSSEService {
    constructor(queueService, sseService) {
        this.queueService = queueService;
        this.sseService = sseService;
        this.updateQuestions = this.throttleUpdate(async (queueId) => {
            const questions = await this.queueService.getQuestions(queueId);
            if (questions) {
                this.sendToRoom(queueId, async ({ role, userId }) => ({
                    questions: await this.queueService.personalizeQuestions(queueId, questions, userId, role),
                }));
            }
        });
        this.updateQueue = this.throttleUpdate(async (queueId) => {
            const queue = await this.queueService.getQueue(queueId);
            if (queue) {
                await this.sendToRoom(queueId, async () => ({ queue }));
            }
        });
    }
    subscribeClient(queueId, res, metadata) {
        this.sseService.subscribeClient(idToRoom(queueId), res, metadata);
    }
    async sendToRoom(queueId, data) {
        await this.sseService.sendEvent(idToRoom(queueId), data);
    }
    throttleUpdate(updateFunction) {
        return (0, lodash_1.throttle)(async (queueId) => {
            try {
                await updateFunction(queueId);
            }
            catch (e) { }
        }, 1000, {
            leading: false,
            trailing: true,
        });
    }
};
QueueSSEService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [queue_service_1.QueueService,
        sse_service_1.SSEService])
], QueueSSEService);
exports.QueueSSEService = QueueSSEService;


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSEService = void 0;
const common_1 = __webpack_require__(6);
const async_1 = __webpack_require__(81);
const class_transformer_1 = __webpack_require__(3);
const nestjs_redis_1 = __webpack_require__(58);
const common_2 = __webpack_require__(2);
const Sentry = __webpack_require__(9);
let SSEService = class SSEService {
    constructor(redisService) {
        this.redisService = redisService;
        this.directConnnections = {};
        const redisSub = this.redisService.getClient('sub');
        if (!redisSub) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.getSubClient);
            throw new Error(common_2.ERROR_MESSAGES.sseService.getSubClient);
        }
        redisSub.on('message', (channel, message) => {
            const id = /sse::client-(\d+)/.exec(channel);
            if (id && id[1] in this.directConnnections) {
                this.directConnnections[id[1]].res.write(`data: ${message}\n\n`);
            }
        });
    }
    async onModuleDestroy() {
        await (0, async_1.each)(Object.values(this.directConnnections), async (conn) => {
            await conn.cleanup().catch((err) => {
                console.error(common_2.ERROR_MESSAGES.sseService.cleanupConnection);
                console.error(err);
                Sentry.captureException(err);
            });
        }).catch((err) => {
            console.error(common_2.ERROR_MESSAGES.sseService.moduleDestroy);
            console.error(err);
            Sentry.captureException(err);
        });
    }
    idToChannel(clientId) {
        return `sse::client-${clientId}`;
    }
    async subscribeClient(room, res, metadata) {
        const redisSub = this.redisService.getClient('sub');
        const redis = this.redisService.getClient('db');
        if (!redisSub) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.getSubClient);
            throw new Error(common_2.ERROR_MESSAGES.sseService.getSubClient);
        }
        if (!redis) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.getDBClient);
            throw new Error(common_2.ERROR_MESSAGES.sseService.getDBClient);
        }
        const clientId = await redis.incr('sse::client::id').catch((err) => {
            console.error(common_2.ERROR_MESSAGES.sseService.clientIdSubscribe);
            console.error(err);
            Sentry.captureException(err);
        });
        if (!clientId) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.clientIdNotFound);
            throw new Error(common_2.ERROR_MESSAGES.sseService.clientIdNotFound);
        }
        await redisSub.subscribe(this.idToChannel(clientId)).catch((err) => {
            console.error(common_2.ERROR_MESSAGES.sseService.subscribe);
            console.error(err);
            Sentry.captureException(err);
        });
        const clientInfo = JSON.stringify({
            clientId,
            metadata: metadata,
        });
        await redis.sadd(room, clientInfo).catch((err) => {
            console.error(err);
            Sentry.captureException(err);
        });
        this.directConnnections[clientId] = {
            res,
            cleanup: async () => {
                await redis.srem(room, clientInfo).catch((err) => {
                    console.error(common_2.ERROR_MESSAGES.sseService.removeFromRoom);
                    console.error(err);
                });
                await redisSub.unsubscribe(this.idToChannel(clientId)).catch((err) => {
                    console.error(common_2.ERROR_MESSAGES.sseService.unsubscribe);
                    console.error(err);
                    Sentry.captureException(err);
                });
                res.end();
            },
        };
        res.write('\n');
        res.socket.on('end', async () => {
            await this.directConnnections[clientId].cleanup().catch((err) => {
                console.error(common_2.ERROR_MESSAGES.sseService.directConnections);
                console.error(err);
                Sentry.captureException(err);
            });
            delete this.directConnnections[clientId];
        });
    }
    async sendEvent(room, payload) {
        const redisPub = this.redisService.getClient('pub');
        const redis = this.redisService.getClient('db');
        if (!redisPub) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.getPubClient);
            throw new Error(common_2.ERROR_MESSAGES.sseService.getPubClient);
        }
        if (!redis) {
            Sentry.captureException(common_2.ERROR_MESSAGES.sseService.getDBClient);
            throw new Error(common_2.ERROR_MESSAGES.sseService.getDBClient);
        }
        const roomInfo = await redis.smembers(room).catch((err) => {
            console.error(common_2.ERROR_MESSAGES.sseService.roomMembers);
            console.error(err);
            Sentry.captureException(err);
        });
        if (room && roomInfo) {
            const clients = roomInfo.map((s) => JSON.parse(s));
            console.log(`sending sse to ${clients.length} clients in ${room}`);
            console.time(`sending sse time: `);
            await (0, async_1.each)(clients, async ({ clientId, metadata }) => {
                const toSend = (0, class_transformer_1.serialize)(await payload(metadata).catch((err) => {
                    console.error(common_2.ERROR_MESSAGES.sseService.serialize);
                    console.error(err);
                    Sentry.captureException(err);
                }));
                await redisPub
                    .publish(this.idToChannel(clientId), toSend)
                    .catch((err) => {
                    console.error(common_2.ERROR_MESSAGES.sseService.publish);
                    console.error(err);
                    Sentry.captureException(err);
                });
            });
            console.timeEnd(`sending sse time: `);
        }
    }
};
SSEService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], SSEService);
exports.SSEService = SSEService;


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(3);
const lodash_1 = __webpack_require__(44);
const question_entity_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(20);
const queue_entity_1 = __webpack_require__(29);
const alerts_service_1 = __webpack_require__(43);
let QueueService = class QueueService {
    constructor(connection, alertsService) {
        this.connection = connection;
        this.alertsService = alertsService;
    }
    async getQueue(queueId) {
        const queue = await queue_entity_1.QueueModel.findOne(queueId, {
            relations: ['staffList'],
        });
        await queue.checkIsOpen();
        await queue.addQueueSize();
        return queue;
    }
    async getQuestions(queueId) {
        const queueSize = await queue_entity_1.QueueModel.count({
            where: { id: queueId },
        });
        if (queueSize === 0) {
            throw new common_2.NotFoundException();
        }
        const questionsFromDb = await question_entity_1.QuestionModel.inQueueWithStatus(queueId, [
            ...common_1.StatusInPriorityQueue,
            ...common_1.StatusInQueue,
            common_1.OpenQuestionStatus.Helping,
        ])
            .leftJoinAndSelect('question.creator', 'creator')
            .leftJoinAndSelect('question.taHelped', 'taHelped')
            .getMany();
        const unresolvedRephraseQuestionAlerts = await this.alertsService.getUnresolvedRephraseQuestionAlert(queueId);
        const groupMap = {};
        questionsFromDb.forEach((question) => {
            if (question.groupId) {
                if (!groupMap[question.groupId]) {
                    groupMap[question.groupId] = {
                        id: question.groupId,
                        creator: question.taHelped,
                        questions: [question],
                    };
                }
                else {
                    groupMap[question.groupId].questions.push(question);
                }
            }
        });
        const questions = new common_1.ListQuestionsResponse();
        questions.queue = questionsFromDb.filter((question) => common_1.StatusInQueue.includes(question.status));
        questions.questionsGettingHelp = questionsFromDb.filter((question) => question.status === common_1.OpenQuestionStatus.Helping && !question.groupId);
        questions.priorityQueue = questionsFromDb.filter((question) => common_1.StatusInPriorityQueue.includes(question.status));
        questions.groups = Object.values(groupMap);
        questions.unresolvedAlerts = unresolvedRephraseQuestionAlerts.map((alert) => alert.payload);
        return questions;
    }
    async personalizeQuestions(queueId, questions, userId, role) {
        if (role === common_1.Role.STUDENT) {
            const newLQR = new common_1.ListQuestionsResponse();
            Object.assign(newLQR, questions);
            newLQR.queue = questions.queue.map((question) => {
                const creator = question.creator.id === userId
                    ? question.creator
                    : (0, lodash_1.pick)(question.creator, ['id']);
                return (0, class_transformer_1.classToClass)(question_entity_1.QuestionModel.create(Object.assign(Object.assign({}, question), { creator })));
            });
            newLQR.questionsGettingHelp = questions.questionsGettingHelp.map((question) => {
                const creator = question.creator.id === userId
                    ? question.creator
                    : (0, lodash_1.pick)(question.creator, ['id']);
                return (0, class_transformer_1.classToClass)(question_entity_1.QuestionModel.create(Object.assign(Object.assign({}, question), { creator })));
            });
            newLQR.yourQuestion = await question_entity_1.QuestionModel.findOne({
                relations: ['creator', 'taHelped'],
                where: {
                    creatorId: userId,
                    queueId: queueId,
                    status: (0, typeorm_1.In)(common_1.StatusSentToCreator),
                },
            });
            newLQR.priorityQueue = [];
            return newLQR;
        }
        return questions;
    }
};
QueueService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        alerts_service_1.AlertsService])
], QueueService);
exports.QueueService = QueueService;


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSEModule = void 0;
const common_1 = __webpack_require__(6);
const sse_service_1 = __webpack_require__(86);
let SSEModule = class SSEModule {
};
SSEModule = __decorate([
    (0, common_1.Module)({ providers: [sse_service_1.SSEService], exports: [sse_service_1.SSEService] })
], SSEModule);
exports.SSEModule = SSEModule;


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueSubscriber = void 0;
const queue_sse_service_1 = __webpack_require__(85);
const typeorm_1 = __webpack_require__(20);
const queue_entity_1 = __webpack_require__(29);
let QueueSubscriber = class QueueSubscriber {
    constructor(connection, queueSSEService) {
        this.queueSSEService = queueSSEService;
        connection.subscribers.push(this);
    }
    listenTo() {
        return queue_entity_1.QueueModel;
    }
    async afterUpdate(event) {
        if (event.entity) {
            await this.queueSSEService.updateQueue(event.entity.id);
        }
    }
};
QueueSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection, queue_sse_service_1.QueueSSEService])
], QueueSubscriber);
exports.QueueSubscriber = QueueSubscriber;


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModule = void 0;
const common_1 = __webpack_require__(6);
const login_controller_1 = __webpack_require__(91);
const jwt_strategy_1 = __webpack_require__(96);
const jwt_1 = __webpack_require__(92);
const config_1 = __webpack_require__(14);
const login_course_service_1 = __webpack_require__(95);
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                }),
            }),
        ],
        controllers: [login_controller_1.LoginController],
        providers: [jwt_strategy_1.JwtStrategy, login_course_service_1.LoginCourseService],
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
const jwt_1 = __webpack_require__(92);
const Sentry = __webpack_require__(9);
const course_entity_1 = __webpack_require__(24);
const user_decorator_1 = __webpack_require__(38);
const jwt_auth_guard_1 = __webpack_require__(36);
const httpSignature = __webpack_require__(93);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(20);
const non_production_guard_1 = __webpack_require__(94);
const login_course_service_1 = __webpack_require__(95);
let LoginController = class LoginController {
    constructor(connection, loginCourseService, jwtService, configService) {
        this.connection = connection;
        this.loginCourseService = loginCourseService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async recieveDataFromKhoury(req, body) {
        if (process.env.NODE_ENV === 'production') {
            const parsedRequest = httpSignature.parseRequest(req);
            const verifySignature = httpSignature.verifyHMAC(parsedRequest, this.configService.get('KHOURY_PRIVATE_KEY'));
            if (!verifySignature) {
                Sentry.captureMessage('Invalid request signature: ' + parsedRequest);
                throw new common_2.UnauthorizedException('Invalid request signature');
            }
        }
        let user;
        try {
            user = await this.loginCourseService.addUserFromKhoury(body);
        }
        catch (e) {
            Sentry.captureException(e);
            console.error('Khoury login threw an exception, the body was ', body);
            console.error(e);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.loginController.addUserFromKhoury, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const token = await this.jwtService.signAsync({ userId: user.id }, { expiresIn: 60 });
        if (token === null || token === undefined) {
            console.error('Temporary JWT is invalid');
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.loginController.invalidTempJWTToken, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return {
            redirect: this.configService.get('DOMAIN') + `/api/v1/login/entry?token=${token}`,
        };
    }
    async enterFromKhoury(res, token) {
        const isVerified = await this.jwtService.verifyAsync(token);
        if (!isVerified) {
            throw new common_2.UnauthorizedException();
        }
        const payload = this.jwtService.decode(token);
        if (payload === null || payload === undefined) {
            console.error('Decoded JWT is invalid');
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.loginController.invalidPayload, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        this.enter(res, payload.userId);
    }
    async enterFromDev(res, userId) {
        this.enter(res, userId);
    }
    async enter(res, userId) {
        const authToken = await this.jwtService.signAsync({
            userId,
            expiresIn: 60 * 60 * 24 * 30,
        });
        if (authToken === null || authToken === undefined) {
            console.error('Authroziation JWT is invalid');
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.loginController.invalidTempJWTToken, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const isSecure = this.configService
            .get('DOMAIN')
            .startsWith('https://');
        res
            .cookie('auth_token', authToken, { httpOnly: true, secure: isSecure })
            .redirect(302, '/');
    }
    async logout(res) {
        const isSecure = this.configService
            .get('DOMAIN')
            .startsWith('https://');
        res
            .clearCookie('auth_token', { httpOnly: true, secure: isSecure })
            .redirect(302, '/login');
    }
    async selfEnrollEnabledAnywhere() {
        const courses = await course_entity_1.CourseModel.find();
        return { courses: courses.filter((course) => course.selfEnroll) };
    }
    async createSelfEnrollOverride(courseId, user) {
        const course = await course_entity_1.CourseModel.findOne(courseId);
        if (!course.selfEnroll) {
            throw new common_2.UnauthorizedException('Cannot self-enroll to this course currently');
        }
        const prevUCM = await user_course_entity_1.UserCourseModel.findOne({
            where: {
                courseId,
                userId: user.id,
            },
        });
        if (prevUCM) {
            throw new common_2.BadRequestException('User already has an override for this course');
        }
        await user_course_entity_1.UserCourseModel.create({
            userId: user.id,
            courseId: courseId,
            role: common_1.Role.STUDENT,
            override: true,
            expires: true,
        }).save();
    }
};
__decorate([
    (0, common_2.Post)('/khoury_login'),
    __param(0, (0, common_2.Req)()),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, common_1.KhouryDataParams]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "recieveDataFromKhoury", null);
__decorate([
    (0, common_2.Get)('/login/entry'),
    __param(0, (0, common_2.Res)()),
    __param(1, (0, common_2.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "enterFromKhoury", null);
__decorate([
    (0, common_2.Get)('/login/dev'),
    (0, common_2.UseGuards)(non_production_guard_1.NonProductionGuard),
    __param(0, (0, common_2.Res)()),
    __param(1, (0, common_2.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "enterFromDev", null);
__decorate([
    (0, common_2.Get)('/logout'),
    __param(0, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "logout", null);
__decorate([
    (0, common_2.Get)('self_enroll_courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "selfEnrollEnabledAnywhere", null);
__decorate([
    (0, common_2.Post)('create_self_enroll_override/:id'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "createSelfEnrollOverride", null);
LoginController = __decorate([
    (0, common_2.Controller)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        login_course_service_1.LoginCourseService,
        jwt_1.JwtService,
        config_1.ConfigService])
], LoginController);
exports.LoginController = LoginController;


/***/ }),
/* 92 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 93 */
/***/ ((module) => {

module.exports = require("http-signature");

/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NonProductionGuard = void 0;
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(2);
let NonProductionGuard = class NonProductionGuard {
    canActivate() {
        return !(0, common_2.isProd)();
    }
};
NonProductionGuard = __decorate([
    (0, common_1.Injectable)()
], NonProductionGuard);
exports.NonProductionGuard = NonProductionGuard;


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginCourseService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const course_entity_1 = __webpack_require__(24);
const course_section_mapping_entity_1 = __webpack_require__(65);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const semester_entity_1 = __webpack_require__(34);
const typeorm_1 = __webpack_require__(20);
const prof_section_groups_entity_1 = __webpack_require__(67);
const last_registration_model_entity_1 = __webpack_require__(66);
let LoginCourseService = class LoginCourseService {
    constructor(connection) {
        this.connection = connection;
    }
    async addUserFromKhoury(info) {
        let user;
        const neuEmail = info.email.replace('@husky.neu.edu', '@northeastern.edu');
        user = await user_entity_1.UserModel.findOne({
            where: { email: neuEmail },
            relations: ['courses', 'courses.course'],
        });
        if (!user) {
            user = await user_entity_1.UserModel.create({
                courses: [],
                email: neuEmail,
                firstName: info.first_name,
                lastName: info.last_name,
                hideInsights: [],
            }).save();
        }
        const userCourses = [];
        for (const c of info.courses) {
            if ((0, common_1.isKhouryCourse)(c)) {
                const course = await this.courseCRNToCourse(c.crn, c.semester);
                if (course) {
                    const userCourse = await this.courseToUserCourse(user.id, course.id, this.convertKhouryRole(c.role));
                    userCourses.push(userCourse);
                }
            }
            else {
                if (c.crns.length !== 0) {
                    const courseCRN = c.crns[0];
                    const profCourse = await this.courseCRNToCourse(courseCRN, c.semester);
                    if (profCourse) {
                        const profUserCourse = await this.courseToUserCourse(user.id, profCourse.id, common_1.Role.PROFESSOR);
                        userCourses.push(profUserCourse);
                    }
                }
            }
        }
        for (const previousCourse of user.courses) {
            if (!this.hasUserCourse(userCourses, previousCourse) &&
                previousCourse.course.enabled) {
                if (!previousCourse.override) {
                    previousCourse.remove();
                }
                else {
                    userCourses.push(previousCourse);
                }
            }
        }
        if (info.courses[0] && !(0, common_1.isKhouryCourse)(info.courses[0])) {
            const profSectionGroups = await prof_section_groups_entity_1.ProfSectionGroupsModel.findOne({
                where: { profId: user.id },
            });
            if (profSectionGroups) {
                profSectionGroups.sectionGroups = info.courses;
                await profSectionGroups.save();
            }
            else {
                await prof_section_groups_entity_1.ProfSectionGroupsModel.create({
                    profId: user.id,
                    sectionGroups: info.courses,
                }).save();
            }
        }
        user.courses = userCourses;
        await user.save();
        return user;
    }
    async courseCRNToCourse(courseCRN, semester) {
        const semModel = await this.getOrTransitionSemester(semester);
        const courseSectionModel = await course_section_mapping_entity_1.CourseSectionMappingModel.createQueryBuilder('section_mapping')
            .leftJoinAndSelect('section_mapping.course', 'course')
            .where('section_mapping.crn = :courseCRN and course.semesterId = :semesterId', { courseCRN, semesterId: semModel.id })
            .getOne();
        return courseSectionModel === null || courseSectionModel === void 0 ? void 0 : courseSectionModel.course;
    }
    async courseToUserCourse(userId, courseId, role) {
        let userCourse;
        userCourse = await user_course_entity_1.UserCourseModel.findOne({
            where: { userId, courseId },
        });
        if (userCourse && userCourse.override && userCourse.role === role) {
            userCourse.override = false;
            await userCourse.save();
        }
        if (!userCourse) {
            userCourse = await user_course_entity_1.UserCourseModel.create({
                userId,
                courseId,
                role,
            }).save();
        }
        return userCourse;
    }
    parseKhourySemester(khourySemester) {
        let year = Number(khourySemester.slice(0, 4));
        const semesterCode = khourySemester.slice(-2);
        const season = Object.keys(last_registration_model_entity_1.khourySemesterCodes).find((key) => last_registration_model_entity_1.khourySemesterCodes[key] === semesterCode);
        if (season === 'Fall') {
            year--;
        }
        return { season, year };
    }
    async getOrTransitionSemester(khourySemester) {
        const { season, year } = this.parseKhourySemester(khourySemester);
        let semModel = await semester_entity_1.SemesterModel.findOne({ where: { season, year } });
        if (!semModel) {
            semModel = await semester_entity_1.SemesterModel.create({
                season,
                year,
                courses: [],
            }).save();
            await this.disablePrevCourses(semModel);
        }
        return semModel;
    }
    async disablePrevCourses(currSem) {
        const concurrentSeasons = {
            Summer_1: ['Summer_Full'],
            Summer_2: ['Summer_Full'],
            Summer_Full: ['Summer_1', 'Summer_2'],
            Fall: [],
            Spring: [],
        };
        const concurrentSems = await semester_entity_1.SemesterModel.find({
            season: (0, typeorm_1.In)(concurrentSeasons[currSem.season]),
            year: currSem.year,
        });
        const activeSemIds = [...concurrentSems.map((s) => s.id), currSem.id];
        const courses = await course_entity_1.CourseModel.find({
            where: { enabled: true, semesterId: (0, typeorm_1.Not)((0, typeorm_1.In)(activeSemIds)) },
        });
        courses.forEach((c) => (c.enabled = false));
        try {
            await course_entity_1.CourseModel.save(courses);
        }
        catch (err) {
            console.error('Failed to disable previous courses: ', err);
        }
    }
    hasUserCourse(userCourses, previousCourse) {
        return userCourses.some((uc) => uc.courseId === previousCourse.courseId &&
            uc.userId === previousCourse.userId &&
            uc.role === previousCourse.role);
    }
    convertKhouryRole(khouryRole) {
        return khouryRole.toLowerCase() === 'ta' ? common_1.Role.TA : common_1.Role.STUDENT;
    }
};
LoginCourseService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], LoginCourseService);
exports.LoginCourseService = LoginCourseService;


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(97);
const passport_1 = __webpack_require__(37);
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: (req) => req.cookies['auth_token'],
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }
    validate(payload) {
        return Object.assign({}, payload);
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 97 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const async_1 = __webpack_require__(81);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const typeorm_1 = __webpack_require__(20);
const roles_decorator_1 = __webpack_require__(39);
const user_decorator_1 = __webpack_require__(38);
const course_roles_guard_1 = __webpack_require__(99);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
const course_entity_1 = __webpack_require__(24);
const queue_clean_service_1 = __webpack_require__(80);
const queue_sse_service_1 = __webpack_require__(85);
const course_service_1 = __webpack_require__(100);
const heatmap_service_1 = __webpack_require__(101);
const course_section_mapping_entity_1 = __webpack_require__(65);
let CourseController = class CourseController {
    constructor(connection, queueCleanService, queueSSEService, heatmapService, courseService) {
        this.connection = connection;
        this.queueCleanService = queueCleanService;
        this.queueSSEService = queueSSEService;
        this.heatmapService = heatmapService;
        this.courseService = courseService;
    }
    async get(id, user) {
        const course = await course_entity_1.CourseModel.findOne(id, {
            relations: ['queues', 'queues.staffList'],
        });
        if (course === null || course === undefined) {
            console.error(common_1.ERROR_MESSAGES.courseController.courseNotFound + 'Course ID: ' + id);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        try {
            course.heatmap = await this.heatmapService.getCachedHeatmapFor(id);
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.courseOfficeHourError +
                '\n' +
                'Error message: ' +
                err);
            course.heatmap = [];
        }
        const userCourseModel = await user_course_entity_1.UserCourseModel.findOne({
            where: {
                user,
                courseId: id,
            },
        });
        if (userCourseModel === undefined || userCourseModel === null) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseModelError, common_2.HttpStatus.NOT_FOUND);
        }
        if (userCourseModel.role === common_1.Role.PROFESSOR ||
            userCourseModel.role === common_1.Role.TA) {
            course.queues = await async_1.default.filter(course.queues, async (q) => !q.isDisabled);
        }
        else if (userCourseModel.role === common_1.Role.STUDENT) {
            course.queues = await async_1.default.filter(course.queues, async (q) => !q.isDisabled && (await q.checkIsOpen()));
        }
        for (const que of course.queues) {
            await que.checkIsOpen();
        }
        try {
            await async_1.default.each(course.queues, async (q) => {
                await q.addQueueSize();
            });
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.updatedQueueError +
                '\n' +
                'Error message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updatedQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const course_response = Object.assign(Object.assign({}, course), { crns: null });
        try {
            const mappings = await course_section_mapping_entity_1.CourseSectionMappingModel.find({
                courseId: course.id,
            });
            course_response.crns = mappings.map((mapping) => mapping.crn);
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.courseOfficeHourError +
                '\n' +
                'Error message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseCrnsError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return course_response;
    }
    async editCourseInfo(courseId, coursePatch) {
        await this.courseService.editCourse(courseId, coursePatch);
    }
    async checkIn(courseId, room, user) {
        const queues = await queue_entity_1.QueueModel.find({
            where: {
                courseId: courseId,
            },
            relations: ['staffList'],
        });
        if (queues &&
            queues.some((q) => q.staffList.some((staff) => staff.id === user.id))) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.courseController.checkIn.cannotCheckIntoMultipleQueues);
        }
        const queue = await queue_entity_1.QueueModel.findOne({
            room,
            courseId,
            isDisabled: false,
        }, { relations: ['staffList'] });
        const userCourseModel = await user_course_entity_1.UserCourseModel.findOne({
            where: {
                user,
                courseId,
            },
        });
        if (!queue) {
            if (userCourseModel === null || userCourseModel === undefined) {
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseModelError, common_2.HttpStatus.NOT_FOUND);
            }
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.queueNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        if (userCourseModel.role === common_1.Role.TA && queue.isProfessorQueue) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.courseController.queueNotAuthorized);
        }
        if (queue.staffList.length === 0) {
            queue.allowQuestions = true;
        }
        queue.staffList.push(user);
        try {
            await queue.save();
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.saveQueueError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.saveQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            await event_model_entity_1.EventModel.create({
                time: new Date(),
                eventType: event_model_entity_1.EventType.TA_CHECKED_IN,
                user,
                courseId,
                queueId: queue.id,
            }).save();
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.createEventError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createEventError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            await this.queueSSEService.updateQueue(queue.id);
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.createEventError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updatedQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return queue;
    }
    async generateQueue(courseId, room, user, body) {
        const userCourseModel = await user_course_entity_1.UserCourseModel.findOne({
            where: {
                user,
                courseId,
            },
        });
        if (userCourseModel === null || userCourseModel === undefined) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseModelError, common_2.HttpStatus.NOT_FOUND);
        }
        const queue = await queue_entity_1.QueueModel.findOne({
            room,
            courseId,
            isDisabled: false,
        });
        if (queue) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.queueAlreadyExists, common_2.HttpStatus.BAD_REQUEST);
        }
        if (userCourseModel.role === common_1.Role.TA && body.isProfessorQueue) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.courseController.queueNotAuthorized);
        }
        try {
            return await queue_entity_1.QueueModel.create({
                room,
                courseId,
                staffList: [],
                questions: [],
                allowQuestions: true,
                notes: body.notes,
                isProfessorQueue: body.isProfessorQueue,
            }).save();
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.saveQueueError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.saveQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async checkOut(courseId, room, user) {
        const queue = await queue_entity_1.QueueModel.findOne({
            room,
            courseId,
            isDisabled: false,
        }, { relations: ['staffList'] });
        if (queue === undefined || queue === null) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.queueNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        if (!queue.staffList.find((e) => e.id === user.id))
            return;
        queue.staffList = queue.staffList.filter((e) => e.id !== user.id);
        if (queue.staffList.length === 0) {
            queue.allowQuestions = false;
        }
        try {
            await queue.save();
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.saveQueueError +
                '\nError Message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.saveQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            await event_model_entity_1.EventModel.create({
                time: new Date(),
                eventType: event_model_entity_1.EventType.TA_CHECKED_OUT,
                user,
                courseId,
                queueId: queue.id,
            }).save();
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.createEventError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createEventError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            await this.queueSSEService.updateQueue(queue.id);
        }
        catch (err) {
            console.error(common_1.ERROR_MESSAGES.courseController.createEventError +
                '\nError message: ' +
                err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updatedQueueError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return { queueId: queue.id };
    }
    async getCourseOverrides(courseId) {
        const resp = await user_course_entity_1.UserCourseModel.find({
            where: { courseId, override: true },
            relations: ['user'],
        });
        if (resp === null || resp === undefined) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseModelError, common_2.HttpStatus.NOT_FOUND);
        }
        return {
            data: resp.map((row) => ({
                id: row.id,
                role: row.role,
                name: row.user.name,
                email: row.user.email,
            })),
        };
    }
    async addOverride(courseId, overrideInfo) {
        const user = await user_entity_1.UserModel.findOne({
            where: { email: overrideInfo.email },
        });
        if (!user)
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.noUserFound);
        const userId = user.id;
        let userCourse = await user_course_entity_1.UserCourseModel.findOne({
            where: { courseId, userId },
        });
        if (!userCourse) {
            try {
                userCourse = await user_course_entity_1.UserCourseModel.create({
                    userId,
                    courseId,
                    role: overrideInfo.role,
                    override: true,
                }).save();
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createCourse, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        else {
            userCourse.override = true;
            userCourse.role = overrideInfo.role;
            try {
                await userCourse.save();
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updateCourse, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return {
            id: userCourse.id,
            role: userCourse.role,
            name: user.name,
            email: user.email,
        };
    }
    async deleteOverride(courseId, overrideInfo) {
        const user = await user_entity_1.UserModel.findOne({
            where: { email: overrideInfo.email },
        });
        if (!user)
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.noUserFound);
        const userId = user.id;
        const userCourse = await user_course_entity_1.UserCourseModel.findOne({
            where: { courseId, userId, override: true },
        });
        await this.courseService.removeUserFromCourse(userCourse);
    }
    async withdrawCourse(courseId, userId) {
        const userCourse = await user_course_entity_1.UserCourseModel.findOne({
            where: { courseId, userId },
        });
        await this.courseService.removeUserFromCourse(userCourse);
    }
    async registerCourses(body, userId) {
        await this.courseService.registerCourses(body, userId);
    }
    async taCheckinTimes(courseId, startDate, endDate) {
        try {
            return await this.courseService.getTACheckInCheckOutTimes(courseId, startDate, endDate);
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.checkInTime, common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async getUserInfo(courseId, page, role, search) {
        const pageSize = 50;
        if (!search) {
            search = '';
        }
        const users = await this.courseService.getUserInfo(courseId, page, pageSize, search, role);
        return users;
    }
    async toggleSelfEnroll(courseId) {
        const course = await course_entity_1.CourseModel.findOne(courseId);
        course.selfEnroll = !course.selfEnroll;
        await course.save();
    }
};
__decorate([
    (0, common_2.Get)(':id'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR, common_1.Role.STUDENT, common_1.Role.TA),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "get", null);
__decorate([
    (0, common_2.Patch)(':id/edit_course'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_1.EditCourseInfoParams]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "editCourseInfo", null);
__decorate([
    (0, common_2.Post)(':id/ta_location/:room'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR, common_1.Role.TA),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Param)('room')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "checkIn", null);
__decorate([
    (0, common_2.Post)(':id/generate_queue/:room'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR, common_1.Role.TA),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Param)('room')),
    __param(2, (0, user_decorator_1.User)()),
    __param(3, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.UserModel, Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "generateQueue", null);
__decorate([
    (0, common_2.Delete)(':id/ta_location/:room'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR, common_1.Role.TA),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Param)('room')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "checkOut", null);
__decorate([
    (0, common_2.Get)(':id/course_override'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseOverrides", null);
__decorate([
    (0, common_2.Post)(':id/update_override'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_1.UpdateCourseOverrideBody]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "addOverride", null);
__decorate([
    (0, common_2.Delete)(':id/update_override'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_1.UpdateCourseOverrideBody]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "deleteOverride", null);
__decorate([
    (0, common_2.Delete)(':id/withdraw_course'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "withdrawCourse", null);
__decorate([
    (0, common_2.Post)('/register_courses'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "registerCourses", null);
__decorate([
    (0, common_2.Get)(':id/ta_check_in_times'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Query)('startDate')),
    __param(2, (0, common_2.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "taCheckinTimes", null);
__decorate([
    (0, common_2.Get)(':id/get_user_info/:page/:role?'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Param)('page')),
    __param(2, (0, common_2.Param)('role')),
    __param(3, (0, common_2.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getUserInfo", null);
__decorate([
    (0, common_2.Post)(':id/self_enroll'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, course_roles_guard_1.CourseRolesGuard),
    (0, roles_decorator_1.Roles)(common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "toggleSelfEnroll", null);
CourseController = __decorate([
    (0, common_2.Controller)('courses'),
    (0, common_2.UseInterceptors)(common_2.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        queue_clean_service_1.QueueCleanService,
        queue_sse_service_1.QueueSSEService,
        heatmap_service_1.HeatmapService,
        course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseRolesGuard = void 0;
const common_1 = __webpack_require__(6);
const role_guard_1 = __webpack_require__(84);
const user_entity_1 = __webpack_require__(26);
let CourseRolesGuard = class CourseRolesGuard extends role_guard_1.RolesGuard {
    async setupData(request) {
        const user = await user_entity_1.UserModel.findOne(request.user.userId, {
            relations: ['courses'],
        });
        const courseId = request.params.id;
        return { courseId, user };
    }
};
CourseRolesGuard = __decorate([
    (0, common_1.Injectable)()
], CourseRolesGuard);
exports.CourseRolesGuard = CourseRolesGuard;


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourseService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const lodash_1 = __webpack_require__(44);
const event_model_entity_1 = __webpack_require__(33);
const question_entity_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(20);
const user_course_entity_1 = __webpack_require__(23);
const semester_entity_1 = __webpack_require__(34);
const prof_section_groups_entity_1 = __webpack_require__(67);
const course_section_mapping_entity_1 = __webpack_require__(65);
const last_registration_model_entity_1 = __webpack_require__(66);
const login_course_service_1 = __webpack_require__(95);
const course_entity_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(26);
let CourseService = class CourseService {
    constructor(connection, loginCourseService) {
        this.connection = connection;
        this.loginCourseService = loginCourseService;
    }
    async getTACheckInCheckOutTimes(courseId, startDate, endDate) {
        const startDateAsDate = new Date(startDate);
        const endDateAsDate = new Date(endDate);
        if (startDateAsDate.getUTCDate() === endDateAsDate.getUTCDate()) {
            endDateAsDate.setUTCDate(endDateAsDate.getUTCDate() + 1);
        }
        const taEvents = await event_model_entity_1.EventModel.find({
            where: {
                eventType: (0, typeorm_1.In)([
                    event_model_entity_1.EventType.TA_CHECKED_IN,
                    event_model_entity_1.EventType.TA_CHECKED_OUT,
                    event_model_entity_1.EventType.TA_CHECKED_OUT_FORCED,
                ]),
                time: (0, typeorm_1.Between)(startDateAsDate, endDateAsDate),
                courseId,
            },
            relations: ['user'],
        });
        const [checkinEvents, otherEvents] = (0, lodash_1.partition)(taEvents, (e) => e.eventType === event_model_entity_1.EventType.TA_CHECKED_IN);
        const taCheckinTimes = [];
        for (const checkinEvent of checkinEvents) {
            let closestEvent = null;
            let mostRecentTime = new Date();
            const originalDate = mostRecentTime;
            for (const checkoutEvent of otherEvents) {
                if (checkoutEvent.userId === checkinEvent.userId &&
                    checkoutEvent.time > checkinEvent.time &&
                    checkoutEvent.time.getTime() - checkinEvent.time.getTime() <
                        mostRecentTime.getTime() - checkinEvent.time.getTime()) {
                    closestEvent = checkoutEvent;
                    mostRecentTime = checkoutEvent.time;
                }
            }
            const numHelped = await question_entity_1.QuestionModel.count({
                where: {
                    taHelpedId: checkinEvent.userId,
                    helpedAt: (0, typeorm_1.Between)(checkinEvent.time, (closestEvent === null || closestEvent === void 0 ? void 0 : closestEvent.time) || new Date()),
                },
            });
            taCheckinTimes.push({
                name: checkinEvent.user.name,
                checkinTime: checkinEvent.time,
                checkoutTime: closestEvent === null || closestEvent === void 0 ? void 0 : closestEvent.time,
                inProgress: mostRecentTime === originalDate,
                forced: (closestEvent === null || closestEvent === void 0 ? void 0 : closestEvent.eventType) === event_model_entity_1.EventType.TA_CHECKED_OUT_FORCED,
                numHelped,
            });
        }
        return { taCheckinTimes };
    }
    async removeUserFromCourse(userCourse) {
        if (!userCourse) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        try {
            await user_course_entity_1.UserCourseModel.remove(userCourse);
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.removeCourse, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async editCourse(courseId, coursePatch) {
        const course = await course_entity_1.CourseModel.findOne(courseId);
        if (course === null || course === undefined) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.courseNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        if (Object.values(coursePatch).some((x) => x === null || x === '')) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.updateCourse);
        }
        let courseCrnMaps = await course_section_mapping_entity_1.CourseSectionMappingModel.find({ courseId });
        for (const courseCrnMap of courseCrnMaps) {
            if (!coursePatch.crns.includes(courseCrnMap.crn)) {
                try {
                    await course_section_mapping_entity_1.CourseSectionMappingModel.delete({
                        crn: courseCrnMap.crn,
                        courseId: course.id,
                    });
                }
                catch (err) {
                    console.error(err);
                    throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createCourseMappings, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
        for (const crn of new Set(coursePatch.crns)) {
            courseCrnMaps = await course_section_mapping_entity_1.CourseSectionMappingModel.find({
                crn: crn,
            });
            let courseCrnMapExists = false;
            for (const courseCrnMap of courseCrnMaps) {
                const conflictCourse = await course_entity_1.CourseModel.findOne(courseCrnMap.courseId);
                if (conflictCourse && conflictCourse.semesterId === course.semesterId) {
                    if (courseCrnMap.courseId !== courseId) {
                        throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.crnAlreadyRegistered(crn, courseId));
                    }
                    else {
                        courseCrnMapExists = true;
                        break;
                    }
                }
            }
            if (!courseCrnMapExists) {
                try {
                    await course_section_mapping_entity_1.CourseSectionMappingModel.create({
                        crn: crn,
                        courseId: course.id,
                    }).save();
                }
                catch (err) {
                    console.error(err);
                    throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createCourseMappings, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
        if (coursePatch.name) {
            course.name = coursePatch.name;
        }
        if (coursePatch.coordinator_email) {
            course.coordinator_email = coursePatch.coordinator_email;
        }
        if (coursePatch.icalURL) {
            course.icalURL = coursePatch.icalURL;
        }
        try {
            await course.save();
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updateCourse, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async registerCourses(body, userId) {
        var _a;
        const profSectionGroups = await prof_section_groups_entity_1.ProfSectionGroupsModel.findOne({
            where: { profId: userId },
        });
        for (const courseParams of body) {
            const sectionGroup = profSectionGroups === null || profSectionGroups === void 0 ? void 0 : profSectionGroups.sectionGroups.find((sg) => sg.name === courseParams.sectionGroupName);
            if (!sectionGroup)
                throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.sectionGroupNotFound);
            const khourySemesterParsed = this.loginCourseService.parseKhourySemester(sectionGroup.semester);
            const semester = await semester_entity_1.SemesterModel.findOne({
                where: {
                    season: khourySemesterParsed.season,
                    year: khourySemesterParsed.year,
                },
            });
            if (!semester)
                throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.noSemesterFound);
            let course = await course_entity_1.CourseModel.findOne({
                where: {
                    sectionGroupName: courseParams.sectionGroupName,
                    semesterId: semester.id,
                },
            });
            if (course)
                throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.courseController.courseAlreadyRegistered, courseParams.name);
            try {
                course = await course_entity_1.CourseModel.create({
                    name: courseParams.name,
                    sectionGroupName: courseParams.sectionGroupName,
                    coordinator_email: courseParams.coordinator_email,
                    icalURL: courseParams.iCalURL,
                    semesterId: semester.id,
                    enabled: true,
                    timezone: courseParams.timezone,
                }).save();
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createCourse, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            try {
                new Set(sectionGroup.crns).forEach(async (crn) => {
                    await course_section_mapping_entity_1.CourseSectionMappingModel.create({
                        crn: crn,
                        courseId: course.id,
                    }).save();
                });
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.createCourseMappings, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await user_course_entity_1.UserCourseModel.create({
                userId,
                courseId: course.id,
                role: common_1.Role.PROFESSOR,
            }).save();
        }
        try {
            let profLastRegistered;
            profLastRegistered = await last_registration_model_entity_1.LastRegistrationModel.findOne({
                where: { profId: userId },
            });
            const lastRegisteredSemester = (_a = profSectionGroups === null || profSectionGroups === void 0 ? void 0 : profSectionGroups.sectionGroups[0]) === null || _a === void 0 ? void 0 : _a.semester;
            if (profLastRegistered) {
                profLastRegistered.lastRegisteredSemester = lastRegisteredSemester;
                await profLastRegistered.save();
            }
            else {
                profLastRegistered = await last_registration_model_entity_1.LastRegistrationModel.create({
                    profId: userId,
                    lastRegisteredSemester,
                }).save();
            }
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.courseController.updateProfLastRegistered, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserInfo(courseId, page, pageSize, search, role) {
        const query = await (0, typeorm_1.getRepository)(user_entity_1.UserModel)
            .createQueryBuilder()
            .leftJoin(user_course_entity_1.UserCourseModel, 'UserCourseModel', '"UserModel".id = "UserCourseModel"."userId"')
            .where('"UserCourseModel"."courseId" = :courseId', { courseId });
        if (role) {
            query.andWhere('"UserCourseModel".role = :role', { role });
        }
        if (search) {
            const likeSearch = `%${search.replace(' ', '')}%`.toUpperCase();
            query.andWhere(new typeorm_1.Brackets((q) => {
                q.where('CONCAT(UPPER("UserModel"."firstName"), UPPER("UserModel"."lastName")) like :searchString', {
                    searchString: likeSearch,
                });
            }));
        }
        const users = query.select([
            'UserModel.id',
            'UserModel.firstName',
            'UserModel.lastName',
            'UserModel.photoURL',
            'UserModel.email',
        ]);
        const total = await users.getCount();
        const usersSubset = await users
            .orderBy('UserModel.firstName')
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getMany();
        return { users: usersSubset, total };
    }
};
CourseService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        login_course_service_1.LoginCourseService])
], CourseService);
exports.CourseService = CourseService;


/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeatmapService = void 0;
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(2);
const moment = __webpack_require__(102);
const course_entity_1 = __webpack_require__(24);
const typeorm_1 = __webpack_require__(20);
const question_entity_1 = __webpack_require__(31);
const event_model_entity_1 = __webpack_require__(33);
const nestjs_command_1 = __webpack_require__(19);
const lodash_1 = __webpack_require__(44);
__webpack_require__(103);
function arrayRotate(arr, count) {
    count -= arr.length * Math.floor(count / arr.length);
    const spliced = arr.splice(0, count);
    return [...arr, ...spliced];
}
let HeatmapService = class HeatmapService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
    async getCachedHeatmapFor(courseId) {
        const cacheLengthInSeconds = 604800;
        return this.cacheManager.wrap(`heatmap/${courseId}`, () => this._getHeatmapFor(courseId), { ttl: cacheLengthInSeconds });
    }
    async _getHeatmapFor(courseId) {
        const BUCKET_SIZE_IN_MINS = 15;
        const SAMPLES_PER_BUCKET = 3;
        console.time('heatmap');
        const recent = moment().subtract(8, 'weeks').toISOString();
        const questions = await question_entity_1.QuestionModel.createQueryBuilder('question')
            .leftJoinAndSelect('question.queue', 'queue')
            .where('queue.courseId = :courseId', { courseId })
            .andWhere('question.status = :status', {
            status: common_2.ClosedQuestionStatus.Resolved,
        })
            .andWhere('question.helpedAt IS NOT NULL')
            .andWhere('question.createdAt > :recent', { recent })
            .orderBy('question.createdAt', 'ASC')
            .getMany();
        if (questions.length === 0) {
            return false;
        }
        const taEvents = await event_model_entity_1.EventModel.find({
            where: { time: (0, typeorm_1.MoreThan)(recent), courseId },
        });
        if (taEvents.length === 0) {
            return false;
        }
        const tz = (await course_entity_1.CourseModel.findOne({ id: courseId })).timezone;
        function extractTimestamps(taEvents) {
            const hours = [];
            taEvents.sort((a, b) => {
                return a.time.getTime() - b.time.getTime();
            });
            let iday = taEvents[0].time.getDate();
            let itime = taEvents[0].time.getTime();
            let etime = taEvents[0].time.getTime();
            for (let i = 1; i < taEvents.length; i++) {
                if (taEvents[i].time.getDate() == iday) {
                    etime = taEvents[i].time.getTime();
                }
                else {
                    hours.push([itime, etime]);
                    iday = taEvents[i].time.getDate();
                    itime = taEvents[i].time.getTime();
                    etime = taEvents[i].time.getTime();
                }
            }
            hours.push([itime, etime]);
            return hours;
        }
        let heatmap = this._generateHeatMapWithReplay(questions.filter((q) => q.helpedAt.getDate() === q.createdAt.getDate()), extractTimestamps(taEvents), tz, BUCKET_SIZE_IN_MINS, SAMPLES_PER_BUCKET);
        heatmap = arrayRotate(heatmap, -moment.tz.zone(tz).utcOffset(Date.now()) / BUCKET_SIZE_IN_MINS);
        console.timeEnd('heatmap');
        return heatmap;
    }
    _generateHeatMapWithReplay(questions, hourTimestamps, timezone, bucketSize, samplesPerBucket) {
        const sampleInterval = bucketSize / samplesPerBucket;
        function dateToBucket(date) {
            const cInZone = moment.tz(date, timezone);
            return Math.floor((cInZone.day() * 24 * 60 + cInZone.hour() * 60 + cInZone.minute()) /
                bucketSize);
        }
        const timepointBuckets = [
            ...Array((24 * 7 * 60) / bucketSize),
        ].map(() => []);
        if (questions.length) {
            const startDate = questions[0].createdAt;
            const sunday = moment.tz(startDate, timezone).startOf('week').toDate();
            function getNextTimepointIndex(date) {
                return Math.floor((0, common_2.timeDiffInMins)(date, sunday) / sampleInterval) + 1;
            }
            function getNextSampleTimepoint(date) {
                const timepointIndex = getNextTimepointIndex(date);
                return new Date(sunday.getTime() + timepointIndex * sampleInterval * 60 * 1000);
            }
            function getSampleTimepointsInDateRange(date1, date2) {
                const ret = [];
                let curr = getNextSampleTimepoint(date1);
                while (curr.getTime() < date2.getTime()) {
                    ret.push(curr);
                    curr = getNextSampleTimepoint(curr);
                }
                return ret;
            }
            function lastBucketBoundary(date) {
                const startOfWeek = moment.tz(date, timezone).startOf('week');
                const m = moment(date);
                return m.subtract(m.diff(startOfWeek, 'm') % bucketSize, 'm');
            }
            let isFirst = true;
            for (let i = 0; i < questions.length; i++) {
                const curr = questions[i];
                const next = questions[i + 1];
                const isLast = i === questions.length - 1;
                let sampledTimepoints = getSampleTimepointsInDateRange(isFirst
                    ? lastBucketBoundary(curr.createdAt)
                        .subtract(1, 's')
                        .toDate()
                    : curr.createdAt, isLast
                    ? lastBucketBoundary(curr.helpedAt)
                        .add(bucketSize, 'm')
                        .toDate()
                    : next.createdAt);
                sampledTimepoints = sampledTimepoints.filter((time) => hourTimestamps.some(([start, end]) => (0, lodash_1.inRange)(time.getTime(), start, end)));
                if (sampledTimepoints.length > 0 && isFirst) {
                    isFirst = false;
                }
                for (const c of sampledTimepoints) {
                    let wait = 0;
                    if ((0, lodash_1.inRange)(c.getTime(), curr.createdAt.getTime(), curr.helpedAt.getTime())) {
                        wait = (curr.helpedAt.getTime() - c.getTime()) / 60000;
                    }
                    const bucketIndex = dateToBucket(c);
                    timepointBuckets[bucketIndex].push(wait);
                }
            }
        }
        const wereHoursDuringBucket = [
            ...Array((24 * 7 * 60) / bucketSize),
        ];
        for (const [start, end] of hourTimestamps) {
            for (const i of (0, lodash_1.range)(dateToBucket(start), dateToBucket(end - 1) + 1)) {
                wereHoursDuringBucket[i] = true;
            }
        }
        const h = timepointBuckets.map((samples, i) => {
            if (samples.length > 0) {
                return (0, lodash_1.mean)(samples);
            }
            else if (wereHoursDuringBucket[i]) {
                return 0;
            }
            else {
                return -1;
            }
        });
        return h;
    }
    async create(courseId) {
        console.log(await this._getHeatmapFor(courseId));
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'heatmap:generate <courseId>',
        describe: 'generate heatmap for a course',
        autoExit: true,
    }),
    __param(0, (0, nestjs_command_1.Positional)({
        name: 'courseId',
        describe: 'which course the heatmap will be generated for',
        type: 'number',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HeatmapService.prototype, "create", null);
HeatmapService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], HeatmapService);
exports.HeatmapService = HeatmapService;


/***/ }),
/* 102 */
/***/ ((module) => {

module.exports = require("moment");

/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthcheckModule = void 0;
const common_1 = __webpack_require__(6);
const healthcheck_controller_1 = __webpack_require__(105);
let HealthcheckModule = class HealthcheckModule {
};
HealthcheckModule = __decorate([
    (0, common_1.Module)({
        controllers: [healthcheck_controller_1.HealthcheckController],
    })
], HealthcheckModule);
exports.HealthcheckModule = HealthcheckModule;


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthcheckController = void 0;
const common_1 = __webpack_require__(6);
const decorators_1 = __webpack_require__(106);
let HealthcheckController = class HealthcheckController {
    health() {
        return 'healthy';
    }
};
__decorate([
    (0, decorators_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HealthcheckController.prototype, "health", null);
HealthcheckController = __decorate([
    (0, common_1.Controller)('healthcheck')
], HealthcheckController);
exports.HealthcheckController = HealthcheckController;


/***/ }),
/* 106 */
/***/ ((module) => {

module.exports = require("@nestjs/common/decorators");

/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(6);
const profile_controller_1 = __webpack_require__(108);
const notification_module_1 = __webpack_require__(46);
const profile_service_1 = __webpack_require__(115);
const login_module_1 = __webpack_require__(90);
const login_course_service_1 = __webpack_require__(95);
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [notification_module_1.NotificationModule, login_module_1.LoginModule],
        controllers: [profile_controller_1.ProfileController],
        providers: [profile_service_1.ProfileService, login_course_service_1.LoginCourseService],
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const platform_express_1 = __webpack_require__(109);
const checkDiskSpace = __webpack_require__(110);
const fs = __webpack_require__(111);
const lodash_1 = __webpack_require__(44);
const multer_1 = __webpack_require__(112);
const path = __webpack_require__(113);
const sharp = __webpack_require__(114);
const typeorm_1 = __webpack_require__(20);
const jwt_auth_guard_1 = __webpack_require__(36);
const notification_service_1 = __webpack_require__(48);
const user_decorator_1 = __webpack_require__(38);
const user_entity_1 = __webpack_require__(26);
const profile_service_1 = __webpack_require__(115);
let ProfileController = class ProfileController {
    constructor(connection, notifService, profileService) {
        this.connection = connection;
        this.notifService = notifService;
        this.profileService = profileService;
    }
    async get(user) {
        var _a;
        if (user === null || user === undefined) {
            console.error(common_1.ERROR_MESSAGES.profileController.accountNotAvailable);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.profileController.accountNotAvailable, common_2.HttpStatus.NOT_FOUND);
        }
        const courses = user.courses
            .filter((userCourse) => userCourse.course.enabled)
            .map((userCourse) => {
            return {
                course: {
                    id: userCourse.courseId,
                    name: userCourse.course.name,
                },
                role: userCourse.role,
            };
        });
        const desktopNotifs = user.desktopNotifs.map((d) => ({
            endpoint: d.endpoint,
            id: d.id,
            createdAt: d.createdAt,
            name: d.name,
        }));
        const userResponse = (0, lodash_1.pick)(user, [
            'id',
            'email',
            'name',
            'firstName',
            'lastName',
            'photoURL',
            'defaultMessage',
            'includeDefaultMessage',
            'desktopNotifsEnabled',
            'phoneNotifsEnabled',
            'insights',
        ]);
        if (userResponse === null || userResponse === undefined) {
            console.error(common_1.ERROR_MESSAGES.profileController.userResponseNotFound);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.profileController.userResponseNotFound, common_2.HttpStatus.NOT_FOUND);
        }
        const pendingCourses = await this.profileService.getPendingCourses(user.id);
        return Object.assign(Object.assign({}, userResponse), { courses, phoneNumber: (_a = user.phoneNotif) === null || _a === void 0 ? void 0 : _a.phoneNumber, desktopNotifs,
            pendingCourses });
    }
    async patch(userPatch, user) {
        user = Object.assign(user, userPatch);
        await user.save();
        return this.get(user);
    }
    async uploadImage(file, user) {
        if (user.photoURL) {
            fs.unlink(process.env.UPLOAD_LOCATION + '/' + user.photoURL, (err) => {
                console.error('Error deleting previous picture at: ', user.photoURL, err, 'the previous image was at an invalid location?');
            });
        }
        const spaceLeft = await checkDiskSpace(path.parse(process.cwd()).root);
        if (spaceLeft.free < 1000000000) {
            throw new common_2.ServiceUnavailableException(common_1.ERROR_MESSAGES.profileController.noDiskSpace);
        }
        const fileName = user.id +
            '-' +
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        await sharp(file.buffer)
            .resize(256)
            .toFile(path.join(process.env.UPLOAD_LOCATION, fileName));
        user.photoURL = fileName;
        await user.save();
    }
    async getImage(photoURL, res) {
        fs.stat(path.join(process.env.UPLOAD_LOCATION, photoURL), async (err, stats) => {
            if (stats) {
                res.sendFile(photoURL, { root: process.env.UPLOAD_LOCATION });
            }
            else {
                const user = await user_entity_1.UserModel.findOne({
                    where: {
                        photoURL,
                    },
                });
                user.photoURL = null;
                await user.save();
                throw new common_2.NotFoundException();
            }
        });
    }
    async deleteProfilePicture(user) {
        if (user.photoURL) {
            fs.unlink(process.env.UPLOAD_LOCATION + '/' + user.photoURL, async (err) => {
                if (err) {
                    const errMessage = 'Error deleting previous picture at : ' +
                        user.photoURL +
                        'the previous image was at an invalid location?';
                    console.error(errMessage, err);
                    throw new common_2.BadRequestException(errMessage);
                }
                else {
                    user.photoURL = null;
                    await user.save();
                    return;
                }
            });
        }
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, user_decorator_1.User)(['courses', 'courses.course', 'phoneNotif', 'desktopNotifs'])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "get", null);
__decorate([
    (0, common_2.Patch)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, user_decorator_1.User)(['courses', 'courses.course', 'phoneNotif', 'desktopNotifs'])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.UpdateProfileParams,
        user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "patch", null);
__decorate([
    (0, common_2.Post)('/upload_picture'),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, common_2.UploadedFile)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "uploadImage", null);
__decorate([
    (0, common_2.Get)('/get_picture/:photoURL'),
    __param(0, (0, common_2.Param)('photoURL')),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getImage", null);
__decorate([
    (0, common_2.Delete)('/delete_profile_picture'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "deleteProfilePicture", null);
ProfileController = __decorate([
    (0, common_2.Controller)('profile'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        notification_service_1.NotificationService,
        profile_service_1.ProfileService])
], ProfileController);
exports.ProfileController = ProfileController;


/***/ }),
/* 109 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 110 */
/***/ ((module) => {

module.exports = require("check-disk-space");

/***/ }),
/* 111 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 112 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 113 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 114 */
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),
/* 115 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const common_1 = __webpack_require__(6);
const last_registration_model_entity_1 = __webpack_require__(66);
const login_course_service_1 = __webpack_require__(95);
const prof_section_groups_entity_1 = __webpack_require__(67);
const typeorm_1 = __webpack_require__(20);
let ProfileService = class ProfileService {
    constructor(connection, loginCourseService) {
        this.connection = connection;
        this.loginCourseService = loginCourseService;
    }
    async getPendingCourses(userId) {
        const profCourses = await prof_section_groups_entity_1.ProfSectionGroupsModel.findOne({
            where: {
                profId: userId,
            },
        });
        const lastRegistered = await last_registration_model_entity_1.LastRegistrationModel.findOne({
            where: {
                profId: userId,
            },
        });
        const lastRegisteredSemester = lastRegistered === null || lastRegistered === void 0 ? void 0 : lastRegistered.lastRegisteredSemester;
        if (!profCourses)
            return;
        const pendingCourses = [];
        for (const c of profCourses.sectionGroups) {
            if (c.crns.length !== 0 &&
                (!lastRegisteredSemester ||
                    !this.isSameRegistrationTime(c.semester, lastRegisteredSemester))) {
                const courseCRN = c.crns[0];
                const profCourse = await this.loginCourseService.courseCRNToCourse(courseCRN, c.semester);
                if (!profCourse)
                    pendingCourses.push(c);
            }
        }
        return pendingCourses;
    }
    isSameRegistrationTime(semester1, semester2) {
        const year1 = Number(semester1.slice(0, 4));
        const year2 = Number(semester2.slice(0, 4));
        const semesterCode1 = semester1.slice(-2);
        const semesterCode2 = semester2.slice(-2);
        const summer1 = last_registration_model_entity_1.khourySemesterCodes['Summer_1'];
        const summerFull = last_registration_model_entity_1.khourySemesterCodes['Summer_Full'];
        if ((semesterCode1 === summer1 || semesterCode2 === summer1) &&
            (semesterCode1 === summerFull || semesterCode2 === summerFull)) {
            return year1 === year2;
        }
        return semester1 === semester2;
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        login_course_service_1.LoginCourseService])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionModule = void 0;
const common_1 = __webpack_require__(6);
const notification_module_1 = __webpack_require__(46);
const queue_module_1 = __webpack_require__(78);
const question_controller_1 = __webpack_require__(117);
const question_service_1 = __webpack_require__(119);
const question_subscriber_1 = __webpack_require__(120);
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    (0, common_1.Module)({
        controllers: [question_controller_1.QuestionController],
        providers: [question_subscriber_1.QuestionSubscriber, question_service_1.QuestionService],
        imports: [notification_module_1.NotificationModule, queue_module_1.QueueModule],
        exports: [question_service_1.QuestionService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;


/***/ }),
/* 117 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(20);
const jwt_auth_guard_1 = __webpack_require__(36);
const notification_service_1 = __webpack_require__(48);
const roles_decorator_1 = __webpack_require__(39);
const user_course_entity_1 = __webpack_require__(23);
const user_decorator_1 = __webpack_require__(38);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
const question_group_entity_1 = __webpack_require__(30);
const question_role_guard_1 = __webpack_require__(118);
const question_entity_1 = __webpack_require__(31);
const question_service_1 = __webpack_require__(119);
let QuestionController = class QuestionController {
    constructor(connection, notifService, questionService) {
        this.connection = connection;
        this.notifService = notifService;
        this.questionService = questionService;
    }
    async getQuestion(questionId) {
        const question = await question_entity_1.QuestionModel.findOne(questionId, {
            relations: ['creator', 'taHelped'],
        });
        if (question === undefined) {
            throw new common_2.NotFoundException();
        }
        return question;
    }
    async createQuestion(body, user) {
        const { text, questionType, groupable, queueId, force } = body;
        const queue = await queue_entity_1.QueueModel.findOne({
            where: { id: queueId },
            relations: ['staffList'],
        });
        if (!queue) {
            throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.questionController.createQuestion.invalidQueue);
        }
        if (!queue.allowQuestions) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionController.createQuestion.noNewQuestions);
        }
        if (!(await queue.checkIsOpen())) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionController.createQuestion.closedQueue);
        }
        const previousUserQuestions = await question_entity_1.QuestionModel.find({
            relations: ['queue'],
            where: {
                creatorId: user.id,
                status: (0, typeorm_1.In)(Object.values(common_1.OpenQuestionStatus)),
            },
        });
        const previousCourseQuestion = previousUserQuestions.find((question) => question.queue.courseId === queue.courseId);
        if (!!previousCourseQuestion) {
            if (force) {
                previousCourseQuestion.status = common_1.ClosedQuestionStatus.ConfirmedDeleted;
                await previousCourseQuestion.save();
            }
            else {
                throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionController.createQuestion.oneQuestionAtATime);
            }
        }
        try {
            const question = await question_entity_1.QuestionModel.create({
                queueId: queueId,
                creator: user,
                text,
                questionType,
                groupable,
                status: common_1.QuestionStatusKeys.Drafting,
                createdAt: new Date(),
            }).save();
            return question;
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.saveQError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateQuestion(questionId, body, userId) {
        let question = await question_entity_1.QuestionModel.findOne({
            where: { id: questionId },
            relations: ['creator', 'queue', 'taHelped'],
        });
        if (question === undefined) {
            throw new common_2.NotFoundException();
        }
        const isCreator = userId === question.creatorId;
        if (isCreator) {
            if (body.status && !question.changeStatus(body.status, common_1.Role.STUDENT)) {
                throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.fsmViolation('Student', question.status, body.status));
            }
            question = Object.assign(question, body);
            try {
                await question.save();
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.saveQError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return question;
        }
        const isTaOrProf = (await user_course_entity_1.UserCourseModel.count({
            where: {
                userId,
                courseId: question.queue.courseId,
                role: (0, typeorm_1.In)([common_1.Role.TA, common_1.Role.PROFESSOR]),
            },
        })) > 0;
        if (isTaOrProf) {
            if (Object.keys(body).length !== 1 || Object.keys(body)[0] !== 'status') {
                throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.taOnlyEditQuestionStatus);
            }
            await this.questionService.validateNotHelpingOther(body.status, userId);
            return await this.questionService.changeStatus(body.status, question, userId);
        }
        else {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.loginUserCantEdit);
        }
    }
    async notify(questionId) {
        const question = await question_entity_1.QuestionModel.findOne(questionId, {
            relations: ['queue'],
        });
        if (question === undefined || question === null) {
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.notFound, common_2.HttpStatus.NOT_FOUND);
        }
        if (question.status === common_1.LimboQuestionStatus.CantFind) {
            try {
                await this.notifService.notifyUser(question.creatorId, notification_service_1.NotifMsgs.queue.ALERT_BUTTON);
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.unableToNotifyUser, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        else if (question.status === common_1.LimboQuestionStatus.TADeleted) {
            try {
                await this.notifService.notifyUser(question.creatorId, notification_service_1.NotifMsgs.queue.REMOVED);
            }
            catch (err) {
                console.error(err);
                throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.unableToNotifyUser, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async groupQuestions(body, instructorId) {
        const questions = await question_entity_1.QuestionModel.find({
            where: {
                id: (0, typeorm_1.In)(body.questionIds),
            },
            relations: ['taHelped', 'creator'],
        });
        if (!questions.every((q) => q.groupable)) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionController.groupQuestions.notGroupable);
        }
        await this.questionService.validateNotHelpingOther(common_1.QuestionStatusKeys.Helping, instructorId);
        for (const question of questions) {
            await this.questionService.changeStatus(common_1.QuestionStatusKeys.Helping, question, instructorId);
        }
        const queue = await queue_entity_1.QueueModel.findOne({
            where: {
                id: body.queueId,
            },
        });
        const creatorUserCourse = await user_course_entity_1.UserCourseModel.findOne({
            where: {
                courseId: queue.courseId,
                userId: instructorId,
            },
        });
        await question_group_entity_1.QuestionGroupModel.create({
            creatorId: creatorUserCourse.id,
            queueId: body.queueId,
            questions: questions,
        }).save();
        return;
    }
    async resolveGroup(groupId, instructorId) {
        const group = await question_group_entity_1.QuestionGroupModel.findOne({
            where: {
                id: groupId,
            },
            relations: ['questions', 'questions.taHelped', 'questions.creator'],
        });
        for (const question of group.questions) {
            if (question.status === common_1.OpenQuestionStatus.Helping) {
                await this.questionService.changeStatus(common_1.QuestionStatusKeys.Resolved, question, instructorId);
            }
        }
        return;
    }
};
__decorate([
    (0, common_2.Get)(':questionId'),
    __param(0, (0, common_2.Param)('questionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestion", null);
__decorate([
    (0, common_2.Post)(),
    (0, roles_decorator_1.Roles)(common_1.Role.STUDENT),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.CreateQuestionParams,
        user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
__decorate([
    (0, common_2.Patch)(':questionId'),
    (0, roles_decorator_1.Roles)(common_1.Role.STUDENT, common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('questionId')),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, common_1.UpdateQuestionParams, Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "updateQuestion", null);
__decorate([
    (0, common_2.Post)(':questionId/notify'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('questionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "notify", null);
__decorate([
    (0, common_2.Post)('group'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.GroupQuestionsParams, Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "groupQuestions", null);
__decorate([
    (0, common_2.Patch)('resolveGroup/:group_id'),
    (0, roles_decorator_1.Roles)(common_1.Role.TA, common_1.Role.PROFESSOR),
    __param(0, (0, common_2.Param)('group_id')),
    __param(1, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "resolveGroup", null);
QuestionController = __decorate([
    (0, common_2.Controller)('questions'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, question_role_guard_1.QuestionRolesGuard),
    (0, common_2.UseInterceptors)(common_2.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        notification_service_1.NotificationService,
        question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;


/***/ }),
/* 118 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionRolesGuard = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const role_guard_1 = __webpack_require__(84);
const user_entity_1 = __webpack_require__(26);
const queue_entity_1 = __webpack_require__(29);
const question_entity_1 = __webpack_require__(31);
let QuestionRolesGuard = class QuestionRolesGuard extends role_guard_1.RolesGuard {
    async setupData(request) {
        let queueId;
        if (request.params.questionId) {
            const question = await question_entity_1.QuestionModel.findOne(request.params.questionId);
            if (!question) {
                throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.questionRoleGuard.questionNotFound);
            }
            queueId = question.queueId;
        }
        else if (request.body.queueId) {
            queueId = request.body.queueId;
        }
        else {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionRoleGuard.queueOfQuestionNotFound);
        }
        const queue = await queue_entity_1.QueueModel.findOne(queueId);
        if (!queue) {
            throw new common_2.NotFoundException(common_1.ERROR_MESSAGES.questionRoleGuard.queueDoesNotExist);
        }
        const courseId = queue.courseId;
        const user = await user_entity_1.UserModel.findOne(request.user.userId, {
            relations: ['courses'],
        });
        return { courseId, user };
    }
};
QuestionRolesGuard = __decorate([
    (0, common_2.Injectable)()
], QuestionRolesGuard);
exports.QuestionRolesGuard = QuestionRolesGuard;


/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const notification_service_1 = __webpack_require__(48);
const user_entity_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(20);
const question_entity_1 = __webpack_require__(31);
let QuestionService = class QuestionService {
    constructor(connection, notifService) {
        this.connection = connection;
        this.notifService = notifService;
    }
    async changeStatus(status, question, userId) {
        var _a;
        const oldStatus = question.status;
        const newStatus = status;
        if (((_a = question.taHelped) === null || _a === void 0 ? void 0 : _a.id) !== userId) {
            if (oldStatus === common_1.OpenQuestionStatus.Helping) {
                throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.otherTAHelping);
            }
            if (oldStatus === common_1.ClosedQuestionStatus.Resolved) {
                throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.otherTAResolved);
            }
        }
        const validTransition = question.changeStatus(newStatus, common_1.Role.TA);
        if (!validTransition) {
            throw new common_2.UnauthorizedException(common_1.ERROR_MESSAGES.questionController.updateQuestion.fsmViolation('TA', question.status, status));
        }
        if (oldStatus !== common_1.OpenQuestionStatus.Helping &&
            newStatus === common_1.OpenQuestionStatus.Helping) {
            question.taHelped = await user_entity_1.UserModel.findOne(userId);
            question.helpedAt = new Date();
            if (!question.firstHelpedAt) {
                question.firstHelpedAt = question.helpedAt;
            }
            await this.notifService.notifyUser(question.creator.id, notification_service_1.NotifMsgs.queue.TA_HIT_HELPED(question.taHelped.name));
        }
        if (newStatus in common_1.ClosedQuestionStatus) {
            question.closedAt = new Date();
        }
        if (newStatus in common_1.LimboQuestionStatus) {
            if (question.group)
                question.group = null;
            else
                question.groupId = null;
        }
        try {
            await question.save();
        }
        catch (err) {
            console.error(err);
            throw new common_2.HttpException(common_1.ERROR_MESSAGES.questionController.saveQError, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return question;
    }
    async validateNotHelpingOther(newStatus, userId) {
        const isAlreadyHelpingOne = (await question_entity_1.QuestionModel.count({
            where: {
                taHelpedId: userId,
                status: common_1.OpenQuestionStatus.Helping,
            },
        })) === 1;
        if (isAlreadyHelpingOne && newStatus === common_1.OpenQuestionStatus.Helping) {
            throw new common_2.BadRequestException(common_1.ERROR_MESSAGES.questionController.updateQuestion.taHelpingOther);
        }
    }
};
QuestionService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        notification_service_1.NotificationService])
], QuestionService);
exports.QuestionService = QuestionService;


/***/ }),
/* 120 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuestionSubscriber = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(20);
const notification_service_1 = __webpack_require__(48);
const queue_sse_service_1 = __webpack_require__(85);
const queue_entity_1 = __webpack_require__(29);
const question_entity_1 = __webpack_require__(31);
let QuestionSubscriber = class QuestionSubscriber {
    constructor(connection, notifService, queueSSEService) {
        this.notifService = notifService;
        this.queueSSEService = queueSSEService;
        connection.subscribers.push(this);
    }
    listenTo() {
        return question_entity_1.QuestionModel;
    }
    async afterUpdate(event) {
        if (!event.entity) {
            return;
        }
        await this.queueSSEService.updateQuestions(event.entity.queueId);
        if (event.updatedColumns.find((c) => c.propertyName === 'status') &&
            event.entity.status in common_1.ClosedQuestionStatus) {
            const previousThird = await question_entity_1.QuestionModel.waitingInQueue(event.entity.queueId)
                .offset(2)
                .getOne();
            const third = await question_entity_1.QuestionModel.waitingInQueue(event.entity.queueId)
                .setQueryRunner(event.queryRunner)
                .offset(2)
                .getOne();
            if (third && (previousThird === null || previousThird === void 0 ? void 0 : previousThird.id) !== (third === null || third === void 0 ? void 0 : third.id)) {
                const { creatorId } = third;
                this.notifService.notifyUser(creatorId, notification_service_1.NotifMsgs.queue.THIRD_PLACE);
            }
        }
    }
    async afterInsert(event) {
        const numberOfQuestions = await question_entity_1.QuestionModel.waitingInQueue(event.entity.queueId).getCount();
        if (numberOfQuestions === 0) {
            const staff = (await queue_entity_1.QueueModel.findOne(event.entity.queueId, {
                relations: ['staffList'],
            })).staffList;
            staff.forEach((staff) => {
                this.notifService.notifyUser(staff.id, notification_service_1.NotifMsgs.ta.STUDENT_JOINED_EMPTY_QUEUE);
            });
        }
        await this.queueSSEService.updateQuestions(event.entity.queueId);
    }
    async beforeRemove(event) {
        if (event.entity) {
            await this.queueSSEService.updateQuestions(event.entity.queueId);
        }
    }
};
QuestionSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        notification_service_1.NotificationService,
        queue_sse_service_1.QueueSSEService])
], QuestionSubscriber);
exports.QuestionSubscriber = QuestionSubscriber;


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedModule = void 0;
const common_1 = __webpack_require__(6);
const seed_controller_1 = __webpack_require__(122);
const seed_service_1 = __webpack_require__(125);
let SeedModule = class SeedModule {
};
SeedModule = __decorate([
    (0, common_1.Module)({
        controllers: [seed_controller_1.SeedController],
        providers: [seed_service_1.SeedService],
    })
], SeedModule);
exports.SeedModule = SeedModule;


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedController = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(6);
const alerts_entity_1 = __webpack_require__(25);
const course_section_mapping_entity_1 = __webpack_require__(65);
const last_registration_model_entity_1 = __webpack_require__(66);
const prof_section_groups_entity_1 = __webpack_require__(67);
const desktop_notif_entity_1 = __webpack_require__(27);
const phone_notif_entity_1 = __webpack_require__(28);
const event_model_entity_1 = __webpack_require__(33);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const question_group_entity_1 = __webpack_require__(30);
const semester_entity_1 = __webpack_require__(34);
const typeorm_1 = __webpack_require__(20);
const factories_1 = __webpack_require__(123);
const course_entity_1 = __webpack_require__(24);
const non_production_guard_1 = __webpack_require__(94);
const question_entity_1 = __webpack_require__(31);
const queue_entity_1 = __webpack_require__(29);
const seed_service_1 = __webpack_require__(125);
let SeedController = class SeedController {
    constructor(connection, seedService) {
        this.connection = connection;
        this.seedService = seedService;
    }
    async deleteAll() {
        await this.seedService.deleteAll(last_registration_model_entity_1.LastRegistrationModel);
        await this.seedService.deleteAll(prof_section_groups_entity_1.ProfSectionGroupsModel);
        await this.seedService.deleteAll(question_entity_1.QuestionModel);
        await this.seedService.deleteAll(question_group_entity_1.QuestionGroupModel);
        await this.seedService.deleteAll(queue_entity_1.QueueModel);
        await this.seedService.deleteAll(user_course_entity_1.UserCourseModel);
        await this.seedService.deleteAll(event_model_entity_1.EventModel);
        await this.seedService.deleteAll(desktop_notif_entity_1.DesktopNotifModel);
        await this.seedService.deleteAll(phone_notif_entity_1.PhoneNotifModel);
        await this.seedService.deleteAll(alerts_entity_1.AlertModel);
        await this.seedService.deleteAll(user_entity_1.UserModel);
        await this.seedService.deleteAll(course_section_mapping_entity_1.CourseSectionMappingModel);
        await this.seedService.deleteAll(course_entity_1.CourseModel);
        await this.seedService.deleteAll(semester_entity_1.SemesterModel);
        const manager = (0, typeorm_1.getManager)();
        manager.query('ALTER SEQUENCE user_model_id_seq RESTART WITH 1;');
        return 'Data successfully reset';
    }
    async createSeeds() {
        await this.deleteAll();
        const now = new Date();
        const yesterday = new Date();
        yesterday.setUTCHours(now.getUTCHours() - 24);
        const tomorrow = new Date();
        tomorrow.setUTCHours(now.getUTCHours() + 19);
        const courseExists = await course_entity_1.CourseModel.findOne({
            where: { name: 'CS 2500' },
        });
        if (!courseExists) {
            const semester = await factories_1.SemesterFactory.create({
                season: 'Fall',
                year: 2020,
            });
            await factories_1.CourseFactory.create({
                timezone: 'America/New_York',
                semesterId: semester.id,
            });
        }
        const course = await course_entity_1.CourseModel.findOne({
            where: { name: 'CS 2500' },
        });
        const userExists = await user_entity_1.UserModel.findOne();
        if (!userExists) {
            const user1 = await factories_1.UserFactory.create({
                email: 'liu.sta@northeastern.edu',
                firstName: 'Stanley',
                lastName: 'Liu',
            });
            await factories_1.UserCourseFactory.create({
                user: user1,
                role: common_1.Role.STUDENT,
                course: course,
            });
            const user2 = await factories_1.UserFactory.create({
                email: 'takayama.a@northeastern.edu',
                firstName: 'Alex',
                lastName: 'Takayama',
            });
            await factories_1.UserCourseFactory.create({
                user: user2,
                role: common_1.Role.STUDENT,
                course: course,
                override: true,
            });
            const user3 = await factories_1.UserFactory.create({
                email: 'stenzel.w@northeastern.edu',
                firstName: 'Will',
                lastName: 'Stenzel',
            });
            await factories_1.UserCourseFactory.create({
                user: user3,
                role: common_1.Role.TA,
                course: course,
            });
            const user4 = await factories_1.UserFactory.create({
                email: 'chu.daj@northeastern.edu',
                firstName: 'Da-Jin',
                lastName: 'Chu',
            });
            await factories_1.UserCourseFactory.create({
                user: user4,
                role: common_1.Role.TA,
                course: course,
            });
            const user5 = await factories_1.UserFactory.create({
                email: 'li.edwa@northeastern.edu',
                firstName: 'Eddy',
                lastName: 'Li',
                photoURL: 'https://ca.slack-edge.com/TE565NU79-UR6P32JBT-a6c89822c544-512',
                insights: [
                    'QuestionTypeBreakdown',
                    'TotalQuestionsAsked',
                    'TotalStudents',
                ],
            });
            await factories_1.UserCourseFactory.create({
                user: user5,
                role: common_1.Role.PROFESSOR,
                course: course,
            });
        }
        const queue = await factories_1.QueueFactory.create({
            room: 'Online',
            course: course,
            allowQuestions: true,
        });
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 3500000),
        });
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 2500000),
        });
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 1500000),
        });
        const eventTA = await user_entity_1.UserModel.findOne({
            where: {
                firstName: 'Will',
            },
        });
        await factories_1.EventFactory.create({
            user: eventTA,
            course: course,
            time: yesterday,
            eventType: event_model_entity_1.EventType.TA_CHECKED_IN,
        });
        await factories_1.EventFactory.create({
            user: eventTA,
            course: course,
            time: new Date(Date.now() - 80000000),
            eventType: event_model_entity_1.EventType.TA_CHECKED_OUT,
        });
        await factories_1.EventFactory.create({
            user: eventTA,
            course: course,
            time: new Date(Date.now() - 70000000),
            eventType: event_model_entity_1.EventType.TA_CHECKED_IN,
        });
        const todayAtMidnight = new Date();
        todayAtMidnight.setHours(0, 0, 0, 0);
        await factories_1.EventFactory.create({
            user: eventTA,
            course: course,
            time: todayAtMidnight,
            eventType: event_model_entity_1.EventType.TA_CHECKED_OUT_FORCED,
        });
        const professorQueue = await factories_1.QueueFactory.create({
            room: "Professor Li's Hours",
            course: course,
            allowQuestions: true,
            isProfessorQueue: true,
        });
        await factories_1.QuestionFactory.create({
            queue: professorQueue,
            createdAt: new Date(Date.now() - 1500000),
        });
        return 'Data successfully seeded';
    }
    async fillQueue() {
        const queue = await queue_entity_1.QueueModel.findOne();
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 1500000),
        });
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 1500000),
        });
        await factories_1.QuestionFactory.create({
            queue: queue,
            createdAt: new Date(Date.now() - 1500000),
        });
        return 'Data successfully seeded';
    }
    async createUser(body) {
        let ta;
        if (body.courseId) {
            const course = await course_entity_1.CourseModel.findOneOrFail(body.courseId);
            ta = await factories_1.UserCourseFactory.create({ role: body.role, course: course });
        }
        else {
            ta = await factories_1.UserCourseFactory.create({ role: body.role });
        }
        return ta;
    }
    async createQueue(body) {
        var _a;
        const options = {
            allowQuestions: (_a = body.allowQuestions) !== null && _a !== void 0 ? _a : false,
        };
        if (body.courseId) {
            const course = await course_entity_1.CourseModel.findOneOrFail(body.courseId);
            options['course'] = course;
        }
        const queue = await factories_1.QueueFactory.create(options);
        return queue;
    }
    async createQuestion(body) {
        const options = {};
        if (body.queueId) {
            const queue = await queue_entity_1.QueueModel.findOneOrFail(body.queueId);
            options['queue'] = queue;
        }
        if (body.studentId) {
            const student = await user_entity_1.UserModel.findOneOrFail(body.studentId);
            options['creator'] = student;
        }
        const question = await factories_1.QuestionFactory.create(Object.assign(Object.assign(Object.assign({}, options), body.data), { createdAt: new Date() }));
        return question;
    }
    async createQueueWithoutOfficeHour(body) {
        var _a;
        const options = {
            allowQuestions: (_a = body.allowQuestions) !== null && _a !== void 0 ? _a : false,
            officeHours: [],
        };
        if (body.courseId) {
            const course = await course_entity_1.CourseModel.findOneOrFail(body.courseId);
            options['course'] = course;
        }
        return await factories_1.QueueFactory.create(options);
    }
};
__decorate([
    (0, common_2.Get)('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "deleteAll", null);
__decorate([
    (0, common_2.Get)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "createSeeds", null);
__decorate([
    (0, common_2.Get)('fill_queue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "fillQueue", null);
__decorate([
    (0, common_2.Post)('createUser'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "createUser", null);
__decorate([
    (0, common_2.Post)('createQueue'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "createQueue", null);
__decorate([
    (0, common_2.Post)('createQuestion'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "createQuestion", null);
__decorate([
    (0, common_2.Post)('createQueueWithoutOfficeHour'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "createQueueWithoutOfficeHour", null);
SeedController = __decorate([
    (0, common_2.Controller)('seeds'),
    (0, common_2.UseGuards)(non_production_guard_1.NonProductionGuard),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        seed_service_1.SeedService])
], SeedController);
exports.SeedController = SeedController;


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertFactory = exports.ProfSectionGroupsFactory = exports.LastRegistrationFactory = exports.EventFactory = exports.QuestionGroupFactory = exports.QuestionFactory = exports.QueueFactory = exports.UserCourseFactory = exports.CourseSectionFactory = exports.CourseFactory = exports.SemesterFactory = exports.TACourseFactory = exports.StudentCourseFactory = exports.UserFactory = void 0;
const question_group_entity_1 = __webpack_require__(30);
const common_1 = __webpack_require__(2);
const alerts_entity_1 = __webpack_require__(25);
const event_model_entity_1 = __webpack_require__(33);
const typeorm_factory_1 = __webpack_require__(124);
const course_entity_1 = __webpack_require__(24);
const semester_entity_1 = __webpack_require__(34);
const course_section_mapping_entity_1 = __webpack_require__(65);
const user_course_entity_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(26);
const question_entity_1 = __webpack_require__(31);
const queue_entity_1 = __webpack_require__(29);
const last_registration_model_entity_1 = __webpack_require__(66);
const prof_section_groups_entity_1 = __webpack_require__(67);
exports.UserFactory = new typeorm_factory_1.Factory(user_entity_1.UserModel)
    .attr('email', `user@neu.edu`)
    .attr('firstName', 'User')
    .attr('lastName', 'Person')
    .attr('hideInsights', []);
exports.StudentCourseFactory = new typeorm_factory_1.Factory(user_course_entity_1.UserCourseModel).attr('role', common_1.Role.STUDENT);
exports.TACourseFactory = new typeorm_factory_1.Factory(user_course_entity_1.UserCourseModel).attr('role', common_1.Role.TA);
exports.SemesterFactory = new typeorm_factory_1.Factory(semester_entity_1.SemesterModel)
    .attr('season', 'Fall')
    .attr('year', 2020);
exports.CourseFactory = new typeorm_factory_1.Factory(course_entity_1.CourseModel)
    .attr('name', 'CS 2500')
    .attr('icalURL', 'https://calendar.google.com/calendar/ical/t6lu2pic7u9otrbpkuk26sl34g%40group.calendar.google.com/public/basic.ics')
    .attr('sectionGroupName', 'CS 2500')
    .attr('enabled', true)
    .assocOne('semester', exports.SemesterFactory);
exports.CourseSectionFactory = new typeorm_factory_1.Factory(course_section_mapping_entity_1.CourseSectionMappingModel)
    .attr('crn', 12345)
    .assocOne('course', exports.CourseFactory);
exports.UserCourseFactory = new typeorm_factory_1.Factory(user_course_entity_1.UserCourseModel)
    .assocOne('user', exports.UserFactory)
    .assocOne('course', exports.CourseFactory)
    .attr('role', common_1.Role.STUDENT)
    .attr('override', false);
exports.QueueFactory = new typeorm_factory_1.Factory(queue_entity_1.QueueModel)
    .attr('room', 'Online')
    .assocOne('course', exports.CourseFactory)
    .attr('allowQuestions', false)
    .assocMany('staffList', exports.UserFactory, 0)
    .attr('isProfessorQueue', false)
    .attr('isDisabled', false);
exports.QuestionFactory = new typeorm_factory_1.Factory(question_entity_1.QuestionModel)
    .attr('text', 'question description')
    .attr('status', 'Queued')
    .attr('questionType', common_1.QuestionType.Other)
    .attr('groupable', true)
    .assocOne('queue', exports.QueueFactory)
    .assocOne('creator', exports.UserFactory)
    .attr('createdAt', new Date());
exports.QuestionGroupFactory = new typeorm_factory_1.Factory(question_group_entity_1.QuestionGroupModel)
    .assocOne('creator', exports.UserCourseFactory)
    .assocOne('queue', exports.QueueFactory);
exports.EventFactory = new typeorm_factory_1.Factory(event_model_entity_1.EventModel)
    .attr('time', new Date())
    .attr('eventType', event_model_entity_1.EventType.TA_CHECKED_IN)
    .assocOne('user', exports.UserFactory)
    .assocOne('course', exports.CourseFactory);
exports.LastRegistrationFactory = new typeorm_factory_1.Factory(last_registration_model_entity_1.LastRegistrationModel)
    .attr('lastRegisteredSemester', '202110')
    .assocOne('prof', exports.UserFactory);
exports.ProfSectionGroupsFactory = new typeorm_factory_1.Factory(prof_section_groups_entity_1.ProfSectionGroupsModel)
    .assocOne('prof', exports.UserFactory)
    .attr('sectionGroups', []);
exports.AlertFactory = new typeorm_factory_1.Factory(alerts_entity_1.AlertModel)
    .attr('alertType', common_1.AlertType.REPHRASE_QUESTION)
    .attr('sent', new Date(Date.now() - 86400000))
    .assocOne('user', exports.UserFactory)
    .assocOne('course', exports.CourseFactory)
    .attr('payload', {});


/***/ }),
/* 124 */
/***/ ((module) => {

module.exports = require("typeorm-factory");

/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeedService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(20);
let SeedService = class SeedService {
    async deleteAll(model) {
        await (0, typeorm_1.getConnection)().createQueryBuilder().delete().from(model).execute();
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)()
], SeedService);
exports.SeedService = SeedService;


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemesterModule = void 0;
const common_1 = __webpack_require__(6);
const semester_controller_1 = __webpack_require__(127);
const semester_service_1 = __webpack_require__(128);
const setCourse_command_1 = __webpack_require__(129);
let SemesterModule = class SemesterModule {
};
SemesterModule = __decorate([
    (0, common_1.Module)({
        controllers: [semester_controller_1.SemesterController],
        providers: [setCourse_command_1.SetSemesterCommand, semester_service_1.SemesterService],
    })
], SemesterModule);
exports.SemesterModule = SemesterModule;


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemesterController = void 0;
const common_1 = __webpack_require__(6);
const semester_entity_1 = __webpack_require__(34);
let SemesterController = class SemesterController {
    async get() {
        return semester_entity_1.SemesterModel.find();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "get", null);
SemesterController = __decorate([
    (0, common_1.Controller)('semesters')
], SemesterController);
exports.SemesterController = SemesterController;


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemesterService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(20);
const course_entity_1 = __webpack_require__(24);
let SemesterService = class SemesterService {
    constructor(connection) {
        this.connection = connection;
    }
    async toggleActiveSemester(semester, enable) {
        const enableList = await course_entity_1.CourseModel.find({
            semester: semester,
        });
        enableList.map((course) => {
            course.enabled = enable;
        });
        try {
            await course_entity_1.CourseModel.save(enableList);
        }
        catch (err) {
            console.log(err);
        }
    }
};
SemesterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], SemesterService);
exports.SemesterService = SemesterService;


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetSemesterCommand = void 0;
const nestjs_command_1 = __webpack_require__(19);
const common_1 = __webpack_require__(6);
const semester_service_1 = __webpack_require__(128);
const semester_entity_1 = __webpack_require__(34);
let SetSemesterCommand = class SetSemesterCommand {
    constructor(semService) {
        this.semService = semService;
    }
    async create(mode, semester, year) {
        if (Number.isNaN(year)) {
            console.log('Invalid year: Please provide the year as a number.');
            return;
        }
        const sem = this.validateSemester(semester);
        if (!sem) {
            console.log('Invalid season: "' + semester + '"');
            console.log('Pick from one of:' +
                '\n-  "Fall"' +
                '\n-  "Spring"' +
                '\n-  "Summer_1"' +
                '\n-  "Summer_2"' +
                '\n-  "Summer_Full"');
            return;
        }
        const isEnable = this.enableOrDisable(mode);
        if (isEnable === null) {
            console.error('Mode must be one of "enable" or "disable", got "' + mode + '".');
            return;
        }
        const targetEnable = await this.getSemester(sem, year);
        if (!targetEnable) {
            console.log('semester is not bound to any courses, exiting');
            return;
        }
        await this.semService.toggleActiveSemester(targetEnable, isEnable);
        console.log('done');
    }
    validateSemester(sem) {
        switch (sem) {
            case 'Fall':
            case 'Spring':
            case 'Summer_1':
            case 'Summer_2':
            case 'Summer_Full':
                return sem;
            default:
                return null;
        }
    }
    enableOrDisable(mode) {
        switch (mode) {
            case 'enable':
                return true;
            case 'disable':
                return false;
            default:
                return null;
        }
    }
    async getSemester(sea, year) {
        return await semester_entity_1.SemesterModel.findOne({
            season: sea,
            year: year,
        });
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'semester:toggleActiveSemester  <mode> <semester> <year>',
        describe: '(disable or enable) all the classes in a given semester',
        autoExit: true,
    }),
    __param(0, (0, nestjs_command_1.Positional)({
        name: 'mode',
        describe: 'mode: either enable or disable.',
        type: 'string',
    })),
    __param(1, (0, nestjs_command_1.Positional)({
        name: 'semester',
        describe: 'the semester to enable',
        type: 'string',
    })),
    __param(2, (0, nestjs_command_1.Positional)({
        name: 'year',
        describe: 'year to enable',
        type: 'number',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], SetSemesterCommand.prototype, "create", null);
SetSemesterCommand = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [semester_service_1.SemesterService])
], SetSemesterCommand);
exports.SetSemesterCommand = SetSemesterCommand;


/***/ }),
/* 130 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesModule = void 0;
const common_1 = __webpack_require__(6);
const resources_controller_1 = __webpack_require__(131);
const resources_service_1 = __webpack_require__(132);
let ResourcesModule = class ResourcesModule {
};
ResourcesModule = __decorate([
    (0, common_1.Module)({
        controllers: [resources_controller_1.ResourcesController],
        providers: [resources_service_1.ResourcesService],
        imports: [
            common_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            }),
        ],
    })
], ResourcesModule);
exports.ResourcesModule = ResourcesModule;


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesController = void 0;
const common_1 = __webpack_require__(6);
const fs = __webpack_require__(111);
const path = __webpack_require__(113);
const typeorm_1 = __webpack_require__(20);
const resources_service_1 = __webpack_require__(132);
const course_entity_1 = __webpack_require__(24);
const common_2 = __webpack_require__(2);
let ResourcesController = class ResourcesController {
    constructor(connection, httpService, resourcesService) {
        this.connection = connection;
        this.httpService = httpService;
        this.resourcesService = resourcesService;
    }
    async getCourseCalendar(courseId, refresh, res) {
        const filename = this.resourcesService.getCalFilename(courseId);
        fs.stat(path.join(process.env.UPLOAD_LOCATION, filename), async (err, stats) => {
            if (stats && !refresh) {
                res.sendFile(filename, { root: process.env.UPLOAD_LOCATION });
            }
            else {
                const course = await course_entity_1.CourseModel.findOne(courseId);
                if (course === null || course === undefined || !course.enabled) {
                    console.error(common_2.ERROR_MESSAGES.courseController.courseNotFound +
                        ' Course ID: ' +
                        courseId);
                    res.status(common_1.HttpStatus.NOT_FOUND).send({
                        message: common_2.ERROR_MESSAGES.courseController.courseNotFound,
                    });
                    return;
                }
                try {
                    const cal = await this.resourcesService.refetchCalendar(course);
                    res.send(cal);
                }
                catch (err) {
                    console.error(common_2.ERROR_MESSAGES.resourcesService.saveCalError, err);
                    res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({
                        message: common_2.ERROR_MESSAGES.resourcesService.saveCalError +
                            ': ' +
                            err.message,
                    });
                }
            }
        });
    }
};
__decorate([
    (0, common_1.Get)('/calendar/:course/refresh=:refresh'),
    __param(0, (0, common_1.Param)('course')),
    __param(1, (0, common_1.Param)('refresh')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Object]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "getCourseCalendar", null);
ResourcesController = __decorate([
    (0, common_1.Controller)('resources'),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        common_1.HttpService,
        resources_service_1.ResourcesService])
], ResourcesController);
exports.ResourcesController = ResourcesController;


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesService = void 0;
const common_1 = __webpack_require__(6);
const schedule_1 = __webpack_require__(15);
const course_entity_1 = __webpack_require__(24);
const fs = __webpack_require__(111);
const path = __webpack_require__(113);
const checkDiskSpace = __webpack_require__(110);
const typeorm_1 = __webpack_require__(20);
const nestjs_redis_1 = __webpack_require__(58);
const Redlock = __webpack_require__(133);
const common_2 = __webpack_require__(2);
let ResourcesService = class ResourcesService {
    constructor(connection, httpService, redisService) {
        this.connection = connection;
        this.httpService = httpService;
        this.redisService = redisService;
    }
    async refetchAllCalendarsJob() {
        const resource = 'locks:icalcron';
        const ttl = 60000;
        const redisDB = await this.redisService.getClient('db');
        const redlock = new Redlock([redisDB]);
        redlock.on('clientError', function (err) {
            console.error('A redis error has occurred:', err);
        });
        try {
            await redlock.lock(resource, ttl).then(async (lock) => {
                console.log('updating course icals');
                await this.refetchAllCalendars();
                return lock.unlock().catch(function (err) {
                    console.error('Error unlocking Redlock:', err);
                });
            });
            console.log('Successfully updated course calendars');
        }
        catch (error) {
            console.error('A problem locking Redlock has occurred:', error);
        }
    }
    async refetchAllCalendars() {
        const regex = /calendar-\d+$/;
        fs.readdirSync(process.env.UPLOAD_LOCATION)
            .filter((f) => regex.test(f))
            .map((f) => {
            try {
                fs.unlinkSync(path.join(process.env.UPLOAD_LOCATION, f));
                console.log('Unlinked calendar file', f);
            }
            catch (error) {
                console.error(`Error deleting calendar file ${f}:`, error);
            }
        });
        const courses = await course_entity_1.CourseModel.find({ where: { enabled: true } });
        await Promise.all(courses.map((c) => this.refetchCalendar(c)));
    }
    async refetchCalendar(course) {
        const spaceLeft = await checkDiskSpace(path.parse(process.cwd()).root);
        if (spaceLeft.free < 1000000) {
            throw new common_1.ServiceUnavailableException(common_2.ERROR_MESSAGES.resourcesService.noDiskSpace);
        }
        const request = await this.httpService.get(course.icalURL).toPromise();
        fs.writeFile(path.join(process.env.UPLOAD_LOCATION, this.getCalFilename(course.id)), request.data, (err) => {
            if (err) {
                console.error(common_2.ERROR_MESSAGES.resourcesService.saveCalError, err);
            }
            else {
                console.log('Saved calendar for course ', course.id);
            }
        });
        return request.data;
    }
    getCalFilename(courseId) {
        return `calendar-${courseId}`;
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_1AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResourcesService.prototype, "refetchAllCalendarsJob", null);
ResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        common_1.HttpService,
        nestjs_redis_1.RedisService])
], ResourcesService);
exports.ResourcesService = ResourcesService;


/***/ }),
/* 133 */
/***/ ((module) => {

module.exports = require("redlock");

/***/ }),
/* 134 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StripUndefinedPipe = void 0;
const common_1 = __webpack_require__(6);
let StripUndefinedPipe = class StripUndefinedPipe {
    transform(value, metadata) {
        if (metadata.type === 'body') {
            this.dropUndefined(value);
            return value;
        }
        return value;
    }
    dropUndefined(obj) {
        for (const key of Object.keys(obj)) {
            if (obj[key] === undefined) {
                delete obj[key];
            }
            else if (typeof obj[key] === 'object' && obj[key] !== null) {
                this.dropUndefined(obj[key]);
            }
        }
    }
};
StripUndefinedPipe = __decorate([
    (0, common_1.Injectable)()
], StripUndefinedPipe);
exports.StripUndefinedPipe = StripUndefinedPipe;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map