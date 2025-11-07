import React from 'react';
import { Twitter, Linkedin, Link as LinkIcon, MessageCircle } from 'lucide-react';

const ShareBar = ({ url }) => {
  const encoded = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodeURIComponent('Check out my SkillX profile!')}`,
      Icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      Icon: Linkedin,
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encoded}`,
      Icon: MessageCircle,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    } catch {
      alert('Unable to copy link');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {shareLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
            {name}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          <LinkIcon className="h-4 w-4" /> Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareBar;
