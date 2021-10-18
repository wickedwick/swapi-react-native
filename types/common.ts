export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Films: undefined;
  Characters: undefined;
};

export type TabOneParamList = {
  FilmListScreen: undefined;
  FilmDetailsScreen: { url: string };
};

export type TabTwoParamList = {
  CharacterListScreen: undefined;
  CharacterDetailsScreen: { url: string };
};
