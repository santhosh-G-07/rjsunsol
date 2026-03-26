export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "divider" };

export const BLOG_CONTENT: Record<string, ContentBlock[]> = {
  "commercial-solar-benefits": [
    { type: "heading", text: "Dramatically Lower Operating Costs" },
    {
      type: "paragraph",
      text: "Commercial and industrial facilities are among the largest consumers of grid electricity. Rising tariffs and demand charges make energy one of the most significant and least predictable line items on the balance sheet. Solar energy installation flips that script: once the system is commissioned, a large portion of your daytime load is met by the sun. Businesses across Tamil Nadu and Andhra Pradesh report reductions of 40% or more in their electricity costs, with payback periods often between 4 and 7 years depending on consumption, tariff, and incentives.",
    },
    {
      type: "paragraph",
      text: "The financial benefit is not just in lower bills. Fixed or predictable energy costs improve budgeting and make long-term planning easier. For energy-intensive industries, solar can act as a hedge against future tariff hikes and regulatory changes.",
    },
    { type: "heading", text: "A Generous Web of Financial Incentives" },
    {
      type: "paragraph",
      text: "The Indian government and many state governments offer a range of incentives to accelerate commercial solar adoption. These include capital subsidies, accelerated depreciation, and tax benefits. Net metering or gross metering arrangements allow you to feed surplus solar power back into the grid, often earning credits or revenue.",
    },
    {
      type: "paragraph",
      text: "Working with an experienced EPC provider ensures your project is designed and documented to maximise eligibility for these schemes. They handle the paperwork, compliance, and grid-approval process so you can focus on your business while the system is built and commissioned.",
    },
    { type: "heading", text: "ESG Leadership That Customers Notice" },
    {
      type: "paragraph",
      text: "Sustainability is no longer a niche concern. Customers, investors, and partners increasingly expect businesses to demonstrate environmental responsibility. A visible commitment to solar energy sends a strong message: your company is serious about reducing its carbon footprint and investing in clean energy.",
    },
    {
      type: "paragraph",
      text: "For B2B companies, this can be a differentiator in tenders and long-term contracts. For consumer-facing brands, it strengthens brand value and aligns with the values of a growing segment of environmentally conscious customers.",
    },
    { type: "heading", text: "Energy Independence & Grid Resilience" },
    {
      type: "paragraph",
      text: "Grid outages and voltage fluctuations can disrupt production, damage equipment, and lead to lost revenue. Solar, especially when combined with storage or hybrid setups, can provide a degree of energy independence. Even without batteries, a grid-tied solar plant reduces your reliance on the grid during peak sunshine hours, softening the impact of daytime outages.",
    },
    {
      type: "paragraph",
      text: "For critical operations, hybrid or backup solutions ensure that essential loads keep running when the grid fails. This resilience is increasingly valued in manufacturing, data centres, healthcare, and logistics.",
    },
    { type: "heading", text: "Which Sectors Are Leading the Transition?" },
    {
      type: "paragraph",
      text: "Manufacturing and industrial facilities with large rooftops or open land are natural adopters. Textiles, automotive, pharmaceuticals, and FMCG have been among the early movers in India. Commercial buildings—offices, malls, hospitals, and educational institutions—are also turning to solar to cut operational costs and meet sustainability goals.",
    },
    {
      type: "paragraph",
      text: "Agriculture and cold chains are increasingly using solar for irrigation and refrigeration, often in off-grid or hybrid configurations. The common thread is the desire for lower, predictable costs and a smaller environmental footprint.",
    },
    { type: "heading", text: "Making the Transition: What to Expect" },
    {
      type: "paragraph",
      text: "A typical commercial solar journey starts with a site and energy assessment. Your EPC partner will evaluate roof or ground space, structural suitability, shadow analysis, and your consumption pattern. They will then propose a system size, technology, and financial model tailored to your site and goals.",
    },
    {
      type: "paragraph",
      text: "From there, the process moves through design, approvals, procurement, installation, and commissioning. Timelines vary with project size and complexity, but a well-managed project can move from contract to commissioning within a few months. Post-commissioning, operation and maintenance (O&M) agreements ensure the system performs at its best for 25 years or more.",
    },
    {
      type: "paragraph",
      text: "Every day without solar is a day of untapped savings. A commercial solar assessment is the logical first step toward understanding the opportunity sitting on your roof or land.",
    },
  ],

  "ongrid-vs-offgrid-solar": [
    { type: "heading", text: "What Is the Grid?" },
    {
      type: "paragraph",
      text: "The electrical grid is the network of power plants, transmission lines, substations, and distribution lines that deliver electricity from producers to consumers. When your facility is \"on-grid,\" it is connected to this network. You can draw power when you need it and, depending on the policy in your state, you may be able to send excess solar power back to the grid in exchange for credits or payments.",
    },
    {
      type: "paragraph",
      text: "When your facility is \"off-grid,\" it is not connected to the utility network. All power must be generated and often stored on-site. This is common in remote locations where grid extension is costly or impractical.",
    },
    { type: "heading", text: "On-Grid Solar" },
    {
      type: "paragraph",
      text: "On-grid (grid-tied) solar systems are the most common choice for businesses and homes with reliable grid access. Solar panels feed power into your facility during the day. When generation exceeds consumption, the surplus is exported to the grid (where net metering or similar rules apply). When the sun is down or generation is low, you draw from the grid as usual.",
    },
    {
      type: "paragraph",
      text: "Advantages include lower upfront cost (no batteries), maximum use of solar energy, and the ability to earn credits for surplus power. The main drawback is that when the grid fails, your solar plant typically shuts down too for safety reasons, unless you add a hybrid or backup solution.",
    },
    { type: "heading", text: "Off-Grid Solar" },
    {
      type: "paragraph",
      text: "Off-grid systems are designed to operate independently of the utility grid. They combine solar panels with battery storage and often a backup source (e.g., diesel generator) for prolonged cloudy periods. All energy demand must be met by the PV-battery system (and backup if any).",
    },
    {
      type: "paragraph",
      text: "These systems are ideal for remote factories, telecom towers, agricultural pumps, and rural facilities where grid connection is absent or unreliable. They are more expensive per unit of energy because of the cost of batteries and balance-of-system equipment, but they provide full energy autonomy.",
    },
    { type: "heading", text: "Hybrid Solar" },
    {
      type: "paragraph",
      text: "Hybrid systems combine grid connection with solar and usually battery storage. They allow you to use solar first, store excess in batteries, and fall back to the grid when needed. During a grid outage, the battery and solar can often continue to power critical loads, giving you backup without a full off-grid design.",
    },
    {
      type: "paragraph",
      text: "Hybrid is the right choice when you want the best of both worlds: lower bills and grid backup, plus resilience during blackouts. They are increasingly popular in commercial and industrial settings where continuity of supply is important.",
    },
    { type: "heading", text: "Side-by-Side Comparison" },
    {
      type: "table",
      headers: ["Feature", "On-Grid", "Off-Grid", "Hybrid"],
      rows: [
        ["Grid connection", "Required", "None", "Required"],
        ["Battery storage", "Typically no", "Yes", "Optional / common"],
        ["Backup during grid failure", "No*", "Yes", "Yes (with battery)"],
        ["Surplus power", "Export to grid", "Store or curtail", "Store or export"],
        ["Typical use", "Urban / suburban", "Remote / no grid", "Resilience + savings"],
      ],
    },
    {
      type: "paragraph",
      text: "*Unless designed with islanding or backup capability.",
    },
    { type: "heading", text: "Which System Is Right for You?" },
    {
      type: "paragraph",
      text: "If you have a reliable grid connection and want to cut costs and carbon without the complexity of storage, on-grid solar is usually the best fit. If you are in a remote area or need complete independence, off-grid (with batteries and possibly backup) is the answer. If you want savings plus the ability to keep critical loads running during outages, a hybrid system is the way to go.",
    },
    {
      type: "paragraph",
      text: "Whether you're powering a family home, a remote cabin, or a commercial factory — solar energy starts with one simple choice: how connected do you want to be? A qualified EPC provider can assess your site, load, and goals and recommend the right architecture.",
    },
  ],

  "what-is-epc-provider": [
    { type: "heading", text: "E — Engineering" },
    {
      type: "paragraph",
      text: "The engineering phase covers everything from site assessment and feasibility studies to detailed design. Engineers evaluate your roof or land, sun exposure, shadows, and electrical infrastructure. They size the system, choose technology (panels, inverters, mounting), and produce drawings and specifications that meet local codes and grid regulations. Good engineering maximises energy yield and ensures the system is safe, compliant, and buildable.",
    },
    { type: "heading", text: "P — Procurement" },
    {
      type: "paragraph",
      text: "Procurement is the sourcing of all equipment and materials: solar panels, inverters, mounting structures, cables, and balance-of-system components. An EPC provider typically has agreements with tier-1 manufacturers and buys in volume, which can mean better pricing and consistent quality. They also manage logistics and delivery so that materials arrive on site when needed, avoiding delays and cost overruns.",
    },
    { type: "heading", text: "C — Construction" },
    {
      type: "paragraph",
      text: "Construction (or installation) is the physical execution: civil work (if any), mounting of panels, electrical wiring, inverter and metering setup, and grid connection. Experienced crews follow the design, adhere to safety standards, and complete the work on schedule. Once built, the system is tested and commissioned—performance is verified, and the owner is trained on basic monitoring and O&M. A single EPC contract usually covers design, supply, installation, and commissioning, so you have one point of responsibility.",
    },
    { type: "heading", text: "The EPC Model" },
    {
      type: "paragraph",
      text: "In the EPC model, one company (the EPC provider) takes responsibility for the entire project. You get a turnkey solution: they design it, procure the equipment, build it, and hand it over in working order. That simplifies contracting, reduces interface risks, and makes it clear who is accountable for performance and timelines. For commercial and industrial clients, this single-point responsibility is often preferable to dealing with separate designers, suppliers, and contractors.",
    },
    { type: "heading", text: "What to Look for in a Solar EPC Provider" },
    {
      type: "paragraph",
      text: "Look for a provider with a track record of completed projects in your segment (commercial, industrial, utility-scale). Check their technical capability: in-house engineering, certified installers, and experience with the grid and approval process in your state. Transparency on equipment brands, warranties, and O&M support matters. References and site visits can help you gauge execution quality and client satisfaction.",
    },
    {
      type: "paragraph",
      text: "A good EPC partner will conduct a thorough site and energy assessment before proposing a system. They will explain the design choices, timeline, and commercial terms clearly. Post-commissioning, they should offer O&M and performance monitoring so your asset keeps delivering for decades.",
    },
    { type: "heading", text: "The Bottom Line" },
    {
      type: "paragraph",
      text: "Who builds your system matters. An experienced EPC provider ensures the right design, quality equipment, and disciplined execution—so your solar investment delivers the returns you expect for 25 years or more. Evaluating solar for your facility? The first step is a thorough site and energy assessment conducted by a qualified EPC team. Reach out to us to understand what the right system for your facility looks like.",
    },
  ],

  "solar-facility-assessment": [
    { type: "heading", text: "1. Available Space" },
    {
      type: "paragraph",
      text: "Solar plants need space—either on rooftops or on the ground. Rooftop solar is common for commercial and industrial buildings: it uses existing footprint and avoids land cost. The usable area depends on roof layout, equipment (HVAC, etc.), and shadows. Ground-mounted systems require sufficient open land with good sun exposure. As a rough guide, about 5–7 square metres of shadow-free area per kW of solar capacity is often used for planning; your EPC partner will do a proper layout. Limited space may mean a smaller system or higher-efficiency panels to maximise generation per square metre.",
    },
    { type: "heading", text: "2. Roof Condition and Structural Strength" },
    {
      type: "paragraph",
      text: "For rooftop projects, the roof must be able to support the additional load of panels and mounting structure for 25+ years. An structural assessment is standard. Age, material, and current condition of the roof matter. If the roof is near end-of-life, it may make sense to repair or replace it before installing solar to avoid having to dismantle and reinstall the array later. Waterproofing and penetration details must be handled correctly to avoid leaks.",
    },
    { type: "heading", text: "3. Solar Irradiance at Your Location" },
    {
      type: "paragraph",
      text: "India has some of the best solar resources in the world. Tamil Nadu and Andhra Pradesh receive strong sunshine, making them well-suited for solar. Still, local irradiance and seasonal variation affect yield. Shading from nearby buildings, trees, or equipment can significantly reduce output. A proper feasibility study uses satellite data and, where needed, on-site measurements to estimate energy generation. Your EPC provider will recommend system size and technology based on this.",
    },
    { type: "heading", text: "4. Energy Consumption Profile" },
    {
      type: "paragraph",
      text: "Solar is most valuable when generation aligns with consumption. Daytime-heavy loads (manufacturing, cooling, offices) match well with solar. Night-heavy or flat 24/7 loads may need storage or hybrid solutions to get the most value. Your EPC partner will review your bills and load pattern to size the system and choose the right configuration (on-grid, off-grid, or hybrid) so you maximise self-consumption and financial returns.",
    },
    { type: "heading", text: "5. Grid Connectivity and Sanctioned Load" },
    {
      type: "paragraph",
      text: "Grid-tied and hybrid systems require a connection to the distribution network. The sanctioned load (contract demand) and the utility's net-metering or gross-metering policy cap how much you can install and how surplus power is accounted for. Application, metering, and approval processes vary by state and discom. An experienced EPC provider will handle the application and interface with the utility so your project is compliant and correctly metered.",
    },
    { type: "heading", text: "6. Ownership and Tenure" },
    {
      type: "paragraph",
      text: "Solar is a long-term asset. If you own the roof or land, you can invest with confidence. If you are a tenant or have a short lease, ownership and benefit-sharing need to be clear. Power purchase agreements (PPAs) or lease arrangements can allow tenants or building owners to host solar with minimal upfront cost; the legal and commercial structure should be agreed upfront so all parties benefit.",
    },
    { type: "heading", text: "What If Your Facility Has Limitations?" },
    {
      type: "paragraph",
      text: "Not every site is perfect. Limited space may mean a smaller system that still cuts a meaningful portion of your bill. A weak roof might need reinforcement or a ground-mounted system instead. Heavy shading might limit the viable array size or suggest higher-efficiency modules. Grid constraints might cap capacity or require a hybrid or storage solution. The key is to get a proper assessment: a good EPC partner will tell you what is possible, what is not, and what alternatives exist so you can make an informed decision.",
    },
    {
      type: "paragraph",
      text: "Want to know if your facility is a good candidate for solar? Our team conducts detailed feasibility assessments for commercial and industrial sites. Get in touch to schedule yours.",
    },
  ],
};
