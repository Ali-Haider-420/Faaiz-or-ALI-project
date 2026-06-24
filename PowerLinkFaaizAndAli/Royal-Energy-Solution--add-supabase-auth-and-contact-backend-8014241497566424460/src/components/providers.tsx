// src/components/providers.tsx
"use client"; // This component uses client-side libraries, so we need this.

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// We create a new client instance
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children} 
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}