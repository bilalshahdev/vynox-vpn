import HighlightText from "./highlight-text"
import { Button } from "./ui/button"

const Subscribe = () => {
  return (
    <div className="mx-4 p-8 flex flex-col md:flex-row justify-between gap-4 items-center max-w-screen-lg md:mx-auto rounded-lg shadow-lg bg-secondary">
      <div className="max-w-sm space-y-4">
      <HighlightText
            text="Subscribe Now To Get Special Features!"
            highlightWords={["Special", "Features!"]}
            className="text-2xl md:text-4xl font-bold leading-tigt"
          />
          <p className="text-muted-foreground">Let's subscribe with us and find the fun.</p>
      </div>
      <Button size={"lg"} variant={"signature"} className="font-semibold mr-auto md:mr-0">Subscribe Now</Button>
    </div>
  )
}

export default Subscribe
