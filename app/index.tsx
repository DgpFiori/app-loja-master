import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, Platform, Modal, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { data } from '../data';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useMemo } from 'react';
import { Product } from '../types/product';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#27235C',
  secondary: '#FF5733',
  background: '#FFFFFF',
  text: '#333333',
  gray: '#666666',
  yellow: '#FFE600',
  green: '#00a650',
  lightGray: '#EEEEEE',
  blue: '#3483fa',
}

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtra os produtos baseado no texto de pesquisa
  const filteredProducts = useMemo(() => {
    if (!searchText.trim()) {
      return data.products;
    }
    
    const searchLower = searchText.toLowerCase().trim();
    return data.products.filter(product => 
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  }, [searchText]);

  const formatPrice = (price: number) => {
    const installmentPrice = (price / 10).toFixed(2);
    return {
      full: price.toFixed(2),
      installment: installmentPrice,
    };
  };

  const renderProductModal = () => {
    if (!selectedProduct) return null;
    
    const prices = formatPrice(selectedProduct.price);
    const originalPrice = (selectedProduct.price * 1.3).toFixed(2);
    const discountPercentage = 30;
    const stock = Math.floor(Math.random() * 100) + 1;

    return (
      <Modal
        visible={!!selectedProduct}
        animationType="slide"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              onPress={() => setSelectedProduct(null)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: selectedProduct.image }}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.productDetails}>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>4.7</Text>
                <View style={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Ionicons
                      key={star}
                      name={star <= 4 ? "star" : "star-half"}
                      size={16}
                      color={COLORS.blue}
                    />
                  ))}
                </View>
                <Text style={styles.reviews}>(42606)</Text>
              </View>

              <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
              
              <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>R$ {originalPrice}</Text>
                <Text style={styles.modalPrice}>R$ {prices.full}</Text>
                <View style={styles.discountContainer}>
                  <Text style={styles.discountText}>{discountPercentage}% OFF</Text>
                </View>
              </View>

              <Text style={styles.pixInfo}>no Pix ou Saldo no Mercado Pago</Text>

              <Text style={styles.installments}>
                ou R$ {(selectedProduct.price * 1.1).toFixed(2)} em{' '}
                <Text style={styles.installmentHighlight}>
                  10x R$ {prices.installment} sem juros
                </Text>
              </Text>

              <TouchableOpacity style={styles.paymentLink}>
                <Text style={styles.paymentLinkText}>Ver meios de pagamento e promoções</Text>
              </TouchableOpacity>

              <View style={styles.colorSection}>
                <Text style={styles.colorTitle}>Cor: Grafite</Text>
                <View style={styles.colorOptions}>
                  <TouchableOpacity style={[styles.colorOption, styles.colorOptionSelected]}>
                    <Image
                      source={{ uri: selectedProduct.image }}
                      style={styles.colorOptionImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.stockInfo}>
                <View style={styles.stockHeader}>
                  <Text style={styles.stockTitle}>Estoque disponível</Text>
                  <Image 
                    source={{ uri: 'https://http2.mlstatic.com/frontend-assets/vpp-frontend/FUL.png' }}
                    style={styles.stockLogo}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.quantity}>
                  Quantidade: 1 unidade <Text style={styles.stockExtra}>(+50 disponíveis)</Text>
                </Text>
              </View>

              <View style={styles.sellerInfo}>
                <Image
                  source={{ uri: 'https://http2.mlstatic.com/D_Q_NP_2X_893973-MLA69544087906_052023-G.webp' }}
                  style={styles.sellerLogo}
                  resizeMode="contain"
                />
                <View style={styles.sellerDetails}>
                  <Text style={styles.sellerTitle}>Loja oficial Motorola</Text>
                  <Text style={styles.sellerSubtitle}>Vendido por Mercado Livre Eletrônicos</Text>
                  <Text style={styles.sellerSales}>+1M vendas</Text>
                </View>
              </View>

              <View style={styles.productFeatures}>
                <Text style={styles.featuresTitle}>O que você precisa saber sobre este produto</Text>
                <View style={styles.featuresList}>
                  {[
                    'Memória RAM: 4 GB',
                    'Dispositivo desbloqueado para que você escolha a companhia telefônica de sua preferência.',
                    'Tela de 6.6".',
                    'Bateria de 5000mAh.',
                    'Memória interna de 128GB.',
                    'Com reconhecimento facial e sensor de impressão digital.',
                    'Este produto possui 4GB de RAM + 4GB de RAM estendida.'
                  ].map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.seeMoreButton}>
                  <Text style={styles.seeMoreText}>Ver características</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Comprar agora</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="location-on" size={24} color={COLORS.background} />
          <Text style={styles.locationText}>Informe seu CEP</Text>
        </View>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color={COLORS.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar produtos, marcas e muito mais..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={COLORS.gray}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearButton}>
              <MaterialIcons name="close" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {data.categories.map((category) => (
            <Link 
              href={`/categories/${category.id}`} 
              key={category.id}
              asChild
            >
              <TouchableOpacity style={styles.categoryButton}>
                <View style={styles.categoryIcon}>
                  <Image
                    source={{ uri: category.cover }}
                    style={styles.categoryImage}
                  />
                </View>
                <Text style={styles.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>

        {/* Products List */}
        <View style={styles.productsContainer}>
          {filteredProducts.length === 0 ? (
            <View style={styles.noResults}>
              <MaterialIcons name="search-off" size={48} color={COLORS.gray} />
              <Text style={styles.noResultsText}>Nenhum produto encontrado</Text>
              <Text style={styles.noResultsSubtext}>Tente buscar por outro termo</Text>
            </View>
          ) : (
            filteredProducts.map((product) => {
              const prices = formatPrice(product.price);
              const discount = Math.floor(Math.random() * 30 + 20);

              return (
                <TouchableOpacity 
                  key={product.id} 
                  style={styles.productCard}
                  onPress={() => setSelectedProduct(product)}
                >
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <View style={styles.productInfo}>
                    <Text style={styles.productPrice}>
                      R$ {prices.full}
                    </Text>
                    <Text style={styles.discount}>{discount}% OFF</Text>
                    <Text style={styles.installments}>
                      10x R$ {prices.installment} sem juros
                    </Text>
                    <Text style={styles.freeShipping}>
                      <MaterialIcons name="local-shipping" size={16} color={COLORS.green} />
                      {' '}Frete grátis
                    </Text>
                    <Text style={styles.productTitle} numberOfLines={2}>
                      {product.title}
                    </Text>
                    <Text style={styles.productDescription} numberOfLines={2}>
                      {product.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>

      {renderProductModal()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 15,
    paddingTop: Platform.OS === 'android' ? 40 : 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    color: COLORS.background,
    marginLeft: 5,
    fontSize: 14,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  clearButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  categoriesScroll: {
    padding: 15,
    backgroundColor: COLORS.background,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.text,
    textAlign: 'center',
  },
  productsContainer: {
    padding: 10,
    flex: 1,
  },
  noResults: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  noResultsText: {
    fontSize: 18,
    color: COLORS.gray,
    marginTop: 10,
    fontWeight: 'bold',
  },
  noResultsSubtext: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 5,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    marginBottom: 10,
    borderRadius: 8,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  productImage: {
    width: 120,
    height: 120,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  discount: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  installments: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 4,
  },
  freeShipping: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 12,
    color: COLORS.gray,
    lineHeight: 16,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  modalHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  closeButton: {
    padding: 5,
  },
  modalContent: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
  },
  productDetails: {
    padding: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: COLORS.blue,
    marginRight: 5,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    color: COLORS.blue,
  },
  modalTitle: {
    fontSize: 20,
    color: COLORS.text,
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: COLORS.gray,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  modalPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginRight: 10,
  },
  discountContainer: {
    backgroundColor: '#E5F2EC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: 'bold',
  },
  pixInfo: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 10,
  },
  installmentHighlight: {
    color: COLORS.blue,
  },
  paymentLink: {
    marginBottom: 20,
  },
  paymentLinkText: {
    color: COLORS.blue,
    fontSize: 14,
  },
  colorSection: {
    marginBottom: 20,
  },
  colorTitle: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    overflow: 'hidden',
  },
  colorOptionSelected: {
    borderColor: COLORS.blue,
    borderWidth: 2,
  },
  colorOptionImage: {
    width: '100%',
    height: '100%',
  },
  stockInfo: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  stockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stockTitle: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
  },
  stockLogo: {
    width: 50,
    height: 20,
  },
  quantity: {
    fontSize: 14,
    color: COLORS.text,
  },
  stockExtra: {
    color: COLORS.gray,
  },
  sellerInfo: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sellerLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  sellerDetails: {
    flex: 1,
  },
  sellerTitle: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  sellerSubtitle: {
    fontSize: 14,
    color: COLORS.blue,
    marginVertical: 4,
  },
  sellerSales: {
    fontSize: 12,
    color: COLORS.gray,
  },
  productFeatures: {
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 18,
    color: COLORS.text,
    marginBottom: 15,
  },
  featuresList: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  featureItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  featureText: {
    fontSize: 14,
    color: COLORS.text,
  },
  seeMoreButton: {
    marginTop: 15,
  },
  seeMoreText: {
    color: COLORS.blue,
    fontSize: 14,
  },
  bottomButtons: {
    padding: 15,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    flexDirection: 'row',
  },
  cartButton: {
    flex: 1,
    backgroundColor: '#E3EDFB',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  cartButtonText: {
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    flex: 1,
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

