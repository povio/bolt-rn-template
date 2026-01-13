import { type ApplicationException, type ErrorEntry, ErrorHandler } from "@povio/openapi-codegen-cli";
import * as Sentry from "@sentry/react-native";

type ErrorCodes = string;

const errorEntries: ErrorEntry<ErrorCodes>[] = [];

export const AppErrorHandler = new ErrorHandler({
  entries: errorEntries,
  onRethrowError: (_error, applicationException: ApplicationException<ErrorCodes>) => {
    Sentry.captureException(applicationException.serverMessage ?? applicationException.code);
  },
});
