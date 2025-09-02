import React from 'react';

type ContactInfoProps = {
  title: string;
  contactValue: string;
  link?: string;
  onClick?: () => void;
  isButton?: boolean;
};

export const ContactInfo = ({
  title,
  contactValue,
  link,
  onClick,
  isButton,
}: ContactInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg select-none">•</span>
      <span className="font-semibold text-base">{title}</span>
      {isButton ? (
        <button
          type="button"
          onClick={onClick}
          className="underline text-sm hover:text-primary"
        >
          {contactValue}
        </button>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm hover:text-primary"
        >
          {contactValue}
        </a>
      ) : (
        <span className="text-sm">{contactValue}</span>
      )}
    </div>
  );
};

export default ContactInfo;
