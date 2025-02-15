import moment from "moment";

type formatDate = "YYYY-MM-DD" | "MMM Do YY";

export const formatDate = (date: Date, format: formatDate): string => {
  return moment(date).format(format);
};
