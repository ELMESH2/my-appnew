import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Banner principal */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>BigFood Delivery</Text>
      </View>

      {/* Categorias */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Restaurantes', 'Bebidas', 'Sobremesas', 'Pizza'].map((category) => (
            <View style={styles.category} key={category}>
              {category === 'Sobremesas' ? (
                <Image
                  source={require('./assets/fotos/acai.jpg')} // Caminho da imagem para Sobremesas
                  style={styles.categoryImage}
                />
              ) : category === 'Bebidas' ? (
                <Image
                  source={require('./assets/fotos/refrigerante.jpg')} // Caminho da imagem para Bebidas
                  style={styles.categoryImage}
                />
              ) : category === 'Pizza' ? (
                <Image
                  source={require('./assets/fotos/pizza.jpg')} // Caminho da imagem para Bebidas
                  style={styles.categoryImage}
                />
              ) : category === 'Restaurantes' ? (
                <Image
                  source={require('./assets/fotos/restaurante.jpg')} // Caminho da imagem para Restaurantes
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
              <View style={styles.bannerImagePlaceholder}></View>
              <Text style={styles.bannerText}>{offer}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Promoções do dia */}
      <View style={styles.promotionsContainer}>
        <Text style={styles.sectionTitle}>Promoções</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Promoção 1', 'Promoção 2', 'Promoção 3', 'Promoção 4', 'Promoção 5', 'Promoção 6', 'Promoção 7', 'Promoção 8'].map((promo, index) => (
            <View style={styles.promotionItem} key={index}>
              <View style={styles.promotionImagePlaceholder}></View>
              <Text style={styles.promotionText}>{promo}</Text>
              <Text style={styles.priceText}>R$ 19,90</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Últimas Lojas (sem texto) */}
      <View style={styles.lastStoresContainer}>
        <Text style={styles.sectionTitle}>Últimas Lojas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Loja Fictícia 1', 'Loja Fictícia 2'].map((store, index) => (
            <View style={styles.storeItem} key={index}>
              <View style={styles.storeImagePlaceholder}></View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Culinária Brasileira */}
      <View style={styles.culinaryContainer}>
        <Text style={styles.sectionTitle}>Culinária Brasileira</Text>
        
        {/* Quadrado grande com imagem */}
        <View style={styles.chefImageContainer}>
          <Image
            source={require('./assets/fotos/comidabr.jpg')} // Caminho da imagem para Culinária Brasileira
            style={styles.imagePlaceholder}
          />
        </View>

        {/* Restaurante */}
        <View style={styles.restaurantInfo}>
          <View style={styles.restaurantImage}>
            <View style={styles.restaurantImagePlaceholder}></View>
          </View>
          <View style={styles.restaurantTextContainer}>
            <Text style={styles.restaurantName}>Restaurante Fictício</Text>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryTime}>50 min</Text>
              <Text style={styles.deliveryFree}>Grátis</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Famosos no BigFood (Novos Restaurantes) */}
      <View style={styles.famousRestaurantsContainer}>
        <Text style={styles.sectionTitle}>Famosos no BigFood</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Mcdonald´s', 'Restaurante 2', 'Restaurante 3', 'Restaurante 4', 'Restaurante 5'].map((restaurant, index) => (
            <View style={styles.category} key={index}>
              {restaurant === 'Mcdonald´s' ? (
                <Image
                  source={require('./assets/fotos/mcdonald.jpg')} // Caminho da imagem para McDonald's
                  style={styles.categoryImage}
                />
              ) : (
                <View style={styles.categoryImagePlaceholder}></View>
              )}
              <Text style={styles.categoryText}>{restaurant}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Famosos no BigFood (Circulos Verticais) */}
      <View style={styles.famousRestaurantsVerticalContainer}>
        <Text style={styles.sectionTitle}>Lojas </Text>
        <View style={styles.verticalCategory}>
          <View style={styles.categoryImagePlaceholder}></View>
          <View style={styles.storeDetails}>
            <Text style={styles.categoryText}>Japamar</Text>
            <Text style={styles.storeRating}>⭐ 4.8 <Text style={styles.storeType}>Japonesa 2,6 km</Text></Text>
            <Text style={styles.storeDelivery}>24-34 min Grátis</Text>
          </View>
        </View>
        {['Restaurante 2', 'Restaurante 3', 'Restaurante 4', 'Restaurante 5'].map((restaurant, index) => (
          <View style={styles.verticalCategory} key={index}>
            <View style={styles.categoryImagePlaceholder}></View>
            <Text style={styles.categoryText}>{restaurant}</Text>
          </View>
        ))}
      </View>

      {/* Rodapé ou Navegação */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Restaurantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#1E2A47',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
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
  promotionsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  promotionItem: {
    width: 170,
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promotionImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
  },
  promotionText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginTop: 5,
  },
  lastStoresContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  storeItem: {
    width: 170,
    height: 100,
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
    position: 'relative',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  restaurantImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B0B0B0',
    borderRadius: 25,
  },
  restaurantTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  deliveryTime: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },
  deliveryFree: {
    fontSize: 14,
    color: '#2ECC71',
    fontWeight: 'bold',
  },
  famousRestaurantsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  famousRestaurantsVerticalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  verticalCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  storeDetails: {
    marginLeft: 10,
  },
  storeRating: {
    fontSize: 12,
    color: '#FFD700',
  },
  storeType: {
    fontSize: 12,
    color: '#888',
  },
  storeDelivery: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2ECC71',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1E2A47',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
