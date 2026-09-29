# 02. The 10 Golden Rules for Analysts

### 1. Business Question First, Data Second
Never query data without defining the business problem you are solving.

### 2. Correlation Does Not Mean Causation
Just because high night shifts coincide with higher costs does not mean night shifts are inherently bad; the pay band of scheduled staff is the driver.

### 3. Always Validate Data Before Querying
Check for `NULL` values (e.g., Sara’s unassigned department) and inactive records (e.g., John having 0 logged shifts)[cite: 1, 3, 4].

### 4. Do Not Rely on Averages Alone
The average hospital staff salary is ₹49,857, but the median is only ₹38,000 because two senior doctors pull up the overall mean[cite: 1, 4].

### 5. Segment Before Concluding
Always break metrics down by Department, Role, and Shift Type to isolate outliers[cite: 1, 3, 4].

### 6. Quantify the Financial Impact
Avoid vague statements like *"Doctor shifts are expensive."* State: *"Emergency night shifts generated 24 doctor hours at ₹85,000+ base rates, while nursing staff averaged ₹32,000."*[cite: 1, 4]

### 7. Find the Root Cause, Not Just the Largest Number
Emergency has the highest single salaries, but nursing staff represent the highest total headcount[cite: 1, 4].

### 8. Make Recommendations Actionable
Provide clear limits and scheduling rules rather than open-ended advice.

### 9. Pass the "So What?" Test
Every table or visual presented must support an operational decision.

### 10. Frame the Analysis as a Narrative
Follow this progression:  
**Problem → Evidence → Root Cause → Financial Impact → Action Plan**
