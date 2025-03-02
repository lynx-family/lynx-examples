// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import "./index.scss";

const AlignContent = () => {
  const examples = [
    { type: "text-overflow" },
    { type: "text-vertical-align" },
    { type: "text-decoration" },
    { type: "text-shadow" },
    { type: "text-direction-rtl" },
  ];

  const TextOverflowExample = () => {
    return (
      <view className="fixed_area">
        <text
          style={{
            fontSize: "20px",
          }}
        >
          text overflow:
        </text>
        <view
          style={{
            width: "100%",
            flexDirection: "column" as const,
          }}
        >
          <text className="item clip" text-maxline="1">
            HellowWorld HellowWorld HellowWorld
          </text>
          <text className="item ellipsis" text-maxline="1">
            HellowWorld HellowWorld HellowWorld
          </text>
        </view>
      </view>
    );
  };

  const TextVerticalAlignExample = () => {
    return (
      <view className="fixed_area">
        <text
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          text vertical align:
        </text>
        <view
          style={{
            width: "100%",
            flexDirection: "column" as const,
          }}
        >
          <text
            style={{
              backgroundColor: "tomato",
              lineHeight: "50px",
            }}
            text-maxline="1"
          >
            <text
              style={{
                verticalAlign: "middle" as const,
              }}
            >
              middle
            </text>
            <text
              style={{
                verticalAlign: "center" as const,
              }}
            >
              center
            </text>
            <text
              style={{
                verticalAlign: "top" as const,
              }}
            >
              top
            </text>
            <text
              style={{
                verticalAlign: "bottom" as const,
              }}
            >
              bottom
            </text>
            <text
              style={{
                verticalAlign: "text-top" as const,
              }}
            >
              text-top
            </text>
            <text
              style={{
                verticalAlign: "baseline" as const,
              }}
            >
              baseline
            </text>
          </text>
          <text
            style={{
              marginTop: "10px",
              backgroundColor: "orange",
              lineHeight: "50px",
            }}
            text-maxline="1"
          >
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "middle" as const,
              }}
            >
              <text>middle</text>
            </view>
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "center" as const,
              }}
            >
              <text>center</text>
            </view>
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "top" as const,
              }}
            >
              <text>top</text>
            </view>
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "bottom" as const,
              }}
            >
              <text>bottom</text>
            </view>
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "texttop" as const,
              }}
            >
              <text>text-top</text>
            </view>
            <view
              className="bg-yellow"
              style={{
                verticalAlign: "baseline" as const,
              }}
            >
              <text>baseline</text>
            </view>
          </text>
        </view>
      </view>
    );
  };

  const TextDecorationExample = () => {
    return (
      <view className="fixed_area">
        <text
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          text decoration:
        </text>
        <view
          style={{
            width: "100%",
            flexDirection: "column" as const,
          }}
        >
          <text
            style={{
              backgroundColor: "#ccc",
              marginTop: "10px",
            }}
          >
            text-decoration
          </text>
          <text
            style={{
              textDecoration: "none" as const,
            }}
          >
            none
          </text>
          <text
            style={{
              textDecoration: "underline" as const,
            }}
          >
            underline
          </text>
          <text
            style={{
              textDecoration: "line-through" as const,
            }}
          >
            line-through
          </text>
          <text
            style={{
              textDecoration: "underline line-through red solid" as const,
            }}
          >
            red solid
          </text>
          <text
            style={{
              textDecoration: "underline line-through green dotted" as const,
            }}
          >
            green dotted
          </text>
          <text
            style={{
              textDecoration: "underline line-through blue dashed" as const,
            }}
          >
            blue dashed
          </text>
        </view>
      </view>
    );
  };

  const TextShadowExample = () => {
    return (
      <view className="fixed_area">
        <text
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          text shadow:
        </text>
        <view
          style={{
            width: "100%",
            flexDirection: "column" as const,
          }}
        >
          <text
            style={{
              backgroundColor: "#ccc",
              marginTop: "10px",
            }}
          >
            Text Shadow Properties
          </text>
          <text
            style={{
              textShadow: "none" as const,
            }}
          >
            text-shadow: none;
          </text>
          <text
            style={{
              textShadow: "1px 1px 2px #558abb" as const,
            }}
          >
            text-shadow: 1px 1px 2px #558abb;
          </text>
          <text
            style={{
              textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" as const,
            }}
          >
            text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
          </text>
          <text
            style={{
              textShadow: "0 .005px .01rem rgba(70, 70, 70, .3)" as const,
            }}
          >
            text-shadow: 0 .005px .01rem rgba(70, 70, 70, .3);
          </text>
        </view>
      </view>
    );
  };

  const TextDirectionRtlExample = () => {
    return (
      <view className="fixed_area">
        <text
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          text direction rtl:
        </text>
        <view
          style={{
            width: "100%",
            flexDirection: "column" as const,
          }}
        >
          <text
            style={{
              direction: "rtl" as const,
            }}
          >
            لإعادة الشحن على دون دفع رسوم الخدمة داخل
            <image
              src="https://picsum.photos/id/237/22/22"
              style={{
                width: "22px",
                height: "22px",
              }}
            />
            رسوم الخدمة داخل
            <view
              style={{
                padding: "10px",
                border: "1px solid red",
                borderRadius: "20px",
              }}
            >
              <text
                style={{
                  fontSize: "30px",
                  color: "linear-gradient(green, yellow)",
                }}
              >
                {" "}
                sub text{" "}
              </text>
            </view>
            الشحن على دون دفع
          </text>
        </view>
      </view>
    );
  };

  const renderExample = (type: string) => {
    switch (type) {
      case "text-overflow":
        return <TextOverflowExample />;
      case "text-vertical-align":
        return <TextVerticalAlignExample />;
      case "text-decoration":
        return <TextDecorationExample />;
      case "text-shadow":
        return <TextShadowExample />;
      case "text-direction-rtl":
        return <TextDirectionRtlExample />;
      default:
        return null;
    }
  };

  return (
    <scroll-view
      scroll-orientation="vertical"
      style={{
        padding: "5px",
        width: "100%",
        height: "100%",
      }}
    >
      {examples.map((example, index) => renderExample(example.type))}
    </scroll-view>
  );
};

export default AlignContent;

root.render(<AlignContent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
