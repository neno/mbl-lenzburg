import _ from 'lodash';
function buildCategories(items) {
  const categories = {};
  items.forEach(item => {
    categories[`${item.fields.slug}`] = {
      id: item.sys.id,
      slug: item.fields.slug,
      year: item.fields.year,
      title: item.fields.title,
      titleMeta: item.fields.meta_title,
      descriptionMeta: item.fields.meta_description,
      lead: item.fields.lead,
      isActive: item.fields.is_active
    };
  });
  return categories;
}

export default buildCategories;
