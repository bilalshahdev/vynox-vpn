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
    <div {...rest}>
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
    </div>
  );
};

export default HighlightText;
