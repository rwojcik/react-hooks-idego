import React from "react";

type Props = {
  label?: string;
};

export class TypescriptComponent extends React.Component<Props> {
  render() {
    const { label = "Hello world" } = this.props;
    return <span>{label}</span>;
  }
}
