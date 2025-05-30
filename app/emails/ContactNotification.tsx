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
      <Body className="bg-white font-sans">
        <Container className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg">
          {/* Section française */}
          {(language === 'fr' || !language) && (
            <>
              <Heading className="text-xl font-bold text-blue-600">
                📨 Nouveau message de contact
              </Heading>
              <Section>
                <Text className="text-sm text-gray-500">
                  Vous avez reçu un nouveau message de contact via votre
                  portfolio.
                </Text>
                <Text className="font-medium mt-4">👤 Expéditeur: {name}</Text>
                <Text className="font-medium">📧 Email: {email}</Text>
              </Section>
              <Hr className="my-4 border-t border-gray-200" />
              <Section>
                <Text className="font-medium">💬 Message:</Text>
                <Text className="text-gray-700 bg-gray-50 p-3 rounded">
                  {message}
                </Text>
              </Section>
            </>
          )}

          {language === 'fr' && (
            <Hr className="my-4 border-t border-gray-200" />
          )}

          {/* Section anglaise */}
          {(language === 'en' || !language) && (
            <>
              <Heading className="text-xl font-bold text-blue-600">
                📨 New contact message
              </Heading>
              <Section>
                <Text className="text-sm text-gray-500">
                  You have received a new contact message through your
                  portfolio.
                </Text>
                <Text className="font-medium mt-4">👤 From: {name}</Text>
                <Text className="font-medium">📧 Email: {email}</Text>
              </Section>
              <Hr className="my-4 border-t border-gray-200" />
              <Section>
                <Text className="font-medium">💬 Message:</Text>
                <Text className="text-gray-700 bg-gray-50 p-3 rounded">
                  {message}
                </Text>
              </Section>
            </>
          )}

          <Hr className="my-4 border-t border-gray-200" />

          {/* Instructions */}
          <Section>
            {(language === 'fr' || !language) && (
              <Text className="text-sm text-gray-600">
                📝 FR: Pour répondre, utilisez simplement la fonction
                &ldquo;Répondre&rdquo; de votre client de messagerie.
              </Text>
            )}
            {(language === 'en' || !language) && (
              <Text className="text-sm text-gray-600">
                📝 EN: To reply, simply use the &ldquo;Reply&rdquo; function in
                your email client.
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
