import _ from 'lodash';
function buildGalleries(items) {
  const galleries = {};
  items.forEach(item => {
    galleries[`${item.fields.title}`] = {
      images: _.get(item, 'fields.images', []).map(image => ({
        title: image.fields.title,
        description: image.fields.description,
        imageUrl: image.fields.file.url
      }))
    };
  });
  return galleries;
}

export default buildGalleries;
