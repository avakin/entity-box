export const entitiesService = Array(50)
  .fill(1)
  .map((el, index) => ({
    entityType: "Some",
    entityName: "My entity",
    connected: (index + 1) % 2 !== 0,
    count: index + 1
  }));
