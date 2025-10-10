import { useState } from "react";
import { ChevronDown, AlertTriangle, Wrench, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DiagnosticPanelProps {
  issue: string;
  description: string;
  urgency: string;
  mistakes: string[];
  checklist: string[];
  safeToDo: string[];
  isOpen: boolean;
  onClick: () => void;
}

const DiagnosticPanel = ({ issue, description, urgency, mistakes, checklist, safeToDo, isOpen, onClick }: DiagnosticPanelProps) => {
  return (
    <Card className="mb-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
      <CardContent className="p-0">
        <button
          onClick={onClick}
          className="w-full p-4 sm:p-6 text-left hover:bg-muted/20 transition-colors"
        >
          <div className="flex items-start justify-between gap-3 w-full">
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-foreground text-sm sm:text-base leading-tight block break-words">{issue}</span>
            </div>
            <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform mt-0.5 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
        
        {isOpen && (
          <div className="px-6 pb-6 space-y-6 animate-fade-in">
            <div>
              <h4 className="flex items-center text-primary font-semibold mb-2">
                <Wrench className="h-4 w-4 mr-2" />
                What Might Be Happening
              </h4>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <div>
              <h4 className="flex items-center text-accent font-semibold mb-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Why It's Urgent
              </h4>
              <p className="text-muted-foreground">{urgency}</p>
            </div>

            <div>
              <h4 className="flex items-center text-destructive font-semibold mb-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Common DIY Mistakes
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {mistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-secondary font-semibold mb-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Quick Home Checklist (No Tools Needed)
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {checklist.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-primary font-semibold mb-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                What You Can Safely Do Now
              </h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {safeToDo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-foreground mb-3 text-base sm:text-lg">About the Cost:</h4>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                "Costs vary depending on the issue. Call now for a free expert diagnosis over the phone."
              </p>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-xs sm:text-sm md:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => window.open('tel:+19513794799')}
              >
                <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-normal break-words leading-tight">Speak to a Certified Tech Now</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const DiagnosticTool = () => {
  const [openPanel, setOpenPanel] = useState<number | null>(null);

  const diagnosticIssues = [
    {
      issue: "Garage door won't close all the way",
      description: "This usually indicates misaligned sensors, an obstruction in the track, or worn weather stripping creating resistance.",
      urgency: "Leaving your garage partially open compromises security and allows weather, pests, and intruders easy access to your home.",
      mistakes: [
        "Forcing the door down manually",
        "Adjusting sensors without proper knowledge",
        "Ignoring blinking lights on the opener"
      ],
      checklist: [
        "Check for objects blocking the door's path",
        "Look at sensor lights (should be solid, not blinking)",
        "Examine weather stripping for damage or debris"
      ],
      safeToDo: [
        "Clear any visible obstructions",
        "Gently clean sensor lenses with a soft cloth",
        "Use emergency release cord if needed"
      ]
    },
    {
      issue: "Remote stopped working suddenly",
      description: "Remote control issues can stem from dead batteries, signal interference, or a programming problem with the opener unit.",
      urgency: "You may be locked out of your garage, affecting your daily routine and potentially leaving your car stranded outside.",
      mistakes: [
        "Pressing buttons repeatedly (can cause programming issues)",
        "Not checking obvious battery issues first",
        "Attempting to reprogram without instructions"
      ],
      checklist: [
        "Test if wall button works",
        "Check battery level in remote",
        "Look for LED light on opener when pressing remote"
      ],
      safeToDo: [
        "Replace remote batteries",
        "Try manual release cord to open door",
        "Test from different distances"
      ]
    },
    {
      issue: "Garage door is off track",
      description: "A door coming off its tracks is a serious mechanical failure that can cause the entire door to fall or become completely inoperable.",
      urgency: "This is an emergency situation that could result in property damage, injury, or complete door failure if not addressed immediately.",
      mistakes: [
        "Attempting to force the door back on track",
        "Continuing to use the opener",
        "Trying to lift the door manually"
      ],
      checklist: [
        "Stop using the door immediately",
        "Look for visible gaps between rollers and tracks",
        "Check for bent or damaged track sections"
      ],
      safeToDo: [
        "Disconnect the opener (use emergency release)",
        "Do not attempt any repairs yourself",
        "Clear the area of people and vehicles"
      ]
    },
    {
      issue: "Spring broke with loud bang",
      description: "Torsion springs are under extreme tension and when they break, they can cause serious injury and make your door inoperable.",
      urgency: "A broken spring makes your door extremely heavy and dangerous to operate. Immediate professional help is essential for safety.",
      mistakes: [
        "Trying to open the door with the opener",
        "Attempting to replace springs yourself",
        "Ignoring the problem and continuing to use the door"
      ],
      checklist: [
        "Look for a gap in the spring above the door",
        "Check if door feels extremely heavy",
        "Listen for unusual grinding or scraping noises"
      ],
      safeToDo: [
        "Disconnect the automatic opener immediately",
        "Do not attempt to lift the door",
        "Keep family members away from the door"
      ]
    },
    {
      issue: "Door only lifts on one side",
      description: "This indicates a broken cable, spring imbalance, or track misalignment that causes uneven lifting and potential binding.",
      urgency: "Continued use can cause permanent damage to the door, tracks, and opener, resulting in costly repairs or replacement.",
      mistakes: [
        "Continuing to operate the opener",
        "Trying to manually balance the door",
        "Forcing the door to close"
      ],
      checklist: [
        "Check if cables are intact on both sides",
        "Look for gaps in springs",
        "Observe if one side lifts faster than the other"
      ],
      safeToDo: [
        "Stop using the door immediately",
        "Disconnect the opener",
        "Support the door if it's partially open"
      ]
    },
    {
      issue: "Grinding noise when opening",
      description: "Grinding noises indicate worn rollers, dry tracks, or mechanical components that need lubrication or replacement.",
      urgency: "Ignoring these sounds can lead to complete mechanical failure and much more expensive repairs down the road.",
      mistakes: [
        "Using wrong type of lubricant",
        "Over-lubricating components",
        "Ignoring the noise hoping it goes away"
      ],
      checklist: [
        "Listen to identify where noise is coming from",
        "Check if rollers appear worn or damaged",
        "Look for metal shavings near tracks"
      ],
      safeToDo: [
        "Stop using door until diagnosed",
        "Do not attempt to lubricate without professional advice",
        "Document when noise occurs (opening, closing, or both)"
      ]
    },
    {
      issue: "Need a new garage door quote",
      description: "Whether you're dealing with an old door that needs replacement or want to upgrade, proper sizing and installation is crucial.",
      urgency: "Old or damaged doors compromise security, energy efficiency, and curb appeal while potentially costing more in repairs than replacement.",
      mistakes: [
        "Choosing based on price alone",
        "Not considering insulation needs",
        "Ignoring safety features"
      ],
      checklist: [
        "Measure your current opening",
        "Consider your home's architectural style",
        "Think about insulation requirements"
      ],
      safeToDo: [
        "Research different door types",
        "Consider energy efficiency ratings",
        "Ask about warranty options"
      ]
    }
  ];

  return (
    <>
      <section id="diagnostic-tool" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Click Your Issue Below
            </h2>
            <p className="text-xl text-muted-foreground">
              Get instant expert guidance for your garage door problem
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {diagnosticIssues.map((issue, index) => (
              <DiagnosticPanel
                key={index}
                issue={issue.issue}
                description={issue.description}
                urgency={issue.urgency}
                mistakes={issue.mistakes}
                checklist={issue.checklist}
                safeToDo={issue.safeToDo}
                isOpen={openPanel === index}
                onClick={() => setOpenPanel(openPanel === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common garage door questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Why won't my garage door close all the way?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This usually indicates misaligned sensors, an obstruction in the track, or worn weather stripping creating resistance. Check for objects blocking the door's path, look at sensor lights (should be solid, not blinking), and examine weather stripping for damage or debris. If the problem persists, call a professional for proper diagnosis.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What should I do if my garage door remote stopped working?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                First check if the wall button works, then replace remote batteries. Test from different distances and look for LED light on opener when pressing remote. If the wall button works but remote doesn't, it's likely a battery or programming issue. Avoid pressing buttons repeatedly as this can cause programming problems.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Is a broken garage door spring dangerous?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, torsion springs are under extreme tension and can cause serious injury. If you hear a loud bang and the door becomes extremely heavy, disconnect the automatic opener immediately and do not attempt to lift the door yourself. Keep family members away from the door and call a professional immediately.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                How much does garage door repair cost?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Costs vary depending on the issue. Simple repairs like sensor alignment might cost $100-200, while spring replacement typically ranges from $200-400. We offer free expert diagnosis over the phone to give you honest, upfront pricing with no surprises. Call now for a detailed quote.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                How long does garage door repair take?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most repairs take 1-2 hours. Emergency repairs are available within 2 hours for urgent issues. Simple fixes like remote programming or sensor alignment can be completed in 30 minutes, while spring replacement or track repair may take 2-3 hours. We provide same-day service for most issues.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Can I repair my garage door myself?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                While some simple tasks like replacing remote batteries or cleaning sensors are safe, most garage door repairs require professional expertise. Springs are under extreme tension and can be dangerous. Attempting DIY repairs can void warranties and potentially cause injury. Always consult a professional for safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};