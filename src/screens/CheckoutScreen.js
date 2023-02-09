import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constant/color';

const CheckoutScreen = () => {
  const [counter, setCounter] = useState(0);

  const AddQuantity = () => {
    setCounter(counter + 1);
  };

  const RemoveQuantity = () => {
    setCounter(counter - 1);
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 25, height: 25, marginLeft: 20, marginRight: 10}}
              source={require('../assets/leaf.png')}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#002140',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {' '}
              PLANTIFY{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/search.png')}
            />
            <Image
              style={{width: 25, height: 25, marginLeft: 20, marginRight: 30}}
              source={require('../assets/menu.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 30, marginLeft: 20}}>
          <Text
            style={{
              color: '#0D986A',
              width: 300,
              fontSize: 32,
              fontWeight: '700',
              alignItems: 'center',
            }}>
            Your Bag
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              style={{
                width: 55,
                height: 65,
                left: 15,
                marginTop: 20,
              }}
              source={require('../assets/p3.png')}
            />
            <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 25}}>
              <Text style={{fontSize: 15, width: 165, fontWeight: '700'}}>
                Watermelon Peperomia
              </Text>
              <Image
                style={{width: 14, height: 30, marginLeft: 25}}
                source={require('../assets/bookmark.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                $350
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 80,
              marginTop: -25,
              alignItems: 'center',
            }}>
            <Button title="+" onPress={() => AddQuantity()} />
            <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
              {counter}
            </Text>
            <Button title="-" onPress={() => RemoveQuantity()} />
            <Image
              style={{width: 14, height: 30, marginLeft: 25}}
              source={require('../assets/bookmark.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              style={{
                width: 55,
                height: 65,
                left: 15,
                marginTop: 20,
              }}
              source={require('../assets/p4.png')}
            />
            <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 25}}>
              <Text style={{fontSize: 15, width: 165, fontWeight: '700'}}>
                Peperomia Obtusfolia
              </Text>
              <Image
                style={{width: 14, height: 30, marginLeft: 25}}
                source={require('../assets/bookmark.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                $400
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 80,
              marginTop: -25,
              alignItems: 'center',
            }}>
            <Button title="+" onPress={() => AddQuantity()} />
            <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
              {' '}
              {counter}
            </Text>
            <Button title="-" onPress={() => RemoveQuantity()} />
            <Image
              style={{width: 14, height: 30, marginLeft: 25}}
              source={require('../assets/bookmark.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              style={{
                width: 55,
                height: 65,
                left: 15,
                marginTop: 20,
              }}
              source={require('../assets/p6.png')}
            />
            <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 25}}>
              <Text style={{fontSize: 15, width: 165, fontWeight: '700'}}>
                Aloe Vera
              </Text>
              <Image
                style={{width: 14, height: 30, marginLeft: 25}}
                source={require('../assets/bookmark.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                $260
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 80,
              marginTop: -25,
              alignItems: 'center',
            }}>
            <Button title="+" onPress={() => AddQuantity()} />
            <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
              {counter}
            </Text>
            <Button title="-" onPress={() => RemoveQuantity()} />
            <Image
              style={{width: 14, height: 30, marginLeft: 25}}
              source={require('../assets/bookmark.png')}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              marginLeft: 25,
            }}>
            <View>
              <Image
                style={{
                  width: 48,
                  height: 48,
                }}
                source={require('../assets/delivery.png')}
              />
            </View>
            <Text style={{marginLeft: 8, fontSize: 15, fontWeight: '700'}}>
              Delivery
            </Text>
            <View style={styles.lineStyle}>
              <View
                style={{
                  position: 'absolute',
                  width: 80,
                  height: 5,
                  borderRadius: 4,
                  backgroundColor: '#0D986A',
                }}></View>
            </View>
            <Text style={{marginLeft: 50}}>$80</Text>
          </View>
          <View style={{marginLeft: 77, marginTop: -10}}>
            <Text style={{width: 150, fontSize: 13, fontWeight: '500'}}>
              Order above $1200 to get free delivery{' '}
            </Text>
            <Text
              style={{
                color: '#0D986A',
                fontSize: 12,
                marginTop: -17.5,
                marginLeft: 78,
                fontWeight: 500,
              }}>
              Shop for more $190
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            marginLeft: 25,
          }}>
          <View>
            <Image
              style={{
                width: 48,
                height: 48,
              }}
              source={require('../assets/coupon.png')}
            />
          </View>
          <Text
            style={{
              width: 97,
              marginLeft: 12,
              marginRight: 20,
              fontSize: 15,
              fontWeight: '700',
            }}>
            Apply Coupon
          </Text>
          <View
            style={{
              width: 120,
              height: 3,
              marginLeft: 15,
              borderRadius: 4,
              backgroundColor: '#0D986A',
            }}></View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: '#002140',
              width: 79,
              fontWeight: '600',
              alignItems: 'center',
            }}>
            Total
          </Text>
          <Text
            style={{
              marginRight: 30,
              fontSize: 28,
              color: '#001240',
              fontWeight: '600',
            }}>
            $1090
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#0D986A',
              width: 79,
              fontWeight: '500',
              alignItems: 'center',
              width: 127,
            }}>
            Saved for later
          </Text>
          <Text
            style={{
              marginRight: 30,
              fontSize: 16,
              color: '#0D986A',
              fontWeight: '600',
            }}>
            2 items
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              style={{
                width: 55,
                height: 65,
                left: 15,
                marginTop: 20,
              }}
              source={require('../assets/p8.png')}
            />
            <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 25}}>
              <Text style={{fontSize: 15, width: 165, fontWeight: '700'}}>
                Large Snake Zylanica
              </Text>
              <Image
                style={{width: 14, height: 30, marginLeft: 25}}
                source={require('../assets/bookmark.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                $350
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 80,
              marginTop: -25,
              alignItems: 'center',
            }}>
            <Button title="+" onPress={() => AddQuantity()} />
            <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
              {counter}
            </Text>
            <Button title="-" onPress={() => RemoveQuantity()} />
            <Image
              style={{width: 14, height: 30, marginLeft: 25}}
              source={require('../assets/bookmark.png')}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#0D986A',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: '100%',
            height: 56,
            marginBottom: 20,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 20,
              color: 'white',
              width: 79,
              fontWeight: '600',
              width: 89,
            }}>
            Checkout
          </Text>
          <Text
            style={{
              marginRight: 30,
              fontSize: 18,
              color: 'white',
              fontWeight: '600',
            }}>
            $1090
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle: {
    width: 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#BCFAE5',
    marginLeft: 20,
  },
});

export default CheckoutScreen;
