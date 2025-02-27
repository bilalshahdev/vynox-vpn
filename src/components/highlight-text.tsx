interface HighlightTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  highlightWords: string[];
  highlightColor?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  highlightWords,
  highlightColor = "text-signature",
  ...rest
}) => {
  return (
    <h2 {...rest}>
      {text.split(" ").map((word, index) => {
        const isHighlighted = highlightWords.some(
          (highlight) => highlight.toLowerCase() === word.toLowerCase()
        );

        return (
          <span
            key={index}
            className={isHighlighted ? highlightColor : "text-foreground"}
          >
            {word}{" "}
          </span>
        );
      })}
    </h2>
  );
};

export default HighlightText;
