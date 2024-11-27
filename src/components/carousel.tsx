
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "Slide 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Slide 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Slide 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Slide 4" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Slide 5" },
]

export function BigImageCarousel() {
  return (
    <Carousel className="container pb-8 px-0 w-full mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="flex aspect-[2/1] items-center justify-center p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

