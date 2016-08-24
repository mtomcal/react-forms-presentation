// Import React
import React from "react";
import jQuery from "jquery";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  "before": require("../assets/beforeBindings.png"),
  "after": require("../assets/afterBindings.png"),
  "reduxForm": require("../assets/reduxForm.png")
};

preloader(images);

const theme = createTheme({
  primary: "#34445E"
});

const Example = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    height: React.PropTypes.number
  },
  template(id, height) {
    return `<p data-height="${height}" data-theme-id="0" data-slug-hash="${id}" data-default-tab="js" data-user="mtomcal" class='codepen'></p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>`;
  },
  componentDidMount() {
    jQuery(this.refs.example).append(this.template(this.props.id, this.props.height));
  },
  render() {
    return <div ref="example"></div>;
  }
});

export default class Presentation extends React.Component {
    render() {
      return (
        <Spectacle theme={theme}>
          <Deck transition={["slide"]} transitionDuration={500}>
            <Slide transition={["zoom"]} bgColor="primary">
              <Heading size={1} caps textColor="white">
                React Forms: Bindings Pattern
              </Heading>
              <Text size={3} textColor="white">
                By Michael A Tomcal <Link textColor={'grey'} href="https://twitter.com/matomcal" target="_blank">@matomcal</Link>
              </Text>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                React Forms Get Messy Sometimes...
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Image src={images.before} width={600} />
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Let's Use the Bindings pattern to clean this up...
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Image src={images.after} width={800} />
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Interestingly, the <Link textColor={'grey'} href="http://redux-form.com/" target="_blank">Redux Form</Link> library does a similar thing...
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Image src={images.reduxForm} width={700} />
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Any questions or comments?
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Follow me at <Link textColor={'grey'} href="https://twitter.com/matomcal" target="_blank">@matomcal</Link> for further questions.
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Before bindings
              </Heading>
              <Example id={"jAooyW"} height={800} />
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                After bindings
              </Heading>
              <Example id={"dXEERq"} height={800} />
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={4} textColor="white">
                Redux form
              </Heading>
              <Example id={"dXEEkg"} height={800} />
            </Slide>
          </Deck>
        </Spectacle>
      );
    }
}
