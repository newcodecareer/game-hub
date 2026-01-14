import useGenres from './useGenres'

const useGenreFinder = (id?:number) => {
  const {data:genresData}=useGenres()
  const genre= genresData.results.find(item=>item.id===id)
  return genre
}

export default useGenreFinder