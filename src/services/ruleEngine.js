export const calculateRuleScore = (lead, offer) => {
  let score = 0;

  if (
    lead.role.toLowerCase().includes("head") ||
    lead.role.toLowerCase().includes("manager")
  ) {
    score += 20;
  } else if (
    lead.role.toLowerCase().includes("lead") ||
    lead.role.toLowerCase().includes("director")
  ) {
    score += 10;
  }

  if (
    offer.ideal_use_cases.some((icp) =>
      lead.industry.toLowerCase().includes(icp.toLowerCase())
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
