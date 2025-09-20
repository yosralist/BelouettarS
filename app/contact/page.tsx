import ContactPageClient from 'components/ContactPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact – Data & Decisions',
    description: 'Get in touch to turn data into decisions.',
};

export default function Page() {
    return <ContactPageClient />;
}
