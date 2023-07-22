import HeadingOne from "./HeadingOne";
import HeadingThree from "./HeadingThree";
import HeadingTwo from "./HeadingTwo";
import Link from "./Link";
import List from "./List";
import ListItem from "./ListItem";
import Paragraph from "./Paragraph";
import Strong from "./Strong";

const MDXComponents = {
  h1: HeadingOne,
  h2: HeadingTwo,
  h3: HeadingThree,
  p: Paragraph,
  ul: List,
  li: ListItem,
  a: Link,
  strong: Strong,
};

export default MDXComponents;
