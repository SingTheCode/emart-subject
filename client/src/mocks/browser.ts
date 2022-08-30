import { setupWorker, SetupWorkerApi } from "msw";
import { handlers } from "mocks";

export const worker: SetupWorkerApi = setupWorker(...handlers);
