import _ from 'lodash';
function buildDocuments(items) {
  const documentItems = items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    lead: item.fields.lead,
    sort: item.fields.sort_id,
    documents: _.values(item.fields.documents).map(d => ({
      title: d.fields.title,
      description: d.fields.description,
      fileUrl: _.get(d, 'fields.file.url')
    }))
  }));

  return _.sortBy(documentItems, 'sort');
}

export default buildDocuments;
