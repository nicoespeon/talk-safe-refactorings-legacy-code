// @ts-ignore duplicate function declaration
async function getCancellationEmailTemplate(
  operator: Operator,
  GrandCentral: Clients.GrandCentral
): Promise<EmailTemplate> {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await GrandCentral.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}
