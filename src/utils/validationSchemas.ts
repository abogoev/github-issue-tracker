import * as Yup from "yup";
import { OWNER, REPO, STATE } from "./constants";

export const fetchIssuesValidationSchema = Yup.object().shape({
  [OWNER]: Yup.string().required("Required"),
  [REPO]: Yup.string().required("Required"),
  [STATE]: Yup.string().required("Required"),
});
