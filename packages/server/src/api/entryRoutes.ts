import { ServerRoute } from "@hapi/hapi";
import Joi from "@hapi/joi";
import { UserCourseModel } from "../entity/UserCourseModel";

export const entryRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/api/v1/entry",
    handler: async (request, h) => {
      request.cookieAuth.set({ id: request.query.userId });
      return h.redirect("/");
    },
    options: {
      auth: false,
      validate: {
        query: Joi.object({
          userId: Joi.number().integer().required(),
        }),
      },
    },
  },
];