'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export const ContactSection = () => {
  const t = useTranslations('contact');
  const [open, setOpen] = useState(false);

  return (
    <section id="contact">
      <div className="container mx-auto max-w-5xl">
        <div className="border-x border-primary/10">
          <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-semibold tracking-tight text-3xl lg:text-4xl">
                {t('title')}
              </h2>
              <p className="mt-2 text-muted-foreground">{t('subtitle')}</p>
            </div>
            <div className="flex flex-col gap-4">
              <ContactInfo
                title={t('email.title')}
                contactValue="hnnhat67@gmail.com"
                onClick={() => setOpen(true)}
                isButton
              />
              <ContactInfo
                title={t('phone.title')}
                contactValue="+33 7 69 57 74 67"
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>{t('email.title')}</DialogTitle>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
