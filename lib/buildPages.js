function buildPages(items) {
  const pages = {};

  items.forEach(item => {
    pages[item.fields.page] = {
      page: item.fields.page,
      route: item.fields.route
    };
    if (item.fields.teasers) {
      pages[item.fields.page].teasers = item.fields.teasers.map(teaser => ({
        title: teaser.fields.title,
        lead: teaser.fields.lead,
        route: teaser.fields.page_route
      }));
    }
  });
  return pages;
}

export default buildPages;
