import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpandable, setIsExpandable] = useState(false);
  if (!children) return null;

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const sliceContent = children.slice(0, limit);
  const summary = isExpandable ? children : sliceContent + "...";

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        size="xs"
        fontWeight="bold"
        marginLeft={2}
        onClick={() => setIsExpandable(!isExpandable)}>
        {isExpandable ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
