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

import PhotoView from 'react-native-photo-view';
import * as ImagePicker from 'expo-image-picker';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const DATA = "@photoLibrary_test1"
const DATA2 = "@photoLibrary_test2"
const DATA3 = "@photoLibrary_test3"

export default class EditPage extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
			ctiveSlide: 0,
			photo: null,
			imageState: [
				{id: 1},
				{id: 2},
				{id: 3},
			],
			buttonTrigger: false,
			buttonTrigger2: false,
			buttonTrigger3: false,
			modalTrigger: false,
			modalTrigger2: false,
			modalTrigger3: false,
        };
	}
	
	// 以下にnull値を設定するとヘッダーを非表示にできる
	static navigationOptions = ({ navigation }) => {
		return {
		  header: null,
		  headerMode: 'none',
		}
	  }
  
    componentWillMount() {
		this.getPermissionAsync();
		this.loadTodo();
	}

	loadTodo = async () => {
		try {
		  const todoString = await AsyncStorage.getItem(DATA);
		  const todoString2 = await AsyncStorage.getItem(DATA2);
		  const todoString3 = await AsyncStorage.getItem(DATA3);
		  console.log(todoString2.length)

		  if( todoString.length <= 10 ) {
			this.setState({ buttonTrigger: false })
		  } else  {
			const ImageData = JSON.parse(todoString);
			this.setState({photo: ImageData});
			this.setState({ buttonTrigger: true })
		  }

		  if( todoString2.length <= 10 ) {
			this.setState({ buttonTrigger2: false })
		  } else  {
			const ImageData2 = JSON.parse(todoString2);
			this.setState({photo2: ImageData2});
			this.setState({ buttonTrigger2: true })
		  }
		  
		  if( todoString3.length <= 10 ) {
			this.setState({ buttonTrigger3: false })
		  } else  {
			const ImageData3 = JSON.parse(todoString3);
			this.setState({photo3: ImageData3});
			this.setState({ buttonTrigger3: true })
		  }
		  
		} catch (e) {
		  console.log(e)
		}
	  }

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			// Permissions.CAMERA
			// 写真およびビデオ撮影の許可タイプ。
		  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		  // 権限のタイプをユーザーに要求します。 彼らがすでにアクセスを許可している場合、応答は成功します。
		  if (status !== 'granted') {
			alert('Sorry, we need camera roll permissions to make this work!');
		  }
		}
	  };

	triggerOn = () => {
		this.setState({modalTrigger: true})
	}

	triggerOn2 = () => {
		this.setState({modalTrigger2: true})
	}

	triggerOn3 = () => {
		this.setState({modalTrigger3: true})
	}

	
// ---- id = 1 -----------------------------------------
	  pickImage = async (item) => {
		try {
		  // iPhoneのライブラリから画像またはビデオを選択するためのシステムUIを表示します。
		  let result = await ImagePicker.launchImageLibraryAsync({
			// mediaTypes: ImagePicker.MediaTypeOptions.All,　// 画像と動画 (iOSのみ) 
			mediaTypes: ImagePicker.MediaTypeOptions.Images,　// 画像のみ (iOS,Android対応)
			allowsEditing: true, // 画像：Androidでは、ユーザーは画像をトリミングして回転させることができ、iOSでは単にトリミングします。 
			aspect: [4, 3], // 画像のアスペクト比(allowsEditing: trueの場合)
			quality: 1, // 圧縮の品質を0〜1の範囲で指定。0は小さいサイズの圧縮を意味し、1は最高品質の圧縮を意味する。
		  });
			// ユーザーがピッキングをキャンセルした場合は、 { cancelled: true }返します。
		  if (!result.cancelled) {
			this.setState({modalTrigger: false});
			this.setState({ photo: result.uri });
			this.setState({ buttonTrigger: true })
			await AsyncStorage.setItem(DATA, JSON.stringify(this.state.photo));
		  }
		} catch (E) {
		  console.log(E);
		  this.setState({modalTrigger: false});
		}
	  };

// ---- id = 2 -----------------------------------------
	  pickImage2 = async (item) => {
		try {
		    let result2 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		  });
		  if (!result2.cancelled) {
			this.setState({modalTrigger2: false});
			this.setState({ photo2: result2.uri });
			this.setState({ buttonTrigger2: true })
			await AsyncStorage.setItem(DATA2, JSON.stringify(this.state.photo2));
		  }
		} catch (E) {
		  console.log(E);
		  this.setState({modalTrigger2: false});
		}
	  };

// ---- id = 3 -----------------------------------------
	  pickImage3 = async (item) => {
		try {
		    let result3 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		  });
		  if (!result3.cancelled) {
			this.setState({modalTrigger3: false});
			this.setState({ photo3: result3.uri });
			this.setState({ buttonTrigger3: true })
			await AsyncStorage.setItem(DATA3, JSON.stringify(this.state.photo3));
		  }
		} catch (E) {
		  console.log(E);
		  this.setState({modalTrigger3: false});
		}
	  };

// ---- id = 1 -----------------------------------------
	  deleate = async () => {
		try {
			this.setState({modalTrigger: false});
			const Data = await AsyncStorage.getItem(DATA);
            let data = JSON.parse(Data);
            this.setState({DelMode: false})
            if(data == null) {
                return false;
			}
			data = null
		    this.setState({ photo: null });
		    this.setState({ buttonTrigger: false })
			await AsyncStorage.setItem(DATA, JSON.stringify(null));
		} catch(err) {
			console.error(err);
		}
	  }

// ---- id = 2 -----------------------------------------
	  deleate2 = async () => {
		try {
			this.setState({modalTrigger2: false});
			const Data = await AsyncStorage.getItem(DATA2);
            let data = JSON.parse(Data);
            this.setState({DelMode: false})
            if(data == null) {
                return false;
			}
			data = null
		    this.setState({ photo2: null });
		    this.setState({ buttonTrigger2: false })
			await AsyncStorage.setItem(DATA2, JSON.stringify(null));
		} catch(err) {
			console.error(err);
		}
	  }

// ---- id = 3 -----------------------------------------
	  deleate3 = async () => {
		try {
			this.setState({modalTrigger3: false});
			const Data = await AsyncStorage.getItem(DATA3);
            let data = JSON.parse(Data);
            this.setState({DelMode: false})
            if(data == null) {
                return false;
			}
			data = null
		    this.setState({ photo3: null });
		    this.setState({ buttonTrigger3: false })
			await AsyncStorage.setItem(DATA3, JSON.stringify(null));
		} catch(err) {
			console.error(err);
		}
	  }

    //カルーセルの中身
     _renderItem = ({ item, index }) => {
    	return (
// ---- id = 1 -----------------------------------------
    		<View style = {{flex: 1,}}>
				{item.id == 1 ?
				<View style={styles.imageView}>
				    {this.state.buttonTrigger == false ?
				    <View style = {{}}>
					    <TouchableHighlight onPress={() => this.pickImage(item)} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
					    	<Icon
					    	   name="plus-circle-outline"
					    	   style = {{
					    		   fontSize: 45,
					    		   height: windowHeight,
					    		   alignSelf: "center",
					    		   top: windowHeight * 0.15,
					    		   color: "white",
					    	   }}
					    	/>
					    </TouchableHighlight>
				    </View>
				     :
				    <View>
				        {this.state.photo &&
				        <TouchableHighlight 
				        	onPress = {() => console.log("1")}
				        	activeOpacity={0.6}
				        	underlayColor='hsla(210, 90%, 0, 0.1)'
				        >
				        	<Image source={{ uri: this.state.photo }} style={styles.imageView}/>
				        </TouchableHighlight>
				        }
                        <FAB
                            small
                            color = 'white'
                            icon = 'sync'
                            onPress = {() => this.triggerOn()}
                            style = {styles.fab}
                        />
				    </View>
	 			    }
				</View>
// ---- id = 2 -----------------------------------------
				: item.id == 2 ?
				<View style={styles.imageView}>
				{this.state.buttonTrigger2 == false ?
				<View style = {{}}>
				    <TouchableHighlight onPress={() => this.pickImage2(item)} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
				    	<Icon
				    	   name="plus-circle-outline"
				    	   style = {{
				    		   fontSize: 45,
				    		   height: windowHeight,
				    		   alignSelf: "center",
				    		   top: windowHeight * 0.15,
				    		   color: "white",
				    	   }}
				    	/>
				    </TouchableHighlight>
			    </View>
				 :
				 <View>
				{this.state.photo2 && item.id == 2 &&
				<TouchableHighlight 
				    onPress = {() => console.log("2")}
				    activeOpacity={0.6}
				    underlayColor='hsla(210, 90%, 0, 0.1)'
		    	>
				    <Image
				    	source={{ uri: this.state.photo2 }}
				    	style={styles.imageView}
				    />
		    	</TouchableHighlight>
				}
				<FAB
					small
					color = 'white'
					icon = 'sync'
					onPress = {() => this.triggerOn2()}
					style = {styles.fab}
				/>
				</View>
				}
				</View>
// ---- id = 3 -----------------------------------------
				:
				<View style={styles.imageView}>
				    {this.state.buttonTrigger3 == false ?
					<View style = {{}}>
					    <TouchableHighlight onPress={() => this.pickImage3(item)} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
					        <Icon
					           name="plus-circle-outline"
					           style = {{
					        	   fontSize: 45,
					        	   height: windowHeight,
					        	   alignSelf: "center",
					        	   top: windowHeight * 0.15,
					        	   color: "white",
					           }}
				            />
					    </TouchableHighlight>
			        </View>
			    	 :
				    <View>
				        {this.state.photo3 && item.id == 3 &&
				        <TouchableHighlight 
						    onPress = {() => console.log("3")}
						    activeOpacity={0.6}
				   		    underlayColor='hsla(210, 90%, 0, 0.1)'
				    	>
						    <Image source={{ uri: this.state.photo3 }} style={styles.imageView}/>
					    </TouchableHighlight>
				        }
						<FAB
							small
							color = 'white'
							icon = 'sync'
							onPress = {() => this.triggerOn3()}
							style = {styles.fab}
						/>
					</View>
			    	}
				</View>
	 			}
    		</View>
    	);
	}

	closeModal = () => {
		this.setState({modalTrigger: false});
		this.setState({modalTrigger2: false});
		this.setState({modalTrigger3: false});
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
	   	    <View style = {{flex: 1, flexDirection: "column"}}>
             	  <View style = {{flex: 0.8, height: windowHeight * 0.2, width: windowWidth * 0.95, alignSelf: "center"}}>
				        <Text style = {{textDecorationLine: "underline", fontSize: 20, fontWeight: "bold", marginTop: 10, color: "white"}}>タイトル</Text>
                        <TextInput
                           label = "タイトルを入力"
                           value = {this.state.noteTitle}
                           editable = {true}
                           maxLength = {100}
                           mode = 'outlined'
                           onChangeText =  {(text) => this.setState({noteTitle: text })}
                           style = {styles.titles}
                           
                           onFocus = {() => this.setState({focusCurrent: true})}
                           onEndEditing = {() => this.setState({focusCurrent: false})}
                        />
             	  </View>
				  <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', marginTop: 10, height: windowHeight}}>
                       <SafeAreaView style={{ flex: 1}}>
                           <Carousel
                               data={this.state.imageState}
                               renderItem={this._renderItem}
                               itemWidth={Dimensions.get("window").width * 0.6}
                               sliderWidth={Dimensions.get("window").width * 1.0}
                               // containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
                               onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
                               loop
                           />
                           <Pagination
								dotColor = "white"
								inactiveDotColor = "white"
                                dotsLength={this.state.imageState.length} //dotの数
                                activeDotIndex={this.state.activeSlide} //どのdotをactiveにするか
                                containerStyle={{paddingVertical:15}} //デフォルトではちと広い
                           />
                       </SafeAreaView>
                  </View>
             	  <View style = {{flex: 3, height: windowHeight * 0.2, marginTop: 0, width: windowWidth * 0.95, alignSelf: "center"}}>
					   <Text style = {{textDecorationLine: "underline", fontSize: 20, fontWeight: "bold", marginTop: 10, color: "white"}}>メモ</Text>
                     <TextInput
                        label = "本文を入力"
                        value = {this.state.noteDescription}
                        mode = 'flat'
                        onChangeText =  {(text) => this.setState({noteDescription: text })}
                        editable = {true}
                        multiline = {true}
                        style = {styles.mainText}
                        scrollEnabled = {true}
                        maxLength = {700}
                        blurOnSubmit = {false}
                        onFocus = {() => this.setState({focusCurrent: true})}
                        onEndEditing = {() => this.setState({focusCurrent: false})}
                     />
             	  </View>
	   	    </View>
{/* ------------------- モーダル ------------------- */}
			<Modal
               visible={this.state.modalTrigger}
               //visible={true}
               animationType='fade'
               onRequestClose={() => this.PressOut()}
               transparent={ true }
            >
				<View style = {{flex:1, backgroundColor: 'rgba(0,0,0,0.7)',}}>
					<View style = {styles.modalQ}>
					    <View style = {{marginBottom: 10}}>
							<Text style = {{
									  color: "gray",
									  fontSize: windowHeight * 0.023,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "700",
									  paddingBottom: windowHeight * 0.005,
								  }}>画像を変更または削除しますか？</Text>
						</View>
					    <View style = {{
								  borderBottomColor: "lightgray",
								  borderTopColor: "lightgray",
								  borderBottomWidth: 1,
								  borderTopWidth: 2,
								  paddingTop: windowHeight * 0.017,
								  paddingBottom: windowHeight * 0.017,
							  }}>
						    <TouchableHighlight onPress = {() => this.pickImage()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(210, 50%, 60%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
								}}>画像を変更する</Text>
							</TouchableHighlight>
						</View>
						<View style = {{marginTop: 10}}>
						    <TouchableHighlight onPress = {() => this.deleate()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(0, 80%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
									  paddingTop: windowHeight * 0.005,
								  }}>削除</Text>
							</TouchableHighlight>
						</View>
					</View>
					<View style = {styles.modalC}>
						<TouchableHighlight onPress = {() => this.closeModal()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
					        <Text style = {{
									  color: 'hsla(210, 95%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
							}}>キャンセル</Text>
						</TouchableHighlight>
					</View>
				</View>
            </Modal>
{/* ------------------- モーダル2 ------------------- */}
			<Modal
               visible={this.state.modalTrigger2}
               //visible={true}
               animationType='fade'
               onRequestClose={() => this.PressOut()}
               transparent={ true }
            >
				<View style = {{flex:1, backgroundColor: 'rgba(0,0,0,0.7)',}}>
					<View style = {styles.modalQ}>
					    <View style = {{marginBottom: 10}}>
							<Text style = {{
									  color: "gray",
									  fontSize: windowHeight * 0.023,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "700",
									  paddingBottom: windowHeight * 0.005,
								  }}>画像を変更または削除しますか？</Text>
						</View>
					    <View style = {{
								  borderBottomColor: "lightgray",
								  borderTopColor: "lightgray",
								  borderBottomWidth: 1,
								  borderTopWidth: 2,
								  paddingTop: windowHeight * 0.017,
								  paddingBottom: windowHeight * 0.017,
							  }}>
						    <TouchableHighlight onPress = {() => this.pickImage2()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(210, 50%, 60%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
								}}>画像を変更する</Text>
							</TouchableHighlight>
						</View>
						<TouchableHighlight onPress = {() => this.deleate2()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(0, 80%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
									  paddingTop: windowHeight * 0.02,
								  }}>削除</Text>
						</TouchableHighlight>
					</View>
					<View style = {styles.modalC}>
						<TouchableHighlight onPress = {() => this.closeModal()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
					        <Text style = {{
									  color: 'hsla(210, 95%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
							}}>キャンセル</Text>
						</TouchableHighlight>
					</View>
				</View>
            </Modal>
{/* ------------------- モーダル2 ------------------- */}
			<Modal
               visible={this.state.modalTrigger3}
               //visible={true}
               animationType='fade'
               onRequestClose={() => this.PressOut()}
               transparent={ true }
            >
				<View style = {{flex:1, backgroundColor: 'rgba(0,0,0,0.7)',}}>
					<View style = {styles.modalQ}>
					    <View style = {{marginBottom: 10}}>
							<Text style = {{
									  color: "gray",
									  fontSize: windowHeight * 0.023,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "700",
									  paddingBottom: windowHeight * 0.005,
								  }}>画像を変更または削除しますか？</Text>
						</View>
					    <View style = {{
								  borderBottomColor: "lightgray",
								  borderTopColor: "lightgray",
								  borderBottomWidth: 1,
								  borderTopWidth: 2,
								  paddingTop: windowHeight * 0.017,
								  paddingBottom: windowHeight * 0.017,
							  }}>
						    <TouchableHighlight onPress = {() => this.pickImage3()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(210, 50%, 60%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
								}}>画像を変更する</Text>
							</TouchableHighlight>
						</View>
						<TouchableHighlight onPress = {() => this.deleate3()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
						        <Text style = {{
									  color: 'hsla(0, 80%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
									  paddingTop: windowHeight * 0.02,
								  }}>削除</Text>
						</TouchableHighlight>
					</View>
					<View style = {styles.modalC}>
						<TouchableHighlight onPress = {() => this.closeModal()} activeOpacity={0.6} underlayColor='hsla(210, 90%, 0, 0.1)'>
					        <Text style = {{
									  color: 'hsla(210, 95%, 40%, 0.9)',
									  fontSize: windowHeight * 0.03,
									  alignSelf: "center",
									  justifyContent: "center",
									  fontWeight: "bold",
							}}>キャンセル</Text>
						</TouchableHighlight>
					</View>
				</View>
            </Modal>
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
  imageView: {
	width: '100%',
	height: '100%',
	borderRadius: 20,
	borderColor: "white",
	borderWidth: 1,
	backgroundColor: "lightgray",
	// backgroundColor: 'hsla(210, 100%, 100%, 0.9)',
  },
  titles: {
	borderWidth:1,
	borderEndColor: "black",
	borderRadius: 10,
	marginTop: 5,
	height: windowHeight * 0.05,
	backgroundColor: "white",
  },
    mainText: {
	borderWidth:1,
	borderEndColor: "black",
	borderRadius: 10,
	marginTop: 5,
	height: windowHeight * 0.3,
	backgroundColor: "white",
  },
  fab: {
	backgroundColor:'rgba(0,0,0,0.5)',
	position:"absolute",
	right: 10,
	top: 10,
  },
  touch: {
	//backgroundColor:'rgba(0,0,0,0.5)',
	color: "red"
  },
  modalQ: {
	backgroundColor: 'hsla(210, 1%, 90%, 1)',
	height: windowHeight * 0.2,
	width: windowWidth * 0.8,
	alignSelf: "center",
	justifyContent: 'center',
	borderColor: "white",
	borderRadius: 15,
	borderWidth: 1,
	marginTop: windowHeight * 0.4,
  },
  modalC: {
	marginTop: 10,
	backgroundColor: 'white',
	height: windowHeight * 0.07,
	width: windowWidth * 0.8,
	alignSelf: "center",
	justifyContent: 'center',
	borderColor: "white",
	borderRadius: 15,
	borderWidth: 1,
  },
});
