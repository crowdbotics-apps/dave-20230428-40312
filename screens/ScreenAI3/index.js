import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileEditor = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.');
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.profile}>
        <Image source={{
        uri: 'https://via.placeholder.com/150'
      }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
        <Text style={styles.label}>Bio</Text>
        <TextInput style={styles.input} value={bio} onChangeText={setBio} multiline={true} numberOfLines={4} />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  editButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  form: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ProfileEditor;