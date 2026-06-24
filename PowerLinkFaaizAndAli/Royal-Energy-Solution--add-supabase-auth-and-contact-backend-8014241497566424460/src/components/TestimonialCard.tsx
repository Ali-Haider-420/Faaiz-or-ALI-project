
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
}

const TestimonialCard = ({ quote, name, position }: TestimonialCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4">
          <svg
            className="h-8 w-8 text-royal-yellow"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391C14.017 10.56 16.418 8 19.658 8V10c-1.22 0-2.196.978-2.196 2.196v8.804h-3.445zm-9 0v-7.391C5.017 10.56 7.418 8 10.658 8V10c-1.22 0-2.196.978-2.196 2.196v8.804H5.017z" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div>
          <p className="font-semibold text-royal-blue">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
