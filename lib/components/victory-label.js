import React from "react";
import omit from "lodash.omit";
import { Text, TSpan } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";

import { NativeHelpers } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: 0.71,
    lineHeight: 1
  };

  // Overrides method in victory-core
  renderElements(props, content) {
    const transform = NativeHelpers.getTransform(props);
    const style = NativeHelpers.getStyle(props.style);
    const baseProps = omit(props, [
      "style", "transform", "events", "scale", "lineHeight", "datum", "className"
    ]);
    const dy = props.dy - this.getFontSize(style);
    return (
      <Text {...baseProps} {...style} {...transform} {...props.events} dy={dy}>
        {content.map((line, i) => <TSpan key={i}>{line}</TSpan>)}
      </Text>
    );
  }
}
