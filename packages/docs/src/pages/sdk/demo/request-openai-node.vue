<script setup lang="ts">
import type { BubbleListProps } from "@antdv-next/x";
import type {
  XModelMessage,
  XModelParams,
  XRequestOptions,
} from "@antdv-next/x-sdk";
import type { SSEFields } from "@antdv-next/x-sdk";

import { BubbleList, Sender } from "@antdv-next/x";
import {
  AbstractXRequestClass,
  OpenAIChatProvider,
  useXChat,
} from "@antdv-next/x-sdk";
import { Alert, Flex } from "antdv-next";
import { computed, ref } from "vue";

type OutputType = Partial<Record<SSEFields, any>>;
type InputType = XModelParams;

class OpenAiRequest<
  Input extends InputType = InputType,
  Output extends OutputType = OutputType,
> extends AbstractXRequestClass<Input, Output> {
  client: any = null;
  stream: unknown;

  _isTimeout = false;
  _isStreamTimeout = false;
  _isRequesting = false;

  constructor(baseURL: string, options: XRequestOptions<Input, Output>) {
    super(baseURL, options);
  }

  get asyncHandler(): Promise<any> {
    return Promise.resolve();
  }

  get isTimeout(): boolean {
    return this._isTimeout;
  }

  get isStreamTimeout(): boolean {
    return this._isStreamTimeout;
  }

  get isRequesting(): boolean {
    return this._isRequesting;
  }

  get manual(): boolean {
    return true;
  }

  async run(_input: Input): Promise<void> {
    const { callbacks } = this.options;

    try {
      throw new Error(
        "Please replace this skeleton with your openai-node or compatible SDK request implementation.",
      );
    } catch (error: any) {
      callbacks?.onError?.(error);
    }
  }

  abort(): void {}
}

const provider = new OpenAIChatProvider<XModelMessage, InputType, OutputType>({
  request: new OpenAiRequest("OPENAI", {}),
});

const content = ref("");

const { onRequest, messages, isRequesting, abort } = useXChat({
  provider,
  requestPlaceholder: () => ({
    content: "loading...",
    role: "assistant",
  }),
  requestFallback: (_, { error }) => ({
    content: error.name === "AbortError" ? "Request is aborted" : String(error),
    role: "assistant",
  }),
});

const bubbleItems = computed(() =>
  messages.value.map(({ message, id }) => ({
    key: id,
    ...message,
  })),
);

const roleConfig: BubbleListProps["role"] = {
  assistant: {
    placement: "start",
  },
  user: {
    placement: "end",
  },
};

function handleSubmit(value: string) {
  onRequest({
    messages: [{ role: "user", content: value }],
  });
  content.value = "";
}
</script>

<template>
  <Flex vertical gap="middle" :style="{ padding: '16px' }">
    <Alert
      type="info"
      show-icon
      message="This demo is a request skeleton. Replace the custom request with your openai-node or compatible SDK implementation before debugging."
    />

    <BubbleList
      :style="{ height: '500px' }"
      :role="roleConfig"
      :items="bubbleItems"
    />

    <Sender
      :value="content"
      :loading="isRequesting"
      :on-cancel="abort"
      :on-change="(value: string) => (content = value)"
      :on-submit="handleSubmit"
    />
  </Flex>
</template>

<docs lang="zh-CN">
严格对齐原始 `request-openai-node` 的“自定义 Request 骨架”思路迁移。由于当前仓库未安装 `openai` 依赖，这里保留可编译的自定义 Request 骨架，便于接入 `openai-node` 或兼容 SDK 时替换。
</docs>

<docs lang="en-US">
Strictly aligned with the original `request-openai-node` custom Request skeleton. Since this repo does not include the `openai` package, the migrated demo keeps a compilable request skeleton that you can replace with `openai-node` or a compatible SDK implementation.
</docs>
