import * as React from 'react';
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Hr,
} from '@react-email/components';

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
  language?: 'fr' | 'en';
};

export default function ContactNotification({
  name,
  email,
  message,
  language = 'fr',
}: ContactEmailProps) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: '#f6f6f6',
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: 600,
            margin: '40px auto',
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            padding: 24,
          }}
        >
          <Heading
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: 16,
              marginTop: 0,
            }}
          >
            {language === 'fr'
              ? 'Nouveau message de contact'
              : 'New contact message'}
          </Heading>
          <Section>
            <Text style={{ fontSize: 15, marginBottom: 12 }}>
              {language === 'fr'
                ? 'Vous avez reçu un nouveau message via votre portfolio.'
                : 'You have received a new message through your portfolio.'}
            </Text>
            <Text style={{ fontSize: 15, marginBottom: 4 }}>
              {language === 'fr' ? 'Expéditeur' : 'From'}: {name}
            </Text>
            <Text style={{ fontSize: 15, marginBottom: 4 }}>
              Email: {email}
            </Text>
          </Section>
          <Hr
            style={{
              margin: '24px 0',
              border: 0,
              borderTop: '1px solid #e5e7eb',
            }}
          />
          <Section>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 4 }}>
              {language === 'fr' ? 'Message' : 'Message'}:
            </Text>
            <Text
              style={{
                background: '#f9fafb',
                padding: 12,
                borderRadius: 6,
                fontSize: 15,
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              {message}
            </Text>
          </Section>
          <Hr
            style={{
              margin: '24px 0',
              border: 0,
              borderTop: '1px solid #e5e7eb',
            }}
          />
          <Section>
            <Text style={{ fontSize: 13, color: '#666' }}>
              {language === 'fr'
                ? 'Pour répondre, utilisez la fonction "Répondre" de votre messagerie.'
                : 'To reply, use the "Reply" function in your email client.'}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
