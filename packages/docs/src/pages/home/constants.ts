export const DESIGN_STAGE_COLOR = {
  AWAKE: { START: "#66D6FF", END: "#509BFF" },
  EXPRESS: { START: "#37F5B5", END: "#3DA8F5" },
  CONFIRM: { START: "#CC8BFF", END: "#8A6AFF" },
  FEEDBACK: { START: "#FFAF71", END: "#FF6B8B" },
  COMMON: { START: "#A7B6FF", END: "#77E3FF" },
} as const;

export const HOME_BREAKPOINTS = {
  MOBILE: 767.99,
  COMPACT: 900,
  TABLET: 1180,
} as const;

export const HOME_LAYOUT = {
  MAX_WIDTH: 1560,
  CONTAINER_MARGIN: 100,
  HEADER_HEIGHT: 80,
} as const;

export const HOME_LINKS = {
  components: "/components",
  welcome: "/components",
  prompts: "/components/prompts",
  attachments: "/components/attachments",
  think: "/components/bubble",
  actions: "/components/actions",
  richSpecZh: "https://x.ant.design/docs/spec/introduce-cn",
  richSpecEn: "https://x.ant.design/docs/spec/introduce",
} as const;

export type HomeSceneKey = "independent" | "assistant" | "nest" | "app";

export function getHomeRichSpecLink(locale: string) {
  return locale === "en-US" ? HOME_LINKS.richSpecEn : HOME_LINKS.richSpecZh;
}
