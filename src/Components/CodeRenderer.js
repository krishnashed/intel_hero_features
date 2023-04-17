import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeRenderer({ language = "bash", value }) {
  return (
    <SyntaxHighlighter
      customStyle={{
        paddingTop: 10,
      }}
      language={language}
      style={a11yDark}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeRenderer;
