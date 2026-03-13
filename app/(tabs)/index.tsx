import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* SECTION FOTO */}
    <Image
    source={require('../../assets/images/manisha.jpeg')}
    style={styles.profilePic}
    />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Manisha Rajs Kaur</Text>
      <Text style={styles.nim}>NIM: 243303620221</Text>
      <Text style={styles.jurusan}>Jurusan: Sistem Informasi</Text>

      {/* SECTION QUOTE */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          "Jangan takut mencoba hal baru, karena setiap langkah kecil hari ini membawa kita lebih dekat ke masa depan yang besar."
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#a855f7',
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4c1d95',
  },

  nim: {
    fontSize: 16,
    color: '#431d8e',
    marginBottom: 5,
  },

  jurusan: {
    fontSize: 16,
    color: '#6b21a8',
    marginBottom: 20,
  },

  bioCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
  },

  bioText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#444',
  },
});