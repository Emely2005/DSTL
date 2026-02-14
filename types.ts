import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  logoUrl: string; // Using placeholders for this demo
}

export interface ProcessStep {
  title: string;
  description: string;
  stepNumber: string;
}