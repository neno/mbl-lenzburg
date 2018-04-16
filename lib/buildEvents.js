function buildEvents(items, events = {}) {
  const filteredItems = items
    .filter(item => item.fields.category.fields.is_active)
    .sort((a, b) => {
      const aDate = new Date(a.fields.starts_at);
      const bDate = new Date(b.fields.starts_at);

      if (aDate > bDate) {
        return 1;
      }
      if (aDate < bDate) {
        return -1;
      }
      return 0;
    });

  filteredItems.forEach(item => {
    const slug = item.fields.slug;
    const isActive = item.fields.category.fields.is_active;

    if (isActive) {
      events[slug] = {
        id: item.sys.id,
        slug,
        title: item.fields.title,
        titleMeta: item.fields.meta_title,
        titleMeta: item.fields.meta_description,
        category: item.fields.category.fields.slug,
        isActive: item.fields.category.fields.is_active,
        dateFrom: item.fields.starts_at,
        dateTo: item.fields.ends_at,
        location: item.fields.location,
        lead: item.fields.lead,
        copy: item.fields.copy
      };
      if (item.fields.image) {
        events[slug].imageUrl = item.fields.image.fields.file.url;
        events[slug].imageAlt = item.fields.image.fields.title;
      }
    }
  });
  return events;
}

export default buildEvents;
