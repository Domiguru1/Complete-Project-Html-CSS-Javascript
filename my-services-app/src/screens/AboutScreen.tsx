import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={{ marginBottom: 12 }}>
        <Card.Title title="About Us" />
        <Card.Content>
          <Text>
            We are a full-service technology studio delivering web, mobile, and data solutions. We blend strategy,
            design, and engineering to create products that delight users and drive results.
          </Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title title="Our Values" />
        <Card.Content>
          <Text>• Quality over shortcuts</Text>
          <Text>• Clear communication</Text>
          <Text>• Ship fast, learn faster</Text>
          <Text>• Long-term partnerships</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}