// src/components/ServiceCard.tsx

import Image from 'next/image';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => {
  return (
    // Added 'group' for hover effects and hover:-translate-y-1 for the lift effect
    <Card className="flex flex-col h-full bg-white shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* 1. IMAGE CONTAINER: No more CardHeader, so no more top padding */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          // 2. IMAGE HOVER EFFECT: The image will zoom on hover
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* 3. CONTENT CONTAINER: A simple div with padding for the text */}
      <div className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl font-bold text-royal-blue mb-3">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </div>
    </Card>
  );
};

export default ServiceCard;