import type { Component } from "vue";

import type { HomeSceneKey } from "../../constants";

import AssistantScene from "./assistant-scene.vue";
import IndependentScene from "./independent-scene.vue";
import NestScene from "./nest-scene.vue";

export interface HomeSceneRegistryItem {
  key: HomeSceneKey;
  titleKey: string;
  descKey: string;
  image?: string;
  component?: Component;
  disabled?: boolean;
}

export const homeSceneRegistry: HomeSceneRegistryItem[] = [
  {
    key: "independent",
    titleKey: "home.scenes.independentTitle",
    descKey: "home.scenes.independentDesc",
    image:
      "https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*YVjbTqbc7ngAAAAAAAAAAAAADgCCAQ/fmt.avif",
    component: IndependentScene,
  },
  {
    key: "assistant",
    titleKey: "home.scenes.assistantTitle",
    descKey: "home.scenes.assistantDesc",
    image:
      "https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*kCojRo0SoAAAAAAAAAAAAAAADgCCAQ/fmt.avif",
    component: AssistantScene,
  },
  {
    key: "nest",
    titleKey: "home.scenes.nestTitle",
    descKey: "home.scenes.nestDesc",
    image:
      "https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*krfsT5zBSuUAAAAAAAAAAAAADgCCAQ/fmt.avif",
    component: NestScene,
  },
  {
    key: "app",
    titleKey: "home.scenes.appTitle",
    descKey: "home.scenes.appDesc",
    disabled: true,
  },
];
