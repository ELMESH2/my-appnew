import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Área da foto de perfil */}
      <View style={styles.photoContainer}>
        <Image
          source={require('./assets/fotos/esfiha.jpg')} // Substitua por sua imagem
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editPhotoButton}>
          <Ionicons name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Nome do usuário */}
      <Text style={styles.name}>Gabriel Rodrigues</Text>
      <Text style={styles.username}>@gabriel.rod</Text>

      {/* Informações do perfil */}
      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Ionicons name="mail" size={18} color="#E65100" />
          <Text style={styles.infoText}>gabrod1997@email.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="call" size={18} color="#E65100" />
          <Text style={styles.infoText}>(21) 91234-5678</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="location" size={18} color="#E65100" />
          <Text style={styles.infoText}>Rio de Janeiro, RJ</Text>
        </View>
      </View>

      {/* Botão de editar perfil */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botão de sair */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#E65100',
  },
  editPhotoButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#E65100',
    borderRadius: 20,
    padding: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#E65100',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#A33',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
