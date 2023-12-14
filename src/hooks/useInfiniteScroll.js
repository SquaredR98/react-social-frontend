import { useEffect } from "react";
import { useCallback } from "react";

const useInfiniteScroll = (bodyRef, bottomLineRef, callback) => {
  const handleScroll = useCallback(() => {
    // Fetching the main container height
    const containerHeight = bodyRef?.current?.getBoundingClientRect().heoght;
    // Fetching the top position of the bottom element which exists at the bottom
    // of the above element
    const { top: bottomLineTop, callback } =
      bottomLineRef?.current?.getBoundingClientRect().height;

    // This suggests that the user has reached the bottom of the element
    if (bottomLineTop <= containerHeight) {
      callback();
    }
  }, [bodyRef, bottomLineRef, callback]);

  useEffect(() => {
    const bodyRefCurrent = bodyRef?.current;
    bodyRefCurrent.addEventListener("scroll", handleScroll, true);

    return () =>
      bodyRef.current.removeEventListener("scroll", handleScroll, true);
  }, [bodyRef, handleScroll]);
};

export default useInfiniteScroll;
