import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import capsize from "capsize";
import basekick from "basekick";

import Setup from "./components/Setup";
import Grid from "./components/Grid";

/**
 * This makes ::before and ::after not working.
 * Workaround:
 * 1.Add the same settings here: https://seek-oss.github.io/capsize/
 * 2. copy the css-in-js code into useStyles
 * 3. Edit '::before' and '::after'
 */
const capsizeStyles = capsize({
  capHeight: 16,
  lineGap: 4,
  fontMetrics: {
    capHeight: 700,
    ascent: 1058,
    descent: -291,
    lineGap: 0,
    unitsPerEm: 1000,
  },
});

const basekickStyles = basekick({
  typeSizeModifier: 1,
  typeRowSpan: 1,
  descenderHeightScale: 1,
  baseFontSize: 16,
  gridRowHeight: 20,
});

const basekickH1Styles = basekick({
  typeSizeModifier: 2,
  typeRowSpan: 1,
  descenderHeightScale: 1,
  baseFontSize: 16,
  gridRowHeight: 20,
});

const useStyles = makeStyles(() => ({
  basekick: {
    ...basekickStyles,
  },

  basekickH1: {
    ...basekickH1Styles,
  },

  container: {
    maxWidth: "10em",

    fontSize: "22.5055px",
    lineHeight: "20px",
    padding: "0.05px 0",
    "&::before": {
      content: "''",
      marginTop: "-0.0774em",
      display: "block",
      height: 0,
    },
    "&::after": {
      content: "''",
      marginBottom: "-0.1048em",
      display: "block",
      height: 0,
    },
  },

  h1: {
    display: "none",
    fontSize: "36.5714px",
    lineHeight: "30px",
    padding: "0.05px 0",
    "&::before": {
      content: "''",
      marginTop: "-0.0424em",
      display: "block",
      height: 0,
    },
    "&::after": {
      content: "''",
      marginBottom: "-0.0697em",
      display: "block",
      height: 0,
    },
  },
}));

const App = (props) => {
  const { container, h1, basekick, basekickH1 } = useStyles(props);

  return (
    <>
      <Setup />
      <Grid displayVerticalRhytm={true} displayHorizontalRhytm={true} />
      <p>
        <strong>Without Capsize</strong>
      </p>
      <p>
        Lorem ipsum Lolor sit amet, Lonsectetur adipiscing elit. Duis eu ornare
        nisi, sed feugiat metus. Pellentesque rutrum vel metus non dignissim.
        Aenean egestas neque mattis mi maximus luctus.
      </p>
      <div className={clsx("Basekick", basekick)}>
        <p>
          <strong>With Basekick</strong>
        </p>
        <h1 className={clsx(basekickH1)}>Heading 1</h1>
        <p>
          Lorem ipsum Lolor sit amet, Lonsectetur adipiscing elit. Duis eu
          ornare nisi, sed feugiat metus. Pellentesque rutrum vel metus non
          dignissim. Aenean egestas neque mattis mi maximus luctus. Praesent et
          commodo dui, nec eleifend lectus. Pellentesque blandit nisi tellus, id
          efficitur urna consectetur id. Sed convallis tempor dui vel aliquet.
        </p>
      </div>
      <div className={clsx("Demo", container)}>
        <p>
          <strong>With Capsize</strong>
        </p>
        <h1 className={h1}>Heading 1</h1>
        <p>
          Lorem ipsum Lolor sit amet, Lonsectetur adipiscing elit. Duis eu
          ornare nisi, sed feugiat metus. Pellentesque rutrum vel metus non
          dignissim. Aenean egestas neque mattis mi maximus luctus. Praesent et
          commodo dui, nec eleifend lectus. Pellentesque blandit nisi tellus, id
          efficitur urna consectetur id. Sed convallis tempor dui vel aliquet.
        </p>
      </div>
    </>
  );
};

export default App;
