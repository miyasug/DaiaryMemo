import React, { Component } from 'react';

import { 
	AsyncStorage,
	View,
	StyleSheet,
	ScrollView,
	Modal,
	TouchableHighlight,
	Keyboard,
	KeyboardAvoidingView,
	Dimensions,
	SafeAreaView,
	Image, 
	Linking,
	FlatList,
	TextInput,
  } from "react-native";

import {
   ListItem,
   Header,
   Button,
} from 'react-native-elements';

import {
Text,
FAB,
} from 'react-native-paper'

import { 
	iPhoneXIPro, 
	iPhoneXI, 
	iPhoneXPlus, 
	iPhoneX, 
	iPhoneEight,
	iPhoneEightPlus,
	iPhoneSe,
	iPadPro129,
	iPadPro105,
	iPadPro97,
} from './lib/iPhoneSize';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const DATA = "@photoLibrary_test1"
const DATA2 = "@photoLibrary_test2"
const DATA3 = "@photoLibrary_test3"

export default class Daiary extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        };
	}

	  // 以下にnull値を設定するとヘッダーを非表示にできる
	  static navigationOptions = ({ navigation }) => {
		return {
		  header: null,
		  headerMode: 'none',
		}
	  }
	
	// // 以下にnull値を設定するとヘッダーを非表示にできる
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: null,
    //         headerMode: 'none',
    //     }
    // }
  
    componentWillMount() {
		//this.loadTodo()
	}

	loadTodo = async () => {
		try {
		} catch (e) {
		  console.log(e)
		}
	  }


    render() {
      return (
         <View style={styles.container}>
		    <Header
		    	centerComponent={{ 
					text: 'Daiary',
		    		style: { color: 'lightblue',
		    			fontSize: '28',
		    			fontFamily: Platform.select({ios:'Baskerville-Bold', android: 'serif'})
					}}
				}
		    	containerStyle={{
		    		backgroundColor: "black",
		    		justifyContent: 'space-around',
				}}
				
				statusBarProps={{ barStyle: 'light-content' }}
				barStyle="light-content"
		    />
			<View style = {{flex:1}}>
			    <FAB
                     style = {styles.fab}
                     small
                     icon = 'plus'
					 label = '新規追加'
                     onPress = {() => this.props.navigation.navigate('AddPage')}
                />
			</View>
         </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(210, 90%, 50%, 0.1)',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
	backgroundColor: 'rgba(0,0,0,0.3)',
	position: 'absolute',
	margin: 5,
	left: windowWidth/10,
	bottom: windowHeight/12,
	borderColor: "white",
	borderWidth: 1,
	borderRadius: 30,
	shadowColor: "white",
	shadowOffset: {
		height: 2,
		width: 3
	},
	shadowRadius: 2,
	shadowOpacity: 3,
  },
});
