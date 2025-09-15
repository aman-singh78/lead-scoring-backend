export const calculateRuleScore = (lead, offer) => {
  let score = 0;

  const role = (lead.role || "").toLowerCase();
  if (role.includes("head") || role.includes("manager")) {
    score += 20;
  } else if (role.includes("lead") || role.includes("director")) {
    score += 10;
  }

  const industry = (lead.industry || "").toLowerCase();
  if (
    offer.ideal_use_cases.some(
      (icp) => icp && industry.includes(icp.toLowerCase())
    )
  ) {
    score += 20;
  } else {
    score += 10;
  }

  if (
    lead.name &&
    lead.role &&
    lead.company &&
    lead.industry &&
    lead.location &&
    lead.linkedin_bio
  ) {
    score += 10;
  }

  return score;
};
