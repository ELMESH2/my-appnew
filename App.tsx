import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProfileScreen from './perfil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Home: undefined;
  Perfil: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Tab = createBottomTabNavigator();

// Tela principal
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Banner principal com imagem */}
        <View style={styles.banner}>
          <Image source={require('./assets/fotos/bigfood.jpg')} style={styles.bannerImage} />
        </View>

        {/* Categorias */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Restaurantes', 'Bebidas', 'Sobremesas', 'Pizza'].map((category) => (
              <View style={styles.category} key={category}>
                {category === 'Sobremesas' ? (
                  <Image
                    source={require('./assets/fotos/categorias/acai.jpg')}
                    style={styles.categoryImage}
                  />
                ) : category === 'Bebidas' ? (
                  <Image
                    source={require('./assets/fotos/categorias/refrigerante.jpg')}
                    style={styles.categoryImage}
                  />
                ) : category === 'Pizza' ? (
                  <Image
                    source={require('./assets/fotos/categorias/pizza.jpg')}
                    style={styles.categoryImage}
                  />
                ) : category === 'Restaurantes' ? (
                  <Image
                    source={require('./assets/fotos/categorias/restaurante.jpg')}
                    style={styles.categoryImage}
                  />
                ) : (
                  <View style={styles.categoryImagePlaceholder}></View>
                )}
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Banners de ofertas */}
        <View style={styles.bannersContainer}>
          <Text style={styles.sectionTitle}>Ofertas Especiais</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Oferta 1', 'Oferta 2', 'Oferta 3'].map((offer, index) => (
              <View style={styles.bannerItem} key={index}>
                <View style={styles.bannerImagePlaceholder}>
                  {offer === 'Oferta 1' ? (
                    <Image
                      source={require('./assets/fotos/ofertas/promo1.jpg')}
                      style={styles.bannerImagePlaceholder}
                    />
                  ) : offer === 'Oferta 2' ? (
                    <Image
                      source={require('./assets/fotos/ofertas/promo2.jpg')}
                      style={styles.bannerImagePlaceholder}
                    />
                  ) : offer === 'Oferta 3' ? (
                    <Image
                      source={require('./assets/fotos/ofertas/promo3.jpg')}
                      style={styles.bannerImagePlaceholder}
                    />
                  ) : (
                    <View style={styles.bannerImagePlaceholder}></View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Promoções (com imagens) */}
        <View style={styles.lastStoresContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Promoção 1', 'Promoção 2'].map((promotion, index) => (
              <View style={styles.storeItem} key={index}>
                <View style={styles.storeImagePlaceholder}>
                  {index === 0 ? (
                    <Image
                      source={require('./assets/fotos/promo/bra.jpg')}
                      style={styles.storeImagePlaceholder}
                    />
                  ) : (
                    <Image
                      source={require('./assets/fotos/promo/lanch.jpg')}
                      style={styles.storeImagePlaceholder}
                    />
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Últimas Lojas (com imagem redonda e nome embaixo) */}
        <View style={styles.famousRestaurantsContainer}>
          <Text style={styles.sectionTitle}>Últimas Lojas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: 'Mask Pizza', img: require('./assets/fotos/restaurantes/pizza1.jpg') },
              { name: 'Lancer Burguer', img: require('./assets/fotos/restaurantes/hambu.jpg') },
              { name: 'Japane', img: require('./assets/fotos/restaurantes/japones.jpg') },
              { name: 'Cantina Toscana', img: require('./assets/fotos/restaurantes/italia.jpg') },
            ].map((store, index) => (
              <View style={styles.category} key={index}>
                <Image source={store.img} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{store.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Culinária Brasileira */}
        <View style={styles.culinaryContainer}>
          <Text style={styles.sectionTitle}>Culinária Brasileira</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.chefImageContainer}>
              <Image
                source={require('./assets/fotos/culinaria br/comidabr.jpg')}
                style={styles.imagePlaceholder}
              />
              
            </View>

            <View style={styles.chefImageContainer}>
              <Image
                source={require('./assets/fotos/culinaria br/comidabr2.jpg')}
                style={styles.imagePlaceholder}
              />
              
            </View>
          </ScrollView>
        </View>

        {/* Famosos no BigFood */}
        <View style={styles.famousRestaurantsContainer}>
          <Text style={styles.sectionTitle}>Famosos no BigFood</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Mcdonald´s', 'Outback', 'Coco Bambu', 'Habbib´s', 'Spoleto'].map((restaurant, index) => (
              <View style={styles.category} key={index}>
                {restaurant === 'Mcdonald´s' ? (
                  <Image source={require('./assets/fotos/famosos/mcdonald.jpg')} style={styles.categoryImage} />
                ) : restaurant === 'Outback' ? (
                  <Image source={require('./assets/fotos/famosos/outback.jpg')} style={styles.categoryImage} />
                ) : restaurant === 'Coco Bambu' ? (
                  <Image source={require('./assets/fotos/famosos/coco.jpg')} style={styles.categoryImage} />
                ) : restaurant === 'Habbib´s' ? (
                  <Image source={require('./assets/fotos/famosos/habib.jpg')} style={styles.categoryImage} />
                ) : restaurant === 'Spoleto' ? (
                  <Image source={require('./assets/fotos/famosos/spoleto.jpg')} style={styles.categoryImage} />
                ) : (
                  <View style={styles.categoryImagePlaceholder}></View>
                )}
                <Text style={styles.categoryText}>{restaurant}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Lojas (Verticais) */}
        <View style={styles.famousRestaurantsVerticalContainer}>
          <Text style={styles.sectionTitle}>Lojas</Text>
          <View style={styles.verticalCategory}>
            <Image source={require('./assets/fotos/restaurantes/japones.jpg')} style={styles.categoryImage} />
            <View style={styles.storeDetails}>
              <Text style={styles.categoryText}>Japane</Text>
              <Text style={styles.storeRating}>⭐ 4.8 <Text style={styles.storeType}> Japonesa 2,6 km</Text></Text>
              <Text style={styles.storeDelivery}>24-34 min Grátis</Text>
            </View>
          </View>
          <View style={styles.verticalCategory}>
            <Image source={require('./assets/fotos/restaurantes/italia.jpg')} style={styles.categoryImage} />
            <View style={styles.storeDetails}>
              <Text style={styles.categoryText}>Cantina Toscana</Text>
              <Text style={styles.storeRating}>⭐ 4.5 <Text style={styles.storeType}>Italiana 1,8 km</Text></Text>
              <Text style={styles.storeDelivery}>30-44 min Grátis</Text>
            </View>
          </View>
          <View style={styles.verticalCategory}>
            <Image source={require('./assets/fotos/restaurantes/pizza1.jpg')} style={styles.categoryImage} />
            <View style={styles.storeDetails}>
              <Text style={styles.categoryText}>Mask Pizza</Text>
              <Text style={styles.storeRating}>⭐ 4.9 <Text style={styles.storeType}>Pizzaria 2,1 km</Text></Text>
              <Text style={styles.storeDelivery}>45-60 min Grátis</Text>
            </View>
          </View>
          <View style={styles.verticalCategory}>
            <Image source={require('./assets/fotos/restaurantes/hambu.jpg')} style={styles.categoryImage} />
            <View style={styles.storeDetails}>
              <Text style={styles.categoryText}>Lancer Burguer</Text>
              <Text style={styles.storeRating}>⭐ 4.3 <Text style={styles.storeType}>Hamburgueria 1,4 km</Text></Text>
              <Text style={styles.storeDelivery}>25-50 min Grátis</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      
    </View>
  );
};


// Componente principal com navegação
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Perfil') {
              iconName = 'person';
            } else {
              iconName = 'ellipse';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
          tabBarStyle: {
            backgroundColor: '#E65100',
            borderTopWidth: 0,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 70,
  },
  banner: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoriesContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bannersContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  bannerItem: {
    width: 250,
    height: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
  },
  lastStoresContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  storeItem: {
    width: 135,
    height: 120,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
  },
  culinaryContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  chefImageContainer: {
    width: 180,
    height: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
  },
  restaurantInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  restaurantImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  restaurantTextContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTime: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  deliveryFree: {
    fontSize: 14,
    color: '#2ECC71',
    marginLeft: 10,
  },
  famousRestaurantsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  famousRestaurantsVerticalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  verticalCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  storeDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  storeRating: {
    fontSize: 14,
    fontWeight: '600',
  },
  storeType: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  storeDelivery: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2ECC71',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E65100',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});


