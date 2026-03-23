import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "HealthRoop"

interface PartnerNotificationProps {
  fullName?: string
  email?: string
  phone?: string
  phoneCode?: string
  partnerType?: string
  country?: string
}

const PartnerNotificationEmail = ({ fullName, email, phone, phoneCode, partnerType, country }: PartnerNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New partner application from {fullName || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Partner Application</Heading>
        <Text style={text}>A new partner registration has been submitted on {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Full Name</Text>
          <Text style={value}>{fullName || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phoneCode ? `${phoneCode} ` : ''}{phone || '—'}</Text>
          <Text style={label}>Partner Type</Text>
          <Text style={value}>{partnerType || '—'}</Text>
          <Text style={label}>Country</Text>
          <Text style={value}>{country || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This is an automated notification from {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: PartnerNotificationEmail,
  subject: (data: Record<string, any>) => `New Partner Application from ${data.fullName || 'a visitor'}`,
  to: 'healthroop@gmail.com',
  displayName: 'Partner application notification',
  previewData: { fullName: 'John Smith', email: 'john@example.com', phone: '9876543210', phoneCode: '+91', partnerType: 'individual', country: 'India' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '30px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1a2e', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const detailSection = { margin: '0' }
const label = { fontSize: '12px', color: '#6b7280', margin: '0 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }
const value = { fontSize: '15px', color: '#1a1a2e', margin: '0 0 14px', fontWeight: '500' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
