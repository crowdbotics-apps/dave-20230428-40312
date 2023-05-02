import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PetProfileEditor = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [microchip, setMicrochip] = useState('');
  const [license, setLicense] = useState('');
  const [spayed, setSpayed] = useState('');
  const [vaccination, setVaccination] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [medications, setMedications] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [feedingSchedule, setFeedingSchedule] = useState('');
  const [groomingSchedule, setGroomingSchedule] = useState('');
  const [vetName, setVetName] = useState('');
  const [vetContact, setVetContact] = useState('');
  const [vetAddress, setVetAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [insurance, setInsurance] = useState('');
  const [adoptionDate, setAdoptionDate] = useState('');
  const [adoptionLocation, setAdoptionLocation] = useState('');
  const [pedigree, setPedigree] = useState('');
  const [training, setTraining] = useState('');
  const [exercise, setExercise] = useState('');
  const [toys, setToys] = useState('');
  const [sleepingHabits, setSleepingHabits] = useState('');
  const [behavior, setBehavior] = useState('');
  const [socialization, setSocialization] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');
  const [playPreferences, setPlayPreferences] = useState('');
  const [rewardPreferences, setRewardPreferences] = useState('');
  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState('');
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pet Profile Editor</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Basic Information</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Pet Name" value={petName} onChangeText={setPetName} />
          <TextInput style={styles.input} placeholder="Pet Type" value={petType} onChangeText={setPetType} />
          <TextInput style={styles.input} placeholder="Breed" value={breed} onChangeText={setBreed} />
          <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
          <TextInput style={styles.input} placeholder="Date of Birth/Age" value={dob} onChangeText={setDob} />
          <TextInput style={styles.input} placeholder="Weight" value={weight} onChangeText={setWeight} />
          <TextInput style={styles.input} placeholder="Color" value={color} onChangeText={setColor} />
          <TextInput style={styles.input} placeholder="Microchip Number" value={microchip} onChangeText={setMicrochip} />
          <TextInput style={styles.input} placeholder="License/Registration Number" value={license} onChangeText={setLicense} />
          <TextInput style={styles.input} placeholder="Spayed/Neutered Status" value={spayed} onChangeText={setSpayed} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Medical Information</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Vaccination Records" value={vaccination} onChangeText={setVaccination} />
          <TextInput style={styles.input} placeholder="Allergies" value={allergies} onChangeText={setAllergies} />
          <TextInput style={styles.input} placeholder="Medical Conditions" value={medicalConditions} onChangeText={setMedicalConditions} />
          <TextInput style={styles.input} placeholder="Medications" value={medications} onChangeText={setMedications} />
          <TextInput style={styles.input} placeholder="Dietary Requirements" value={dietaryRequirements} onChangeText={setDietaryRequirements} />
          <TextInput style={styles.input} placeholder="Feeding Schedule" value={feedingSchedule} onChangeText={setFeedingSchedule} />
          <TextInput style={styles.input} placeholder="Grooming Schedule" value={groomingSchedule} onChangeText={setGroomingSchedule} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Veterinarian Information</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Veterinarian Name" value={vetName} onChangeText={setVetName} />
          <TextInput style={styles.input} placeholder="Veterinarian Contact" value={vetContact} onChangeText={setVetContact} />
          <TextInput style={styles.input} placeholder="Veterinarian Address" value={vetAddress} onChangeText={setVetAddress} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Other Information</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Emergency Contact Information" value={emergencyContact} onChangeText={setEmergencyContact} />
          <TextInput style={styles.input} placeholder="Insurance Policy Details" value={insurance} onChangeText={setInsurance} />
          <TextInput style={styles.input} placeholder="Adoption/Purchase Date" value={adoptionDate} onChangeText={setAdoptionDate} />
          <TextInput style={styles.input} placeholder="Adoption/Purchase Location" value={adoptionLocation} onChangeText={setAdoptionLocation} />
          <TextInput style={styles.input} placeholder="Pedigree Information" value={pedigree} onChangeText={setPedigree} />
          <TextInput style={styles.input} placeholder="Training" value={training} onChangeText={setTraining} />
          <TextInput style={styles.input} placeholder="Exercise Requirements" value={exercise} onChangeText={setExercise} />
          <TextInput style={styles.input} placeholder="Favorite Toys" value={toys} onChangeText={setToys} />
          <TextInput style={styles.input} placeholder="Sleeping Habits" value={sleepingHabits} onChangeText={setSleepingHabits} />
          <TextInput style={styles.input} placeholder="Behavioral Traits" value={behavior} onChangeText={setBehavior} />
          <TextInput style={styles.input} placeholder="Socialization" value={socialization} onChangeText={setSocialization} />
          <TextInput style={styles.input} placeholder="Special Needs" value={specialNeeds} onChangeText={setSpecialNeeds} />
          <TextInput style={styles.input} placeholder="Play Preferences" value={playPreferences} onChangeText={setPlayPreferences} />
          <TextInput style={styles.input} placeholder="Reward Preferences" value={rewardPreferences} onChangeText={setRewardPreferences} />
          <View style={styles.photoContainer}>
            {photos.map((photo, index) => <Image key={index} source={{
            uri: photo
          }} style={styles.photo} />)}
          </View>
          <TextInput style={styles.input} placeholder="Notes" value={notes} onChangeText={setNotes} multiline />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  input: {
    width: '48%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  photo: {
    width: '30%',
    height: 100,
    marginBottom: 10,
    borderRadius: 5
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
export default PetProfileEditor;