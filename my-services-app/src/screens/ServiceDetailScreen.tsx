import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { ServicesStackParamList } from '../navigation/RootNavigator';
import { services } from '../data/services';

export default function ServiceDetailScreen() {
  const route = useRoute<RouteProp<ServicesStackParamList, 'ServiceDetail'>>();
  const service = useMemo(() => services.find((s) => s.id === route.params.serviceId), [route.params.serviceId]);

  if (!service) {
    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text>Service not found.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Title title={service.title} subtitle={service.tags.join(' • ')} />
        <Card.Content>
          <Text style={{ marginBottom: 12 }}>{service.description}</Text>
          <Text variant="titleMedium" style={{ marginTop: 8, marginBottom: 8 }}>
            What we offer
          </Text>
          {service.features?.map((feature) => (
            <Text key={feature}>• {feature}</Text>
          ))}
          <Text variant="titleMedium" style={{ marginTop: 12, marginBottom: 8 }}>
            Tech stack
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {service.stack?.map((t) => (
              <Chip key={t} style={{ marginRight: 8, marginBottom: 8 }}>
                {t}
              </Chip>
            ))}
          </ScrollView>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}