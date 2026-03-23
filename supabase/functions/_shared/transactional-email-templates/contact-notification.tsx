import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "HealthRoop"

interface ContactNotificationProps {
  fullName?: string
  email?: string
  phone?: string
  procedure?: string
  conditionDetails?: string
}

const ContactNotificationEmail = ({ fullName, email, phone, procedure, conditionDetails }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {fullName || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>You have received a new inquiry on {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Full Name</Text>
          <Text style={value}>{fullName || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || 'Not provided'}</Text>
          <Text style={label}>Procedure</Text>
          <Text style={value}>{procedure || 'Not specified'}</Text>
          <Text style={label}>Condition Details</Text>
          <Text style={value}>{conditionDetails || 'Not provided'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This is an automated notification from {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `New Contact Inquiry from ${data.fullName || 'a visitor'}`,
  to: 'healthroop@gmail.com',
  displayName: 'Contact form notification',
  previewData: { fullName: 'Jane Doe', email: 'jane@example.com', phone: '+919876543210', procedure: 'Dentistry', conditionDetails: 'I need a dental implant consultation.' },
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
