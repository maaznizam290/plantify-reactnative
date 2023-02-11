import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import React from 'react';
import COLORS from '../components/color';

const HomeScreen = () => {
  const categories = ['Top Pick', 'Indoor', 'Outdoor', 'Seeds', 'Plant'];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
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
              style={{width: 25, height: 25, marginRight: 10}}
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
              source={require('../assets/bookmark.png')}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                marginLeft: 20,
                marginHorizontal: 10,
              }}
              source={require('../assets/menu.png')}
            />
          </View>
        </View>
        <View>
          <ImageBackground
            style={{width: 370, height: 195, marginTop: 10, borderRadius: 6}}
            source={require('../assets/hb.png')}>
            <View style={{top: 30, left: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#001240'}}>
                There's a Plant
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: '#001240'}}>
                for everyone
              </Text>
            </View>
            <View style={{left: 20, marginTop: 40}}>
              <Text style={{fontSize: 14, fontWeight: '700', color: '#001240'}}>
                Get your 1st plant
              </Text>
              <Text style={{fontSize: 14, fontWeight: '700', color: '#001240'}}>
                @ 40% off
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <View style={styles.searchContainer}>
            <Image
              style={{
                marginLeft: 25,
                marginRight: 20,
                width: 25,
                height: 25,
                alignItems: 'center',
              }}
              source={require('../assets/search.png')}
            />
            <TextInput placeholder="Search" style={styles.input} />
          </View>
          <View style={{marginLeft: 10}}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/sortMenu.png')}
            />
          </View>
        </View>
        <CategoryList />

        <View
          style={{
            backgroundColor: '#9CE5CB',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
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
                width: 137,
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
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/Botton.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -150}}
                source={require('../assets/p4.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#FFE899',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
            }}>
            Watermelon
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 20,
            }}>
            <Text
              style={{
                width: 137,
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
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/coupon.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -150}}
                source={require('../assets/p3.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8CEC8A',
            marginTop: 30,
            width: 370,
            height: 145,
            borderRadius: 15,
          }}>
          <Text
            style={{
              marginTop: 20,
              left: 20,
              fontSize: 24,
              fontWeight: '700',
              color: '#001240',
              width: 239,
            }}>
            Invite a Friend and earn Plantify rewards
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 20,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#0D986A',
                fontSize: 13,
                fontWeight: '600',
              }}>
              Redeem them to get instant discount
            </Text>
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Button
                title="invite"
                color="#0D986A"
                fontSize="15"
                borderRadius="20"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#56D1A7',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
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
                width: 137,
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
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/delivery.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -130}}
                source={require('../assets/p1.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#B2E28D',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
            }}>
            Bird's Nest Fern
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 20,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 18,
                fontWeight: '600',
              }}>
              $160
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/Ellipse25.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -150}}
                source={require('../assets/p2.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#DEEC8A',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
            }}>
            Cactus
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 20,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 18,
                fontWeight: '600',
              }}>
              $260
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/coupon.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -150}}
                source={require('../assets/p4.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#F5EDA8',
            width: 330,
            height: 145,
            borderRadius: 15,
            marginTop: 50,
          }}>
          <Text
            style={{
              width: 137,
              left: 20,
              marginTop: 10,
              color: '#001240',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Air Purifier
          </Text>
          <Text
            style={{
              left: 20,
              fontSize: 32,
              fontWeight: '500',
              color: '#001240',
              width: 239,
            }}>
            Aloe Vera
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 20,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 18,
                fontWeight: '600',
              }}>
              $210
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: 70,
                height: 40,
                borderRadius: 4,
                marginTop: 10,
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../assets/Ellipse25.png')} />
              <Image
                style={{marginLeft: 50, position: 'absolute'}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{marginLeft: 38}}
                source={require('../assets/circleLine.png')}
              />
              <Image
                style={{width: 150, height: 150, marginTop: -130}}
                source={require('../assets/p6.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: 40,
            height: 3,
            color: '#001240',
            borderBottomWidth: 3,
            marginTop: 30,
          }}></View>

        <View style={{marginTop: 20, marginBottom: 50}}>
          <Text
            style={{
              width: 226,
              fontSize: 36,
              fontWeight: '700',
              color: '#001240',
            }}>
            Plant a life
          </Text>
          <Text
            style={{
              width: 289,
              fontSize: 26,
              fontWeight: '700',
              opacity: 0.8,
              color: '#001240',
            }}>
            live amongst living
          </Text>
          <Text
            style={{
              width: 228,
              fontSize: 24,
              fontWeight: '700',
              opacity: 0.5,
              color: '#001240',
            }}>
            Spread the joy
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
  searchContainer: {
    height: 50,
    backgroundColor: '#f1f2f6',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 14,
    color: '#001240',
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
});

export default HomeScreen;
