import * as React from "react";
import { View as NativeView, ViewProps } from "react-native";

export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

const View = (props: ViewInterface & T) => <NativeView {...props} />

export default View