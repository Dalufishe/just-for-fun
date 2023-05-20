import { css } from "@emotion/css";
import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";

import aaa from "./img/aaa.jpg";
import bbb from "./img/bbb.jpg";
import rick from "./img/rick.jpg";
export default function SpringTest() {
  const [count, setCount] = useState(1);

  const [springs, api] = useSpring(() => {
    return {
      from: {
        width: 10,
        height: 10,
      },
    };
  });

  const handleClick = () => {
    api.start(() => {
      return {
        from: {
          width: 10 * count,
          height: 10 * count,
        },
        to: {
          width: 10 * (count + 1),
          height: 10 * (count + 1),
        },
      };
    });
    setCount(count + 1);
  };

  return (
    <animated.div
      onClick={() => {
        handleClick(count);
      }}
      className={css`
        background: url(${(function () {
          if (count <= 40) {
            return aaa;
          } else if (count > 40 && count < 45) {
            return bbb;
          } else {
            return rick;
          }
        })()});

        background-size: 100% 100%;
      `}
      style={springs}
    >
      {" "}
    </animated.div>
  );
}
