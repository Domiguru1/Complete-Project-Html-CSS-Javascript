import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import type { ServicesStackParamList } from '../navigation/RootNavigator';

export default function ServicesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ServicesStackParamList>>();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 12 }}>
        All Services
      </Text>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id })}
        />)
      )}
    </ScrollView>
  );
}