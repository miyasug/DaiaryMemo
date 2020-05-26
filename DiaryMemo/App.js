import React from 'react';

import {
  View,
} from 'react-native';

import {
	createStackNavigator,
} from 'react-navigation-stack';

import {
	createAppContainer,
} from 'react-navigation';

import Daiary from './component/Daiary';
import EditPage from './component/EditPage';
import AddPage from './component/AddPage';

const RootNavigator = createStackNavigator ({
	Daiary: {
		screen: Daiary
	},
	EditPage: {
		screen: EditPage
	},
	AddPage: {
		screen: AddPage
	},
},
    {
        initialRouteName: "Daiary",
    }
);

const App = createAppContainer(RootNavigator);

export default App;

