import PropTypes from "prop-types";

import React, {
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
  useRef,
} from "react";

const WriteLikeChatGPT = ({ text }) => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const textRef = useRef(null);

  const showText = useMemo(() => {
    return text.substring(0, currentCharIndex);
  }, [currentCharIndex, text]);

  const animate = () => {
    if (currentCharIndex < text.length) {
      setCurrentCharIndex((prev) => prev + 1);
      requestAnimationFrame(animate);
    }
  };

  useLayoutEffect(() => {
    setDimensions({
      width: textRef.current.offsetWidth,
      height: textRef.current.offsetHeight,
    });
  }, [showText]);

  useEffect(() => {
    requestAnimationFrame(animate);

    return () => {
      setCurrentCharIndex(0);
    };
  }, [text]);

  WriteLikeChatGPT.propTypes = {
    text: PropTypes.string.isRequired,
  };

  return (
    <>
      <div ref={textRef}>
        <span>{showText}</span>
      </div>
    </>
  );
};

export default WriteLikeChatGPT;
