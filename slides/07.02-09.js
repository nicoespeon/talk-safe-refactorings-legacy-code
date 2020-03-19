async function getCancellationEmailTemplate(SourceRepository, operator) {
  const template = await getOperatorCancellationEmailTemplate(operator);

  if (!template) {
    const source = await SourceRepository.getSource(operator.source_id);
    return getSourceCancellationEmailTemplate(operator, source);
  }

  return template;
}

// … at many places

getCancellationEmailTemplate(GrandCentral, operator);
getCancellationEmailTemplate(GrandCentral, operator);
getCancellationEmailTemplate(GrandCentral, operator);
getCancellationEmailTemplate(GrandCentral, operator);
