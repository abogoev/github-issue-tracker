import React, { useEffect, useState, VFC } from "react";
import CustomTouchableOpacity, {
  CustomTouchableOpacityProps,
} from "../touchableopacity/CustomTouchableOpacity";
import BookIcon from "../../../assets/svg/book.svg";
import BookYellowIcon from "../../../assets/svg/book-yellow.svg";
import { issueSearchParamsExistInStorage } from "./bookmarkHelper";
import { IssueSearchParams, WithoutChildren } from "../../types";

const Bookmark: VFC<
  WithoutChildren<CustomTouchableOpacityProps> & IssueSearchParams
> = ({ owner, repo, number, ...props }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsBookmarked(
          await issueSearchParamsExistInStorage({ owner, repo, number })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handlePress = async () => {
    try {
      setIsBookmarked(
        await issueSearchParamsExistInStorage({ owner, repo, number }, true)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomTouchableOpacity onPress={handlePress} {...props}>
      {isBookmarked ? <BookYellowIcon /> : <BookIcon />}
    </CustomTouchableOpacity>
  );
};

export default Bookmark;
