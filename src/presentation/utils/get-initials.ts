export const getInitials = (fullname: string): string => {
  return fullname
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
};
