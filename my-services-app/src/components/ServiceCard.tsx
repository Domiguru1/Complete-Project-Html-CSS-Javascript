import React from 'react';
import { Card, Text, Icon } from 'react-native-paper';
import { Pressable } from 'react-native';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  features?: string[];
  stack?: string[];
};

export default function ServiceCard({ service, onPress }: { service: Service; onPress: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <Card style={{ marginBottom: 12 }}>
        <Card.Title
          title={service.title}
          subtitle={service.tags.join(' • ')}
          left={() => <Icon source={service.icon as any} size={28} />}
        />
        <Card.Content>
          <Text>{service.description}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
}