import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  orderValue: string;
  searchText: string;
}

//another way to simplified query key is keep gameQuery, create a gameQueryParams
export interface GameQueryParams {
  genreId?:number;
  platformId?: number;
  orderValue: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  const gameQueryParams ={
    genreId:gameQuery?.genre?.id,
    platformId: gameQuery?.platform?.id,
    orderValue: gameQuery.orderValue,
    searchText:gameQuery.searchText,
  }

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}>
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectedOrder={(orderValue) =>
                setGameQuery({ ...gameQuery, orderValue })
              }
              selectedOrderValue={gameQuery.orderValue}
            />
          </HStack>
        </Box>
        <GameGrid gameQueryParams={gameQueryParams} />
      </GridItem>
    </Grid>
  );
}

export default App;
