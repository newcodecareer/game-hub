import useGameTrailers from "../hooks/useGameTrailers";
interface Props {
  gameId: number;
}
const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);
  // console.log( data)

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
    />
  );
};

export default GameTrailers;
