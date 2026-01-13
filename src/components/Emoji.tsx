import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;
  // const emoji =
  //   rating_top > 4
  //     ? bullsEye
  //     : rating_top > 3
  //     ? meh
  //     : rating_top > 2
  //     ? thumbsUp
  //     : "";
  // return <Image boxSize="25px" src={emoji} />;

  // other method using Map
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: " recommend", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating_top]} />;
};

export default Emoji;
