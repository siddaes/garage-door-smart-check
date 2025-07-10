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
          className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
        >
          <span className="text-lg font-semibold text-foreground">{issue}</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">About the Cost:</h4>
              <p className="text-muted-foreground mb-4">
                "Costs vary depending on the issue. Call now for a free expert diagnosis over the phone."
              </p>
              
              <Button 
                className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-bold"
                onClick={() => window.open('tel:+1-800-GARAGE-1')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak to a Certified Tech Now
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
  );
};