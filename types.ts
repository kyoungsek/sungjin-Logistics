
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}