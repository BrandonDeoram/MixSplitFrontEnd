import Image, { StaticImageData } from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import saasImage from '../../public/saasimage.jpg'
interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: StaticImageData
  imageAlt: string
  reverse?: boolean
}

function FeatureSection({ title, description, imageSrc, imageAlt, reverse = false }: FeatureSectionProps) {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 p-0`}>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full h-64 md:h-80 relative">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg border border-border"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16 md:space-y-24">
      <FeatureSection 
        title="Insert Link"
        description="With every keystroke, our AI produces multiple high-quality suggestions with incredibly low latencies so that you can just 'tab-complete' forward."
        imageSrc={saasImage}
        imageAlt="AI code completion demo"
      />

      <FeatureSection 
        title="Only AI code assistant with in-line FIM"
        description="Greatly improve the accuracy of your code completion suggestions by providing context to the model that would otherwise be missing."
        imageSrc={saasImage}
        imageAlt="In-line FIM demo"
        reverse={true}
      />

      <FeatureSection 
        title="Figure out how to work with new APIs"
        description="Spend less time looking at API documentation, more time building. Codeium reduces the friction of working with a new API"
        imageSrc={saasImage}
        imageAlt="Code editor interface showing API-related code"
      />
    </div>
  )
}