module.exports = {
  rendererSidebar: [
    {
      type: "link",
      label: "← Back to main docs",
      href: "/docs",
    },
    {
      type: "link",
      label: "@remotion/renderer",
      href: "#",
    },
    "renderer",
    {
      collapsed: false,
      type: "category",
      label: "Node.JS APIs",
      items: [
        "get-compositions",
        "render-media",
        "render-frames",
        "render-still",
        "open-browser",
        "stitch-frames-to-video",
      ],
    },
  ],
  playerSidebar: [
    {
      type: "link",
      label: "← Back to main docs",
      href: "/docs",
    },
    "player/player",
    "player/examples",
    "player/integration",
    "player/autoplay",
  ],
  lambdaSidebar: [
    {
      type: "link",
      label: "← Back to main docs",
      href: "/docs",
    },
    "lambda",
    {
      collapsed: false,
      type: "category",
      label: "CLI",
      items: [
        "lambda/cli",
        "lambda/cli/sites",
        "lambda/cli/functions",
        "lambda/cli/render",
        "lambda/cli/still",
        "lambda/cli/policies",
      ],
    },
    "lambda/setup",
    "lambda/permissions",
    "lambda/region-selection",
    "lambda/runtime",
    "lambda/faq",
    "lambda/chunkoptimization",
    {
      collapsed: false,
      type: "category",
      label: "Node.JS APIs",
      items: [
        "lambda/estimateprice",
        "lambda/deployfunction",
        "lambda/deletefunction",
        "lambda/getfunctioninfo",
        "lambda/getfunctions",
        "lambda/deletesite",
        "lambda/deploysite",
        "lambda/getsites",
        "lambda/downloadvideo",
        "lambda/getuserpolicy",
        "lambda/getrolepolicy",
        "lambda/getorcreatebucket",
        "lambda/getrenderprogress",
        "lambda/rendervideoonlambda",
        "lambda/renderstillonlambda",
        "lambda/simulatepermissions",
      ],
    },
    "lambda/checklist",
    "lambda/changelog",
    "lambda/upgrading",
    "lambda/uninstall",
  ],
  someSidebar: [
    {
      collapsed: false,
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "timeline",
        "render",
      ],
    },
    {
      type: "category",
      label: "Techniques",
      collapsed: false,
      items: [
        "assets",
        "using-audio",
        "fonts",
        "using-randomness",
        "audio-visualization",
        "use-img-and-iframe",
        "javascript",
        "data-fetching",
        "encoding",
        "transparent-videos",
        "parametrized-rendering",
        "dynamic-metadata",
        "ssr",
        "webpack",
        "legacy-babel",
        "env-variables",
        "third-party",
        "stills",
      ],
    },
    "cli",
    "config",
    {
      type: "category",
      label: "API - Core",
      collapsed: false,
      items: [
        "continue-render",
        "delay-render",
        "interpolate",
        "interpolate-colors",
        "get-input-props",
        "measure-spring",
        "random",
        "register-root",
        "spring",
        "use-current-frame",
        "use-video-config",
        "audio",
        "composition",
        "sequence",
        "loop",
        "video",
        "absolute-fill",
        "img",
        "iframe",
        "freeze",
        "still",
        "series",
        "easing",
      ],
    },
    {
      type: "category",
      label: "API - @remotion/bundler",
      items: ["bundle"],
    },
    "gif",
    {
      type: "category",
      label: "API - @remotion/media-utils",
      items: [
        "get-audio-data",
        "get-audio-duration",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
      ],
    },
    {
      type: "link",
      href: "/docs/lambda",
      label: "API - @remotion/lambda",
    },
    {
      type: "link",
      href: "/docs/player",
      label: "API - @remotion/player",
    },
    {
      type: "category",
      label: "API - @remotion/three",
      items: ["three", "three-canvas", "use-video-texture"],
    },
    {
      type: "link",
      href: "/docs/renderer",
      label: "API - @remotion/renderer",
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsed: false,
      items: [
        "timeout",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
      ],
    },
    "3-0-migration",
    "2-0-migration",
    "license",
  ],
};
