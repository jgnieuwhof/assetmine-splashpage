import { compose, withHandlers, withState, lifecycle } from "recompose";

const WindowDimensions = compose(
  withState("dimensions", "setDimensions", {
    width: undefined,
    height: undefined
  }),
  withHandlers({
    onResize: ({ onChange, setDimensions }) => () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      setDimensions(dimensions);
      onChange(dimensions);
    }
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener("resize", this.props.onResize);
      this.props.onResize();
    },
    componentDidUnmount() {
      window.removeEventListener("resize", this.props.onResize);
    }
  })
)(({ dimensions: { width, height }, render }) => render({ width, height }));

export default WindowDimensions;
