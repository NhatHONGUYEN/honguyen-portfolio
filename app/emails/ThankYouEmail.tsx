import * as React from 'react';
import {
  Html,
  Body,
  Text,
  Heading,
  Section,
  Hr,
} from '@react-email/components';

type ThankYouEmailProps = {
  name: string;
  language?: 'fr' | 'en';
};

export default function ThankYouEmail({
  name,
  language = 'fr',
}: ThankYouEmailProps) {
  return (
    <Html
      style={{
        backgroundColor: '#f6f6f6',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      <Body
        style={{
          backgroundColor: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: 24,
          maxWidth: 600,
          margin: '40px auto',
        }}
      >
        {(language === 'fr' || !language) && (
          <>
            <Heading
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Merci pour votre message
            </Heading>
            <Section>
              <Text style={{ fontSize: 16, marginBottom: 8 }}>
                Bonjour {name},
              </Text>
              <Text style={{ fontSize: 16, marginBottom: 8 }}>
                Je vous remercie d&apos;avoir pris le temps de me contacter via
                mon portfolio. Votre message est important pour moi et je vais y
                répondre dès que possible.
              </Text>
              <Text style={{ fontSize: 16 }}>
                Je m&apos;engage à vous répondre sous 24 à 48 heures ouvrables.
              </Text>
            </Section>
          </>
        )}

        {(language === 'en' || !language) && (
          <>
            <Heading
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Thank you for your message
            </Heading>
            <Section>
              <Text style={{ fontSize: 16, marginBottom: 8 }}>
                Hello {name},
              </Text>
              <Text style={{ fontSize: 16, marginBottom: 8 }}>
                Thank you for reaching out through my portfolio. Your message is
                important to me and I will reply as soon as possible.
              </Text>
              <Text style={{ fontSize: 16 }}>
                I aim to respond within 24 to 48 business hours.
              </Text>
            </Section>
          </>
        )}

        <Hr
          style={{
            margin: '24px 0',
            border: 0,
            borderTop: '1px solid #e5e7eb',
          }}
        />

        <Section>
          <Text style={{ fontSize: 15 }}>
            {language === 'fr' ? 'Cordialement,' : 'Best regards,'}
            <br />
            Nhat-Quan HO NGUYEN
          </Text>
        </Section>
      </Body>
    </Html>
  );
}
