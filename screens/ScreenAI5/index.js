import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const IoTDeviceScreen = () => {
  const [devices, setDevices] = useState([{
    id: 1,
    name: 'Smart Bulb',
    image: require('../assets/smart-bulb.jpg'),
    status: 'on'
  }, {
    id: 2,
    name: 'Smart Thermostat',
    image: require('../assets/smart-thermostat.jpg'),
    status: 'off'
  }, {
    id: 3,
    name: 'Smart Lock',
    image: require('../assets/smart-lock.jpg'),
    status: 'locked'
  }, {
    id: 4,
    name: 'Smart Speaker',
    image: require('../assets/smart-speaker.jpg'),
    status: 'playing'
  }]);

  const toggleDeviceStatus = id => {
    setDevices(devices.map(device => {
      if (device.id === id) {
        return { ...device,
          status: device.status === 'on' ? 'off' : 'on'
        };
      }

      return device;
    }));
  };

  return <View style={styles.container}>
      {devices.map(device => <TouchableOpacity key={device.id} style={styles.deviceContainer} onPress={() => toggleDeviceStatus(device.id)}>
          <Image source={require("./apple-pie-1200-square-592-2.jpg")} style={styles.deviceImage} />
          <Text style={styles.deviceName}>{device.name}</Text>
          <Text style={styles.deviceStatus}>{device.status}</Text>
        </TouchableOpacity>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  deviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1
  },
  deviceStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888'
  }
});
export default IoTDeviceScreen;