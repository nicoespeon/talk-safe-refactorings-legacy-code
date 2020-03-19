import GrandCentral from "../../clients/grand-central";

async function getCancellationEmailTemplate(operator) {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await GrandCentral.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}

// … somewhere else

getCancellationEmailTemplate(operator);
