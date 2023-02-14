import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import Navbar from '../components/navbar';

const Product = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{flex: 1, paddingHorizontal: 1, backgroundColor: 'white'}}>
        <View>
          <View style={{marginBottom: -15}}>
            <Image
              source={require('../assets/Rectangle95.png')}
              style={{width: '105%'}}
            />
            <Image
              source={require('../assets/Logo1.png')}
              style={{
                position: 'relative',
                top: 22,
                height: 30,
                width: 190,
                marginLeft: 20,
                marginTop: -75,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/search.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 20,
                  marginRight: 30,
                  marginHorizontal: 10,
                }}
                source={require('../assets/menu1.png')}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/Rectangle28.png')}
            style={{
              left: 23,
              top: 35,
              width: '102%',
              height: 450,
              marginLeft: -25,
            }}
          />
          <Image
            source={require('../assets/MaskGroup.png')}
            style={{top: 15, marginTop: -13, position: 'absolute'}}
          />
          <Image
            source={require('../assets/Vector.png')}
            style={{top: 14, marginTop: -15, position: 'absolute'}}
          />
          <Image
            source={require('../assets/sage.png')}
            style={{width: 300, height: 300, marginTop: -300, marginLeft: 150}}
          />
          <Text
            style={{
              top: 86,
              height: 21,
              width: 89,
              left: 34,
              marginTop: -490,
              fontFamily: 'Poppins',
              fontWeight: '900',
            }}>
            Air Purifier
          </Text>
          <Image
            source={require('../assets/Group66.png')}
            style={{width: 25, height: 23, top: 65, left: 118}}
          />
          <Image
            source={require('../assets/Rectangle63.png')}
            style={{
              width: 55,
              height: 20,
              top: 45,
              left: 320,
              borderRadius: 12,
            }}
          />
          <Image
            source={require('../assets/Star1.png')}
            style={{top: 30, left: 326}}
          />
          <Text style={{top: 14, left: 350, color: '#0D986A'}}>4.8</Text>
          <Text
            style={{
              top: 30,
              left: 26,
              fontFamily: 'Philosopher',
              fontSize: 42,
              fontWeight: 600,
              color: 'black',
            }}>
            Watermelon Pepomria
          </Text>
          <Text
            style={{
              top: 70,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 900,
            }}>
            PRICE
          </Text>
          <Text
            style={{
              top: 70,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 'bold',
            }}>
            $350
          </Text>
          <Text
            style={{
              top: 100,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 900,
            }}>
            Size
          </Text>
          <Text
            style={{
              top: 100,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 900,
            }}>
            5" h
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
            <Image
              source={require('../assets/circlep.png')}
              style={{
                width: 50,
                height: 50,
                top: 187,
                left: 55,
                position: 'absolute',
              }}
            />
          </TouchableOpacity>

          <Image
            source={require('../assets/Rectangle38.png')}
            style={{
              width: 72,
              height: 76,
              top: 480,
              left: 115,
              position: 'absolute',
            }}
          />
          <Image
            source={require('../assets/Vector1.png')}
            style={{position: 'absolute', top: 506, marginLeft: 138}}
          />
          <Image
            source={require('../assets/Group99.png')}
            style={{top: 280, left: 25}}
          />
          <Text style={{top: 300, left: 25, fontWeight: '700', fontSize: 14}}>
            Plant Bio
          </Text>
          <Text
            style={{
              top: 310,
              left: 25,
              width: 320,
              fontSize: 15,
              fontWeight: '400',
            }}>
            No green thumb required to keep our artificial watermelon peperomia
            plant looking lively and lush anywhere you place it.
          </Text>
          <View
            style={{
              left: 25,
              display: 'flex',
              flexDirection: 'row',
              marginTop: 330,
            }}>
            <Image
              source={require('../assets/image30.png')}
              style={{height: 90, width: 134, marginRight: 10}}
            />
            <Image
              source={require('../assets/image29.png')}
              style={{height: 90, width: 104, marginRight: 10}}
            />
            <Image
              source={require('../assets/image27.png')}
              style={{height: 90, width: 103}}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              marginLeft: 25,
              marginTop: 20,
              color: '#002140',
            }}>
            Similar Plants
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#9CE5CB',
              width: 155,
              height: 120,
              borderRadius: 24,
              marginTop: 30,
              marginLeft: 25,
            }}>
            <Text
              style={{
                width: 50,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 12,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 14,
                fontWeight: '700',
                color: '#001240',
                width: 96,
              }}>
              Peperomia
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 70,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $400
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 40,
                  height: 30,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/heart.png')} />
                <Image
                  style={{width: 70, height: 120, marginTop: -140}}
                  source={require('../assets/p4.png')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#DEEC8A',
              width: 155,
              height: 120,
              borderRadius: 24,
              marginTop: 30,
              marginLeft: 40,
            }}>
            <Text
              style={{
                width: 50,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 12,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 14,
                fontWeight: '700',
                color: '#001240',
                width: 96,
              }}>
              Croton Petra
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 70,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $200
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 40,
                  height: 30,
                  marginTop: 10,
                  borderRadius: 4,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/unfillheart.png')} />
                <Image
                  style={{width: 70, height: 120, marginTop: -140}}
                  source={require('../assets/p1.png')}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#F5EDA8',
            width: 415,
            height: 176,
            marginTop: 30,
            marginBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#002140',
                width: 180,
                marginLeft: 36,
                marginTop: 30,
                fontWeight: '700',
              }}>
              That very plant?
              {'\n'}
              Just Scan and the AI will know Exactly
            </Text>

            <TouchableOpacity
              style={{
                marginLeft: 30,
                backgroundColor: '#F5EDA8',
                borderColor: '#0D986A',
                marginTop: 20,
                width: 140,
                height: 40,
                paddingLeft: 5,
                borderRadius: 10,
                borderWidth: 1.5,
              }}>
              <Text
                style={{
                  marginTop: 6,
                  marginLeft: 25,
                  color: '#0D986A',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Scan Now
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={{marginTop: 20, width: 170, height: 140, marginRight: 10}}
              source={require('../assets/tree.png')}
            />
          </View>
        </View>
        <Navbar />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Product;
