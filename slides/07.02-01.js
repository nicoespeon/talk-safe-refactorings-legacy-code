async function getCancellationEmailTemplate(operator, SourceRepository) {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await SourceRepository.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}

// … at many places

getCancellationEmailTemplate(operator, GrandCentral);
getCancellationEmailTemplate(operator, GrandCentral);
getCancellationEmailTemplate(operator, GrandCentral);
getCancellationEmailTemplate(operator, GrandCentral);
