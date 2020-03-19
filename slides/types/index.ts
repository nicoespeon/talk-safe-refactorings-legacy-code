type Operator = any;
type Source = any;
namespace Clients {
  export type GrandCentral = any;
}
type EmailTemplate = string;
function getOperatorCancellationEmailTemplate(_operator: Operator): Promise<EmailTemplate> {
  return Promise.resolve("");
}
function getSourceCancellationEmailTemplate(_operator: Operator, _source: Source): EmailTemplate {
  return "";
}

interface SourcesRepository {
  getSource(id: Source["id"]): Promise<Source>;
}
