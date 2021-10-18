import * as Linking from 'expo-linking'

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    TabOne: {
                        screens: {
                            FilmListScreen: 'films',
                            FilmDetailsScreen: 'films/:url',
                        },
                    },
                    TabTwo: {
                        screens: {
                            CharacterListScreen: 'characters',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
}
