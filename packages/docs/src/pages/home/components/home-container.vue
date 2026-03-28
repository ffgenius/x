<script setup lang="ts">
import { createStyles } from "antdv-style";

import { HOME_BREAKPOINTS, HOME_LAYOUT } from "../constants";

withDefaults(
  defineProps<{
    title?: string;
    desc?: string;
  }>(),
  {
    title: "",
    desc: "",
  },
);

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    width: 100%;
    margin: 0 auto;
    max-width: ${HOME_LAYOUT.MAX_WIDTH - HOME_LAYOUT.CONTAINER_MARGIN * 2}px;
    font-family: AlibabaPuHuiTi, ${token.fontFamily}, sans-serif;

    @media only screen and (max-width: ${HOME_LAYOUT.MAX_WIDTH}px) {
      max-width: calc(100vw - ${HOME_LAYOUT.CONTAINER_MARGIN * 2}px);
    }

    @media only screen and (max-width: ${HOME_BREAKPOINTS.MOBILE}px) {
      max-width: calc(100vw - ${token.marginLG * 2}px);
    }
  `,
  title: css`
    font-size: 48px;
    color: #fff;
    text-align: center;
    padding-bottom: ${token.padding}px;
    margin: 0;

    @media only screen and (max-width: ${HOME_BREAKPOINTS.MOBILE}px) {
      font-size: ${token.fontSizeHeading1}px;
    }
  `,
  desc: css`
    color: ${token.colorTextSecondary};
    max-width: 880px !important;
    margin: 0 auto;
    text-align: center;
    padding-bottom: ${token.padding}px;
  `,
}));

const styleState = useStyles();
</script>

<template>
  <div :class="styleState.styles.container">
    <h2 v-if="title" :class="styleState.styles.title">
      {{ title }}
    </h2>
    <p v-if="desc" :class="styleState.styles.desc">
      {{ desc }}
    </p>
    <slot />
  </div>
</template>
