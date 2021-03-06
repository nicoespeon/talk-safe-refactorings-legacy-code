async function getCancellationEmailTemplate(operator, GrandCentral) {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await GrandCentral.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}

// … somewhere else

import GrandCentral from "../../clients/grand-central";

getCancellationEmailTemplate(operator, GrandCentral);
