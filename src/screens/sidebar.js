import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Sidebar = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <View style={{justifyContent: 'flex-start', padding: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{width: 30, height: 30, marginTop: 10, marginRight: 10}}
              source={require('../assets/crossBtn.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 20, marginRight: 25, paddingRight: 10}}
              source={require('../assets/shopmenu.png')}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
                marginRight: 180,
              }}>
              Shop
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 30, marginRight: 25, paddingRight: 10}}
              source={require('../assets/plantcare.png')}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
                marginRight: 130,
              }}>
              Plant Care
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 30, marginRight: 25, paddingRight: 10}}
              source={require('../assets/community.png')}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
                marginRight: 120,
              }}>
              Community
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 30, marginRight: 25, paddingRight: 10}}
              source={require('../assets/user.png')}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
                marginRight: 120,
              }}>
              My Account
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 40, height: 30, marginRight: 25, paddingRight: 10}}
              source={require('../assets/track.png')}
            />
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: '600',
                marginRight: 120,
              }}>
              Track Order
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'white',
            alignItems: 'center',
            marginTop: 50,
            marginRight: 140,
          }}>
          Get The Dirt.
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Enter your Emaill"
          style={style.input}
          placeholderTextColor="white"
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'white',
            alignItems: 'center',
            marginTop: 40,
            marginRight: 180,
          }}>
          FAQ
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'white',
            alignItems: 'center',
            marginTop: 15,
            marginRight: 155,
          }}>
          ABOUT US
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'white',
            alignItems: 'center',
            marginTop: 15,
            marginRight: 140,
          }}>
          CONTACT US
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D986A',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  input: {
    width: 290,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#0D986A',
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 55,
    color: 'white',
    borderRadius: 4,
  },
});

export default Sidebar;
