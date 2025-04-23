import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
        />
        <Text style={styles.name}>Davi</Text>
        <Text style={styles.course}>Engenharia de Software</Text>
        <Text style={styles.semester}>5º Período</Text>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>Sobre Mim</Text>
        <Text style={styles.bioText}>
          Sou um estudante de Engenharia de Software apaixonado por desenvolvimento mobile.
          Este projeto foi desenvolvido como parte das atividades práticas da disciplina
          de Desenvolvimento de Dispositivos Móveis, utilizando React Native e Expo Router.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  course: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  semester: {
    fontSize: 16,
    color: '#666',
  },
  bioContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 