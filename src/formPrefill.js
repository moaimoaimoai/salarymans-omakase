// Google Formの entry ID をここに入れる（"entry.123456789" の数字部分）
export const FORM_FIELDS = {
    email: "entry.REPLACE_EMAIL",
    with: "entry.REPLACE_WITH",
    vibe: "entry.REPLACE_VIBE",
    budget: "entry.REPLACE_BUDGET",
    area: "entry.REPLACE_AREA",
    must: "entry.REPLACE_MUST",
    recommendedPlan: "entry.REPLACE_PLAN",
    paid: "entry.REPLACE_PAID",
    stripeEmail: "entry.REPLACE_STRIPE_EMAIL",
  };
  
  export function buildGoogleFormPrefillUrl(baseUrl, valuesByEntryId) {
    const url = new URL(baseUrl);
    url.searchParams.set("usp", "pp_url");
    for (const [entryId, value] of Object.entries(valuesByEntryId)) {
      if (value === undefined || value === null || value === "") continue;
      url.searchParams.set(entryId, String(value));
    }
    return url.toString();
  }
  