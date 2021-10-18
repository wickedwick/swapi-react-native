import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import FilmDetailsScreen from '../screens/FilmDetailsScreen'
import FilmListScreen from '../screens/FilmListScreen'
import CharacterListScreen from '../screens/CharacterListScreen'
import {
    BottomTabParamList,
    TabOneParamList,
    TabTwoParamList,
} from '../types/common'
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator(): JSX.Element {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="Films"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="Films"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }: { color: string }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Characters"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }: { color: string }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="FilmListScreen"
                component={FilmListScreen}
                options={{ headerTitle: 'Star Wars Films' }}
            />
            <TabOneStack.Screen
                name="FilmDetailsScreen"
                component={FilmDetailsScreen}
                options={{ headerTitle: 'Film Details' }}
            />
        </TabOneStack.Navigator>
    )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="CharacterListScreen"
                component={CharacterListScreen}
                options={{ headerTitle: 'Star Wars Characters' }}
            />
            <TabTwoStack.Screen
                name="CharacterDetailsScreen"
                component={CharacterDetailsScreen}
                options={{ headerTitle: 'Character Details' }}
            />
        </TabTwoStack.Navigator>
    )
}
