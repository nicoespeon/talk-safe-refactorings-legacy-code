// @ts-ignore duplicate function declaration
async function getCancellationEmailTemplate(
  operator: Operator,
  sourcesRepository: SourcesRepository
): Promise<EmailTemplate> {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await sourcesRepository.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}

