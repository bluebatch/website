# Angebots-Bot (Quote/Proposal Automation)

## Standard Workflow

The typical B2B quote/proposal creation process in wholesale environments involves multiple manual steps:

1. **Quote Request Receipt**: Customer sends inquiry via email, phone, or web form requesting pricing for specific products/services
2. **Information Gathering**: Sales representative manually extracts customer requirements, product specifications, quantities, and delivery details
3. **Customer Verification**: Rep checks CRM for existing customer data, pricing tiers, credit status, and payment terms
4. **Price Calculation**: Manual lookup of current pricing in ERP system, application of customer-specific discounts, volume breaks, and special terms
5. **Proposal Creation**: Sales rep manually creates quote document using Word/Excel templates, copying data from multiple systems
6. **Internal Approval**: Quote is sent to sales manager or finance for approval if discounts exceed thresholds
7. **Document Generation**: Final PDF is created and formatted with company branding
8. **Delivery & Follow-up**: Quote is emailed to customer with manual follow-up tracking

This traditional process typically takes 24-48 hours for standard deals and 5-10 business days for complex enterprise quotes.

## Pain Points & Inefficiencies

### 1. Slow Response Times Kill Win Rates
- Leads contacted within 5 minutes are 21x more likely to qualify than after 30 minutes
- Manual quote generation takes 24-48 hours on average, causing significant competitive disadvantage
- Fast competitors with automated systems capture opportunities while manual teams are still gathering data
- Slow turnaround times directly slash conversion rates and revenue

### 2. Manual Data Entry Creates Errors & Inconsistencies
- Sales teams waste hours on repetitive tasks: manual data entry, updating spreadsheets, consolidating information from various documents
- Data discrepancies creep in when copying information between email, CRM, ERP, and proposal documents
- Incorrect pricing or outdated information gets shared with clients, derailing high-stakes deals
- Inconsistent quote quality damages brand professionalism and customer trust

### 3. Complex Pricing Calculations Strain Resources
- Customers expect complex multi-line, multi-site, multi-partner offerings in a single quote
- Manual calculation of volume breaks, tier pricing, customer-specific rates, and seasonal discounts is error-prone
- Sales reps struggle to balance customization requests with profitability targets
- Pricing changes in ERP don't automatically propagate to all sales channels

### 4. Approval Bottlenecks Delay Deals
- Quotes requiring manager or finance approval sit in email inboxes for hours or days
- No visibility into approval status creates communication gaps with customers
- Sequential approvals (sales manager → director → legal) extend timelines unnecessarily
- Manual approval routing lacks audit trails for compliance

### 5. Disconnected Systems Create Silos
- Customer data lives in CRM, pricing in ERP, templates in shared drives
- Sales reps manually copy data between 3-5 different systems per quote
- No single source of truth for customer information or pricing
- Changes in one system don't trigger updates in others

### 6. Limited Scalability & Personalization
- Manual processes can't handle high quote volumes during peak seasons
- Creating personalized proposals for each prospect is too time-consuming
- Sales teams can't generate thousands of quotes simultaneously for campaigns
- Template updates must be manually applied to all active proposals

### 7. Poor Tracking & Follow-up
- No systematic way to track quote status or conversion rates
- Manual follow-up reminders are inconsistent and often forgotten
- Difficulty identifying which proposals are stalled and need attention
- Limited analytics on quote performance, win/loss reasons, or pricing effectiveness

## Automation Solution

### n8n Workflow Architecture

The Angebots-Bot uses n8n to create an end-to-end automated quote generation pipeline:

**Trigger Layer**: Multiple entry points capture quote requests
- Email trigger monitors quote request inbox
- Webhook trigger receives web form submissions
- CRM trigger fires when opportunity stage changes to "Quote Requested"

**Parsing & Enrichment Layer**: Extract and validate quote requirements
- AI-powered email parser extracts customer details, product specifications, quantities, delivery requirements
- Customer lookup queries CRM for existing records, pricing tier, credit status, payment terms
- Product validation checks ERP for availability, current pricing, and specifications

**Pricing Calculation Layer**: Automated pricing engine
- Fetch base prices from ERP via API
- Apply customer-specific pricing rules (tier discounts, volume breaks, contract rates)
- Calculate totals including taxes, shipping, and special fees
- Apply business rules for margin protection and competitive positioning

**Approval Routing Layer**: Intelligent workflow management
- Conditional logic routes quotes based on discount threshold, total value, or customer risk
- Parallel or sequential approvals to sales manager, finance, legal as needed
- Slack/email notifications to approvers with quote summary
- Auto-approval for standard quotes within policy parameters

**Document Generation Layer**: Professional proposal creation
- Pull branded PDF template from storage
- Populate template with customer data, product details, pricing table, terms
- Add personalization elements (customer logo, custom messaging, case studies)
- Generate multiple formats (PDF, Word, Excel) as needed

**Delivery & Tracking Layer**: Send and monitor
- Email quote to customer with tracking pixel
- Create follow-up tasks in CRM with automated reminders (day 3, day 7, day 14)
- Log all quote data to analytics database
- Update CRM opportunity with quote details and status

### Key Nodes/Integrations

**Core n8n Nodes**:
- **Email Trigger**: Monitor quote request inbox (IMAP/POP3)
- **HTTP Request**: API calls to CRM, ERP, pricing systems
- **AI Agent/OpenAI**: Parse unstructured email content, extract quote requirements
- **Code Node**: Custom pricing calculations, business logic, data transformations
- **IF Conditional**: Route quotes based on approval thresholds, customer type, product category
- **PDF Generator**: Create professional proposal documents from templates
- **Email Send**: Deliver quotes and notifications
- **Webhook**: Receive form submissions and system events
- **Set Variables**: Store intermediate calculations and customer data
- **Error Workflow**: Handle exceptions and retry failed operations

**CRM Integrations**:
- **HubSpot**: Customer lookup, opportunity updates, activity logging
- **Salesforce**: Account data, pricing agreements, quote history
- **Zoho CRM**: Contact enrichment, deal stage management
- **Microsoft Dynamics**: Customer master data, approval workflows

**ERP/Pricing Integrations**:
- **SAP**: Product catalog, inventory availability, base pricing
- **Odoo**: Stock levels, pricing rules, customer contracts
- **NetSuite**: Financial data, approval workflows
- **Custom ERP APIs**: Real-time pricing, margin calculations

**Document Generation**:
- **DocuSign**: E-signature integration for quote acceptance
- **PDF.co**: Advanced PDF generation with templates
- **Google Docs**: Template storage and dynamic document creation
- **Abyssale API**: Bulk PDF generation with personalization

**Communication & Collaboration**:
- **Slack**: Approval notifications, team alerts
- **Microsoft Teams**: Internal collaboration on complex quotes
- **Twilio**: SMS notifications for urgent approvals or customer follow-ups

**Data Storage & Analytics**:
- **Airtable/Google Sheets**: Quote tracking database, approval logs
- **PostgreSQL**: Analytics data warehouse for reporting
- **Google Analytics**: Track quote view rates and engagement

### UI Requirements

**Quote Request Portal** (Customer-facing):
- Web form for structured quote requests with product selection
- File upload for specifications, technical drawings, or bulk order lists
- Customer portal to view quote history and status
- Real-time quote tracker showing progress (received → processing → approval → sent)

**Quote Management Dashboard** (Sales Team):
- Queue view of pending quotes prioritized by urgency and value
- Quote status overview (draft, pending approval, sent, accepted, expired)
- One-click approve/reject for managers with comment capability
- Analytics dashboard showing quote volume, conversion rates, average response time
- Win/loss analysis with filters by product, customer segment, sales rep

**Approval Workflow Interface** (Management):
- Approval inbox with quote summaries and key metrics (discount %, margin, total value)
- Side-by-side comparison of requested vs. policy pricing
- Mobile-friendly approval interface for on-the-go decisions
- Audit log of all approval decisions with timestamps and justifications

**Configuration Panel** (Admin):
- Pricing rule builder for tier pricing, volume discounts, seasonal promotions
- Template editor for proposal documents with drag-and-drop elements
- Approval workflow designer with conditional routing logic
- Integration settings for CRM, ERP, email systems

**Reporting & Analytics**:
- Quote funnel metrics (requests → quotes sent → accepted)
- Time-to-quote trends and bottleneck identification
- Pricing effectiveness analysis (win rate by discount level)
- Sales rep performance comparison
- Customer segment profitability

## Benefits Summary

### Quantifiable Business Impact

**Speed & Efficiency**:
- **70-90% faster quote generation**: From 24-48 hours to 30-60 minutes
- **30-50% reduction in sales cycle time**: Automated proposals reduce time from opportunity to close
- **40% time savings** for sales teams, redirecting hours from admin to selling
- **100% accurate quotes**: Eliminate manual data entry errors

**Conversion & Revenue**:
- **21x higher qualification rate** for leads contacted within 5 minutes
- **15-25% improvement in quote-to-close conversion** through faster response and consistency
- **20-30% increase in quote volume capacity** without adding headcount
- **10-15% higher margins** through optimized pricing rules and discount controls

**Operational Excellence**:
- **Reduced approval time from days to minutes** with automated routing
- **24/7 quote generation** capability without human intervention
- **100% compliance** with pricing policies through automated rule enforcement
- **Unified data source** eliminating discrepancies across systems

**Customer Experience**:
- **Immediate acknowledgment** of quote requests with estimated completion time
- **Consistent professional presentation** across all proposals
- **Personalized proposals** at scale with customer-specific content
- **Transparent tracking** allowing customers to see quote status

**Scalability**:
- **Handle 10x quote volume** during peak seasons without overtime
- **Generate thousands of personalized proposals simultaneously** for campaigns
- **Instant pricing updates** propagated to all active quotes when ERP changes

## FAQ Topics

### 1. How does automated quote generation maintain pricing accuracy?
The system integrates directly with your ERP as the single source of truth for pricing. When product prices, customer tiers, or discount policies change in the ERP, they automatically propagate to the quote generation workflow in real-time via API. Business rules enforce margin protection, and approval workflows catch quotes that exceed discount thresholds before they're sent to customers.

### 2. Can the system handle complex custom quotes or only standard catalog items?
The Angebots-Bot handles both scenarios. For standard catalog items, pricing and availability are fetched automatically from the ERP. For custom or configured products, the workflow can route to a sales engineer for manual input while still automating document generation, approval routing, and delivery. Conditional logic determines which path each quote takes based on complexity indicators.

### 3. What happens if the customer requests a quote via a phone call instead of email?
Sales reps can manually trigger the workflow by filling out a simple web form or updating the CRM opportunity stage. The automation then takes over for pricing lookup, calculation, document generation, and approval routing. This hybrid approach ensures every quote benefits from automation regardless of how the request arrives.

### 4. How long does it take to set up quote automation for our specific business?
Basic quote automation (email parsing → pricing lookup → PDF generation → delivery) can be operational in 2-4 weeks. This includes workflow configuration, CRM/ERP integration, and template design. More complex implementations with multi-stage approvals, advanced pricing rules, and custom UI dashboards typically take 6-12 weeks. The modular nature of n8n allows for phased rollout starting with high-value, high-volume quote types.

### 5. How do we ensure the automated system doesn't send quotes with pricing errors or to wrong customers?
The workflow includes multiple validation checkpoints: customer verification against CRM before processing, pricing sanity checks (alerts if quote is outside expected range), required approval for high-value or high-discount quotes, and dry-run mode for testing template changes. Additionally, all quotes are logged with full audit trails, and the system can be configured to require manual review before final send for high-stakes opportunities.
