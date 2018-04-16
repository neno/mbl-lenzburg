import _ from 'lodash';

function buildTeam(items) {
  const item = items[0];
  const team = {
    id: item.sys.id,
    title: item.fields.title,
    lead: item.fields.lead,
    copy: item.fields.copy,
    imageUrl: _.get(item, 'fields.image.fields.file.url'),
    imageAlt: _.get(item, 'fields.image.fields.title')
  };

  return team;
}

export default buildTeam;
