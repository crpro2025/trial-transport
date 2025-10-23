// Training module content for drivers

import { TrainingModule } from './extended-types';

export const trainingModules: TrainingModule[] = [
  {
    id: 'hipaa-compliance',
    title: 'HIPAA Compliance for Medical Couriers',
    description: 'Essential training on protecting patient privacy and handling protected health information (PHI) during specimen transport.',
    category: 'hipaa',
    duration: 45,
    required: true,
    passingScore: 85,
    certificateIssued: true,
    content: [
      {
        id: 'hipaa-1',
        type: 'text',
        title: 'Introduction to HIPAA',
        order: 1,
        content: `
# HIPAA Compliance for Medical Couriers

## What is HIPAA?

The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that protects sensitive patient health information from being disclosed without the patient's consent or knowledge.

## Why It Matters for You

As a medical courier, you are a **Business Associate** under HIPAA. This means:
- You handle Protected Health Information (PHI)
- You must follow strict privacy and security rules
- Violations can result in fines up to $50,000 per violation
- Criminal penalties can include jail time

## Key Definitions

**Protected Health Information (PHI)**: Any information about health status, provision of health care, or payment for health care that can be linked to a specific individual.

**Business Associate**: A person or entity that performs certain functions or activities on behalf of a covered entity that involve PHI.
        `
      },
      {
        id: 'hipaa-2',
        type: 'text',
        title: 'Handling PHI During Transport',
        order: 2,
        content: `
# Handling PHI During Transport

## What You Can and Cannot Do

### ✅ DO:
- Keep all specimens and documents secure at all times
- Transport specimens in locked, temperature-controlled containers
- Verify recipient identity before delivery
- Obtain signatures for chain of custody
- Report any breaches immediately
- Keep delivery information confidential

### ❌ DON'T:
- Leave specimens unattended in your vehicle
- Discuss patient information with anyone
- Take photos of labels or documents containing PHI
- Share delivery details on social media
- Allow unauthorized access to specimens
- Discard documents without proper shredding

## Minimum Necessary Rule

Only access the minimum amount of PHI necessary to complete your job. You don't need to know:
- Patient names (use tracking numbers instead)
- Medical conditions
- Test results
- Treatment information
        `
      },
      {
        id: 'hipaa-3',
        type: 'text',
        title: 'Security Measures',
        order: 3,
        content: `
# Security Measures for Medical Couriers

## Physical Security

1. **Vehicle Security**
   - Lock your vehicle whenever unattended
   - Use trunk or locked compartment for specimens
   - Install temperature monitoring devices
   - Keep vehicle clean and organized

2. **Specimen Containers**
   - Use approved, sealed containers
   - Verify seals are intact before transport
   - Never open specimen containers
   - Report any damaged containers immediately

3. **Documentation**
   - Keep manifests in secure location
   - Don't leave paperwork visible in vehicle
   - Shred documents after delivery confirmation
   - Use digital signatures when possible

## Digital Security

1. **Mobile Devices**
   - Use strong passwords/biometric locks
   - Enable encryption on devices
   - Don't store PHI on personal devices
   - Log out of apps when not in use

2. **Communication**
   - Use secure messaging in the app
   - Don't text or email PHI
   - Verify recipient before sharing information
   - Use tracking numbers, not patient names

## Breach Response

If you suspect a breach:
1. Stop and secure remaining specimens
2. Report immediately through the app
3. Document what happened
4. Don't try to fix it yourself
5. Cooperate with investigation
        `
      },
      {
        id: 'hipaa-4',
        type: 'interactive',
        title: 'Scenario-Based Learning',
        order: 4,
        content: `
# Real-World Scenarios

## Scenario 1: The Curious Passenger
You're transporting specimens when a friend asks for a ride. They notice the cooler and ask what you're delivering.

**Correct Response**: "I'm delivering medical specimens, but I can't discuss any details due to privacy laws."

## Scenario 2: The Unlocked Vehicle
You need to make a quick stop at a gas station. The specimens are in a locked cooler in your trunk.

**Correct Response**: Lock your vehicle, even for brief stops. Never leave specimens unattended in an unlocked vehicle.

## Scenario 3: The Social Media Post
You complete a challenging delivery and want to share your accomplishment on social media.

**Correct Response**: You can share general information about your work, but never include: patient names, facility names, specimen types, or any identifying information.

## Scenario 4: The Damaged Label
During transport, you notice a specimen label has become partially unreadable due to condensation.

**Correct Response**: Do not attempt to rewrite or modify the label. Contact dispatch immediately and document the issue in the app.
        `
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does PHI stand for?',
        options: [
          'Personal Health Insurance',
          'Protected Health Information',
          'Private Hospital Information',
          'Patient Healthcare Identification'
        ],
        correctAnswer: 1,
        explanation: 'PHI stands for Protected Health Information - any health information that can be linked to a specific individual.'
      },
      {
        id: 'q2',
        question: 'As a medical courier, you are considered a:',
        options: [
          'Covered Entity',
          'Business Associate',
          'Healthcare Provider',
          'Independent Contractor'
        ],
        correctAnswer: 1,
        explanation: 'Medical couriers are Business Associates under HIPAA because they handle PHI on behalf of covered entities.'
      },
      {
        id: 'q3',
        question: 'What should you do if you need to make a quick stop during a delivery?',
        options: [
          'Leave the vehicle running with specimens inside',
          'Take the specimens with you',
          'Lock the vehicle and secure specimens',
          'Ask someone to watch your vehicle'
        ],
        correctAnswer: 2,
        explanation: 'Always lock your vehicle and ensure specimens are secured, even for brief stops.'
      },
      {
        id: 'q4',
        question: 'Can you discuss delivery details with family or friends?',
        options: [
          'Yes, if they promise not to tell anyone',
          'Yes, but only general information',
          'No, all delivery information is confidential',
          'Yes, after the delivery is complete'
        ],
        correctAnswer: 2,
        explanation: 'All delivery information is confidential and should not be discussed with anyone outside of authorized personnel.'
      },
      {
        id: 'q5',
        question: 'What is the maximum penalty per HIPAA violation?',
        options: [
          '$10,000',
          '$25,000',
          '$50,000',
          '$100,000'
        ],
        correctAnswer: 2,
        explanation: 'HIPAA violations can result in fines up to $50,000 per violation, plus potential criminal penalties.'
      }
    ]
  },
  {
    id: 'specimen-handling',
    title: 'Clinical Specimen Handling & Transport',
    description: 'Comprehensive training on proper handling, storage, and transport of various clinical specimens.',
    category: 'specimen_handling',
    duration: 60,
    required: true,
    passingScore: 85,
    certificateIssued: true,
    content: [
      {
        id: 'spec-1',
        type: 'text',
        title: 'Types of Clinical Specimens',
        order: 1,
        content: `
# Clinical Specimen Types

## Blood Specimens

**Whole Blood**: Must be kept at 2-8°C (refrigerated)
- Used for: Blood counts, blood typing, transfusion testing
- Stability: 24-48 hours when refrigerated
- Special handling: Gentle mixing, avoid hemolysis

**Serum/Plasma**: Refrigerated or frozen depending on test
- Used for: Chemistry panels, hormone tests, antibody tests
- Stability: Varies by test (24 hours to several days)
- Special handling: Must be separated from cells

**Frozen Blood Products**: -20°C to -80°C
- Used for: DNA testing, long-term storage
- Stability: Months to years when properly frozen
- Special handling: Avoid freeze-thaw cycles

## Tissue Specimens

**Fresh Tissue**: Refrigerated, 2-8°C
- Used for: Pathology, culture, research
- Stability: 24-48 hours
- Special handling: Keep moist, sterile container

**Frozen Tissue**: -80°C (cryogenic)
- Used for: Research, molecular testing
- Stability: Years when properly stored
- Special handling: Dry ice transport, avoid thawing

**Fixed Tissue**: Room temperature
- Used for: Pathology, histology
- Stability: Indefinite in formalin
- Special handling: Sealed containers, avoid leakage

## Urine Specimens

**Random Urine**: Refrigerated or room temperature
- Used for: Urinalysis, drug screening
- Stability: 2-8 hours at room temp, 24 hours refrigerated
- Special handling: Sealed container, proper labeling

**24-Hour Urine**: Refrigerated during collection
- Used for: Kidney function tests, hormone levels
- Stability: Must be kept cold throughout collection
- Special handling: Large volume, preservatives may be needed

## Other Specimens

**Saliva**: Room temperature or refrigerated
- Stability: Varies by test
- Special handling: Avoid contamination

**Stool**: Refrigerated
- Stability: 24-48 hours
- Special handling: Sealed container, biohazard precautions

**Cerebrospinal Fluid (CSF)**: Refrigerated or room temperature
- Stability: Process immediately
- Special handling: Urgent transport, sterile technique
        `
      },
      {
        id: 'spec-2',
        type: 'text',
        title: 'Temperature Control Requirements',
        order: 2,
        content: `
# Temperature Control Requirements

## Temperature Ranges

### Ambient (Room Temperature): 15-25°C (59-77°F)
**Specimens:**
- Fixed tissue samples
- Some urine specimens
- Certain swabs and cultures

**Requirements:**
- Protect from extreme heat/cold
- Avoid direct sunlight
- Monitor temperature during transport

### Refrigerated: 2-8°C (36-46°F)
**Specimens:**
- Whole blood
- Most serum/plasma
- Fresh tissue
- Most urine specimens
- Many body fluids

**Requirements:**
- Use insulated coolers with ice packs
- Monitor temperature continuously
- Avoid freezing
- Maintain cold chain

### Frozen: -20°C (-4°F)
**Specimens:**
- Frozen plasma
- Some research specimens
- Long-term storage samples

**Requirements:**
- Use dry ice or frozen gel packs
- Prevent thawing during transport
- Monitor temperature
- Quick transfer at delivery

### Cryogenic: -80°C (-112°F) or colder
**Specimens:**
- Frozen tissue
- DNA/RNA samples
- Cell cultures
- Specialized research specimens

**Requirements:**
- Dry ice transport (mandatory)
- Specialized containers
- Continuous monitoring
- Immediate transfer to -80°C freezer

## Temperature Monitoring

### Required Equipment:
1. **Digital Temperature Logger**
   - Records temperature every 1-5 minutes
   - Provides data for compliance
   - Alerts for excursions

2. **Backup Thermometer**
   - Manual verification
   - Calibrated regularly
   - Easy to read

3. **Temperature Indicators**
   - Visual confirmation
   - Irreversible indicators
   - Placed with specimens

### Monitoring Procedures:
1. Check temperature before loading specimens
2. Record initial temperature
3. Monitor during transport (every 30-60 minutes)
4. Document any excursions
5. Verify temperature at delivery
6. Provide temperature log to recipient

## Temperature Excursions

**What is an excursion?**
When specimen temperature goes outside acceptable range for more than 30 minutes.

**If an excursion occurs:**
1. Document exact time and temperature
2. Note duration of excursion
3. Report immediately through app
4. Do not discard specimen (unless instructed)
5. Let lab determine specimen viability
6. Complete incident report
        `
      },
      {
        id: 'spec-3',
        type: 'text',
        title: 'Packaging and Labeling',
        order: 3,
        content: `
# Proper Packaging and Labeling

## Triple Packaging System

### Layer 1: Primary Container
- Specimen in leak-proof container
- Properly sealed and labeled
- Absorbent material if liquid

### Layer 2: Secondary Container
- Leak-proof, watertight
- Contains primary container
- Additional absorbent material
- Biohazard label if required

### Layer 3: Outer Shipping Container
- Rigid, sturdy construction
- Temperature control (cooler/insulation)
- Proper labeling and documentation
- Cushioning material

## Required Labels

### Specimen Label (Primary Container)
- Patient identifier (NOT name)
- Specimen type
- Collection date and time
- Collector initials
- Barcode (if applicable)

### Biohazard Label (if applicable)
- Red/orange biohazard symbol
- "Biohazard" or "Infectious Substance"
- Visible on outer container

### Temperature Label
- "Keep Refrigerated" or "Keep Frozen"
- Temperature range
- "Do Not Freeze" (if applicable)

### Shipping Label
- Sender information
- Recipient information
- Tracking number
- "Clinical Specimens" or "Diagnostic Specimens"
- Orientation arrows ("This Side Up")

## Chain of Custody Documentation

### Required Information:
1. Specimen identifier
2. Collection date/time
3. Collector name
4. Relinquished by (name, signature, date/time)
5. Received by (name, signature, date/time)
6. Purpose of transfer
7. Any special conditions or observations

### Your Responsibilities:
- Verify all specimens match manifest
- Check container integrity
- Sign and date when receiving specimens
- Maintain custody at all times
- Obtain signature upon delivery
- Document any issues immediately

## Inspection Checklist

Before accepting specimens:
- [ ] All containers properly sealed
- [ ] Labels intact and readable
- [ ] No visible leaks or damage
- [ ] Correct temperature maintained
- [ ] Biohazard labels present (if needed)
- [ ] Documentation complete
- [ ] Manifest matches specimens
- [ ] Special instructions noted

If any issues found:
1. Do not accept specimens
2. Document the problem
3. Contact dispatch immediately
4. Take photos if safe to do so
5. Follow supervisor instructions
        `
      },
      {
        id: 'spec-4',
        type: 'text',
        title: 'Safety and Contamination Prevention',
        order: 4,
        content: `
# Safety and Contamination Prevention

## Personal Protective Equipment (PPE)

### Required PPE:
1. **Gloves**
   - Nitrile or latex
   - Change between specimens
   - Dispose properly

2. **Eye Protection**
   - Safety glasses or goggles
   - Especially when handling liquids
   - Clean regularly

3. **Lab Coat or Protective Clothing**
   - Fluid-resistant
   - Long sleeves
   - Launder separately

4. **Closed-Toe Shoes**
   - Non-slip soles
   - Fluid-resistant
   - No sandals or open-toe

### When to Use PPE:
- Loading/unloading specimens
- Inspecting containers
- Cleaning up spills
- Any direct specimen contact

## Spill Response

### Small Spill (< 10 mL):
1. Put on PPE immediately
2. Cover spill with absorbent material
3. Apply disinfectant (10% bleach solution)
4. Let sit for 10 minutes
5. Clean up with disposable materials
6. Dispose in biohazard bag
7. Wash hands thoroughly
8. Document incident

### Large Spill (> 10 mL):
1. Evacuate immediate area
2. Put on PPE
3. Contain spill (absorbent barriers)
4. Call for assistance
5. Do not attempt cleanup alone
6. Follow facility protocols
7. Complete incident report

## Preventing Contamination

### During Transport:
- Keep specimens upright
- Secure containers to prevent tipping
- Separate incompatible specimens
- Use secondary containment
- Avoid extreme temperatures
- Minimize handling

### Vehicle Hygiene:
- Clean and disinfect daily
- Dedicated specimen area
- No food/drink near specimens
- Regular deep cleaning
- Spill kit always available

## Biohazard Waste Disposal

### What is Biohazard Waste:
- Used gloves
- Contaminated absorbent materials
- Damaged specimen containers
- Spill cleanup materials
- Any material with blood/body fluids

### Proper Disposal:
1. Use red biohazard bags
2. Seal bags securely
3. Label with biohazard symbol
4. Follow facility disposal protocols
5. Never put in regular trash
6. Document disposal

## Hand Hygiene

### When to Wash Hands:
- Before putting on gloves
- After removing gloves
- After handling specimens
- Before eating or drinking
- After using restroom
- After cleaning up spills
- End of shift

### Proper Technique:
1. Wet hands with clean water
2. Apply soap
3. Lather for 20 seconds
4. Scrub all surfaces
5. Rinse thoroughly
6. Dry with clean towel
7. Use hand sanitizer if water unavailable
        `
      }
    ],
    quiz: [
      {
        id: 'sq1',
        question: 'What is the correct temperature range for refrigerated specimens?',
        options: [
          '0-4°C',
          '2-8°C',
          '4-10°C',
          '10-15°C'
        ],
        correctAnswer: 1,
        explanation: 'Refrigerated specimens must be kept at 2-8°C (36-46°F) to maintain specimen integrity.'
      },
      {
        id: 'sq2',
        question: 'What should you do if you notice a temperature excursion during transport?',
        options: [
          'Discard the specimen immediately',
          'Continue delivery without reporting',
          'Document and report immediately through the app',
          'Try to correct the temperature and continue'
        ],
        correctAnswer: 2,
        explanation: 'Temperature excursions must be documented and reported immediately. The lab will determine specimen viability.'
      },
      {
        id: 'sq3',
        question: 'How many layers are required in the triple packaging system?',
        options: [
          'Two layers',
          'Three layers',
          'Four layers',
          'Five layers'
        ],
        correctAnswer: 1,
        explanation: 'The triple packaging system requires three layers: primary container, secondary container, and outer shipping container.'
      },
      {
        id: 'sq4',
        question: 'What temperature is required for cryogenic specimens?',
        options: [
          '-20°C or colder',
          '-40°C or colder',
          '-60°C or colder',
          '-80°C or colder'
        ],
        correctAnswer: 3,
        explanation: 'Cryogenic specimens require -80°C (-112°F) or colder, typically transported with dry ice.'
      },
      {
        id: 'sq5',
        question: 'What should you do if you find a damaged container during pickup?',
        options: [
          'Accept it and report later',
          'Refuse the specimen and document the issue',
          'Try to repair the container',
          'Transfer to a new container yourself'
        ],
        correctAnswer: 1,
        explanation: 'Do not accept damaged containers. Document the problem, contact dispatch, and follow supervisor instructions.'
      }
    ]
  },
  {
    id: 'temperature-control',
    title: 'Advanced Temperature Control & Monitoring',
    description: 'Detailed training on temperature control equipment, monitoring systems, and maintaining the cold chain.',
    category: 'temperature_control',
    duration: 40,
    required: true,
    passingScore: 85,
    certificateIssued: true,
    content: [
      {
        id: 'temp-1',
        type: 'text',
        title: 'Temperature Control Equipment',
        order: 1,
        content: `
# Temperature Control Equipment

## Types of Cooling Equipment

### 1. Insulated Coolers with Ice Packs
**Best for:** Refrigerated specimens (2-8°C)
**Duration:** 4-8 hours
**Pros:** Affordable, reusable, reliable
**Cons:** Limited duration, requires preparation

**Best Practices:**
- Pre-chill cooler for 2 hours
- Use frozen gel packs (not loose ice)
- Layer specimens between ice packs
- Monitor temperature every 30 minutes
- Have backup ice packs ready

### 2. Dry Ice Containers
**Best for:** Frozen specimens (-20°C to -80°C)
**Duration:** 24-48 hours
**Pros:** Very cold, long duration
**Cons:** Requires special handling, ventilation needed

**Safety Requirements:**
- Use in well-ventilated areas
- Wear insulated gloves
- Never seal container completely (CO2 buildup)
- Store in vehicle trunk or cargo area
- Know signs of CO2 exposure

**Handling Dry Ice:**
- 5-10 lbs per 24 hours typically needed
- Wrap in newspaper for longer duration
- Never touch with bare hands
- Sublimation is normal (turns to gas)
- Dispose properly (let evaporate in ventilated area)

### 3. Powered Coolers/Refrigerators
**Best for:** Long-distance transport, multiple deliveries
**Duration:** Continuous (while powered)
**Pros:** Precise temperature control, long duration
**Cons:** Expensive, requires power source

**Features:**
- Plugs into vehicle 12V outlet
- Digital temperature display
- Alarm for temperature excursions
- Battery backup option
- Dual temperature zones

**Maintenance:**
- Check power connection before each trip
- Clean interior weekly
- Verify temperature accuracy monthly
- Keep backup power source
- Service annually

### 4. Phase Change Materials (PCM)
**Best for:** Specific temperature maintenance
**Duration:** 12-24 hours
**Pros:** Maintains exact temperature, no ice needed
**Cons:** Expensive, requires specific preparation

**Types:**
- 2-8°C PCM packs (refrigerated)
- -20°C PCM packs (frozen)
- Custom temperature options

**Usage:**
- Condition packs to exact temperature
- Use with insulated containers
- Monitor with data loggers
- Reusable after reconditioning

## Temperature Monitoring Devices

### 1. Digital Data Loggers
**Features:**
- Records temperature every 1-15 minutes
- Stores data for weeks/months
- USB download capability
- Alarm for excursions
- Waterproof options

**Setup:**
- Program before use
- Place in center of load
- Start logging before loading specimens
- Verify recording during transport
- Download data at delivery

### 2. Temperature Indicators
**Types:**
- Time-temperature indicators (TTI)
- Freeze indicators
- Warm indicators
- Multi-use indicators

**Advantages:**
- Visual confirmation
- No batteries needed
- Irreversible record
- Low cost

**Placement:**
- Attach to specimen container
- Place inside cooler
- Include with documentation
- Photograph at delivery

### 3. Wireless Temperature Monitors
**Features:**
- Real-time monitoring via smartphone
- Cloud data storage
- Instant alerts
- GPS tracking
- Multiple sensor support

**Benefits:**
- Immediate excursion notification
- Remote monitoring
- Automatic documentation
- Compliance reporting

## Equipment Maintenance

### Daily Checks:
- [ ] Clean all equipment
- [ ] Check for damage
- [ ] Verify temperature accuracy
- [ ] Test alarms/alerts
- [ ] Charge batteries
- [ ] Restock supplies

### Weekly Maintenance:
- [ ] Deep clean coolers
- [ ] Sanitize equipment
- [ ] Check seals and gaskets
- [ ] Calibrate thermometers
- [ ] Inspect power cords
- [ ] Review temperature logs

### Monthly Tasks:
- [ ] Verify data logger accuracy
- [ ] Replace worn equipment
- [ ] Update inventory
- [ ] Review procedures
- [ ] Training refresher
        `
      }
    ],
    quiz: [
      {
        id: 'tq1',
        question: 'How often should you monitor temperature during transport with ice packs?',
        options: [
          'Every 15 minutes',
          'Every 30 minutes',
          'Every hour',
          'Only at pickup and delivery'
        ],
        correctAnswer: 1,
        explanation: 'Temperature should be monitored every 30 minutes when using ice packs to ensure specimens remain in the correct range.'
      },
      {
        id: 'tq2',
        question: 'What is the main safety concern when using dry ice?',
        options: [
          'It can freeze specimens too much',
          'CO2 buildup in enclosed spaces',
          'It is too expensive',
          'It melts too quickly'
        ],
        correctAnswer: 1,
        explanation: 'Dry ice sublimates into CO2 gas, which can displace oxygen in enclosed spaces. Always use in well-ventilated areas.'
      },
      {
        id: 'tq3',
        question: 'Where should a digital data logger be placed in a cooler?',
        options: [
          'On top of the specimens',
          'In the center of the load',
          'Outside the cooler',
          'Attached to the lid'
        ],
        correctAnswer: 1,
        explanation: 'Data loggers should be placed in the center of the load to get the most accurate temperature reading of the specimens.'
      }
    ]
  },
  {
    id: 'safety-emergency',
    title: 'Safety Protocols & Emergency Response',
    description: 'Critical training on safety procedures, emergency response, and incident management.',
    category: 'safety',
    duration: 35,
    required: true,
    passingScore: 85,
    certificateIssued: true,
    content: [
      {
        id: 'safe-1',
        type: 'text',
        title: 'Vehicle Safety',
        order: 1,
        content: `
# Vehicle Safety for Medical Couriers

## Pre-Trip Inspection

### Before Every Shift:
- [ ] Check tire pressure and condition
- [ ] Verify all lights working
- [ ] Test brakes
- [ ] Check fluid levels
- [ ] Inspect windshield wipers
- [ ] Verify emergency equipment present
- [ ] Clean mirrors and windows
- [ ] Test climate control
- [ ] Ensure phone is charged
- [ ] Verify GPS working

### Emergency Equipment Required:
- First aid kit
- Fire extinguisher
- Reflective triangles/flares
- Flashlight with extra batteries
- Spill cleanup kit
- Emergency contact list
- Backup phone charger
- Basic tools
- Blanket
- Water

## Safe Driving Practices

### Speed and Following Distance:
- Obey all speed limits
- Increase following distance in bad weather
- Allow extra time for deliveries
- Never rush - specimen integrity is priority
- Use cruise control on highways

### Distraction Prevention:
- No phone use while driving
- Pull over to check messages
- Program GPS before departure
- Secure all cargo
- Avoid eating while driving
- Stay focused on the road

### Weather Considerations:
- Check forecast before departure
- Delay travel in severe weather
- Reduce speed in rain/snow
- Increase following distance
- Use headlights in poor visibility
- Know when to pull over and wait

## Parking and Security

### Secure Parking:
- Choose well-lit areas
- Lock vehicle always
- Park close to destination
- Avoid high-crime areas
- Use parking garages when available
- Never leave specimens visible

### Quick Stops:
- Lock vehicle even for brief stops
- Take keys with you
- Secure specimens in trunk
- Be aware of surroundings
- Minimize stop duration
- Plan stops in advance

## Accident Response

### If Involved in Accident:
1. Ensure personal safety first
2. Call 911 if injuries
3. Move to safe location if possible
4. Turn on hazard lights
5. Set up warning triangles
6. Call dispatch immediately
7. Document scene (photos)
8. Exchange information
9. Do not admit fault
10. Secure specimens
11. Arrange specimen transfer if needed
12. Complete incident report

### Specimen Protection:
- Check temperature immediately
- Verify container integrity
- Document any damage
- Arrange emergency pickup if needed
- Maintain chain of custody
- Do not leave specimens unattended
        `
      },
      {
        id: 'safe-2',
        type: 'text',
        title: 'Emergency Response Procedures',
        order: 2,
        content: `
# Emergency Response Procedures

## Medical Emergencies

### If You Feel Ill:
1. Pull over safely immediately
2. Call 911 if serious
3. Contact dispatch
4. Secure specimens
5. Arrange backup driver
6. Do not continue driving

### If You Witness Emergency:
1. Call 911
2. Provide assistance if trained
3. Do not leave specimens unattended
4. Contact dispatch
5. Document incident
6. Continue delivery when safe

## Specimen-Related Emergencies

### Container Leak/Spill:
1. Pull over safely
2. Put on PPE
3. Contain spill
4. Do not touch specimen
5. Call dispatch immediately
6. Follow spill response protocol
7. Document with photos
8. Arrange hazmat cleanup if needed
9. Complete incident report

### Temperature Excursion:
1. Check equipment immediately
2. Document temperature
3. Report through app
4. Add ice/cooling if available
5. Expedite delivery
6. Do not discard specimen
7. Let lab determine viability
8. Complete incident report

### Lost/Stolen Specimens:
1. Contact dispatch immediately
2. File police report
3. Document circumstances
4. Notify all parties
5. Complete incident report
6. Cooperate with investigation
7. Review security procedures

## Natural Disasters

### Severe Weather:
- Monitor weather alerts
- Pull over if unsafe
- Find shelter
- Protect specimens
- Contact dispatch
- Wait for safe conditions
- Document delay

### Earthquake:
- Pull over and stop
- Stay in vehicle
- Avoid bridges/overpasses
- Wait for shaking to stop
- Inspect vehicle
- Check specimens
- Proceed when safe

### Flood:
- Never drive through water
- Find alternate route
- Seek high ground
- Protect specimens
- Contact dispatch
- Wait for safe passage

## Communication During Emergencies

### Who to Contact:
1. **911** - Life-threatening emergencies
2. **Dispatch** - All incidents affecting delivery
3. **Supervisor** - Guidance and support
4. **Facility** - Delivery delays
5. **Insurance** - Accidents

### Information to Provide:
- Your location (GPS coordinates)
- Nature of emergency
- Specimen status
- Your condition
- Assistance needed
- Estimated delay
- Contact number

## Post-Emergency Procedures

### After Any Emergency:
1. Complete incident report
2. Document timeline
3. Provide photos/evidence
4. Attend debriefing
5. Review procedures
6. Update training
7. Implement improvements

### Mental Health Support:
- Emergencies can be traumatic
- Seek support if needed
- Talk to supervisor
- Use employee assistance program
- Take time to recover
- Don't rush back to work
        `
      }
    ],
    quiz: [
      {
        id: 'sfq1',
        question: 'What should you do first if involved in a vehicle accident?',
        options: [
          'Call dispatch',
          'Check the specimens',
          'Ensure personal safety',
          'Exchange insurance information'
        ],
        correctAnswer: 2,
        explanation: 'Personal safety is always the first priority. Ensure you and others are safe before addressing other concerns.'
      },
      {
        id: 'sfq2',
        question: 'If you discover a specimen container leak while driving, what should you do first?',
        options: [
          'Continue to delivery and report after',
          'Pull over safely',
          'Call dispatch while driving',
          'Open the container to assess damage'
        ],
        correctAnswer: 1,
        explanation: 'Pull over safely first, then put on PPE and follow spill response protocols. Never handle spills while driving.'
      },
      {
        id: 'sfq3',
        question: 'How often should you perform a pre-trip vehicle inspection?',
        options: [
          'Once a week',
          'Once a month',
          'Before every shift',
          'Only when you notice a problem'
        ],
        correctAnswer: 2,
        explanation: 'Pre-trip inspections should be performed before every shift to ensure vehicle safety and readiness.'
      }
    ]
  }
];

export const getModuleById = (id: string): TrainingModule | undefined => {
  return trainingModules.find(module => module.id === id);
};

export const getRequiredModules = (): TrainingModule[] => {
  return trainingModules.filter(module => module.required);
};

export const getModulesByCategory = (category: string): TrainingModule[] => {
  return trainingModules.filter(module => module.category === category);
};