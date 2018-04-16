import _ from 'lodash';
function buildHistory(items) {
  const historyItems = items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    subTitle: item.fields.subtitle,
    year: item.fields.lead,
    copy: item.fields.copy,
    imageUrl: _.get(item, 'fields.image.fields.file.url'),
    imageAlt: _.get(item, 'fields.image.fields.title')
  }));

  return _.sortBy(historyItems, 'year');
}

export default buildHistory;
