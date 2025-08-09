import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const EMAIL = 'hello@example.com';
const PHONE = '+1-555-0123';

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={{ marginBottom: 12 }}>
        <Card.Title title="Get in touch" />
        <Card.Content>
          <Text style={{ marginBottom: 12 }}>
            Have a project in mind? Let's talk about how we can help.
          </Text>
          <Button mode="contained" style={{ marginBottom: 8 }} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
            Email Us
          </Button>
          <Button mode="outlined" onPress={() => Linking.openURL(`tel:${PHONE}`)}>
            Call {PHONE}
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}