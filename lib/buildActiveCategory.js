function buildActiveCategory(items) {
  const filtered = items.filter(item => item.fields.is_active)[0];
  const activeCategory = {};
  if (filtered) {
    activeCategory.id = filtered.sys.id;
    activeCategory.slug = filtered.fields.slug;
    activeCategory.year = filtered.fields.year;
    activeCategory.title = filtered.fields.title;
    activeCategory.titleMeta = filtered.fields.meta_title;
    activeCategory.titleMeta = filtered.fields.meta_description;
    activeCategory.lead = filtered.fields.lead;
  }
  return activeCategory;
}

export default buildActiveCategory;
