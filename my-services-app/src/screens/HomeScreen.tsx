import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { services } from '../data/services';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ServicesStackParamList } from '../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ServicesStackParamList>>();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={{ marginBottom: 16 }}>
        <Card.Content>
          <Text variant="headlineLarge" style={{ fontWeight: '700', marginBottom: 8 }}>
            Your Tech Partner
          </Text>
          <Text variant="bodyMedium" style={{ marginBottom: 16 }}>
            We build modern websites, mobile apps, and data-driven solutions. Design, development, and strategy in one place.
          </Text>
          <Button mode="contained" onPress={() => navigation.navigate('Services')}>
            Explore Services
          </Button>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={{ marginBottom: 8 }}>
        Featured Services
      </Text>

      {services.slice(0, 3).map((service) => (
        <Card key={service.id} style={{ marginBottom: 12 }} onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id })}>
          <Card.Title title={service.title} subtitle={service.tags.join(' • ')} />
          <Card.Content>
            <Text>{service.description}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}